import type { Metadata } from 'next'
import { AntreanTable } from '@/components/admin/AntreanTable'
import { pendaftar } from '@/content/admin'

export const metadata: Metadata = { title: 'Antrean verifikasi' }

/**
 * Antrean bukti transfer. Kerapatan admin: baris tabel 48px, kartu putih bergaris
 * cream-200 tanpa bayangan, tombol 40px. DESIGN.md bab 11.
 */
export default function AdminAntreanPage() {
  const menunggu = pendaftar.filter((b) => b.status === 'menunggu-verifikasi').length

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <div className="min-w-0">
          <h1 className="font-display text-[28px] font-extrabold leading-[1.15]">
            Antrean bukti transfer
          </h1>
          <p className="mt-1 max-w-[68ch] text-[16px] text-ink-soft">
            Periksa bukti, lalu setujui atau tolak dengan alasan yang jelas. Data di halaman
            ini contoh, tanpa sambungan server.
          </p>
        </div>
        <p className="text-[14.5px] font-bold tabular-nums text-ink">
          {menunggu} bukti menunggu keputusan
        </p>
      </header>

      <AntreanTable data={pendaftar} />
    </div>
  )
}
