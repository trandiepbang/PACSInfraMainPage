---
title: Upgrading
description: Upgrade a PACSinfra installation to a new version.
---

Database migrations run with goose. TODO: confirm whether they run automatically on start.

## Steps

```bash
# TODO: replace with the real steps
cd pacsinfra
git pull                # or download the new release
docker compose pull
docker compose up -d
```

## Before you upgrade

- Back up PostgreSQL and Orthanc storage. TODO: link to backup instructions.
- Read the release notes. TODO: where release notes are published.
