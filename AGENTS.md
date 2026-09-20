# haakon

Hyllest-side for Kong Haakon VII. Én Next.js-app i rota, ingen database.

- Tekstinnhold ligger i `src/lib/content.ts`, ikke spredt i komponentene.
- Språket på siden er norsk bokmål. Kode, kommentarer og commits på engelsk.
- Historiske påstander skal være etterprøvbare; sitater merkes med kilde.
- Deploy-oppsettet følger samme mønster som `plantegreie`: Docker-image til
  GHCR i Actions, Ansible legger ut compose-fila og en Caddy-blokk.
