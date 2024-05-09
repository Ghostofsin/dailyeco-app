import { baloo } from "@/ui/fonts";
import "@/ui/globals.css";
import "@/ui/customInputs.css";
import { Analytics } from "@vercel/analytics/react";
import { WebVitals } from "@/components/web-vitals/web-vitals";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import GoogleAnalytics from "@/components/googleAnalytics/GoogleAnalytics";


export const metadata = {
  title: {
    default: "dailyEco Home page",
    template: "%s | dailyEco",
  },
  description: "dailyEco is the best resourse about eco life",
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  keywords: ['climate change', 'eco life', 'environment'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={baloo.className}>
        <WebVitals />
        {children}
        <Analytics />
      </body>
    
    </html>
  );
}
