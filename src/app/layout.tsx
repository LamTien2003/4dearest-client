import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";

import Loading from "@/app/loading";
import { jsonLdService, jsonLdStore, jsonLdWebsite } from "@/constants/json-ld";
import { ChakraProvider } from "@/components/ChakraProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartContextProvider from "@/components/CartContextProvider";
import QueryClientProvider from "@/components/QueryClientProvider";
import PaypalProvider from "@/components/PaypalProvider";

import "./globals.css";
import "./vendor.css";
import "./utilities.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const workSansFont = Crimson_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "4DEAREST™ – Gift & Accessories Shop",
  description:
    "Gifts, candles, accessories, and decorations at affordable prices. 4dearest - For your dearest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
                    <!-- Meta Pixel Code -->
                      <script>
                      !function(f,b,e,v,n,t,s)
                      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                      n.queue=[];t=b.createElement(e);t.async=!0;
                      t.src=v;s=b.getElementsByTagName(e)[0];
                      s.parentNode.insertBefore(t,s)}(window, document,'script',
                      'https://connect.facebook.net/en_US/fbevents.js');
                      fbq('init', '611716307821381');
                      fbq('track', 'PageView');
                      </script>
                      <noscript><img height="1" width="1" style="display:none"
                      src="https://www.facebook.com/tr?id=611716307821381&ev=PageView&noscript=1"
                      /></noscript>
                    <!-- End Meta Pixel Code -->
`}
      </Script>

      <body className={workSansFont.className}>
        <QueryClientProvider>
          <ChakraProvider>
            <PaypalProvider>
              <CartContextProvider>
                <Suspense fallback={<Loading />}>
                  <Header />
                  <div className="main-content">{children}</div>
                  <Footer />

                  <Script
                    id="json-ld-store"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(jsonLdStore),
                    }}
                  />
                  <Script
                    id="json-ld-service"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(jsonLdService),
                    }}
                  />
                  <Script
                    id="json-ld-website"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(jsonLdWebsite),
                    }}
                  />
                </Suspense>
              </CartContextProvider>
            </PaypalProvider>
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
