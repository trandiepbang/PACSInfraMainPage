// Product copy shared across pages. Source of truth: the product brief.
import type { Locale } from '../i18n';
import type { IconName } from '../components/DiagramIcon.astro';

export interface Feature {
  icon: IconName;
  title: string;
  body: string;
}

export type TableRow =
  | { group: string }
  | { icon: IconName; label: string; plan?: boolean; setup?: boolean; addOn?: boolean; quoted?: boolean };

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
  /** The "What's included" table on /pricing and the home page: true means included. */
  table: [
    { group: 'The software' },
    { icon: 'eye', label: 'DICOM viewer in the browser', plan: true },
    { icon: 'upload', label: 'DICOM upload and ingest', plan: true },
    { icon: 'file', label: 'Radiology reports, exported to PDF', plan: true },
    { icon: 'mic', label: 'Voice dictation for reports', plan: true },
    { icon: 'link', label: 'Password-protected share links', plan: true },
    { icon: 'chat', label: 'Live chat with patients', plan: true },
    { icon: 'users', label: 'Projects and permissions', plan: true },
    { icon: 'key', label: 'Two-factor sign-in', plan: true },
    { icon: 'alert', label: 'Break-the-glass access', plan: true },
    { icon: 'list', label: 'Audit trail with CSV export', plan: true },
    { icon: 'shield', label: 'DICOM gateway: each user queries and retrieves only from allowed machines', plan: true },
    { icon: 'code', label: 'REST API with Swagger docs', plan: true },
    { group: 'The service' },
    { icon: 'branch', label: 'Full source code, handed over to your team', plan: true },
    { icon: 'wrench', label: 'First year of maintenance, debugging and fixes (free)', plan: true },
    { icon: 'server', label: 'Setup on your own server', setup: true },
    { icon: 'transfer', label: 'Migration of your existing studies', quoted: true },
    { group: 'Connecting your scanners' },
    { icon: 'node', label: 'DICOM node connector', addOn: true },
    { icon: 'clipboard', label: 'Modality worklist', addOn: true },
    { icon: 'branch', label: 'Source code of the DICOM node and worklist', addOn: true },
  ] as TableRow[],
  features: [
    { icon: 'users', title: 'Projects and permissions', body: 'Studies are shared through projects, where each person is an owner, contributor or reader. Readers can be view-only.' },
    { icon: 'key', title: 'Two-factor sign-in', body: 'Sign-in supports two-factor authentication (2FA).' },
    { icon: 'upload', title: 'DICOM upload and ingest', body: 'Upload single files or ZIP archives, with validation and automatic ingest.' },
    { icon: 'eye', title: 'DICOM viewer and study browsing', body: 'View every series in the browser with the built-in OHIF viewer. Study lists with search, filters and previews.' },
    { icon: 'mic', title: 'Radiology reports with voice dictation', body: 'Draft, finalise, version and export reports to PDF. Dictate them by voice, recognised on the doctor’s own computer.' },
    { icon: 'chat', title: 'Share links with live chat', body: 'Send a study to a patient behind a password, and chat with them in real time on the same link.' },
    { icon: 'alert', title: 'Break-the-glass access', body: 'Restricted studies can still be opened when needed, but access is always recorded with a reason.' },
    { icon: 'list', title: 'Tamper-evident audit trail', body: 'An append-only record of every action, exportable to CSV.' },
    { icon: 'shield', title: 'DICOM gateway access control', body: 'Each user can query and retrieve only from the DICOM machines an admin has allowed them to use.' },
    { icon: 'code', title: 'REST API', body: 'A full REST API with Swagger docs, for developers and integrations.' },
  ] as Feature[],
};

const zhTw: typeof en = {
  table: [
    { group: '軟體' },
    { icon: 'eye', label: '瀏覽器中的 DICOM 檢視器', plan: true },
    { icon: 'upload', label: 'DICOM 上傳與匯入', plan: true },
    { icon: 'file', label: '放射科報告，可匯出 PDF', plan: true },
    { icon: 'mic', label: '報告語音口述', plan: true },
    { icon: 'link', label: '密碼保護的分享連結', plan: true },
    { icon: 'chat', label: '與病患即時對話', plan: true },
    { icon: 'users', label: '專案與權限', plan: true },
    { icon: 'key', label: '雙重驗證登入', plan: true },
    { icon: 'alert', label: '緊急存取（破窗機制）', plan: true },
    { icon: 'list', label: '稽核軌跡，可匯出 CSV', plan: true },
    { icon: 'shield', label: 'DICOM 閘道：每位使用者只能向允許的主機查詢與擷取', plan: true },
    { icon: 'code', label: 'REST API 與 Swagger 文件', plan: true },
    { group: '服務' },
    { icon: 'branch', label: '完整原始碼，交接給您的團隊', plan: true },
    { icon: 'wrench', label: '第一年維護、除錯與修正（免費）', plan: true },
    { icon: 'server', label: '在您自己的伺服器上建置', setup: true },
    { icon: 'transfer', label: '移轉您既有的檢查資料', quoted: true },
    { group: '連接您的影像儀器' },
    { icon: 'node', label: 'DICOM 節點連接器', addOn: true },
    { icon: 'clipboard', label: '影像儀器工作清單', addOn: true },
    { icon: 'branch', label: 'DICOM 節點與工作清單的原始碼', addOn: true },
  ],
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
    { icon: 'users', title: '專案與權限', body: '檢查透過專案分享，每個人在專案中是擁有者、貢獻者或閱讀者。閱讀者可設為僅能檢視。' },
    { icon: 'key', title: '雙重驗證登入', body: '登入支援雙重驗證（2FA）。' },
    { icon: 'upload', title: 'DICOM 上傳與匯入', body: '上傳單一檔案或 ZIP 壓縮檔，自動驗證並匯入。' },
    { icon: 'eye', title: 'DICOM 檢視器與檢查瀏覽', body: '以內建的 OHIF 檢視器在瀏覽器中檢視每個序列。可搜尋與篩選的檢查清單與預覽圖。' },
    { icon: 'mic', title: '放射科報告與語音口述', body: '草稿、定稿、版本紀錄並可匯出 PDF。也能以語音口述，在醫師自己的電腦上辨識。' },
    { icon: 'chat', title: '分享連結與即時對話', body: '以密碼保護將檢查分享給病患，並在同一個連結中與病患即時對話。' },
    { icon: 'alert', title: '緊急存取（破窗機制）', body: '受限檢查在必要時仍可開啟，但每次存取都會連同理由一併記錄。' },
    { icon: 'list', title: '可偵測竄改的稽核軌跡', body: '每個動作都有只能新增、無法修改的紀錄，並可匯出為 CSV。' },
    { icon: 'shield', title: 'DICOM 閘道存取控管', body: '每位使用者只能向管理員允許的 DICOM 主機查詢與擷取影像。' },
    { icon: 'code', title: 'REST API', body: '完整的 REST API 與 Swagger 文件，方便開發與系統整合。' },
  ],
};

export const product: Record<Locale, typeof en> = { en, 'zh-tw': zhTw };
