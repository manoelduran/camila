import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reumatologista em Salvador | Dra. Camila Cendon",
  description:
    "Dra. Camila Cendon é médica reumatologista em Salvador - BA, especialista no diagnóstico e tratamento de doenças autoimunes como lúpus, artrite reumatoide, fibromialgia e osteoporose. Agende sua consulta.",
  openGraph: {
    title: "Reumatologista em Salvador | Dra. Camila Cendon",
    description:
      "Dra. Camila Cendon é médica reumatologista em Salvador - BA, especialista no diagnóstico e tratamento de doenças autoimunes como lúpus, artrite reumatoide, fibromialgia e osteoporose. Agende sua consulta.",
    url: "https://www.dracamilacendon.com.br",
    type: "website",
    images: [
      {
        url: "https://www.dracamilacendon.com.br/og.png",
        width: 1200,
        height: 630,
        alt: "Dra. Camila Cendon - Reumatologista em Salvador",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        )}
      </head>
      <body
        suppressHydrationWarning
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
