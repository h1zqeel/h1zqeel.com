import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "h1zqeel.com",
    template: "%s | h1zqeel.com",
  },
  description: "Software Engineer",
  openGraph: {
    title: "h1zqeel.com",
    description:
      "Software Engineer",
    url: "https://h1zqeel.com",
    siteName: "h1zqeel.com",
    images: [
      {
        url: "https://h1zqeel.com/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "h1zqeel",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.jpg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
