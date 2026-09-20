# haakon

Hædersside for Kong Haakon VIII. Én Next.js-app i rota, ingen database.

- All tekst ligger i `src/lib/content.ts`, ikke spredt i komponentene.
- Prosaen på siden skrives i dansk-norsk rettskriving fra før 1907 («af»,
  «Aar», «-skab», «-hed», store forbokstaver på substantiv, årstall i romertall),
  i samme register som Sanctus Omega Broderskab. Alt-tekster skrives derimot på
  moderne bokmål — de leses opp. Kode, kommentarer og commits på engelsk.
- Haakon VIII er Haakon Magnus, f. 20. juli 1973, konge fra 28. august 2026.
  Historiske påstander skal være etterprøvbare; sitater merkes med kilde, og
  det dikes ikke opp uttalelser fra kongen.
- Nye bilder hentes fra Wikimedia Commons under fri lisens, skaleres til 1200 px
  og føres opp med opphavsmann og lisens i `images` i `src/lib/content.ts`.
- Unntaket er `haakon-royal-portrait.jpg` (hero) og monogrammet: portrettet er
  Det kongelige hoffs og står ikke under fri lisens, monogrammet er Glasshouse'
  SVG fra Commons (CC BY 3.0) omfarget til gull. Begge er kreditert nederst.
- Deploy-oppsettet følger samme mønster som `plantegreie`: Docker-image til
  GHCR i Actions, Ansible legger ut compose-fila og en Caddy-blokk.
