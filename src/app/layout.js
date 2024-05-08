import { baloo } from "@/ui/fonts";
import "@/ui/globals.css";
import "@/ui/customInputs.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { WebVitals } from "@/components/web-vitals/web-vitals";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export const metadata = {
  title: {
    default: "dailyEco Home page",
    template: "%s | dailyEco",
  },
  description: "dailyEco is the best resourse about eco life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baloo.className}>
        <WebVitals />
        {children}
        <Analytics />
      </body>
    
    </html>
  );
}
