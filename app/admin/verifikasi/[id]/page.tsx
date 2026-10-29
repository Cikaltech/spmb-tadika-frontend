import type { Metadata } from 'next'
import Link from 'next/link'
import { PanelKeputusan } from '@/components/admin/PanelKeputusan'
import { Icon } from '@/components/ui/Icon'
import { StatusBadge, type StatusName } from '@/components/ui/StatusBadge'
import { rupiah, site } from '@/content/site'

export const metadata: Metadata = { title: 'Detail verifikasi' }

export function generateStaticParams() {
  return [{ id: 'TCM-2026-0001' }]
}

type Biodata = { label: string; nilai: string; uang?: boolean }

const biodata: Biodata[] = [
  { label: 'Nama calon siswa', nilai: 'Aisyah Nur Fadilah' },
  { label: 'Jenjang', nilai: 'TK A' },
  { label: 'Nama orang tua', nilai: 'Rahmawati' },
  { label: 'Nomor WhatsApp', nilai: '0812-0000-0001' },
  { label: 'Nominal dikirim', nilai: rupiah(site.biaya.pendaftaran), uang: true },
]

type Riwayat = { tanggal: string; nominal: number; status: StatusName; catatan: string }

const riwayat: Riwayat[] = [
  {
    tanggal: '29 Okt 2026, 09.41',
    nominal: site.biaya.pendaftaran,
    status: 'menunggu-verifikasi',
    catatan: 'Bukti baru, menunggu pemeriksaan staf.',
  },
  {
    tanggal: '12 Okt 2026, 14.02',
    nominal: site.biaya.pendaftaran,
    status: 'ditolak',
    catatan: 'Foto buram, nominal tidak terbaca.',
  },
]

export default async function VerifikasiDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin"
          className="inline-flex min-h-[40px] items-center gap-2 text-[14.5px] font-bold text-teal-700 underline decoration-2 underline-offset-4 hover:text-teal-800"
        >
          <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
          Kembali ke antrean
        </Link>
      </div>

      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="kicker text-sky-600">Verifikasi</p>
          <h1 className="mt-1 font-display text-[28px] font-extrabold leading-[1.15]">
            Detail bukti transfer
          </h1>
          <p className="mt-1 text-[16px] text-ink-soft">Kode pendaftaran {id}</p>
        </div>
        <StatusBadge status="menunggu-verifikasi" />
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div className="space-y-6">
          <section className="rounded-field border border-cream-200 bg-white p-4">
            <h2 className="font-display text-[19px] font-bold text-ink">Pratinjau bukti transfer</h2>
            <div className="mt-3 flex min-h-[220px] flex-col justify-center gap-2 rounded-field border-2 border-dashed border-ink-soft bg-cream-50 px-4 py-6">
              <Icon name="file" className="h-6 w-6 text-teal-700" />
              <p className="text-[16px] font-bold text-ink">Bukti transfer tidak ditampilkan</p>
              <p className="text-[14.5px] text-ink-soft">
                Nama berkas bukti-transfer-{id}.jpg, ukuran 412 KB.
              </p>
              <p className="text-[14.5px] text-ink-soft">
                Halaman contoh tanpa gambar. Periksa berkas asli di aplikasi staf.
              </p>
            </div>
          </section>

          <section className="rounded-field border border-cream-200 bg-white p-4">
            <h2 className="font-display text-[19px] font-bold text-ink">Biodata ringkas</h2>
            <dl className="mt-2 divide-y divide-cream-200">
              {biodata.map((b) => (
                <div key={b.label} className="flex flex-wrap items-baseline justify-between gap-2 py-2.5">
                  <dt className="text-[14.5px] text-ink-soft">{b.label}</dt>
                  <dd
                    className={`text-right text-[16px] font-bold text-ink ${
                      b.uang ? 'font-display' : ''
                    }`}
                  >
                    {b.nilai}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-field border border-cream-200 bg-white">
            <h2 className="px-4 pt-4 font-display text-[19px] font-bold text-ink">
              Riwayat pembayaran
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-full border-collapse text-left">
                <caption className="sr-only">Riwayat pembayaran pendaftaran {id}</caption>
                <thead>
                  <tr className="bg-cream-100">
                    <th scope="col" className="kicker px-4 py-3 text-ink">
                      Tanggal
                    </th>
                    <th scope="col" className="kicker px-4 py-3 text-right text-ink">
                      Nominal
                    </th>
                    <th scope="col" className="kicker px-4 py-3 text-ink">
                      Status
                    </th>
                    <th scope="col" className="kicker hidden px-4 py-3 text-ink md:table-cell">
                      Catatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {riwayat.map((r) => (
                    <tr key={r.tanggal} className="h-12 border-t border-cream-200">
                      <td className="px-4 text-[14.5px] text-ink">{r.tanggal}</td>
                      <td className="whitespace-nowrap px-4 text-right font-display text-[16px] font-bold text-ink">
                        {rupiah(r.nominal)}
                      </td>
                      <td className="px-4">
                        <StatusBadge status={r.status} />
                      </td>
                      <td className="hidden px-4 text-[14.5px] text-ink-soft md:table-cell">
                        {r.catatan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-cream-200 px-4 py-3 text-[13.5px] text-ink-soft">
              Dua unggahan terakhir. Riwayat lama tetap tersimpan.
            </p>
          </section>
        </div>

        <PanelKeputusan kode={id} />
      </div>
    </div>
  )
}
