import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo",
  description:
    "Todo app build with Nextjs 13 app router , Legend state and shadcn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen max-w-md mx-auto bg-muted">{children}</body>
    </html>
  );
}
