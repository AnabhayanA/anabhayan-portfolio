type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">{eyebrow}</p>
      <h1 className="mt-4 text-balance text-3xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>
      ) : null}
    </header>
  );
}
