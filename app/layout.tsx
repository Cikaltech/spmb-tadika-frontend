import type { Metadata, Viewport } from 'next'
import './globals.css'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: {
    default: `SPMB ${site.sekolah}`,
    template: `%s | SPMB ${site.sekolah}`,
  },
  description: `Pendaftaran calon siswa baru ${site.sekolah}, tahun ajaran ${site.tahunAjaran}.`,
  icons: { icon: '/favicon-32.png', apple: '/apple-touch-icon.png' },
}

export const viewport: Viewport = {
  themeColor: '#0B3B38',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-teal-700"
        >
          Lompat ke konten
        </a>
        {children}
      </body>
    </html>
  )
}
