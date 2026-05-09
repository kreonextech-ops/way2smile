import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Way 2 Smile – Dr. Aashish Kumar Jha | Multispeciality Dental Clinic',
  description:
    'Way 2 Smile Multispeciality Dental Clinic – Dr. Aashish Kumar Jha (B.D.S. WBUHS, Reg. No. 9118-A). General dentistry, orthodontics, prosthodontics & oral surgery at Sushrutanagar, Darjeeling.',
  keywords: [
    'dental clinic sushrutanagar',
    'dentist darjeeling',
    'way 2 smile',
    'orthodontics darjeeling',
    'smile designing',
    'braces aligners darjeeling',
    'root canal darjeeling',
  ],
  openGraph: {
    title: 'Way 2 Smile – Multispeciality Dental Clinic',
    description: 'Advanced dental care at Sushrutanagar, Darjeeling.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
