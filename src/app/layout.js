import { Inter, Open_Sans, Poppins, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbhsans",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Astronova Foundation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${openSans.variable}  ${poppins.variable} ${kumbhSans.variable} `}
      >
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
