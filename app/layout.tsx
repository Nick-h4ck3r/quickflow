import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quickflow",
  description: "Streamline your ideas and tasks, effortlessely...",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.jpg",
        href: "/logo.jpg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.jpg",
        href: "/logo-dark.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
