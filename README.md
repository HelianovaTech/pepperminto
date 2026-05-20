<h1 align="center">Pepperminto Ticket Management 🍵</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.2-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/docker/pulls/pepperlabs/peppermint" />
</p>
<p align="center">
    <img src="./static/logo.svg" alt="Logo" height="80px" >
</p>

Pepperminto is a community-maintained fork of Peppermint, focused on a clean, modern admin experience, a public knowledge base, and an updated monorepo workflow.

## ❤️ Fork credits

This is a fork of the original Peppermint project.

- Original repository: https://github.com/Peppermint-Lab/peppermint
- Thank you to the original author and the Peppermint contributors for their work.

## ✨ Highlights

- Modernized admin UI with shadcn components and dark-mode support.
- Public knowledge base with admin-only CRUD workflows.
- Rich-text editing using BlockNote across tickets, documents, and KB.
- Turborepo + pnpm workspace for fast local development.

## 📦 Monorepo layout

- `apps/api` – Fastify API server
- `apps/client` – Admin dashboard (Next.js)
- `apps/knowledge-base` – Public knowledge base (Next.js)
- `apps/landing-page` – Marketing landing page (Next.js)

## 🚀 Local development

```bash
pnpm install
pnpm dev
```

Environment variables:

- Copy `.env.example` to `.env` and adjust values as needed.

Default ports:

- `knowledge-base` → `http://localhost:3000`
- `api` → `http://localhost:3001`
- `client` → `http://localhost:3002`
- `landing-page` → `http://localhost:3004`

## 🐳 Docker buildx commands

```bash
docker buildx build --platform linux/amd64,linux/arm64 \
  -f apps/api/Dockerfile \
  -t nulldoubt/pepperminto-api:latest \
  --push .

docker buildx build --platform linux/amd64,linux/arm64 \
  -f apps/client/Dockerfile \
  -t nulldoubt/pepperminto-client:latest \
  --push .

docker buildx build --platform linux/amd64,linux/arm64 \
  -f apps/knowledge-base/Dockerfile \
  -t nulldoubt/pepperminto-knowledge-base:latest \
  --push .

docker buildx build --platform linux/amd64,linux/arm64 \
  -f apps/landing-page/Dockerfile \
  -t nulldoubt/pepperminto-landing-page:latest \
  --push .
```

## Repo

- Pepperminto fork: https://github.com/nulldoubt/Pepperminto

## License

See `LICENSE` for licensing details.
