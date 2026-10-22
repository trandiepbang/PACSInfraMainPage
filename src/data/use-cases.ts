// Content for /use-cases/[slug] and /zh-tw/use-cases/[slug]. All pages share one template.
import type { Locale } from '../i18n';

export type UseCaseSlug = 'clinics' | 'research' | 'developers';

export interface UseCase {
  slug: UseCaseSlug;
  navLabel: string;
  title: string;
  metaDescription: string;
  intro: string;
  /** Show the burned-in pixel caveat (required wherever de-identification is described). */
  mentionsDeidentification: boolean;
  /** Show the tech-stack overview. */
  showStack?: boolean;
  points: { title: string; body: string }[];
}

const en: UseCase[] = [
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
      { title: 'Roles that match your team', body: 'Owners, contributors and readers in each project, with view-only readers and two-factor sign-in.' },
      { title: 'Restricted studies', body: 'Lock down sensitive studies. Break-the-glass access is allowed when needed, but always recorded with a reason.' },
      { title: 'Every action recorded', body: 'A tamper-evident, append-only audit trail of every action, including each image request.' },
      { title: 'Simple uploads', body: 'Upload single files or ZIP archives, with validation and automatic ingest.' },
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
  },
  {
    slug: 'developers',
    navLabel: 'Developers',
    title: 'A medical imaging backend you can read and own',
    metaDescription:
      'PACSinfra for developers: full source code, a REST API with Swagger docs, a Go API, a Python DICOM worker, Orthanc and PostgreSQL, deployed with Docker Compose.',
    intro:
      'Full source code, a REST API with Swagger docs, and a lean Go 1.27 and Python 3.12 stack. Deploy it with one Docker Compose command.',
    mentionsDeidentification: false,
    showStack: true,
    points: [
      { title: 'REST API with Swagger docs', body: 'Everything the web app does goes through the same documented API.' },
      { title: 'One-command deployment', body: 'Docker Compose on a single server, with nginx as the only public entry point.' },
      { title: 'Permissions in one place', body: 'The API checks permissions and records an audit entry for every image request. Orthanc is never exposed.' },
      { title: 'No hidden frameworks', body: 'No ORM, no task-queue framework and no policy engine. Jobs are queued in a PostgreSQL table.' },
      { title: 'Strict by default', body: 'golangci-lint, ruff, mypy --strict and TypeScript strict, plus the tenant-isolation suite, on every change.' },
      { title: 'Yours to modify', body: 'The licence lets you modify the code for your organisation.' },
    ],
  },
];

const zhTw: UseCase[] = [
  {
    slug: 'clinics',
    navLabel: '診所',
    title: '為診所打造的影像與報告平台，架在您自己的伺服器上',
    metaDescription: 'PACSinfra 診所方案：上傳並判讀 DICOM 檢查、撰寫並定稿放射科報告，病患資料留在您自己的伺服器上。',
    intro: '上傳 DICOM 檢查、進行判讀並撰寫報告，全部在您自己的伺服器上完成，病患資料始終在您的掌控之中。',
    mentionsDeidentification: true,
    points: [
      { title: '真實身分，分開保存', body: '檢查進入影像封存系統前，病患識別資訊即被移除。診所可將真實身分保存在獨立的應用程式資料庫中。' },
      { title: '放射科報告', body: '草稿、定稿、版本紀錄，並可匯出 PDF。' },
      { title: '符合團隊分工的角色', body: '各專案中的擁有者、貢獻者與閱讀者，可設定僅能檢視的閱讀者，並以雙重驗證登入。' },
      { title: '受限檢查', body: '鎖定敏感的檢查。必要時允許緊急存取，但每次都會連同理由一併記錄。' },
      { title: '每個動作都有紀錄', body: '可偵測竄改、只能新增的稽核軌跡，記錄每個動作，包含每一筆影像請求。' },
      { title: '簡單上傳', body: '上傳單一檔案或 ZIP 壓縮檔，自動驗證並匯入。' },
    ],
  },
  {
    slug: 'research',
    navLabel: '研究團隊',
    title: '為研究團隊打造的假名化影像平台',
    metaDescription: 'PACSinfra 研究方案：去識別化的 DICOM 儲存、假名化檢查、只分享給指定同事的私人專案，以及完整的稽核軌跡。',
    intro: '只使用假名資料運作。在任何資料進入影像封存系統之前，DICOM 中繼資料中的識別資訊即被移除，檢查也只會分享給您指定的同事。',
    mentionsDeidentification: true,
    points: [
      { title: '只使用假名', body: '研究團隊可以完全不儲存真實身分。' },
      { title: '儲存前去識別化', body: '移除 DICOM 中繼資料中的病患識別資訊，包含自由文字欄位與巢狀序列。' },
      { title: '私人專案', body: '將選定的檢查分享給指定的同事，而不是整個機構。' },
      { title: '團隊之間彼此隔離', body: '每個機構只能看到自己的檢查，並由自動化隔離測試套件驗證。' },
      { title: '稽核軌跡', body: '可偵測竄改、只能新增的完整紀錄，隨時可供資料治理審查使用。' },
      { title: 'API 存取', body: '透過 REST API 將檢查與中繼資料匯入您的分析流程。' },
    ],
  },
  {
    slug: 'developers',
    navLabel: '開發者',
    title: '看得懂、也能完全掌握的醫療影像後端',
    metaDescription:
      'PACSinfra 開發者方案：完整原始碼、附 Swagger 文件的 REST API、Go API、Python DICOM 處理程式、Orthanc 與 PostgreSQL，以 Docker Compose 部署。',
    intro: '完整原始碼、附 Swagger 文件的 REST API，以及精簡的 Go 1.27 與 Python 3.12 技術架構。只需一個 Docker Compose 指令即可部署。',
    mentionsDeidentification: false,
    showStack: true,
    points: [
      { title: '附 Swagger 文件的 REST API', body: '網頁應用程式的所有功能都經過同一套有文件的 API。' },
      { title: '一個指令完成部署', body: '以 Docker Compose 部署於單台伺服器，nginx 是唯一對外開放的入口。' },
      { title: '權限集中在一處', body: 'API 會為每筆影像請求檢查權限並寫入稽核紀錄。Orthanc 從不對外公開。' },
      { title: '沒有隱藏的框架', body: '不使用 ORM、任務佇列框架或政策引擎。工作排在 PostgreSQL 資料表中。' },
      { title: '預設嚴格', body: '每次變更都要通過 golangci-lint、ruff、mypy --strict、TypeScript strict 與租戶隔離測試。' },
      { title: '可自由修改', body: '授權允許您為自己的機構修改程式碼。' },
    ],
  },
];

export const useCases: Record<Locale, UseCase[]> = { en, 'zh-tw': zhTw };
