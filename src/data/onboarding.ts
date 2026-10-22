// "Getting started" on the home page: how a clinic goes from first sign-in to its first
// report, and what each project role may do. Keep it in step with the product's roles
// (apps/api/docs/SPEC.md §6 in the product repo).
import type { IconName } from '../components/DiagramIcon.astro';
import type { Locale } from '../i18n';

interface Step {
  icon: IconName;
  title: string;
  body: string;
}

interface Role {
  name: string;
  body: string;
}

const en = {
  eyebrow: 'Getting started',
  title: 'From first sign-in to first report',
  intro: 'How your team starts using PACSinfra once it is set up on your server.',
  steps: [
    {
      icon: 'key',
      title: 'Sign in as administrator',
      body: 'Once PACSinfra is set up, you sign in as your organisation’s administrator, with two-factor sign-in.',
    },
    {
      icon: 'users',
      title: 'Invite your team',
      body: 'Add colleagues by email. Each one gets a link to sign in, or signs in with Google.',
    },
    {
      icon: 'clipboard',
      title: 'Create a project',
      body: 'Group studies the way you work: a clinic, a department, a trial or a reading list.',
    },
    {
      icon: 'shield',
      title: 'Add people with a role',
      body: 'Choose what each person may do in that project: owner, contributor or reader.',
    },
    {
      icon: 'upload',
      title: 'Upload studies',
      body: 'Upload DICOM files or ZIP archives into the project, or let the DICOM node send them from your scanners.',
    },
    {
      icon: 'file',
      title: 'Read, report and share',
      body: 'Open studies in the viewer, write reports, by voice if you like, and share them with patients.',
    },
  ] as Step[],
  rolesTitle: 'Three roles in each project',
  roles: [
    { name: 'Owner', body: 'Manages the project: its people, their roles and which studies it holds. Can do everything a contributor can.' },
    { name: 'Contributor', body: 'Uploads studies, writes and finalises reports, and shares studies with patients.' },
    { name: 'Reader', body: 'Views studies and finalised reports. Can be set to view-only, without downloading files.' },
  ] as Role[],
  note: 'Studies are seen only through projects. An administrator manages people, but opens no study unless they are added to its project.',
};

const zhTw: typeof en = {
  eyebrow: '開始使用',
  title: '從第一次登入到第一份報告',
  intro: 'PACSinfra 在您的伺服器上建置完成後，您的團隊如何開始使用。',
  steps: [
    { icon: 'key', title: '以管理員身分登入', body: 'PACSinfra 建置完成後，您以機構管理員身分登入，並使用雙重驗證。' },
    { icon: 'users', title: '邀請您的團隊', body: '以電子郵件加入同事。每位同事都會收到登入連結，或以 Google 帳號登入。' },
    { icon: 'clipboard', title: '建立專案', body: '依您的工作方式將檢查分組：一間診所、一個科別、一項試驗或一份判讀清單。' },
    { icon: 'shield', title: '以角色加入人員', body: '決定每個人在該專案中可以做什麼：擁有者、貢獻者或閱讀者。' },
    { icon: 'upload', title: '上傳檢查', body: '將 DICOM 檔案或 ZIP 壓縮檔上傳到專案，或由 DICOM 節點從您的影像儀器傳送過來。' },
    { icon: 'file', title: '判讀、撰寫報告與分享', body: '在檢視器中開啟檢查、撰寫報告（也可以語音口述），並分享給病患。' },
  ],
  rolesTitle: '每個專案的三種角色',
  roles: [
    { name: '擁有者', body: '管理專案：成員、他們的角色，以及專案包含哪些檢查。貢獻者能做的事，擁有者也都能做。' },
    { name: '貢獻者', body: '上傳檢查、撰寫並定稿報告，以及將檢查分享給病患。' },
    { name: '閱讀者', body: '檢視檢查與已定稿的報告。可設為僅能檢視，不能下載檔案。' },
  ],
  note: '檢查只能透過專案檢視。管理員負責管理人員，但除非被加入該專案，否則無法開啟任何檢查。',
};

export const onboarding: Record<Locale, typeof en> = { en, 'zh-tw': zhTw };
