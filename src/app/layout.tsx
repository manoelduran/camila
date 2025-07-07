import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
        width: 1200,
        height: 630,
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
      <body
        suppressHydrationWarning
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
