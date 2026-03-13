import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: '安信护卫 - 专业联网报警运营服务',
    template: '%s | 安信护卫',
  },
  description:
    '安信护卫是一家专业的联网报警运营服务公司，提供联网报警、视频监控、门禁系统等全方位安防解决方案，保障您的生命财产安全。',
  keywords: [
    '联网报警',
    '安防服务',
    '视频监控',
    '门禁系统',
    '安保服务',
    '防盗报警',
    '智能安防',
    '安保公司',
  ],
  authors: [{ name: '安信护卫' }],
  generator: 'Coze Code',
  openGraph: {
    title: '安信护卫 - 专业联网报警运营服务',
    description:
      '提供联网报警、视频监控、门禁系统等全方位安防解决方案，24小时守护您的安全。',
    siteName: '安信护卫',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
