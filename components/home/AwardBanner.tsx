"use client";

export default function AwardBanner() {
  return (
    <section className="border-y border-border bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Recognised by travellers
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Trusted for curated holidays &amp; on-ground support
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Transparent pricing, vetted stays, and responsive trip assistance—so you spend less time
              planning and more time exploring.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-6 rounded-2xl border border-border bg-muted/20 px-6 py-5">
            <div>
              <p className="text-3xl font-bold text-foreground">4.8★</p>
              <p className="text-xs text-muted-foreground">Avg. trip rating</p>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" aria-hidden />
            <div>
              <p className="text-3xl font-bold text-foreground">10k+</p>
              <p className="text-xs text-muted-foreground">Happy travellers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
