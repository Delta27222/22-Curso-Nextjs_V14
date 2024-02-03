import { Inter } from "next/font/google";
import { Footer } from "app/components/shared/Footer";
import { Header } from "app/components/shared/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0 p-0 bg-primary text-colorT`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
