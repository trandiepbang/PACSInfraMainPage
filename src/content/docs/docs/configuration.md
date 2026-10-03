---
title: Configuration
description: Environment variables and settings for a PACSinfra installation.
---

PACSinfra is configured through environment variables in `.env`.

:::note
TODO: document every variable. A suggested table layout:
:::

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `TODO` | yes | | |

## Identity mode

Choose how patient identities are handled:

- **Clinic mode:** real identities are kept in a separate application database.
- **Research mode:** pseudonyms only.

TODO: name the setting that selects the mode. See [De-identification](/docs/de-identification/).
