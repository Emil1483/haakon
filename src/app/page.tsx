import Image from "next/image";

import Monogram from "@/components/Monogram";
import Portrait from "@/components/Portrait";
import Timeline from "@/components/Timeline";
import { credits, facts, images, quotes } from "@/lib/content";

export default function Home() {
  const [motto, formula] = quotes;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero ------------------------------------------------------- */}
        {/* The official portrait runs full bleed, with the titles laid over
            its lower edge where the background is quiet. */}
        <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden sm:min-h-[82vh]">
          <Image
            src={images.banner.src}
            alt={images.banner.alt}
            fill
            priority
            sizes="100vw"
            /* Narrow viewports crop towards the King rather than the cypher. */
            className="-z-10 object-cover object-[72%_center] sm:object-center"
          />
          <div className="-z-10 absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/10" />

          <div className="mx-auto w-full max-w-[1400px] px-6 pb-14 sm:px-10 sm:pb-20">
            <p className="eyebrow animate-rise">
              Konge af Norge &middot; Anno Domini MMXXVI
            </p>

            <h1 className="display mt-5 max-w-4xl animate-rise font-serif text-[clamp(2.6rem,6.5vw,5.4rem)] [animation-delay:120ms]">
              Hands Majestet Kong Haakon den Ottende
            </h1>

            <p className="mt-7 max-w-xl animate-rise text-base leading-relaxed text-muted [animation-delay:240ms]">
              Denne Side er reist Broderskabet til Ære og Kongen til Hæder, paa
              det at hans Navn og hans Gjerning skal staa skrevet ogsaa der hvor
              Bogtrykkerkunsten ikke naar: paa Veven.
            </p>

            <p className="mt-8 animate-rise font-serif text-2xl tracking-[0.2em] text-gold [animation-delay:340ms]">
              ALT FOR NORGE
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* Accession --------------------------------------------------- */}
        <section className="px-6 py-20 sm:py-28">
          <figure className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Tronskiftet</p>
            <blockquote className="mt-8 font-serif text-3xl leading-snug text-balance sm:text-5xl">
              &laquo;{formula.text}&raquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-muted">
              {formula.source}
            </figcaption>
          </figure>

          <div className="mx-auto mt-16 grid max-w-4xl items-start gap-10 sm:grid-cols-[1fr_1fr_auto]">
            <p className="text-sm leading-relaxed text-muted">
              Fredag den 28. Augusti MMXXVI, Kl. 06.35, sov Hans Majestæt Kong
              Harald den Femte hen paa Rigshospitalet i Oslo. Riget mistede en
              Konge det havde kjendt i mere end tredive Aar, og Sørgefloret gik
              op paa Slottet samme Morgen.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              I samme Stund gik Kronen videre. Saaledes er Arvefølgen indrettet,
              at Riget aldrig staar uden Herre et eneste Øieblik: Kronprindsen
              var Konge førend Budskabet naaede Landet, og tog Navnet Haakon den
              Ottende efter sin Oldefader.
            </p>
            <Portrait
              image={images.portrait}
              sizes="(max-width: 640px) 90vw, 220px"
              className="mx-auto w-full max-w-[14rem]"
            />
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* Facts ------------------------------------------------------ */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-background-soft p-8">
                <div className="eyebrow">{fact.label}</div>
                <div className="mt-4 font-serif text-3xl text-foreground">
                  {fact.value}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {fact.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* Regency ----------------------------------------------------- */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl items-center gap-14 sm:grid-cols-[auto_1fr]">
            <Portrait
              image={images.address}
              sizes="(max-width: 640px) 90vw, 300px"
              className="mx-auto w-full max-w-[19rem]"
            />
            <div>
              <p className="eyebrow">Lærdommen</p>
              <h2 className="display mt-4 font-serif text-4xl sm:text-5xl">
                En Konge skolet i Regjeringens Haandværk
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Hans Majestæt gik i Marinens Skole, tog Grad i Statsvidenskab
                ved Universitetet i Berkeley og siden i Udviklingsstudier ved
                Høiskolen i London. Han er saaledes den lærdeste Mand som
                nogensinde har baaret Norges Krone.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Og han havde øvet Gjerningen længe førend han arvede Navnet: som
                Regent førte han Statsraadets Forretninger i sin Faders Sygdom,
                første Gang Anno MMIII, siden gjentagne Gange.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* Timeline --------------------------------------------------- */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="eyebrow">Et Levnetsløb</p>
            <h2 className="display mt-4 font-serif text-4xl sm:text-5xl">
              Fra Rigshospitalet til Slottet
            </h2>
          </div>
          <Timeline />
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* Gallery ----------------------------------------------------- */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="eyebrow">Afbildninger</p>
            <h2 className="display mt-4 font-serif text-4xl sm:text-5xl">
              Kongen for Folkets Øine
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3">
            <Portrait
              image={images.consort}
              sizes="(max-width: 640px) 90vw, 320px"
              aspect="aspect-[3/4]"
            />
            <Portrait
              image={images.learning}
              sizes="(max-width: 640px) 90vw, 320px"
              aspect="aspect-[3/4]"
            />
            <Portrait
              image={images.audience}
              sizes="(max-width: 640px) 90vw, 320px"
              aspect="aspect-[3/4]"
            />
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Ved Høiskolen i Throndhjem, hvor Sanctus Omega Broderskab har holdt
            sit Sæde siden Anno MCMXIX, er Kongehusets Besøg blevet modtaget med
            den Høitidelighed som sømmer sig — og med den Uorden som følger af
            at Broderne selv skal holde Orden.
          </p>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* Credits ----------------------------------------------------- */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-center">Om Afbildningerne</p>
            <p className="mt-6 text-center text-sm leading-relaxed text-muted">
              De fleste Afbildninger er hentede fra Wikimedia Commons og
              benyttede paa de Vilkaar deres Ophavsmænd har sat; det officielle
              Portræt hører Det Kongelige Hoff til.
            </p>
            <ul className="mt-8 space-y-3 text-xs leading-relaxed text-muted">
              {credits.map((credit) => (
                <li key={credit.caption} className="flex flex-wrap gap-x-2">
                  {credit.sourceUrl ? (
                    <a
                      href={credit.sourceUrl}
                      className="text-gold underline-offset-4 hover:underline"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {credit.caption}
                    </a>
                  ) : (
                    <span className="text-gold">{credit.caption}</span>
                  )}
                  <span>&mdash; {credit.author},</span>
                  {credit.licenseUrl ? (
                    <a
                      href={credit.licenseUrl}
                      className="underline-offset-4 hover:underline"
                      rel="noreferrer noopener license"
                      target="_blank"
                    >
                      {credit.license}
                    </a>
                  ) : (
                    <span>{credit.license}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <Monogram className="h-16 w-auto opacity-90" />
          <p className="font-serif text-lg tracking-[0.2em] text-gold">
            {motto.text.toUpperCase().replace(".", "")}
          </p>
          <p className="text-xs leading-relaxed text-muted">
            Reist til Hæder for Hands Majestet Kong Haakon den Ottende. Ingen
            officiel Side for Det Kongelige Hus, og ei heller for Broderskabet.
          </p>
        </div>
      </footer>
    </div>
  );
}
