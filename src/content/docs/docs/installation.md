---
title: Installation (Docker Compose)
description: Install PACSinfra on a single server with Docker Compose.
---

PACSinfra runs on a single server with Docker Compose. nginx is the only public entry point; Orthanc, PostgreSQL and Garage stay on the private Docker network.

## Requirements

- A Linux server with Docker and the Docker Compose plugin
- TODO: minimum CPU, memory and disk
- A domain name and TLS certificate (TODO: describe how TLS is handled)

## Install

```bash
# TODO: replace with the real repository and steps
git clone <your-licensed-repository> pacsinfra
cd pacsinfra
cp .env.example .env   # then edit .env, see Configuration
docker compose up -d
```

## Check it is running

TODO: health-check URL and first-login steps.

## Next

- [Configuration](/docs/configuration/)
- [Upgrading](/docs/upgrading/)
