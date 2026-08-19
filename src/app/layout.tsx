import Script from 'next/script';
import type { Metadata } from "next";
import "./globals.css";

type SiteSettings = {
  siteName: string;
  developerName: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  gaId: string;
  fbPixelId: string;
};

const siteSettingsFallback: SiteSettings = {
  siteName: "Mulberry Hills",
  developerName: "Landmark Nest Pvt. Ltd.",
  metaTitle: "Mulberry Hills Vijayapura | DTCP Approved Gated Plots, North Bangalore",
  metaDescription: "Mulberry Hills is a DTCP approved, RERA registered gated community plotted development in Vijayapura, North Bangalore. 83 plots across 5.5 acres with clear title and bank loan facility.",
  ogImage: "/images/696a502b5959735a04b66728_a31d9da5d5b4a67dab52fce97d71cb07_Social-share.jpg",
  gaId: "G-3LRMNFP7L5",
  fbPixelId: "1164421445117662",
};

async function getSiteSettings(): Promise<SiteSettings> {
  return siteSettingsFallback;
}

export async function generateMetadata(): Promise<Metadata> {
  const { metaTitle, metaDescription, ogImage } = await getSiteSettings();
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImage }],
      type: "website",
    },
    twitter: {
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
      card: "summary_large_image",
    },
    icons: {
      icon: "/images/69615623ad805642c1d79e03_Fav Icon.svg",
      apple: "/images/69e3319b71897fde63bd1ae9_Web Clip (1).png",
    }
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { gaId, fbPixelId } = await getSiteSettings();

  return (
    <html
      lang="en"
      data-wf-domain="titanpipe-template.webflow.io"
      data-wf-page="695a39548a779b2bfa0d5dd1"
      data-wf-site="695a39548a779b2bfa0d5de4"
      suppressHydrationWarning
    >
      <head>
        <link href="https://cdn.prod.website-files.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        
        <style suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: `html.w-mod-js:not(.w-mod-ix3) :is([animation="word"], .hero-container) {visibility: hidden !important;}`
        }} />
        
        <Script src="/js/webfont.js" type="text/javascript" strategy="beforeInteractive" />
        <Script id="inline-script-1" dangerouslySetInnerHTML={{
          __html: `WebFont.load({ google: { families: ["Inter Tight:300,400,500,600,700"] } });`
        }} />

        <Script id="inline-script-2" dangerouslySetInnerHTML={{
          __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`
        }} />

        <Script id="inline-script-3" dangerouslySetInnerHTML={{
          __html: `(function(w,i,g){w[g]=w[g]||[];if(typeof w[g].push=='function')w[g].push.apply(w[g],Array.isArray(i)?i:[i]);})(window,['${gaId}'],'google_tags_first_party');`
        }} />
        <Script async src="/js/rNGRKzO6-t7IhZlEO5e0MYu9-Zc.js" />

        <Script id="inline-script-4" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('set', 'developer_id.dZGVlNj', true);gtag('set', 'developer_id.dYWYxNW', true);gtag('js', new Date());gtag('config', '${gaId}');`
        }} />

        <Script id="inline-script-5" dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='plwebflow';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${fbPixelId}');fbq('track', 'PageView');`
        }} />

        <Script id="inline-script-6" dangerouslySetInnerHTML={{
          __html: `window.__WEBFLOW_CURRENCY_SETTINGS = {"currencyCode":"USD","symbol":"$","decimal":".","fractionDigits":2,"group":",","template":"{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}","hideDecimalForWholeNumbers":false};`
        }} />
      </head>
      <body>
        {children}
        
        <Script src="/js/jquery-3.5.1.min.dc5e7f18c8.js" type="text/javascript" crossOrigin="anonymous" />
        <Script src="/js/titanpipe-template.schunk.172ec51a511480e2.js" type="text/javascript" crossOrigin="anonymous" />
        <Script src="/js/titanpipe-template.schunk.cc8c2469fb897bef.js" type="text/javascript" crossOrigin="anonymous" />
        <Script src="/js/titanpipe-template.ab601168.d4867a12b8b249fc.js" type="text/javascript" crossOrigin="anonymous" />
        <Script src="/js/gsap.min.js" type="text/javascript" />
      </body>
    </html>
  );
}
