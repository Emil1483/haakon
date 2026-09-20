/**
 * All prose on this site is written in the archaic Dano-Norwegian register
 * used by Sanctus Omega Broderskab: pre-1907 spelling ("af", "Aar", "-skab",
 * "-hed"), capitalised nouns and Roman numerals for years.
 */

export type ImageCredit = {
  /** Path under /public. */
  src: string;
  width: number;
  height: number;
  /** Alt text, in modern Norwegian: read aloud, archaic spelling only confuses. */
  alt: string;
  /** Caption shown with the image, in the archaic register. */
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export const images = {
  portrait: {
    src: "/images/haakon-2026.jpg",
    width: 1200,
    height: 1801,
    alt: "Portrett av Haakon, fotografert i Oslo i 2026",
    caption: "Hs. Majestæt, afbildet i Christiania Anno MMXXVI",
    author: "Vadim Chuprina",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Crown_Prince_Haakon-Norway-Oslo-2026-Vadim-Chuprina.jpg",
  },
  audience: {
    src: "/images/haakon-2025.jpg",
    width: 799,
    height: 1128,
    alt: "Haakon under en audiens i Oslo i desember 2025",
    caption: "Ved Audients paa Slottet, Decembris MMXXV",
    author: "Presidencia de la República del Ecuador",
    license: "Offentlig eiendom",
    licenseUrl: "https://commons.wikimedia.org/wiki/Help:Public_domain",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pr%C3%ADncipe_Heredero_Haakon_Magnus_2025.jpg",
  },
  consort: {
    src: "/images/haakon-mette-marit-2015.jpg",
    width: 1200,
    height: 1202,
    alt: "Haakon og Mette-Marit i Stockholm i 2015",
    caption: "Med sin Gemalinde, Stockholm Anno MMXV",
    author: "Frankie Fouganthin",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Mette-Marit,_Crown_Princess_of_Norway_and_Haakon,_Crown_Prince_of_Norway_in_2015.jpg",
  },
  young: {
    src: "/images/haakon-2010.jpg",
    width: 1200,
    height: 1800,
    alt: "Haakon fotografert i 2010",
    caption: "Som Kronprins, Anno MMX",
    author: "Kronprinsparets Fond",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Crown_Prince_Haakon_of_Norway_2010-09-06_001.jpg",
  },
  learning: {
    src: "/images/haakon-ntnu-2019.jpg",
    width: 1200,
    height: 893,
    alt: "Haakon besøker en utstilling ved NTNU i Trondheim i 2019",
    caption:
      "Ved Norges Tekniske Høiskole i Throndhjem, Anno MMXIX — hvor Broderskabet har sit Sæde",
    author: "NTNU – Norges teknisk-naturvitenskapelige universitet",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Haakon,_Crown_Prince_of_Norway_visiting_the_exhibition_The_Micro_Challenge_(48082453771).jpg",
  },
  address: {
    src: "/images/haakon-2009.jpg",
    width: 936,
    height: 1404,
    alt: "Haakon holder tale i 2009",
    caption: "I Tale for Næringslivets Mænd, Anno MMIX",
    author: "Kjetil Ree",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Haakon_Magnus_01.jpg",
  },
} satisfies Record<string, ImageCredit>;

export const credits: ImageCredit[] = Object.values(images);

export type TimelineEntry = {
  year: string;
  date: string;
  title: string;
  body: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "MCMLXXIII",
    date: "XX. Julii MCMLXXIII",
    title: "Prinsen fødes paa Rigshospitalet",
    body: "Anden Livsarving af Kong Harald den Femte og Dronning Sonja kom til Verden i Christiania, og blev døbt Haakon Magnus — Navnet efter hans Oldefader, som tog Riget i Eie Anno MCMV.",
  },
  {
    year: "MCMXC",
    date: "Anno MCMXC",
    title: "Grundloven vender Arvefølgen",
    body: "Stortinget vedtog, at Førstefødselsretten herefter skulde gjælde uden Hensyn til Kjøn. For Prinsen selv blev intet forandret; for hans Datter blev alt.",
  },
  {
    year: "MCMXCV",
    date: "Anno MCMXCV",
    title: "Sjøkrigsskolen",
    body: "Lærdom i Sjøvæsenet og Tjeneste ved Marinen. Huset har siden MCMV holdt det for en Pligt, at den som skal bære Kronen først har baaret Uniformen.",
  },
  {
    year: "MCMXCIX",
    date: "Anno MCMXCIX",
    title: "Studier i Californien",
    body: "Bachelorgrad i Statsvidenskab ved Universitetet i Berkeley, og senere Magistergrad i Udviklingsstudier ved Høiskolen i London. En Kronprins skolet i Forvaltning, ikke alene i Ceremoni.",
  },
  {
    year: "MMI",
    date: "XXV. Augusti MMI",
    title: "Brudevielse i Vor Frelsers Kirke",
    body: "Ægteskab med Mette-Marit Tjessem Høiby i Christiania Domkirke. Forbindelsen var omstridt i Aviserne og i Stortingets Vandelganger; Folket dømte mildere end Bladene.",
  },
  {
    year: "MMIV",
    date: "XXI. Januarii MMIV",
    title: "Prindsesse Ingrid Alexandra",
    body: "Datteren fødes, og bliver ved den nye Arvefølge Rigets Tronarving — den første Kvinde i Norges Historie som fødes til at arve Kronen uhindret.",
  },
  {
    year: "MMV",
    date: "III. Decembris MMV",
    title: "Prinds Sverre Magnus",
    body: "Sønnen fødes, anden i Rækken efter sin Søster. Familien holder Hus paa Skaugum i Asker, som Skik har været siden Kong Olavs Dage.",
  },
  {
    year: "MMIII",
    date: "MMIII–MMXXVI",
    title: "Regent i Faderens Sted",
    body: "Under Kongens Sygdom førte Kronprinsen Regjeringens Forretninger som Regent — første Gang Anno MMIII, og siden gjentagne Gange i de Aar som fulgte. Han havde altsaa gjort Gjerningen længe før han fik Navnet.",
  },
  {
    year: "MMIII",
    date: "Anno MMIII og MMVI",
    title: "Gode Gjerninger uden for Riget",
    body: "Udnævnt til De Forenede Nationers Velvillighedssendemand for Udviklingsprogrammet, og siden Medstifter af Global Dignity, som lærer unge Mennesker om Menneskets Værdighed.",
  },
  {
    year: "MMXXVI",
    date: "XXVIII. Augusti MMXXVI, Kl. 06.35",
    title: "Kongen er død — leve Kongen",
    body: "Hans Majestæt Kong Harald den Femte sov hen paa Rigshospitalet i Oslo, en Fredag Morgen. I samme Stund gik Kronen over til hans Søn, som besteg Tronen under Navnet Haakon den Ottende.",
  },
];

export type Fact = { label: string; value: string; note: string };

export const facts: Fact[] = [
  {
    label: "Fød",
    value: "XX. Julii MCMLXXIII",
    note: "Paa Rigshospitalet i Christiania, som Søn af Harald V og Sonja.",
  },
  {
    label: "Konge siden",
    value: "MMXXVI",
    note: "Fra den 28. Augusti MMXXVI, Kl. 06.35, i samme Stund som hans Fader sov hen.",
  },
  {
    label: "Fjerde Regent",
    value: "IV",
    note: "Af Huset Glücksborg paa Norges Trone siden Folkets Ja Anno MCMV.",
  },
  {
    label: "Tronarving",
    value: "Ingrid Alexandra",
    note: "Rigets første Kvinde fød til Kronen med uhindret Førstefødselsret.",
  },
];

export type Quote = { text: string; source: string };

export const quotes: Quote[] = [
  {
    text: "Alt for Norge.",
    source:
      "Husets Valgsprog, valgt af Haakon den Syvende Anno MCMV og baaret af hver Konge siden",
  },
  {
    text: "Kongen er død. Leve Kongen!",
    source: "Den gamle Formel, som holder Riget helt i det Øieblik det skifter Herre",
  },
];
