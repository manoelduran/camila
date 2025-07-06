import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"], // adicione os pesos que você usa
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reumatologista em Salvador | Dra. Camila Cendon",
  description: "Reumatologista em Salvador | Dra. Camila Cendon",
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
