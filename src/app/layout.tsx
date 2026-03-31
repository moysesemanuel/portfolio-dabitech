import type { Metadata } from "next";
import "./globals.css";
import { BackToTopButton } from "@/components/shared/back-to-top-button";
import { ToastProvider } from "@/components/shared/toast-provider";

export const metadata: Metadata = {
  title: "DaBi Tech | Digital Solutions",
  description:
    "Portfólio de produtos digitais com foco em direção visual, clareza de interface e base técnica pronta para operar.",
  icons: {
    icon: "/logo-icon.svg",
    shortcut: "/logo-icon.svg",
    apple: "/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ToastProvider>
          {children}
          <BackToTopButton />
        </ToastProvider>
      </body>
    </html>
  );
}
