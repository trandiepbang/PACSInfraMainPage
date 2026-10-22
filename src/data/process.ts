// The buying process on /how-it-works, from the first call to renewal. Keep it in step with
// /terms (sections 4 and 5) and the refund policy. {plan}, {addOn} and {renewal} are filled
// in from pricing.yaml.
import type { IconName } from '../components/DiagramIcon.astro';
import type { Locale } from '../i18n';

export interface Step {
  icon: IconName;
  title: string;
  body: string;
  optional?: boolean;
}

const en: Step[] = [
  {
    icon: 'chat',
    title: 'Talk to us',
    body: 'Book a free call or send an email. Tell us about your clinic, how many people will use it, and the PACS or archive you use today.',
  },
  {
    icon: 'eye',
    title: 'Try the demo',
    body: 'Sign up at the demo and try it with anonymised studies. Some features, such as the DICOM node and worklist, are not in the demo.',
  },
  {
    icon: 'file',
    title: 'Quote and order confirmation',
    body: 'You get a written quote: the {plan} first-year plan, plus the DICOM node add-on ({addOn}) and a migration quote if you need them. The order confirmation sets out exactly what is included.',
  },
  {
    icon: 'bank',
    title: 'Pay the 50% deposit',
    body: 'Half of the order is invoiced when you confirm it. Pay by international bank transfer (SWIFT) in US dollars, quoting the invoice number.',
  },
  {
    icon: 'server',
    title: 'Prepare your server',
    body: 'Provide a server that can run Docker Compose, in your building or your own cloud, and a jump host account for me. I never ask for access any other way.',
  },
  {
    icon: 'cpu',
    title: 'Setup',
    body: 'I install PACSinfra on your server, turn on two-factor sign-in, and create your organisation, users and projects with you.',
  },
  {
    icon: 'branch',
    title: 'Handover and the final 50%',
    body: 'Your team receives the full source code, with a walkthrough of how it is built and run. The remaining 50% is invoiced at handover.',
  },
  {
    icon: 'transfer',
    title: 'Data migration and DICOM node',
    body: 'If you ordered them: your existing studies are moved in, inside your own network, and the DICOM node is connected to your scanners and existing PACS.',
    optional: true,
  },
  {
    icon: 'monitor',
    title: 'Go live',
    body: 'Your team starts reading and reporting. For 12 months I debug and fix errors in PACSinfra as delivered, and send you updates.',
  },
  {
    icon: 'refresh',
    title: 'Renew each year',
    body: 'After the first year, maintenance and updates continue for {renewal} a year. If you do not renew, you keep the software and every version you received.',
    optional: true,
  },
];

const zhTw: Step[] = [
  { icon: 'chat', title: '與我們聊聊', body: '預約免費通話或寄信給我們。告訴我們您的診所、使用人數，以及目前使用的 PACS 或封存系統。' },
  { icon: 'eye', title: '試用展示版', body: '註冊展示版，並以去識別化的檢查試用。部分功能（例如 DICOM 節點與工作清單）未包含在展示版中。' },
  {
    icon: 'file',
    title: '報價與訂單確認',
    body: '您會收到書面報價：{plan} 的第一年方案，如有需要再加上 DICOM 節點加購服務（{addOn}）與資料移轉報價。訂單確認書會清楚載明包含的內容。',
  },
  { icon: 'bank', title: '支付 50% 訂金', body: '確認訂單時開立一半金額的發票。請以國際電匯（SWIFT）支付美元，並註明發票號碼。' },
  {
    icon: 'server',
    title: '準備您的伺服器',
    body: '請準備一台能執行 Docker Compose 的伺服器（放在院內或您自己的雲端皆可），並為我建立跳板主機帳號。我不會以其他方式要求存取。',
  },
  { icon: 'cpu', title: '建置', body: '我在您的伺服器上安裝 PACSinfra、啟用雙重驗證登入，並與您一起建立機構、使用者與專案。' },
  { icon: 'branch', title: '交接與支付尾款 50%', body: '您的團隊會取得完整原始碼，並由我說明系統如何建置與運作。其餘 50% 於交接時開立發票。' },
  {
    icon: 'transfer',
    title: '資料移轉與 DICOM 節點',
    body: '如有訂購：在您自己的網路內移轉既有的檢查資料，並將 DICOM 節點連接到您的影像儀器與既有 PACS。',
    optional: true,
  },
  { icon: 'monitor', title: '正式上線', body: '您的團隊開始判讀與撰寫報告。在 12 個月內，我會針對交付的 PACSinfra 除錯並修正錯誤，並提供更新。' },
  {
    icon: 'refresh',
    title: '每年續約',
    body: '第一年之後，維護與更新以每年 {renewal} 持續提供。若不續約，您仍可保留軟體與已收到的所有版本。',
    optional: true,
  },
];

export const process: Record<Locale, Step[]> = { en, 'zh-tw': zhTw };
