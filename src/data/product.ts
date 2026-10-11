// Product copy shared across pages. Source of truth: the product brief.
import type { Locale } from '../i18n';

const en = {
  summary:
    'Upload DICOM studies, review them, and write reports, all on your own server, with patient data that never leaves your control.',
  pixelCaveat: 'De-identification covers DICOM metadata, not text burned into image pixels.',
  guarantees: [
    {
      id: 'isolation',
      title: 'Tenant isolation, tested.',
      body: 'Each organisation sees only its own studies, verified by an automated isolation test suite. The image server is never exposed: every image passes through an API that checks permissions and records an audit entry for each request.',
      href: '/security#isolation',
      caveat: false,
    },
    {
      id: 'deidentification',
      title: 'De-identification before storage.',
      body: 'Patient identifiers are removed from DICOM metadata, including free-text fields and nested sequences, before anything reaches the image archive. Clinics can keep real identities in a separate application database. Research teams can run on pseudonyms only.',
      href: '/security#de-identification',
      caveat: true,
    },
  ],
  features: [
    { title: 'Organisations, roles and permissions', body: 'Login, editable per-organisation roles and fine-grained permissions.' },
    { title: 'DICOM upload and ingest', body: 'Upload single files or ZIP archives, with validation and automatic ingest.' },
    { title: 'Study browsing', body: 'Study lists with search and filters, series and instance browsing, and previews.' },
    { title: 'Radiology reports', body: 'Draft, finalise, version and export reports to PDF.' },
    { title: 'Private projects', body: 'Share selected studies with named colleagues.' },
    { title: 'Break-the-glass access', body: 'Restricted studies can still be opened when needed, but access is always recorded with a reason.' },
    { title: 'Tamper-evident audit trail', body: 'An append-only record of every action.' },
    { title: 'REST API', body: 'A full REST API with Swagger docs, for developers and integrations.' },
    { title: 'One-command deployment', body: 'Deploy with a single Docker Compose command.' },
  ],
};

const zhTw: typeof en = {
  summary: '上傳 DICOM 檢查、進行判讀並撰寫報告，全部在您自己的伺服器上完成，病患資料始終在您的掌控之中。',
  pixelCaveat: '去識別化涵蓋 DICOM 中繼資料，但不包含直接燒錄在影像像素中的文字。',
  guarantees: [
    {
      id: 'isolation',
      title: '經過測試的租戶隔離。',
      body: '每個機構只能看到自己的檢查，並由自動化隔離測試套件驗證。影像伺服器從不對外公開：每一張影像都必須經過 API，由 API 為每筆請求檢查權限並寫入稽核紀錄。',
      href: '/security#isolation',
      caveat: false,
    },
    {
      id: 'deidentification',
      title: '儲存前去識別化。',
      body: '在任何資料進入影像封存系統之前，系統會移除 DICOM 中繼資料中的病患識別資訊，包含自由文字欄位與巢狀序列。診所可將真實身分保存在獨立的應用程式資料庫中；研究團隊則可以只使用假名資料運作。',
      href: '/security#de-identification',
      caveat: true,
    },
  ],
  features: [
    { title: '機構、角色與權限', body: '登入、各機構可自訂的角色，以及細緻的權限控管。' },
    { title: 'DICOM 上傳與匯入', body: '上傳單一檔案或 ZIP 壓縮檔，自動驗證並匯入。' },
    { title: '檢查瀏覽', body: '可搜尋與篩選的檢查清單、序列與影像瀏覽，以及預覽圖。' },
    { title: '放射科報告', body: '草稿、定稿、版本紀錄，並可匯出 PDF。' },
    { title: '私人專案', body: '將選定的檢查分享給指定的同事。' },
    { title: '緊急存取（破窗機制）', body: '受限檢查在必要時仍可開啟，但每次存取都會連同理由一併記錄。' },
    { title: '可偵測竄改的稽核軌跡', body: '每個動作都有只能新增、無法修改的紀錄。' },
    { title: 'REST API', body: '完整的 REST API 與 Swagger 文件，方便開發與系統整合。' },
    { title: '一個指令完成部署', body: '只需一個 Docker Compose 指令即可部署。' },
  ],
};

export const product: Record<Locale, typeof en> = { en, 'zh-tw': zhTw };
