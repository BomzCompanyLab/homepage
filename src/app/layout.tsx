import type { Metadata } from "next";
import "./css/globals.css";
import Header from "./header";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "BOMZ",
  description: "애자일 팀을 위한 차별화된 스크럼, 칸반 등을 이용하여 조직의 소프트웨어 개발/운영을 진행하세요",
  applicationName: "봄보라 | BOMBora",
  authors: [{name: "BOMZ Company"}],
  creator: "BOMZ Company",
  robots: "index,follow",
  keywords: "bomz, bombora, kanban, agile, scrum, backlog, 봄즈, 봄보라, 칸반, 애자일, 스크럼, 백로그, 칸반보드, 애자일보드",
  icons: { icon: "https://www.bomz.app/favicon/favicon-16x16.png", apple: "https://www.bomz.app/favicon/favicon-16x16.png"}
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="kr">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="https://www.bomz.app/favicon/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="https://www.bomz.app/favicon/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="https://www.bomz.app/favicon/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="https://www.bomz.app/favicon/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="https://www.bomz.app/favicon/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="https://www.bomz.app/favicon/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="https://www.bomz.app/favicon/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="https://www.bomz.app/favicon/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.bomz.app/favicon/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="https://www.bomz.app/favicon/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.bomz.app/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="https://www.bomz.app/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.bomz.app/favicon/favicon-16x16.png"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="https://www.bomz.app/favicon/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* Naver search meta tag */}
        <meta name="naver-site-verification" content="08bcbb4c977c416b81096aa714885cd3b3fd38cc" />

        {/* Open Graph */}
        <meta property="og:type" content="website"/> 
        <meta property="og:title" content="BOMZ"/>
        <meta property="og:description" content="애자일 팀을 위한 차별화된 스크럼, 칸반 등을 이용하여 조직의 소프트웨어 개발/운영을 진행하세요"/>
        <meta property="og:image" content="http://www.bomz.app/images/og_site.png"/>
        <meta property="og:url" content="https://www.bomz.app"/>
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
