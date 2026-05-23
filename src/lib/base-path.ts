const productionBasePath = "/anabhayan-portfolio";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return process.env.NODE_ENV === "production" ? `${productionBasePath}${path}` : path;
}