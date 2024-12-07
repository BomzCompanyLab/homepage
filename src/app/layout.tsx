import type { Metadata } from "next";
import "./css/globals.css";
import Header from "./header";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "BOMZ",
  description: "애자일 팀을 위한 차별화된 칸반, 스크럼 등을 이용하여 조직의 소프트웨어 개발/운영을 진행하세요",
  applicationName: "봄보라 | Bombora",
  authors: [{name: "BOMZ Company"}],
  creator: "BOMZ Company",
  robots: "index, nofollow",
  keywords: "bomz, bombora, kanban, agile, scrum, backlog, 봄즈, 봄보라, 칸반, 애자일, 스크럼, 백로그",
  icons: { icon: "/images/favicon.png", apple: "/images/favicon.png"}
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="kr">
      <head>
        <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css" rel="stylesheet"></link>
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
