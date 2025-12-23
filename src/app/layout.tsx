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
  description: "Reumatologista em Salvador | Dra. Camila Cendon",
  openGraph: {
    title: "Reumatologista em Salvador | Dra. Camila Cendon",
    description: "Especialista em reumatologia atendendo em Salvador - BA.",
    url: "https://camila-chi.vercel.app",
    type: "website",
    images: [
      {
        url: "https://camila-chi.vercel.app/og.png",
        width: 200,
        height: 100,
        alt: "Dra. Camila Cendon",
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
    <html lang="en">
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
