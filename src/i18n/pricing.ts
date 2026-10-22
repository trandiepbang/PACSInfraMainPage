// Traditional Chinese text for pricing.yaml. Prices, billing, URLs and highlight flags stay in the
// YAML; only the words are overridden here, matched by tier id. Anything missing falls back to English.

export interface TierText {
  name?: string;
  description?: string;
  features?: string[];
  note?: string;
  badge?: string;
  callout?: string;
}

export const pricingZhTw: {
  foundingOffer?: string;
  licenceSummary?: string;
  addOn?: { name?: string; description?: string };
  tiers: Record<string, TierText>;
  /** FAQ questions and answers by position; anything missing falls back to pricing.yaml. */
  faqQuestions: string[];
  faqAnswers: string[];
} = {
  foundingOffer: '創始客戶優惠：前 3 個機構享 5 折優惠，條件是協助我們撰寫一篇客戶案例。',
  licenceSummary: '每份授權限一個機構使用。您可以修改程式碼，但不得轉售或再散布。',
  addOn: {
    name: 'DICOM 節點連接器與工作清單',
    description:
      '安裝在醫院網路內的 DICOM 節點，接收來自影像儀器與既有 PACS 的檢查，並經由加密連線轉送，另附影像儀器工作清單（Modality Worklist）。由我們為您完成安裝與連接。',
  },
  tiers: {
    'self-hosted': {
      name: '自行架設，第一年',
      description: '我們在您的伺服器上完成建置、將完整原始碼交接給您的團隊、移轉您既有的檢查資料，並維護一整年。',
      features: [
        '在您的伺服器、雲端或 Kubernetes 叢集上完成建置',
        '將完整原始碼交接給您的團隊，並提供操作說明',
        '單一機構永久授權',
        '移轉您既有的檢查與資料',
        '12 個月維護：除錯並修正任何錯誤',
      ],
    },
  },
  faqQuestions: [
    '更新包含哪些內容？',
    '維護涵蓋哪些內容？',
    '退款政策是什麼？',
    '可以用發票或銀行轉帳付款嗎？',
    '12 個月之後會怎樣？',
  ],
  faqAnswers: [
    '自購買日起 12 個月內的錯誤修正與新版本。您收到的每一個版本都歸您所有，可以永久保留並持續使用。',
    '針對交付的 PACSinfra 除錯並修正任何錯誤，並提供更新與電子郵件協助，盡力在 2 個工作天內（台灣時間）回覆。客製化開發、與您其他系統的整合以及到場服務，屬於另行報價的付費服務。',
    '由於您會取得完整原始碼，一旦收到原始碼即不提供退款，法律另有規定者除外。少數情況例外，例如尚未交付的訂單、誤購或重複付款、建置工作開始前，以及 14 天內取消的續約，詳見退款政策。購買前歡迎先試用展示版，或寄信詢問任何問題。',
    '可以。付款方式為開立發票並以銀行轉帳支付，依發票所載條件辦理。',
    '您可以保留軟體與已收到的所有版本，並持續使用。若要繼續獲得維護、除錯與更新，可依方案標示的價格逐年續約。',
  ],
};
