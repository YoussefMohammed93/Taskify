import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const Font = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Taskify",
  description:
    "Taskify, Simplify Your Workflow with Taskify, the Ultimate Task Management Tool! Organize, prioritize, and track tasks effortlessly. Boost productivity with powerful features for teams and individuals alike. Stay on top of deadlines and streamline your projects in one intuitive platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Font.className}>{children}</body>
    </html>
  );
}
