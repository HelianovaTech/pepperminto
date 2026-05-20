import { Layout } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import 'nextra-theme-docs/style.css'
 
const DOCS_URL = process.env.DOCS_URL ?? "https://docs.pepperminto.dev";

export const metadata: Metadata = {
  metadataBase: new URL(DOCS_URL),
  title: {
    template: "%s | Pepperminto",
    default: "Pepperminto Documentation",
  },
  description: "Pepperminto is an open-source helpdesk focused on fast workflows, clear ownership, and reliable customer support.",
  openGraph: {
    title: "Pepperminto Documentation",
    description: "Pepperminto is an open-source helpdesk focused on fast workflows, clear ownership, and reliable customer support.",
    images: "/og-image.png",
    url: DOCS_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    title: "Pepperminto",
  },
  twitter: {
    card: 'summary_large_image',
    site: "@potts_dev",
    creator: "@potts_dev",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <body>
        <Layout pageMap={await getPageMap()}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
