import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from 'next/font/google';
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Nymph Solutions | Future-Ready Software Development",
  description: "A globally trusted software development company specializing in AI/ML, Cloud, IoT, and Custom Software Solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body
        suppressHydrationWarning
        suppressContentEditableWarning
        className={`${poppins.variable} antialiased`}
      >
        <SidebarProvider>
          <SidebarInset>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
