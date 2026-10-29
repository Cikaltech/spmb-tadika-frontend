import type { Metadata } from 'next'
import { Sidebar } from '@/components/admin/Sidebar'

/** Kerangka panel admin: sidebar teal-800 dan area konten cream-50. design.md bab 11. */
export const metadata: Metadata = {
  title: { default: 'Panel admin', template: '%s | Admin SPMB' },
  description: 'Panel staf SPMB Tadika Cikal Mulia untuk verifikasi bukti transfer dan jadwal wawancara.',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-50 text-[16px] leading-[1.6] md:flex">
      <Sidebar />
      <main id="konten" className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-[1080px]">{children}</div>
      </main>
    </div>
  )
}
