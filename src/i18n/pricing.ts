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
  tiers: Record<string, TierText>;
  /** FAQ questions and answers by position; anything missing falls back to pricing.yaml. */
  faqQuestions: string[];
  faqAnswers: string[];
} = {
  foundingOffer: '創始客戶優惠：前 3 個機構享 5 折優惠，條件是協助我們撰寫一篇客戶案例。',
  licenceSummary: '每份授權限一個機構使用。您可以修改程式碼，但不得轉售或再散布。',
  tiers: {
    'self-hosted': {
      name: '自行架設',
      description: '由您自行運作的完整原始碼。',
      features: ['完整原始碼，單一機構永久授權', '12 個月更新', '安裝文件（Docker Compose）', '12 個月電子郵件支援（2 個工作天內回覆）'],
    },
    deployed: {
      name: '代為部署',
      description: '我們為您部署、交接給您的團隊，並提供一年支援。',
      features: [
        '包含自行架設方案的所有內容',
        '在您的伺服器、雲端或 Kubernetes 叢集上完成端到端部署',
        '交接給您的團隊，並提供操作說明',
        '12 個月支援與更新',
      ],
      badge: '最受歡迎',
    },
  },
  faqQuestions: [
    '更新包含哪些內容？',
    '技術支援涵蓋哪些內容？',
    '退款政策是什麼？',
    '可以用發票或銀行轉帳付款嗎？',
    '12 個月之後會怎樣？',
  ],
  faqAnswers: [
    '自購買日起 12 個月內的錯誤修正與新版本。您收到的每一個版本都歸您所有，可以永久保留並持續使用。',
    '協助您依交付內容使用 PACSinfra，以電子郵件提供，盡力在 2 個工作天內（台灣時間）回覆。客製化開發、與您其他系統的整合以及到場服務，屬於另行報價的付費服務。',
    '由於您會取得完整原始碼，一旦收到原始碼即不提供退款，法律另有規定者除外。少數情況例外，例如尚未交付的訂單、誤購或重複付款、部署工作開始前，以及 14 天內取消的續約，詳見退款政策（英文）。購買前歡迎先試用展示版，或寄信詢問任何問題。',
    '可以。付款方式為開立發票並以銀行轉帳支付，依發票所載條件辦理。',
    '您可以保留軟體與已收到的所有版本，並持續使用。若要繼續獲得支援與更新，可依各方案標示的價格逐年續約。',
  ],
};
