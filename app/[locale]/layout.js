import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages } from "next-intl/server";

// Configurer Inter pour le texte courant
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Configurer Poppins pour les titres
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Portfolio de Roberd Celestin | Développeur Web",
  description: "Développeur web passionné par React et Next.js",
};

export default async function RootLayout({ children }) {
    const messages = await getMessages();

  return (
    <html className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.variable}`}>
      <NextIntlClientProvider messages={messages}>
          <Navigation />
            <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
