import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PanelKeputusan } from '@/components/admin/PanelKeputusan'
import { TahapRail } from '@/components/admin/TahapRail'
import { Icon } from '@/components/ui/Icon'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { cariPendaftar, pendaftar } from '@/content/admin'
import { rupiah } from '@/content/site'

export const metadata: Metadata = { title: 'Detail verifikasi' }

export function generateStaticParams() {
  return pendaftar.map((p) => ({ id: p.kode }))
}

/**
 * Detail satu bukti transfer. Rel tujuh tahap menjadi penanda posisi, dan panel
 * keputusan menempel di kanan. DESIGN.md bab 11.
 */
export default async function VerifikasiDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const p = cariPendaftar(id)
  if (!p) notFound()

  const biodata = [
    { label: 'Nama calon siswa', nilai: p.nama },
    { label: 'Jenjang', nilai: p.jenjang },
    { label: 'Nama orang tua', nilai: p.orangTua },
    { label: 'Nomor WhatsApp', nilai: p.whatsapp },
    { label: 'Nominal dikirim', nilai: rupiah(p.nominal), uang: true },
  ]

  return (
    <div className="space-y-5">
      <nav aria-label="Remah">
        <ol className="flex flex-wrap items-center gap-2 text-[14.5px] font-bold">
          <li>
            <Link
              href="/admin"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-field text-teal-700 underline decoration-2 underline-offset-4 hover:text-teal-800"
            >
              <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
              Antrean verifikasi
            </Link>
          </li>
          <li aria-hidden="true" className="text-cream-200">/</li>
          <li aria-current="page" className="font-display tabular-nums text-ink-soft">
            {p.kode}
          </li>
        </ol>
      </nav>

      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="font-display text-[28px] font-extrabold leading-[1.15]">{p.nama}</h1>
          <p className="mt-1 text-[14.5px] text-ink-soft">
            Jenjang {p.jenjang}, kode {p.kode}
          </p>
        </div>
        <StatusBadge status={p.status} />
      </header>

      <TahapRail sekarang={p.tahap} />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div className="space-y-5">
          <section className="rounded-field border border-cream-200 bg-white p-4">
            <h2 className="font-display text-[19px] font-bold text-ink">Bukti transfer</h2>
            <div className="mt-3 rounded-field bg-cream-50 px-4 py-4">
              <div className="flex items-start gap-3">
                <Icon name="file" className="mt-0.5 h-6 w-6 shrink-0 text-teal-700" />
                <div className="min-w-0">
                  <p className="text-[16px] font-bold text-ink">Pratinjau tidak tersedia</p>
                  <p className="mt-1 break-all text-[14.5px] tabular-nums text-ink-soft">
                    bukti-transfer-{p.kode}.jpg, 412 KB
                  </p>
                  <p className="mt-1 text-[14.5px] text-ink-soft">
                    Halaman contoh tanpa gambar. Periksa berkas asli di aplikasi staf.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-field border border-cream-200 bg-white p-4">
            <h2 className="font-display text-[19px] font-bold text-ink">Biodata ringkas</h2>
            <dl className="mt-2 divide-y divide-cream-200">
              {biodata.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-2.5"
                >
                  <dt className="text-[13.5px] text-ink-soft">{b.label}</dt>
                  <dd
                    className={"text-right text-[16px] font-bold text-ink " + (b.uang ? 'font-display tabular-nums' : '')}
                  >
                    {b.nilai}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-field border border-cream-200 bg-white p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-[19px] font-bold text-ink">Riwayat pembayaran</h2>
              <p className="text-[13.5px] tabular-nums text-ink-soft">
                {p.riwayat.length} unggahan terakhir
              </p>
            </div>
            <ul className="mt-2 divide-y divide-cream-200">
              {p.riwayat.map((r) => (
                <li
                  key={r.tanggal}
                  className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 py-3"
                >
                  <div className="min-w-0">
                    <p className="text-[14.5px] font-bold tabular-nums text-ink">{r.tanggal}</p>
                    <p className="mt-0.5 text-[13.5px] text-ink-soft">{r.catatan}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <span className="font-display text-[16px] font-bold tabular-nums text-ink">
                      {rupiah(r.nominal)}
                    </span>
                    <StatusBadge status={r.status} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <PanelKeputusan kode={p.kode} />
      </div>
    </div>
  )
}
