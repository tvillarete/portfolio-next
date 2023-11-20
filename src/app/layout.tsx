import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TannerV.com",
  description: "Frontend developer, lifelong learner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="TannerV.com" />
        <meta property="og:description" content={metadata.description ?? ""} />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/21055469/69097628-c7ba1300-0a0b-11ea-8ba7-88ed95604671.jpg"
        />
        <meta property="og:url" content="http://tannerv.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
