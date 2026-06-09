import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/providers/theme/theme.provider";
import { Layout } from "@/components/layout/layout";
import { SplashScreen } from "@/components/providers/splash/splash.screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Мой персональный сайт-визитка",
  description: "Ознакомься со мной как с разработчиком и узнай о моих навыках",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <SplashScreen>
          <ThemeProvider>
            <Layout name="Никита Ломейко" position="Frontend-Разработчик">
              {children}
            </Layout>
          </ThemeProvider>
        </SplashScreen>
      </body>
    </html>
  );
}
