export type TimelineEntry = {
  year: string;
  date: string;
  title: string;
  body: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "1872",
    date: "3. august 1872",
    title: "Prins Carl av Danmark blir født",
    body: "Født på Charlottenlund slott som andre sønn av kronprins Frederik av Danmark og prinsesse Louise av Sverige-Norge. Han ble oppdratt til et liv i den danske marinen, ikke til en trone.",
  },
  {
    year: "1896",
    date: "22. juli 1896",
    title: "Gifter seg med prinsesse Maud",
    body: "Bryllup i Buckingham Palace med prinsesse Maud av Wales, datter av den senere kong Edvard VII. Hun ble Norges dronning Maud.",
  },
  {
    year: "1903",
    date: "2. juli 1903",
    title: "Sønnen Alexander blir født",
    body: "Prins Alexander, som ved ankomsten til Norge fikk navnet Olav – den første tronarvingen født i Norden på over 500 år som skulle bli norsk konge.",
  },
  {
    year: "1905",
    date: "12.–13. november 1905",
    title: "Folket sier ja",
    body: "Etter unionsoppløsningen ble styreformen lagt ut til folkeavstemning. Prins Carl hadde satt som betingelse at han ikke ville komme som et vedtak i Stortinget, men som folkets valg. Nær 79 prosent stemte for kongedømmet.",
  },
  {
    year: "1905",
    date: "25. november 1905",
    title: "Kong Haakon VII kommer til Norge",
    body: "Han gikk i land i Kristiania med sin toårige sønn på armen, tok navnet Haakon VII etter middelalderens norske konger, og valgte valgspråket «Alt for Norge».",
  },
  {
    year: "1906",
    date: "22. juni 1906",
    title: "Kroning i Nidarosdomen",
    body: "Kroningen i Trondheim ble den siste i norsk historie. Kroningsparagrafen ble senere fjernet fra Grunnloven, og etterfølgerne har i stedet blitt signet.",
  },
  {
    year: "1928",
    date: "28. januar 1928",
    title: "Kongen utnevner Norges første Arbeiderparti-regjering",
    body: "Regjeringen Hornsrud hadde ikke flertall bak seg, og kongen ble frarådet å utnevne den. Han holdt seg til parlamentarisk praksis og sa at han også var kommunistenes konge.",
  },
  {
    year: "1940",
    date: "10. april 1940",
    title: "Neiet på Elverum",
    body: "Den tyske sendemannen krevde at kongen skulle utnevne Vidkun Quisling til statsminister. Haakon VII stilte sin egen abdikasjon til regjeringens disposisjon framfor å bøye seg – og regjeringen fulgte kongen.",
  },
  {
    year: "1940",
    date: "7. juni 1940",
    title: "Til England",
    body: "Etter to måneders felttog forlot kongen og regjeringen Tromsø om bord i den britiske krysseren HMS Devonshire. Kampen ble ført videre fra London.",
  },
  {
    year: "1940",
    date: "1940–1945",
    title: "H7 blir motstandens tegn",
    body: "Kongens monogram ble malt på vegger, tegnet i snøen og båret som nål på jakkeslaget. Radiotalene fra London bandt et okkupert land til en konge i eksil.",
  },
  {
    year: "1945",
    date: "7. juni 1945",
    title: "Hjemkomsten",
    body: "På dagen fem år etter avreisen fra Tromsø – og førti år etter unionsoppløsningen – kom kongen tilbake til Oslo. Havnen og gatene var fulle av mennesker.",
  },
  {
    year: "1957",
    date: "21. september 1957",
    title: "Folkekongen dør",
    body: "Haakon VII døde på Det kongelige slott, 85 år gammel, etter 51 år på tronen. Sønnen Olav V overtok.",
  },
];

export type Fact = { label: string; value: string; note: string };

export const facts: Fact[] = [
  {
    label: "Valgspråk",
    value: "Alt for Norge",
    note: "Valgt av kongen selv i 1905, og båret av tre konger etter ham.",
  },
  {
    label: "År på tronen",
    value: "51",
    note: "1905–1957, den lengste sammenhengende regjeringstiden i moderne norsk historie fram til i dag.",
  },
  {
    label: "Folkeavstemning",
    value: "78,9 %",
    note: "Andelen som stemte for kongedømme i november 1905.",
  },
  {
    label: "Dager i eksil",
    value: "1 826",
    note: "Fra avreisen fra Tromsø 7. juni 1940 til hjemkomsten til Oslo 7. juni 1945.",
  },
];

export type Quote = { text: string; source: string };

export const quotes: Quote[] = [
  {
    text: "For min egen del kan jeg ikke motta de tyske krav. Det ville stride mot alt som jeg har ansett som min plikt som Norges konge siden jeg kom til landet for snart trettifem år siden.",
    source:
      "Gjengitt fra kongens svar til regjeringen på Nybergsund ved Elverum, 10. april 1940",
  },
  {
    text: "Alt for Norge.",
    source: "Kongens valgspråk, valgt ved tronbestigelsen i 1905",
  },
];
