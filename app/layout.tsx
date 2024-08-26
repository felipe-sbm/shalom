import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orquestra Shalom",
  description: "Espalhando a paz de Deus através da música.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="flex antialiased bg-zinc-50 dark:bg-black">
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4428391155787594"
            crossOrigin="anonymous"
          ></script>
        </head>
        <main className="flex-auto min-w-0 flex-col">
          <Header />
          <div className="max-w-7xl mx-auto px-12">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
