import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { StatusBadge, type StatusName } from '@/components/ui/StatusBadge'
import { rupiah, site } from '@/content/site'

export const metadata: Metadata = { title: 'Antrean verifikasi' }

/** Antrean bukti transfer. Kerapatan admin: tabel baris 48px, kartu radius 12 tanpa bayangan. */
type Baris = {
  kode: string
  nama: string
  jenjang: string
  nominal: number
  dikirim: string
  status: StatusName
  menunggu: string
}

const antrean: Baris[] = [
  {
    kode: 'TCM-2026-0001',
    nama: 'Aisyah Nur Fadilah',
    jenjang: 'TK A',
    nominal: site.biaya.pendaftaran,
    dikirim: '29 Okt 2026, 09.41',
    status: 'menunggu-verifikasi',
    menunggu: '2 jam',
  },
  {
    kode: 'TCM-2026-0002',
    nama: 'Yusuf Arkan Pratama',
    jenjang: 'TK B',
    nominal: site.biaya.pendaftaran,
    dikirim: '29 Okt 2026, 08.15',
    status: 'disetujui',
    menunggu: 'Selesai',
  },
]

export default function AdminAntreanPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="kicker text-sky-600">Verifikasi</p>
          <h1 className="mt-1 font-display text-[28px] font-extrabold leading-[1.15]">
            Antrean bukti transfer
          </h1>
          <p className="mt-1 max-w-[68ch] text-[16px] text-ink-soft">
            Periksa bukti transfer, lalu setujui atau tolak dengan alasan yang jelas.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-2 text-[14.5px] font-bold text-sky-700"
            aria-live="polite"
          >
            <Icon name="clock" className="h-4 w-4" />
            1 bukti menunggu
          </span>
          <button
            type="button"
            className="inline-flex min-h-[40px] items-center rounded-field border-[1.5px] border-teal-700 px-4 text-[14.5px] font-bold text-teal-700 transition-colors duration-150 hover:bg-teal-50"
          >
            Muat ulang
          </button>
        </div>
      </header>

      <section className="rounded-field border border-cream-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full border-collapse text-left">
            <caption className="sr-only">Antrean bukti transfer yang menunggu diperiksa</caption>
            <thead>
              <tr className="bg-cream-100">
                <th scope="col" className="kicker px-4 py-3 text-ink">
                  Kode
                </th>
                <th scope="col" className="kicker px-4 py-3 text-ink">
                  Calon siswa
                </th>
                <th scope="col" className="kicker hidden px-4 py-3 text-ink md:table-cell">
                  Jenjang
                </th>
                <th scope="col" className="kicker px-4 py-3 text-right text-ink">
                  Nominal
                </th>
                <th scope="col" className="kicker hidden px-4 py-3 text-ink lg:table-cell">
                  Dikirim
                </th>
                <th scope="col" className="kicker px-4 py-3 text-ink">
                  Status
                </th>
                <th scope="col" className="kicker hidden px-4 py-3 text-ink md:table-cell">
                  Menunggu
                </th>
              </tr>
            </thead>
            <tbody>
              {antrean.map((b) => (
                <tr key={b.kode} className="h-12 border-t border-cream-200">
                  <td className="px-4">
                    <Link
                      href={`/admin/verifikasi/${b.kode}`}
                      className="font-display text-[16px] font-bold text-teal-700 underline decoration-2 underline-offset-4 hover:text-teal-800"
                    >
                      {b.kode}
                    </Link>
                  </td>
                  <td className="px-4 text-[16px] font-bold text-ink">{b.nama}</td>
                  <td className="hidden px-4 text-[14.5px] text-ink md:table-cell">{b.jenjang}</td>
                  <td className="whitespace-nowrap px-4 text-right font-display text-[16px] font-bold text-ink">
                    {rupiah(b.nominal)}
                  </td>
                  <td className="hidden px-4 text-[14.5px] text-ink lg:table-cell">{b.dikirim}</td>
                  <td className="px-4">
                    <StatusBadge status={b.status} />
                  </td>
                  <td className="hidden px-4 text-[14.5px] text-ink-soft md:table-cell">{b.menunggu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="border-t border-cream-200 px-4 py-3 text-[13.5px] text-ink-soft">
          Diperbarui 12.03. Halaman contoh tanpa sambungan server.
        </p>
      </section>
    </div>
  )
}
