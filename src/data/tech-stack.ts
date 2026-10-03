// Tech stack copy, shown on /technology, the homepage and the Developers use case.

export const stackIntro =
  "PACSinfra is built from a small set of proven, open-source parts. There's no ORM, no task-queue framework and no policy engine, so a developer can read and own the whole codebase.";

export interface StackGroup {
  id: string;
  name: string;
  language?: string;
  summary: string;
  details: string[];
}

export const stack: StackGroup[] = [
  {
    id: 'api',
    name: 'API',
    language: 'Go',
    summary:
      'Handles everything on the request path: logins and sessions, organisations and permissions, the audit trail, reports, and the secure image feed to the viewer.',
    details: [
      'chi router; pgx for PostgreSQL; sqlc for type-checked SQL; goose migrations',
      'Argon2id password hashing; signed access tokens that can be revoked',
      'Built-in Prometheus metrics and structured logging',
    ],
  },
  {
    id: 'worker',
    name: 'DICOM worker',
    language: 'Python',
    summary: 'Does the DICOM processing and nothing else: validation, de-identification and ingest.',
    details: [
      'pydicom, with pylibjpeg (JPEG and JPEG 2000) for compressed images',
      'psycopg 3, httpx, pydantic v2; managed with uv',
      "Jobs are queued in a PostgreSQL table, so there's no message broker to run",
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    language: 'React + TypeScript',
    summary: 'Built with Vite, TanStack Query, React Router and Tailwind CSS.',
    details: ['The OHIF viewer is next on the roadmap.'],
  },
];

export const storage: StackGroup[] = [
  {
    id: 'orthanc',
    name: 'Orthanc',
    summary: "The open-source DICOM server, used as the image archive. It's never exposed to the internet.",
    details: [],
  },
  {
    id: 'postgres',
    name: 'PostgreSQL 17',
    summary: 'Application data and the Orthanc index.',
    details: [],
  },
  {
    id: 'garage',
    name: 'Garage',
    summary: 'S3-compatible object storage for upload staging.',
    details: [],
  },
];

export const deployment =
  "Docker Compose on a single server, with nginx as the only public entry point. There's no Kubernetes to manage.";

export const quality = [
  'Every change has to pass linting (golangci-lint, ruff), strict type checking (mypy --strict, TypeScript strict) and the test suites, including the tenant-isolation suite.',
  'The code is organised as a Turborepo monorepo with pnpm.',
];
