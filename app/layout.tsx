import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Orynex Labs | Blockchain & AI Innovation for the Future of Work",
  description:
    "Orynex Labs is a global research and technology company building decentralized solutions that merge blockchain, AI, and work. We create infrastructure powering trustless, borderless collaboration for the new economy. We're also the team behind Skentral — the decentralized platform for freelancers and global work.",
  icons: {
    icon: "/og-image.png",
    shortcut: "/og-image.png",
    apple: "/og-image.png",
  },
  keywords: [
    "Orynex Labs",
    "Orynex",
    "Skentral",
    "Skentral platform",
    "Blockchain innovation",
    "AI and blockchain company",
    "Decentralized technology",
    "Web3 research lab",
    "Global work platform",
    "Future of work startup",
    "AI-driven blockchain projects",
    "Crypto R&D lab",
    "Freelance blockchain platform"
  ],
  authors: [{ name: "Orynex Labs" }],
  openGraph: {
    title: "Orynex Labs & Skentral | Innovating the Decentralized Future",
    description:
      "At Orynex Labs, we're redefining how the world works using blockchain and AI — powering projects like Skentral, a decentralized platform for freelancers and global teams.",
    url: "https://orynexlabs.com",
    siteName: "Orynex Labs",
    images: [
      {
        url: "https://orynexlabs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orynex Labs and Skentral",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orynex Labs × Skentral | Blockchain Meets the Future of Work",
    description:
      "Building secure blockchain technologies that empower people and businesses worldwide through transparency, security, and innovation. Makers of Skentral — the decentralized work platform.",
    creator: "@orynexlabs",
    site: "@SkentralX",
    images: ["https://orynexlabs.com/og-image.png"],
  },
  // 👇 AI & Search Engine Understanding (Structured Data)
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Orynex Labs",
      "url": "https://orynexlabs.com",
      "logo": "https://orynex.com/og-image.png",
      "sameAs": [
        "https://x.com/orynexlabs",
        "https://linkedin.com/company/orynexlabs",
        "https://Skentral.com",
        "https://x.com/SkentralX",
        "https://github.com/orynexlabs"
      ],
      "founders": [
        {
          "@type": "Person",
          "name": "Oluwademilade Abatan",
          "jobTitle": "Co-Founder & CEO",
          "image": "https://orynexlabs.com/img/ceo.jpeg",
          "sameAs": [
            "https://x.com/demilade1002",
            "https://www.linkedin.com/in/oluwademilade-abatan-8a5010352/"
          ]
        },
        {
          "@type": "Person",
          "name": "David Ogbaki",
          "jobTitle": "Co-Founder & CTO",
          "image": "https://orynexlabs.com/img/cto.jpeg",
          "sameAs": [
            "https://x.com/ogbakidavid3002",
            "https://www.linkedin.com/in/ogbakidavid3002/"
          ]
        }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Skentral",
        "url": "https://Skentral.com",
        "description": "A decentralized platform for freelancers and businesses built by Orynex Labs."
      },
      "description":
        "Orynex Labs is an AI and blockchain research company advancing the future of work through secure blockchain technology. The company also powers Skentral, a decentralized platform for freelancers and businesses.",
      "foundingDate": "2025",
      "foundingLocation": {
        "@type": "Place",
        "name": "Lagos, Nigeria"
      },
      "areaServed": "Global",
      "keywords": [
        "Blockchain",
        "AI",
        "Web3",
        "Future of Work",
        "Decentralized Economy",
        "Skentral",
        "Freelance Platform"
      ]
    })
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
       <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>

      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
