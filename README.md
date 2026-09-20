# haakon

En Hædersside for Hands Majestet Kong Haakon den Ottende, Konge af Norge fra
den 28. august 2026.

Next.js (App Router, Tailwind v4), bygget som Docker-image i GitHub Actions og
deployet med Ansible til `haakon.linode.djupvik.dev`.

## Utvikling

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npx eslint
```

All tekst — tidslinje, nøkkeltall, sitater og bildekreditering — ligger samlet
i `src/lib/content.ts`. Prosaen er skrevet i dansk-norsk rettskriving fra før
1907, i samme register som Sanctus Omega Broderskab bruker.

Hero-bildet (`haakon-royal-portrait.jpg`) er det offisielle portrettet fra Det
kongelige hoff, levert av eier av dette repoet; det står ikke under fri lisens,
og repoet er offentlig. De øvrige fotografiene i `public/images/` er hentet fra
Wikimedia Commons, nedskalert til
1200 px og komprimert på forhånd; derfor står `images.unoptimized` i
`next.config.ts`, slik at runtime slipper å ha `sharp`. Opphavsmann og lisens
for hvert bilde står i `src/lib/content.ts` og listes nederst på siden — det er
et vilkår for CC BY- og CC BY-SA-bildene.

## Deploy

`main` → GitHub Actions bygger `ghcr.io/emil1483/haakon:<sha>` og kjører
`ansible/deploy.yml`, som legger ut `deploy/compose.yml` på serveren, starter
containeren på `127.0.0.1:3103` og setter opp en reverse proxy i den delte
Caddyfila. Ingen basic auth — siden er åpen.

Repoet trenger én secret: `ANSIBLE_VAULT_PASS` (samme vault-passord som
`plantegreie`), brukt til å dekryptere ssh-passordet i `ansible/inventory.yml`.

Manuell deploy:

```bash
ansible-playbook -i ansible/inventory.yml --vault-id default@/etc/ansible_pass_private \
  ansible/deploy.yml --diff \
  --extra-vars '{"tag": "<sha>", "ghcr_username": "<user>", "ghcr_token": "<token>"}'
```
