import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kranthi Vanukuru | Data Scientist & ML Engineer",
  description:
    "Portfolio of Kranthi Vanukuru — Data Scientist specializing in AI, Machine Learning, Cloud Analytics, and Data Engineering.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "AI Engineer",
    "PySpark",
    "AWS",
    "Data Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Kranthi Vanukuru" }],
  creator: "Kranthi Vanukuru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}