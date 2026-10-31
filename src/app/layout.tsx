import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "CECS Mock", description: "Practice exams from Markdown files." };
export default function Layout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en" suppressHydrationWarning><body><a className="skip" href="#main">Skip to content</a>{children}<noscript>JavaScript is required to read exam files and take exams.</noscript></body></html>; }
