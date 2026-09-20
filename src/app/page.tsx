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
        <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,163,73,0.15),transparent_62%)]"
          />

          <div className="relative mx-auto grid max-w-5xl items-center gap-14 sm:grid-cols-[1fr_auto]">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <Monogram className="w-24 animate-rise sm:w-28" />

              <p className="eyebrow mt-8 animate-rise [animation-delay:120ms]">
                Konge af Norge &middot; Anno Domini MMXXVI
              </p>

              <h1 className="display mt-5 animate-rise font-serif text-5xl [animation-delay:200ms] sm:text-6xl">
                Hans Majestæt
                <br />
                Kong Haakon
                <br />
                den Ottende
              </h1>

              <p className="mt-8 max-w-md animate-rise text-base leading-relaxed text-muted [animation-delay:320ms]">
                Denne Side er reist Broderskabet til Ære og Kongen til Hæder,
                paa det at hans Navn og hans Gjerning skal staa skrevet ogsaa
                der hvor Bogtrykkerkunsten ikke naar: paa Vævet.
              </p>

              <p className="mt-9 animate-rise font-serif text-2xl tracking-[0.2em] text-gold [animation-delay:440ms]">
                ALT FOR NORGE
              </p>
            </div>

            <Portrait
              image={images.portrait}
              sizes="(max-width: 640px) 90vw, 360px"
              priority
              className="mx-auto w-full max-w-[22rem] animate-rise [animation-delay:260ms]"
            />
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

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
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
              Samtlige Fotografier er hentede fra Wikimedia Commons og benyttede
              paa de Vilkaar deres Ophavsmænd har sat.
            </p>
            <ul className="mt-8 space-y-3 text-xs leading-relaxed text-muted">
              {credits.map((credit) => (
                <li key={credit.src} className="flex flex-wrap gap-x-2">
                  <a
                    href={credit.sourceUrl}
                    className="text-gold underline-offset-4 hover:underline"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {credit.caption}
                  </a>
                  <span>&mdash; {credit.author},</span>
                  <a
                    href={credit.licenseUrl}
                    className="underline-offset-4 hover:underline"
                    rel="noreferrer noopener license"
                    target="_blank"
                  >
                    {credit.license}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
          <p className="font-serif text-lg tracking-[0.2em] text-gold">
            {motto.text.toUpperCase().replace(".", "")}
          </p>
          <p className="text-xs leading-relaxed text-muted">
            Reist til Hæder for Hans Majestæt Kong Haakon den Ottende. Ingen
            officiel Side for Det Kongelige Hus, og ei heller for Broderskabet.
          </p>
        </div>
      </footer>
    </div>
  );
}
