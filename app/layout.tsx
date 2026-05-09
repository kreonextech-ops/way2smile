import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://way2smiledental.in'
const CLINIC_NAME = 'Way 2 Smile Multispeciality Dental Clinic'
const DOCTOR_NAME = 'Dr. Aashish Kumar Jha'
const LOCATION = 'Sushrutanagar, Siliguri, West Bengal'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Way 2 Smile – ${DOCTOR_NAME} | Multispeciality Dental Clinic, Siliguri`,
    template: `%s | Way 2 Smile Dental Clinic`,
  },
  description:
    'Way 2 Smile Multispeciality Dental Clinic – led by Dr. Aashish Kumar Jha (BDS, WBUHS). Expert dental care including smile designing, orthodontics, implants, root canal, veneers & teeth whitening in Sushrutanagar, Siliguri, West Bengal.',
  keywords: [
    'dental clinic siliguri',
    'dentist siliguri',
    'dental clinic sushrutanagar',
    'way 2 smile dental',
    'Dr Aashish Kumar Jha',
    'smile designing siliguri',
    'orthodontic treatment siliguri',
    'braces aligners siliguri',
    'dental implants siliguri',
    'root canal treatment siliguri',
    'teeth whitening siliguri',
    'veneers siliguri',
    'tooth extraction siliguri',
    'scaling polishing siliguri',
    'dental clinic darjeeling',
    'multispeciality dental clinic west bengal',
    'BDS dentist siliguri',
    'affordable dentist siliguri',
    'best dentist siliguri',
  ],
  authors: [{ name: DOCTOR_NAME }],
  creator: CLINIC_NAME,
  publisher: CLINIC_NAME,
  category: 'Health & Medical',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: CLINIC_NAME,
    title: `Way 2 Smile – ${DOCTOR_NAME} | Dental Clinic Siliguri`,
    description:
      'Expert dental care in Siliguri – smile designing, implants, orthodontics, root canal & more. Book your appointment with Dr. Aashish Kumar Jha today.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Way 2 Smile Dental Clinic Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `Way 2 Smile – ${DOCTOR_NAME} | Dental Clinic Siliguri`,
    description:
      'Expert dental care in Siliguri – smile designing, implants, orthodontics, root canal & more.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  verification: {
    // Add Google Search Console / Bing Webmaster verification codes here when available
    // google: 'YOUR_VERIFICATION_CODE',
    // bing: 'YOUR_VERIFICATION_CODE',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dentist',
      '@id': `${SITE_URL}/#clinic`,
      name: CLINIC_NAME,
      alternateName: 'Way 2 Smile',
      description:
        'Multispeciality dental clinic offering smile designing, orthodontics, implants, root canal, veneers and more.',
      url: SITE_URL,
      telephone: '+918949805173',
      email: 'way2smiledental@gmail.com',
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Card',
      image: `${SITE_URL}/logo.png`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Medical More, Sushrutanagar',
        addressLocality: 'Siliguri',
        addressRegion: 'West Bengal',
        postalCode: '734001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.7271,
        longitude: 88.3953,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:00',
        },
      ],
      sameAs: [
        'https://github.com/kreonextech-ops/way2smile',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dental Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smile Designing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Orthodontic Treatment' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Teeth Whitening' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Veneers' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Implants' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Root Canal Treatment' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tooth Extraction' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Scaling & Polishing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Surgical Extractions' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dentures' } },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#doctor`,
      name: DOCTOR_NAME,
      jobTitle: 'Dentist',
      description:
        'BDS graduate from West Bengal University of Health Sciences (WBUHS), Registration No. 9118-A. Expert in cosmetic and general dentistry.',
      worksFor: { '@id': `${SITE_URL}/#clinic` },
      image: `${SITE_URL}/doctor-profile.png`,
      alumniOf: 'West Bengal University of Health Sciences',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: CLINIC_NAME,
      description: 'Official website of Way 2 Smile Multispeciality Dental Clinic, Siliguri.',
      publisher: { '@id': `${SITE_URL}/#clinic` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `Way 2 Smile – ${DOCTOR_NAME} | Dental Clinic Siliguri`,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#clinic` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
        ],
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
