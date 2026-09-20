import Image from "next/image";

/**
 * The royal cypher: a crowned H, drawn by Glasshouse for Wikimedia Commons
 * (CC BY 3.0) and recoloured from its original red to the gold used here.
 * Credited with the photographs at the foot of the page.
 */
export default function Monogram({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/monogram-haakon.svg"
      width={213}
      height={418}
      alt="Kongens monogram: en kronet H"
      priority={priority}
      className={className}
    />
  );
}
