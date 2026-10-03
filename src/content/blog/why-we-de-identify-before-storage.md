---
title: Why we de-identify before storage
description: PACSinfra removes patient identifiers from DICOM metadata (not text burned into image pixels) before anything reaches the image archive. Here is why the order matters.
pubDate: 2026-10-03
author: The PACSinfra team
---

> This is an example post. Replace it with your own, or delete it. See the README for how to add posts.

Most imaging systems store a study first and strip identifiers later, when it is exported or shared. That leaves the archive itself full of identifying data, and every new export path is another place where something can be missed.

PACSinfra does it the other way round: **identifiers are removed before anything reaches the image archive**.

## What gets removed

Patient identifiers are removed from DICOM metadata, including:

- the standard identifying attributes,
- free-text fields, where identifiers are easy to miss, and
- nested sequences, not just top-level attributes.

**Limitation:** de-identification covers DICOM metadata, not text burned into image pixels. Some studies, such as ultrasound or scanned documents, can have patient details drawn into the image itself.

## Two ways to work

- **Clinics** can keep real identities in a separate application database, apart from the image archive.
- **Research teams** can run on pseudonyms only.

## Read more

- [Security overview](/security#de-identification)
- [De-identification docs](/docs/de-identification/)
