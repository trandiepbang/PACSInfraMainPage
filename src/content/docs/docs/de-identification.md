---
title: De-identification
description: How PACSinfra removes patient identifiers from DICOM metadata before storage.
---

Patient identifiers are removed from DICOM metadata, including free-text fields and nested sequences, before anything reaches the image archive. De-identification runs in the DICOM worker, after validation and before ingest into Orthanc.

:::caution[Limitation]
De-identification covers DICOM metadata, not text burned into image pixels. Some studies, such as ultrasound or scanned documents, can have patient details drawn into the image itself. Review these before sharing them.
:::

## Pipeline

1. **Upload:** single DICOM files or a ZIP archive.
2. **Validate:** files are checked before processing.
3. **De-identify:** identifiers are removed from the metadata.
4. **Store:** the de-identified study is ingested into Orthanc.

## What is removed

- Patient identifiers in standard DICOM attributes
- Identifiers in free-text fields
- Identifiers inside nested sequences

TODO: list the exact attributes and the action taken for each (remove, replace with pseudonym, keep).

## Identity modes

- **Clinics** can keep real identities in a separate application database.
- **Research teams** can run on pseudonyms only.
