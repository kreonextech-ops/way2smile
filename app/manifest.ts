import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Way 2 Smile Multispeciality Dental Clinic',
    short_name: 'Way 2 Smile',
    description: 'Expert dental care in Siliguri – smile designing, implants, orthodontics, root canal & more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00A67E',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
