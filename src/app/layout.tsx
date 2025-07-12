import Layout from "@/components/layout";
import "../assets/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";
import App from "@/components/layout/App";
import { Open_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: `🏓 Tennis store`,
  description: "Tennis rackets",
  generator: "Next.js",
  applicationName: "Tennis store",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "Shadcn/UI"],
  authors: [{ name: "Tennis store" }],
  creator: "Tennis store",
  publisher: "Tennis store",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ru-RU": "/ru-RU",
    },
  },
};

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <App>
          <NextTopLoader />
          <Layout>{children}</Layout>
        </App>
      </body>
    </html>
  );
}
