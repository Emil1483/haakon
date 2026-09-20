import Monogram from "@/components/Monogram";
import Timeline from "@/components/Timeline";
import { facts, quotes } from "@/lib/content";

export default function Home() {
  const [elverum, motto] = quotes;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero ------------------------------------------------------- */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,163,73,0.14),transparent_62%)]"
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <Monogram className="w-28 animate-rise sm:w-36" />

            <p className="eyebrow mt-10 animate-rise [animation-delay:120ms]">
              1872 &middot; 1957
            </p>

            <h1 className="display mt-5 animate-rise font-serif text-5xl [animation-delay:200ms] sm:text-7xl">
              Hans Majestet
              <br />
              Kong Haakon VII
            </h1>

            <p className="mt-8 max-w-xl animate-rise text-base leading-relaxed text-muted [animation-delay:320ms]">
              Norges første konge etter unionsoppløsningen. Han kom som folkets
              valg, ble værende som folkets konge, og ga et okkupert land noe å
              si nei med.
            </p>

            <p className="mt-10 animate-rise font-serif text-2xl tracking-[0.2em] text-gold [animation-delay:440ms]">
              ALT FOR NORGE
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* Elverum ---------------------------------------------------- */}
        <section className="px-6 py-24 sm:py-32">
          <figure className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Neiet</p>
            <blockquote className="mt-8 font-serif text-2xl leading-snug text-balance sm:text-4xl">
              &laquo;{elverum.text}&raquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-muted">
              {elverum.source}
            </figcaption>
          </figure>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
            <p className="text-sm leading-relaxed text-muted">
              Morgenen 10. april 1940 møtte den tyske sendemannen Curt Bräuer
              kongen på Elverum med et krav: utnevn Vidkun Quisling til
              statsminister, og kampene stanser. Kongen svarte at avgjørelsen
              ikke var hans alene å ta – den lå hos regjeringen.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Men han sa også hva han ville gjøre hvis regjeringen bøyde seg:
              han ville abdisere. Regjeringen stilte seg enstemmig bak kongen,
              og Norge førte krigen videre. Et konstitusjonelt maktesløst
              kongedømme hadde funnet den ene makten som talte.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* Facts ------------------------------------------------------ */}
        <section className="px-6 py-24 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-background-soft p-8">
                <div className="eyebrow">{fact.label}</div>
                <div className="mt-4 font-serif text-4xl text-foreground">
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

        {/* Timeline --------------------------------------------------- */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="eyebrow">Et liv</p>
            <h2 className="display mt-4 font-serif text-4xl sm:text-5xl">
              Fra Charlottenlund til Slottet
            </h2>
          </div>
          <Timeline />
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="rule-gold" />
        </div>

        {/* H7 --------------------------------------------------------- */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-4xl items-center gap-14 sm:grid-cols-[auto_1fr]">
            <Monogram className="mx-auto w-36" />
            <div>
              <p className="eyebrow">Merket</p>
              <h2 className="display mt-4 font-serif text-4xl sm:text-5xl">
                To tegn som ikke lot seg vaske bort
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Under okkupasjonen ble kongens monogram malt på murvegger,
                risset i rim på vinduer, brettet i binders og båret skjult under
                jakkeslaget. Det var billig å lage, farlig å bære og umulig å
                telle. Et land uten våpen hadde likevel et alfabet.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                I London leste kongen inn radiotaler som ble hørt i det skjulte
                over hele landet. Stemmen fra eksil var i fem år beviset på at
                Norge fortsatt fantes som noe annet enn et okkupert territorium.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
          <p className="font-serif text-lg tracking-[0.2em] text-gold">
            {motto.text.toUpperCase().replace(".", "")}
          </p>
          <p className="text-xs text-muted">
            En hyldest til Hans Majestet Kong Haakon VII, 1872–1957. Ingen
            offisiell side for Det norske kongehus.
          </p>
        </div>
      </footer>
    </div>
  );
}
