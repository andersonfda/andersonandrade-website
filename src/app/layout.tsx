import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anderson Andrade — AI & DeFi Builder",
  description:
    "AI entrepreneur building autonomous agent protocols, cybersecurity automation, and decentralized finance systems.",
  metadataBase: new URL("https://andersonandrade.com"),
  openGraph: {
    title: "Anderson Andrade — AI & DeFi Builder",
    description:
      "AI entrepreneur building autonomous agent protocols, cybersecurity automation, and decentralized finance systems.",
    url: "https://andersonandrade.com",
    siteName: "Anderson Andrade",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Andrade — AI & DeFi Builder",
    description:
      "AI entrepreneur building autonomous agent protocols, cybersecurity automation, and decentralized finance systems.",
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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg antialiased">{children}</body>
    </html>
  );
}
