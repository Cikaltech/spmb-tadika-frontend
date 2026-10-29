import type { Metadata } from 'next'
import { Icon } from '@/components/ui/Icon'

export const metadata: Metadata = { title: 'Jadwal wawancara' }

type Jadwal = {
  kode: string
  nama: string
  jenjang: string
  tanggal: string
  jam: string
  ruang: string
  selesai: boolean
}

const jadwal: Jadwal[] = [
  {
    kode: 'TCM-2026-0001',
    nama: 'Aisyah Nur Fadilah',
    jenjang: 'TK A',
    tanggal: 'Senin, 3 Nov 2026',
    jam: '08.30',
    ruang: 'Ruang A, lantai 1',
    selesai: false,
  },
  {
    kode: 'TCM-2026-0002',
    nama: 'Yusuf Arkan Pratama',
    jenjang: 'TK B',
    tanggal: 'Senin, 3 Nov 2026',
    jam: '10.00',
    ruang: 'Ruang A, lantai 1',
    selesai: false,
  },
  {
    kode: 'TCM-2026-0003',
    nama: 'Khadijah Zahra',
    jenjang: 'TK A',
    tanggal: 'Selasa, 4 Nov 2026',
    jam: '09.00',
    ruang: 'Ruang B, lantai 2',
    selesai: true,
  },
]

export default function WawancaraPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="kicker text-plum-600">Wawancara</p>
        <h1 className="mt-1 font-display text-[28px] font-extrabold leading-[1.15]">
          Jadwal wawancara
        </h1>
        <p className="mt-1 max-w-[68ch] text-[16px] text-ink-soft">
          Tiga jadwal terdekat. Siapkan biodata ananda sebelum sesi dimulai.
        </p>
      </header>

      <section className="rounded-field border border-cream-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cream-200 px-4 py-3">
          <h2 className="font-display text-[19px] font-bold text-ink">Pekan ini</h2>
          <p className="text-[14.5px] text-ink-soft">3 jadwal</p>
        </div>

        <ul className="divide-y divide-cream-200">
          {jadwal.map((j) => (
            <li key={j.kode} className="flex flex-wrap items-start gap-3 px-4 py-3">
              <span aria-hidden="true" className="mt-1 h-10 w-1 shrink-0 rounded-full bg-plum-600" />
              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-bold text-ink">{j.nama}</p>
                <p className="text-[14.5px] text-ink-soft">
                  {j.kode} {j.jenjang}
                </p>
                <p className="mt-1 text-[14.5px] text-ink">
                  {j.tanggal}, pukul {j.jam}
                </p>
                <p className="text-[14.5px] text-ink-soft">{j.ruang}</p>
              </div>

              {j.selesai ? (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-olive-500/40 bg-olive-100 px-3 py-1 text-[14.5px] font-bold text-olive-700">
                  <Icon name="check" className="h-4 w-4" />
                  Wawancara selesai
                </span>
              ) : (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-plum-500/40 bg-plum-100 px-3 py-1 text-[14.5px] font-bold text-plum-700">
                  <Icon name="clock" className="h-4 w-4" />
                  Dijadwalkan
                </span>
              )}
            </li>
          ))}
        </ul>

        <p className="border-t border-cream-200 px-4 py-3 text-[13.5px] text-ink-soft">
          Daftar contoh tanpa sambungan server. Hubungi orang tua lewat WhatsApp untuk perubahan.
        </p>
      </section>
    </div>
  )
}
