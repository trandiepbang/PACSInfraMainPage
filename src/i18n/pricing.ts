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
  /** FAQ questions by position; answers come from pricing.yaml until they are written. */
  faqQuestions: string[];
} = {
  foundingOffer: '創始客戶優惠：前 3 個機構享 5 折優惠，條件是協助我們撰寫一篇客戶案例。',
  licenceSummary: '每份授權限一個機構使用。您可以修改程式碼，但不得轉售或再散布。',
  tiers: {
    'self-hosted': {
      name: '自行架設',
      description: '由您自行運作的完整原始碼。',
      features: ['完整原始碼，單一機構永久授權', '終身更新', '安裝文件（Docker Compose）', '12 個月電子郵件支援（工作日回覆）'],
      note: '第二年起：可選購支援續約，每年 $900',
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
      note: '第二年起：可選購支援續約，每年 $1,500',
      badge: '最受歡迎',
    },
  },
  faqQuestions: [
    '「終身更新」是什麼意思？',
    '技術支援涵蓋哪些內容？',
    '退款政策是什麼？',
    '可以用發票或銀行轉帳付款嗎？',
    '12 個月之後會怎樣？',
  ],
};
