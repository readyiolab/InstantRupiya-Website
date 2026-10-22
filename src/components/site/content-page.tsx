import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ApplyButton } from "./site-shell";
import { pageImage, PageExperience } from "./page-experience";

export function ContentPage({ title, intro, children, apply = true }: { title: string; intro: string; children: ReactNode; apply?: boolean }) {
  const image = pageImage(title);
  return <>
    <section className="photo-hero relative isolate overflow-hidden text-primary-foreground">
      <img src={image.src} alt={image.alt} width={1536} height={864} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="hero-copy mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <Link to="/" className="text-xs sm:text-sm opacity-80 hover:underline">Home / {title}</Link>
        <p className="mt-6 sm:mt-10 text-xs sm:text-sm font-semibold uppercase tracking-wider">InstantRupiya</p>
        <h1 className="mt-2 sm:mt-3 max-w-xl text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight break-words">{title}</h1>
        <p className="mt-3 sm:mt-5 max-w-lg text-sm sm:text-lg leading-relaxed opacity-90">{intro}</p>
        {apply && <div className="mt-6 sm:mt-7"><ApplyButton /></div>}
        <p className="mt-6 sm:mt-8 flex items-center gap-2 text-xs uppercase opacity-75">
          <span className="h-px w-8 bg-primary" />
          A clearer way forward
        </p>
      </div>
    </section>
    <section className="reveal-section mx-auto min-h-80 max-w-6xl px-4 py-8 sm:px-6 sm:py-16">{children}</section>
    <PageExperience title={title} />
  </>;
}

export function InfoBlock({ title, children }: { title: string; children: ReactNode }) {
  return <div className="info-block border-b py-7 first:pt-0 last:border-0"><h2 className="text-2xl font-bold text-secondary">{title}</h2><div className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{children}</div></div>;
}