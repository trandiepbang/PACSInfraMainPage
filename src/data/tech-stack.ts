// Tech stack copy, shown on /technology, the homepage and the Developers use case.
// Versions come from the PACSinfra repo (go.mod, the worker's Dockerfile, apps/web/package.json and
// the Compose image tags). Update them here when the stack is upgraded.
// Quality counts, as of 2026-10-10: 371 Go test functions, 94 pytest tests, 183 in api/internal/isolation;
// route coverage is MustCheckRouteCoverage in internal/http/routes.go (tested in router_test.go); live contract tests are `make check-live`.
import type { Locale } from '../i18n';

export interface StackGroup {
  id: string;
  name: string;
  language?: string;
  /** One-line highlight for the compact cards on the homepage and Developers page. */
  tagline?: string;
  summary: string;
}

interface TechStack {
  stackIntro: string;
  stack: StackGroup[];
  storage: StackGroup[];
  deployment: string;
  quality: { value: string; label: string; body: string }[];
  qualityNote: string;
}

const en: TechStack = {
  stackIntro:
    'A lean, modern stack built for speed and safety: a compiled Go 1.27 API, a Python 3.12 imaging engine and PostgreSQL 17.',
  stack: [
    {
      id: 'api',
      name: 'API',
      language: 'Go 1.27',
      tagline: 'One static binary, images streamed with zero buffering',
      summary:
        'Compiled to a single static binary that runs on an empty container image: no shell and no OS packages, so there is almost nothing to attack. It streams images straight through without buffering them, and handles sign-in, permissions, audit and reports.',
    },
    {
      id: 'worker',
      name: 'DICOM engine',
      language: 'Python 3.12',
      tagline: 'De-identifies in memory, before anything is stored',
      summary:
        'Validates, de-identifies and ingests every DICOM file in memory, before anything reaches the image archive. Runs as independent processes across your CPU cores, with no message broker to operate.',
    },
    {
      id: 'frontend',
      name: 'Web app and viewer',
      language: 'Next.js 16 · React 19 · TypeScript 7',
      tagline: 'Bilingual, with the OHIF v3 viewer built in',
      summary:
        'A fast, bilingual web app in English and Traditional Chinese, with the OHIF v3 medical image viewer built in.',
    },
  ],
  storage: [
    {
      id: 'orthanc',
      name: 'Orthanc 25.6',
      summary: 'A proven DICOM server, used as the image archive. It is never exposed to the internet.',
    },
    { id: 'postgres', name: 'PostgreSQL 17', summary: 'Application data, the audit trail, the job queue and the image index.' },
    { id: 'garage', name: 'Garage 1.0', summary: 'S3-compatible object storage for upload staging.' },
  ],
  deployment:
    "Docker Compose on a single server, with nginx as the only public entry point. There's no Kubernetes to manage.",
  quality: [
    {
      value: '460+',
      label: 'automated tests',
      body: 'Go and Python test suites run on every change, alongside strict linting and type checking. Nothing ships unless all of them pass.',
    },
    {
      value: '180+',
      label: 'tenant-isolation tests',
      body: 'Written before the code they protect. They try every way one organisation could reach another’s studies, and every attempt must fail.',
    },
    {
      value: '100%',
      label: 'of organisation routes permission-checked',
      body: 'At startup the API walks every organisation route and refuses to start if one does not declare a permission. A forgotten endpoint cannot go live.',
    },
    {
      value: 'Live',
      label: 'tests against the real archive',
      body: 'Contract tests run against the real Orthanc and object storage, not just mocks, to catch problems that fakes would hide.',
    },
  ],
  qualityNote:
    'Every release is also verified by hand, end to end, on a running system: sign-in, upload, de-identification, viewing, reports, restricted access and the audit trail, following a written runbook.',
};

const zhTw: TechStack = {
  stackIntro:
    '精簡而現代的技術架構，兼顧速度與安全：編譯式的 Go 1.27 API、Python 3.12 影像處理引擎，以及 PostgreSQL 17。',
  stack: [
    {
      id: 'api',
      name: 'API',
      language: 'Go 1.27',
      tagline: '單一靜態執行檔，影像串流零緩衝',
      summary:
        '編譯為單一靜態執行檔，運行在空白的容器映像上：沒有 shell、沒有作業系統套件，幾乎沒有可供攻擊的地方。影像以串流方式直接傳輸、不做緩衝，並負責登入、權限、稽核與報告。',
    },
    {
      id: 'worker',
      name: 'DICOM 處理引擎',
      language: 'Python 3.12',
      tagline: '在記憶體中去識別化，儲存前就完成',
      summary: '在記憶體中驗證、去識別化並匯入每個 DICOM 檔案，全部在資料進入影像封存系統之前完成。以獨立程序在多個 CPU 核心上平行運作，不需要另外維運訊息佇列。',
    },
    {
      id: 'frontend',
      name: '網頁應用程式與檢視器',
      language: 'Next.js 16 · React 19 · TypeScript 7',
      tagline: '中英雙語，內建 OHIF v3 檢視器',
      summary: '快速的雙語網頁應用程式，提供英文與繁體中文介面，並內建 OHIF v3 醫療影像檢視器。',
    },
  ],
  storage: [
    { id: 'orthanc', name: 'Orthanc 25.6', summary: '成熟可靠的 DICOM 伺服器，作為影像封存系統。從不暴露在網際網路上。' },
    { id: 'postgres', name: 'PostgreSQL 17', summary: '應用程式資料、稽核軌跡、工作佇列與影像索引。' },
    { id: 'garage', name: 'Garage 1.0', summary: '相容 S3 的物件儲存，用於上傳暫存。' },
  ],
  deployment: '以 Docker Compose 部署於單台伺服器，nginx 是唯一對外開放的入口。不需要管理 Kubernetes。',
  quality: [
    {
      value: '460+',
      label: '項自動化測試',
      body: 'Go 與 Python 測試套件會在每次變更時執行，並搭配嚴格的程式碼檢查與型別檢查。全部通過才能發布。',
    },
    {
      value: '180+',
      label: '項租戶隔離測試',
      body: '在受保護的程式碼完成之前就先寫好。測試會嘗試一個機構存取另一個機構檢查的所有方式，每一種都必須失敗。',
    },
    {
      value: '100%',
      label: '的機構路由經過權限檢查',
      body: 'API 啟動時會逐一走訪每個機構路由，只要有任何一個沒有宣告權限，就拒絕啟動。被遺忘的端點不可能上線。',
    },
    {
      value: '實機',
      label: '對真實封存系統測試',
      body: '契約測試直接對真實的 Orthanc 與物件儲存執行，而不只是模擬物件，能抓出模擬環境會隱藏的問題。',
    },
  ],
  qualityNote:
    '每次發布也會由人工在實際運作的系統上進行端到端驗證：依照書面操作手冊，逐一檢查登入、上傳、去識別化、影像檢視、報告、受限存取與稽核軌跡。',
};

export const techStack: Record<Locale, TechStack> = { en, 'zh-tw': zhTw };
