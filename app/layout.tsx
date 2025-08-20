import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader"
import { SidebarProvider } from "@/components/ui/sidebar";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradefluxAi",
  description: "TradefluxAi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SidebarProvider>
            <Toaster />
            <NextTopLoader color="rgb(37 99 235)" height={5} />
            <Provider>{children}
              <Analytics/>
            </Provider>
          </SidebarProvider>
      </body>
    </html>
  );
}
