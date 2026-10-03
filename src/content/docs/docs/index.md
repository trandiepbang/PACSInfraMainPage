---
title: Introduction
description: What PACSinfra is, how it is put together, and where to start.
---

PACSinfra is a self-hosted medical imaging platform built on Orthanc and OHIF. Upload DICOM studies, review them, and write reports, all on your own server, with patient data that never leaves your control.

## Two guarantees

- **Tenant isolation, tested.** Each organisation sees only its own studies, verified by an automated isolation test suite. The image server is never exposed: every image passes through an API that checks permissions and records an audit entry for each request.
- **De-identification before storage.** Patient identifiers are removed from DICOM metadata, including free-text fields and nested sequences, before anything reaches the image archive. See [De-identification](/docs/de-identification/).

:::caution[Limitation]
De-identification covers DICOM metadata, not text burned into image pixels.
:::

## Stack

| Component | Technology | Role |
| --- | --- | --- |
| API | Go (chi, pgx, sqlc, goose) | Logins and sessions, organisations and permissions, audit trail, reports, image feed |
| DICOM worker | Python (pydicom, pylibjpeg, psycopg 3, pydantic v2, uv) | Validation, de-identification and ingest |
| Frontend | React + TypeScript (Vite, TanStack Query, React Router, Tailwind CSS) | Web app |
| Image archive | Orthanc | Never exposed to the internet |
| Database | PostgreSQL 17 | Application data, Orthanc index and the job queue |
| Upload staging | Garage (S3-compatible) | Temporary storage for uploads |
| Entry point | nginx | The only public entry point |

See [Technology](/technology) for the full picture.

## Next steps

1. [Install PACSinfra](/docs/installation/) with Docker Compose.
2. [Configure](/docs/configuration/) your instance.
3. Set up [organisations and roles](/docs/organisations-and-roles/).
