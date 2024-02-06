import { Roboto } from 'next/font/google'                     //Importamos la fuente que querramos de google
import { Footer } from "app/components/shared/Footer";
import { Header } from "app/components/shared/Header/Header";
import { Description } from 'app/components/home/Description';
import { Hero } from 'app/components/home/Hero/Hero';
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],  //-> Aqui podemos colocar los subconjuntos de caracteres que queramos
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} m-0 p-0 bg-primary text-colorT`}>
        <Header />
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  );
}
