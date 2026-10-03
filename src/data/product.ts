// Product copy shared across pages. Source of truth: the product brief.

export const summary =
  'Upload DICOM studies, review them, and write reports, all on your own server, with patient data that never leaves your control.';

export const PIXEL_CAVEAT =
  'De-identification covers DICOM metadata, not text burned into image pixels.';

export const guarantees = [
  {
    id: 'isolation',
    title: 'Tenant isolation, tested.',
    body: 'Each organisation sees only its own studies, verified by an automated isolation test suite. The image server is never exposed: every image passes through an API that checks permissions and records an audit entry for each request.',
    href: '/security#isolation',
  },
  {
    id: 'deidentification',
    title: 'De-identification before storage.',
    body: 'Patient identifiers are removed from DICOM metadata, including free-text fields and nested sequences, before anything reaches the image archive. Clinics can keep real identities in a separate application database. Research teams can run on pseudonyms only.',
    href: '/security#de-identification',
    caveat: true,
  },
];

export const features = [
  { title: 'Organisations, roles and permissions', body: 'Login, editable per-organisation roles and fine-grained permissions.' },
  { title: 'DICOM upload and ingest', body: 'Upload single files or ZIP archives, with validation and automatic ingest.' },
  { title: 'Study browsing', body: 'Study lists with search and filters, series and instance browsing, and previews.' },
  { title: 'Radiology reports', body: 'Draft, finalise, version and export reports to PDF.' },
  { title: 'Private projects', body: 'Share selected studies with named colleagues.' },
  { title: 'Break-the-glass access', body: 'Restricted studies can still be opened when needed, but access is always recorded with a reason.' },
  { title: 'Tamper-evident audit trail', body: 'An append-only record of every action.' },
  { title: 'REST API', body: 'A full REST API with Swagger docs, for developers and integrations.' },
  { title: 'One-command deployment', body: 'Deploy with a single Docker Compose command.' },
];
