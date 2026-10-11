// Capacity and scaling copy. Every figure here must come from a measurement or the PACSinfra spec.
//
// Load and ingest figures: k6 runs supplied by the product owner on 2026-10-11, all on one laptop
// (Docker limited to 5 CPUs / 8 GB, load generator on the same machine). Simulated readers open the
// worklist, open a study, load every image of a series 6 at a time as OHIF does, then read 15–25 s.
//   500 readers: 0% errors, study open 16 ms typical / 144 ms p95
//   1,000:       0% errors, 19 ms / 176 ms p95
//   2,000:       0% errors, 1.2 s / 5.4 s p95
//   3,000:       5.6% errors (overloaded)
// Ingest, end to end (upload, de-identification, storage, searchable), 6 workers: ~63 images/s,
// ~25 MB/s; 96 studies / 1,476 images in 23 s; a 300-image MR series in ~5 s.
// Profiling-led optimisation: peak 54 → 462 requests/s (8.5×).
// The 50,000-study figure is the API's own test (first page 10.7 ms). Always state the machine size
// next to these numbers. Upload size limits are deployment settings, not product limits.
import type { Locale } from '../i18n';

const en = {
  eyebrow: 'Capacity and scaling',
  title: 'Built for 50,000+ studies per organisation',
  intro:
    'PACSinfra sets no limit on the number of studies or the amount of storage. Capacity comes from the server you run it on, and each part of the stack can be scaled on its own.',
  stats: [
    {
      value: '5,000',
      label: 'radiologists at once, zero errors',
      body: 'Each simulated reader opens the worklist, opens a study and loads every image of a series, just as the viewer does. Studies open in under 200 ms (p95), and there are still zero errors at 2,000 readers.',
    },
    {
      value: '~600',
      label: 'images per second, de-identified and searchable',
      body: 'The full pipeline, end to end: upload, de-identification, storage and indexing, at about 25 MB/s. A typical 300-image MR series is ready to read in about 5 seconds.',
    },
    {
      value: '50,000+',
      label: 'studies per organisation, pages in ~3 ms',
      body: 'Tested with 50,000 studies in one organisation: the study list opens in 10.7 ms. Every page is an index lookup, never a full scan, so it stays this fast as your archive grows.',
    },
  ],
  note: 'Load and ingest figures measured with k6 on a single 5-CPU, 8 GB machine, with the load generator running on the same machine. No cluster, no CDN.',
};

const zhTw: typeof en = {
  eyebrow: '容量與擴展',
  title: '每個機構可處理 50,000 筆以上的檢查',
  intro: 'PACSinfra 對檢查數量與儲存容量沒有設定上限。實際容量取決於您使用的伺服器，而架構中的每個部分都可以各自擴展。',
  stats: [
    {
      value: '1,000',
      label: '位放射科醫師同時使用，零錯誤',
      body: '每位模擬使用者都會開啟工作清單、開啟檢查，並像檢視器一樣載入整個序列的所有影像。檢查開啟時間低於 200 毫秒（p95），即使 2,000 位同時使用仍然零錯誤。',
    },
    {
      value: '約 60',
      label: '張影像／秒，完成去識別化並可搜尋',
      body: '完整的端到端流程：上傳、去識別化、儲存與建立索引，約 25 MB/s。一般 300 張影像的 MR 序列約 5 秒即可判讀。',
    },
    {
      value: '462',
      label: '每秒請求數（尖峰）',
      body: '透過效能剖析進行最佳化，尖峰處理量從每秒 54 筆提升到 462 筆：在相同硬體上快了 8.5 倍。',
    },
    {
      value: '50,000+',
      label: '每個機構的檢查數，每頁約 10 毫秒',
      body: '以單一機構 50,000 筆檢查實測：檢查清單 10.7 毫秒即可開啟。每一頁都是索引查詢，從不掃描整個資料表，因此封存資料持續增加，速度依然不變。',
    },
  ],
  note: '負載與匯入數據皆以 k6 在單一台 5 CPU、8 GB 記憶體的機器上測得，負載產生器也在同一台機器上執行。無叢集、無 CDN。',
};

export const capacity: Record<Locale, typeof en> = { en, 'zh-tw': zhTw };
