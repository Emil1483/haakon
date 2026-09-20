import Image from "next/image";
import type { ImageCredit } from "@/lib/content";

/**
 * A framed photograph with its caption. The credit line itself lives in the
 * credits list at the foot of the page, so the frame stays quiet.
 */
export default function Portrait({
  image,
  sizes,
  priority = false,
  /** Tailwind aspect class; without one the photograph keeps its own shape. */
  aspect = "",
  className = "",
}: {
  image: ImageCredit;
  sizes: string;
  priority?: boolean;
  aspect?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`overflow-hidden rounded-sm border border-line/80 bg-background-soft shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] ${aspect}`}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted">
        {image.caption}
      </figcaption>
    </figure>
  );
}
