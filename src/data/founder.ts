// "Who's behind PACSinfra" on the homepage. Use only facts the founder has approved.
// Hard rules: never name or hint at the current employer; never name the Australian university
// (say "a university healthcare research group"); no testimonials, logos or customer counts.
// Mark anything unconfirmed as [PLACEHOLDER].
import type { Locale } from '../i18n';

/** Set to a file in public/ (e.g. '/founder.webp') to replace the initials with a photo. */
export const FOUNDER_PHOTO: string | null = null;

const en = {
  eyebrow: 'About',
  title: 'Who’s behind PACSinfra',
  name: 'Bang Tran',
  /** The name in the other script, shown small under the main one. */
  altName: '陳業邦',
  facts: ['Based in Taipei, Taiwan', 'English · 中文 · Tiếng Việt'],
  story: [
    'I’m Bang Tran, the engineer who builds PACSinfra and writes its code. I have more than eight years of experience in the field, working across React, DuckDB, FastAPI and Kubernetes.',
    'For more than four years I built and ran medical imaging and PACS systems in production for a university healthcare research group in Australia. PACSinfra is built on that experience, and on what running those systems every day taught me.',
    'Medical imaging is a field I find genuinely interesting. When you choose PACSinfra, I will help you deploy it into real production and customise it to fit the way you work.',
  ],
  highlights: [
    { value: '4+ years', label: 'running PACS medical imaging infrastructure in production for a university healthcare research group in Australia' },
    { value: '8+ years', label: 'in the software engineering industry' },
  ],
  linkedin: 'Connect on LinkedIn',
  call: 'Book a call with me',
  email: 'Email me',
};

const zhTw: typeof en = {
  eyebrow: '關於',
  title: '誰在打造 PACSinfra',
  name: '陳業邦',
  altName: 'Bang Tran',
  facts: ['現居台灣台北', 'English · 中文 · Tiếng Việt'],
  story: [
    '我是陳業邦（Bang Tran），親自打造 PACSinfra 並撰寫其程式碼的工程師。我在這個領域擁有八年以上經驗，專長涵蓋 React、DuckDB、FastAPI 與 Kubernetes。',
    '過去四年多來，我為澳洲一所大學的醫療研究團隊，建置並在正式環境中維運醫療影像與 PACS 系統。PACSinfra 正是建立在這些經驗之上，也融入了日復一日實際維運所累積的心得。',
    '醫療影像是我真心感興趣的領域。選擇 PACSinfra，我會協助您將它部署到真正的正式環境，並依照您的工作方式進行客製化。',
  ],
  highlights: [
    { value: '4 年以上', label: '為澳洲一所大學的醫療研究團隊，在正式環境中維運 PACS 醫療影像基礎設施' },
    { value: '8 年以上', label: '軟體工程產業經驗' },
  ],
  linkedin: '在 LinkedIn 上聯繫',
  call: '預約與我通話',
  email: '寄信給我',
};

export const founder: Record<Locale, typeof en> = { en, 'zh-tw': zhTw };
