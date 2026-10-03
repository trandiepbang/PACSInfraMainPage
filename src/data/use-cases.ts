// Content for /use-cases/[slug]. All three pages share one template.

export interface UseCase {
  slug: 'clinics' | 'research' | 'developers';
  navLabel: string;
  title: string;
  metaDescription: string;
  intro: string;
  /** Show the burned-in pixel caveat (required wherever de-identification is described). */
  mentionsDeidentification: boolean;
  /** Show the tech-stack overview. */
  showStack?: boolean;
  points: { title: string; body: string }[];
  docs: { label: string; href: string }[];
}

export const useCases: UseCase[] = [
  {
    slug: 'clinics',
    navLabel: 'Clinics',
    title: 'Imaging and reporting for clinics, on your own server',
    metaDescription:
      'PACSinfra for clinics: upload and review DICOM studies, write and finalise radiology reports, and keep patient data on your own server.',
    intro:
      'Upload DICOM studies, review them, and write reports, all on your own server, with patient data that never leaves your control.',
    mentionsDeidentification: true,
    points: [
      { title: 'Real identities, kept apart', body: 'Patient identifiers are removed before studies reach the image archive. Clinics can keep real identities in a separate application database.' },
      { title: 'Radiology reports', body: 'Draft, finalise, version and export reports to PDF.' },
      { title: 'Roles that match your team', body: 'Editable per-organisation roles and fine-grained permissions.' },
      { title: 'Restricted studies', body: 'Lock down sensitive studies. Break-the-glass access is allowed when needed, but always recorded with a reason.' },
      { title: 'Every action recorded', body: 'A tamper-evident, append-only audit trail of every action, including each image request.' },
      { title: 'Simple uploads', body: 'Upload single files or ZIP archives, with validation and automatic ingest.' },
    ],
    docs: [
      { label: 'Organisations & Roles', href: '/docs/organisations-and-roles/' },
      { label: 'Reports', href: '/docs/reports/' },
      { label: 'Break-the-glass', href: '/docs/break-the-glass/' },
    ],
  },
  {
    slug: 'research',
    navLabel: 'Research teams',
    title: 'Pseudonymised imaging for research teams',
    metaDescription:
      'PACSinfra for research: de-identified DICOM storage, pseudonymised studies, private projects shared with named colleagues, and a full audit trail.',
    intro:
      'Run on pseudonyms only. Identifiers are removed from DICOM metadata before anything reaches the image archive, and studies are shared only with the colleagues you name.',
    mentionsDeidentification: true,
    points: [
      { title: 'Pseudonyms only', body: 'Research teams can run without storing real identities at all.' },
      { title: 'De-identification before storage', body: 'Patient identifiers are removed from DICOM metadata, including free-text fields and nested sequences.' },
      { title: 'Private projects', body: 'Share selected studies with named colleagues, not the whole organisation.' },
      { title: 'Isolation between groups', body: 'Each organisation sees only its own studies, verified by an automated isolation test suite.' },
      { title: 'Audit trail', body: 'A tamper-evident, append-only record of every action, ready for your data governance reviews.' },
      { title: 'API access', body: 'Pull studies and metadata into your pipelines through the REST API.' },
    ],
    docs: [
      { label: 'De-identification', href: '/docs/de-identification/' },
      { label: 'Permissions', href: '/docs/permissions/' },
      { label: 'Audit Trail', href: '/docs/audit-trail/' },
    ],
  },
  {
    slug: 'developers',
    navLabel: 'Developers',
    title: 'A medical imaging backend you can read and own',
    metaDescription:
      'PACSinfra for developers: full source code, a REST API with Swagger docs, a Go API, a Python DICOM worker, Orthanc and PostgreSQL, deployed with Docker Compose.',
    intro:
      'Full source code, a REST API with Swagger docs, and a small stack of proven open-source parts. Deploy it with one Docker Compose command.',
    mentionsDeidentification: false,
    showStack: true,
    points: [
      { title: 'REST API with Swagger docs', body: 'Everything the web app does goes through the same documented API.' },
      { title: 'One-command deployment', body: 'Docker Compose on a single server, with nginx as the only public entry point.' },
      { title: 'Permissions in one place', body: 'The API checks permissions and records an audit entry for every image request. Orthanc is never exposed.' },
      { title: 'No hidden frameworks', body: "No ORM, no task-queue framework and no policy engine. Jobs are queued in a PostgreSQL table." },
      { title: 'Strict by default', body: 'golangci-lint, ruff, mypy --strict and TypeScript strict, plus the tenant-isolation suite, on every change.' },
      { title: 'Yours to modify', body: 'The licence lets you modify the code for your organisation.' },
    ],
    docs: [
      { label: 'Installation', href: '/docs/installation/' },
      { label: 'REST API', href: '/docs/rest-api/' },
      { label: 'Configuration', href: '/docs/configuration/' },
    ],
  },
];
