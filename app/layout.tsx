import type { Metadata } from "next";
import { Inter_Tight, Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NoiseBg from "@/components/NoiseBg/NoiseBg";
import Nav from "@/components/Nav/Nav";
import CallToAction from "@/components/CallToAction/CallToAction";
// import { Toaster } from "react-hot-toast";
// import PlausibleProvider from "next-plausible";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";
import FinalCta from "@/components/FinalCta/FinalCta";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--interTight",
});

const lb = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--lb",
});

const switzer = localFont({
  src: "../public/fonts/Switzer-Medium.otf",
  variable: "--switzer",
  display: "swap",
});

const suisse = localFont({
  src: "../public/fonts/SuisseIntl-Medium.ttf",
  variable: "--suisse",
  display: "swap",
});

const suissReg = localFont({
  src: "../public/fonts/SuisseRegular.ttf",
  variable: "--suisseReg",
  display: "swap",
});

const PerfectlyNinetiesItalic = localFont({
  src: "../public/fonts/PerfectlyNinetiesItalic.woff2",
  variable: "--PerfectlyNinetiesItalic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chris Ware's Portfolio Website",
    template: "%s - Chris Ware's Portfolio Website",
  },
  description:
    "Welcome to my portfolio website! Feel free to reach out with further questions if you have any. I am looking forward to speaking with you soon.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* <PlausibleProvider
          domain='fontsandfooters.com'
          trackLocalhost={true}
          enabled={true}
        /> */}
      </head>
      <body
        className={`${interTight.variable} ${switzer.variable} ${lb.variable}  ${suisse.variable} ${suissReg.variable} ${PerfectlyNinetiesItalic.variable}`}
      >
        {/* <Toaster
          position='top-center'
          toastOptions={{
            className: "toastFont",
            duration: 6000,
            style: {
              border: "2px solid #295f4e",
              borderRadius: "50px",
              textAlign: "center",
              whiteSpace: "nowrap",
            },
          }}
        /> */}
        <NoiseBg>
          <ScrollIndicator />
          <Nav />
          {children}
          <FinalCta />
        </NoiseBg>
      </body>
    </html>
  );
}
