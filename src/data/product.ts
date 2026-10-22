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
    { title: 'Projects and permissions', body: 'Studies are shared through projects, where each person is an owner, contributor or reader. Readers can be view-only.' },
    { title: 'Two-factor sign-in', body: 'Every sign-in needs a code from an authenticator app. A computer can be trusted for 30 days.' },
    { title: 'DICOM upload and ingest', body: 'Upload single files or ZIP archives, with validation and automatic ingest.' },
    { title: 'DICOM viewer and study browsing', body: 'View every series in the browser with the built-in OHIF viewer. Study lists with search, filters and previews.' },
    { title: 'Radiology reports with voice dictation', body: 'Draft, finalise, version and export reports to PDF. Dictate them by voice, recognised on the doctor’s own computer.' },
    { title: 'Share links with live chat', body: 'Send a study to a patient behind a password, and chat with them in real time on the same link.' },
    { title: 'Break-the-glass access', body: 'Restricted studies can still be opened when needed, but access is always recorded with a reason.' },
    { title: 'Tamper-evident audit trail', body: 'An append-only record of every action, exportable to CSV.' },
    { title: 'REST API', body: 'A full REST API with Swagger docs, for developers and integrations.' },
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
    { title: '專案與權限', body: '檢查透過專案分享，每個人在專案中是擁有者、貢獻者或閱讀者。閱讀者可設為僅能檢視。' },
    { title: '雙重驗證登入', body: '每次登入都需要驗證器 App 的驗證碼。電腦可設為信任 30 天。' },
    { title: 'DICOM 上傳與匯入', body: '上傳單一檔案或 ZIP 壓縮檔，自動驗證並匯入。' },
    { title: 'DICOM 檢視器與檢查瀏覽', body: '以內建的 OHIF 檢視器在瀏覽器中檢視每個序列。可搜尋與篩選的檢查清單與預覽圖。' },
    { title: '放射科報告與語音口述', body: '草稿、定稿、版本紀錄並可匯出 PDF。也能以語音口述，在醫師自己的電腦上辨識。' },
    { title: '分享連結與即時對話', body: '以密碼保護將檢查分享給病患，並在同一個連結中與病患即時對話。' },
    { title: '緊急存取（破窗機制）', body: '受限檢查在必要時仍可開啟，但每次存取都會連同理由一併記錄。' },
    { title: '可偵測竄改的稽核軌跡', body: '每個動作都有只能新增、無法修改的紀錄，並可匯出為 CSV。' },
    { title: 'REST API', body: '完整的 REST API 與 Swagger 文件，方便開發與系統整合。' },
  ],
};

export const product: Record<Locale, typeof en> = { en, 'zh-tw': zhTw };
