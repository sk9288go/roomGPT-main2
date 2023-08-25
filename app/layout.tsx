import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";
// import { I18nextProvider } from "react-i18next";
import Backend from "i18next-http-backend";
// import i18n from "../components/i18n";

let title = "Dream Junglim";
let description = "Generate your dream architecture in seconds.";
let ogimage = "https://roomgpt-demo.vercel.app/og-image.png";
let sitename = "Junglim-AIIG.io";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/logo.ico",
  },

  //여까지 바꿈 일단 0821

  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://roomgpt-demo.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" />
      <body className="bg-[#e8e8e8] text-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
