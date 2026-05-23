"use client";

import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

type PdfViewerProps = {
  src: string;
  title: string;
};

type PdfJsPage = {
  getViewport: (params: { scale: number }) => { width: number; height: number };
  render: (params: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
  }) => { promise: Promise<void> };
};

type PdfJsDocument = {
  numPages: number;
  getPage: (pageNumber: number) => Promise<PdfJsPage>;
};

type PdfJsModule = {
  getDocument: (src: { url: string; disableWorker: boolean }) => { promise: Promise<PdfJsDocument> };
  GlobalWorkerOptions?: {
    workerSrc?: string;
  };
};

declare global {
  interface Window {
    pdfjsLib?: PdfJsModule;
  }
}

let pdfJsLoaderPromise: Promise<PdfJsModule> | null = null;

function loadPdfJsRuntime(): Promise<PdfJsModule> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("PDF runtime unavailable on server."));
  }

  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib);
  }

  if (!pdfJsLoaderPromise) {
    pdfJsLoaderPromise = new Promise<PdfJsModule>((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>('script[data-pdfjs-runtime="true"]');

      if (existing) {
        existing.addEventListener("load", () => {
          if (window.pdfjsLib) {
            resolve(window.pdfjsLib);
          } else {
            reject(new Error("PDF runtime loaded but unavailable."));
          }
        });
        existing.addEventListener("error", () => reject(new Error("Failed to load PDF runtime script.")));
        return;
      }

      const script = document.createElement("script");
      script.src = "/vendor/pdfjs/pdf.min.js";
      script.async = true;
      script.dataset.pdfjsRuntime = "true";
      script.onload = () => {
        if (window.pdfjsLib) {
          if (window.pdfjsLib.GlobalWorkerOptions) {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.js";
          }
          resolve(window.pdfjsLib);
        } else {
          reject(new Error("PDF runtime loaded but unavailable."));
        }
      };
      script.onerror = () => reject(new Error("Failed to load PDF runtime script."));
      document.body.appendChild(script);
    });
  }

  return pdfJsLoaderPromise;
}

export function PdfViewer({ src, title }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [pdfDocument, setPdfDocument] = useState<PdfJsDocument | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState(720);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setPdfDocument(null);
    setPageNumber(1);

    let cancelled = false;

    async function loadPdf() {
      try {
        const pdfjs = await loadPdfJsRuntime();
        const task = pdfjs.getDocument({ url: src, disableWorker: true });
        const loaded = await task.promise;

        if (!cancelled) {
          setPdfDocument(loaded);
          setIsLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to render PDF in this browser preview.");
          setIsLoading(false);
        }
      }
    }

    void loadPdf();

    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect.width ?? 720;
      setContainerWidth(nextWidth);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const totalPages = useMemo(() => pdfDocument?.numPages ?? 0, [pdfDocument]);

  useEffect(() => {
    const documentInstance = pdfDocument;

    if (!documentInstance || !canvasRef.current || !containerWidth) {
      return;
    }

    let cancelled = false;

    async function renderPage(activeDocument: PdfJsDocument) {
      const page = await activeDocument.getPage(pageNumber);
      const initialViewport = page.getViewport({ scale: 1 });
      const scale = Math.max(0.5, (containerWidth - 2) / initialViewport.width);
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);

      if (!cancelled) {
        await page.render({ canvasContext: context, viewport }).promise;
      }
    }

    void renderPage(documentInstance);

    return () => {
      cancelled = true;
    };
  }, [pdfDocument, pageNumber, containerWidth]);

  return (
    <div className="space-y-3">
      <div ref={containerRef} className="w-full rounded-xl border border-border/50 bg-background">
        {isLoading ? (
          <div className="grid min-h-[260px] place-items-center text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" /> Loading PDF...
            </span>
          </div>
        ) : null}

        {error ? (
          <div className="grid min-h-[260px] place-items-center px-4 text-center text-sm text-muted-foreground">
            {error}
          </div>
        ) : null}

        {!isLoading && !error ? <canvas ref={canvasRef} aria-label={`${title} preview`} className="h-auto w-full rounded-xl" /> : null}
      </div>

      {totalPages > 1 ? (
        <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/50 px-3 py-2 text-xs text-muted-foreground">
          <span>
            Page {pageNumber} of {totalPages}
          </span>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-8 rounded-full"
              onClick={() => setPageNumber((current) => Math.max(1, current - 1))}
              disabled={pageNumber <= 1}
            >
              <ChevronLeft className="size-4" /> Prev
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-8 rounded-full"
              onClick={() => setPageNumber((current) => Math.min(totalPages, current + 1))}
              disabled={pageNumber >= totalPages}
            >
              Next <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
