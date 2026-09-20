import { timeline } from "@/lib/content";

export default function Timeline() {
  return (
    <ol className="relative mx-auto max-w-3xl">
      {/* The spine of the timeline. Hidden on small screens, where the
          entries stack without it. */}
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[9rem] hidden w-px bg-line sm:block"
      />

      {timeline.map((entry) => (
        <li
          key={entry.date + entry.title}
          className="relative grid gap-2 py-8 sm:grid-cols-[9rem_1fr] sm:gap-10"
        >
          <div className="sm:pt-1 sm:text-right">
            <div className="font-serif text-xl leading-tight tracking-wide text-gold sm:pr-8">
              {entry.year}
            </div>
          </div>

          <div className="sm:pl-10">
            <span
              aria-hidden
              className="absolute left-[9rem] hidden h-2 w-2 -translate-x-1/2 translate-y-2.5 rotate-45 bg-gold sm:block"
            />
            <div className="eyebrow">{entry.date}</div>
            <h3 className="mt-2 font-serif text-2xl font-normal">
              {entry.title}
            </h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
              {entry.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
