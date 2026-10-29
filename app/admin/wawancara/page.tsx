import type { Metadata } from 'next'
import { StatusBadge, type StatusName } from '@/components/ui/StatusBadge'

export const metadata: Metadata = { title: 'Jadwal wawancara' }

type Jadwal = {
  kode: string
  nama: string
  jenjang: string
  tanggal: string
  jam: string
  ruang: string
  status: StatusName
}

const jadwal: Jadwal[] = [
  {
    kode: 'TCM-2026-0001',
    nama: 'Aisyah Nur Fadilah',
    jenjang: 'TK A',
    tanggal: 'Senin, 3 Nov 2026',
    jam: '08.30',
    ruang: 'Ruang A, lantai 1',
    status: 'jadwal-wawancara',
  },
  {
    kode: 'TCM-2026-0002',
    nama: 'Yusuf Arkan Pratama',
    jenjang: 'TK B',
    tanggal: 'Senin, 3 Nov 2026',
    jam: '10.00',
    ruang: 'Ruang A, lantai 1',
    status: 'jadwal-wawancara',
  },
  {
    kode: 'TCM-2026-0003',
    nama: 'Khadijah Zahra',
    jenjang: 'TK A',
    tanggal: 'Selasa, 4 Nov 2026',
    jam: '09.00',
    ruang: 'Ruang B, lantai 2',
    status: 'wawancara-selesai',
  },
]

const hari = jadwal.reduce<Record<string, Jadwal[]>>((kumpulan, j) => {
  kumpulan[j.tanggal] = [...(kumpulan[j.tanggal] ?? []), j]
  return kumpulan
}, {})

/**
 * Jadwal wawancara, dikelompokkan per hari. Kolom jam memakai Baloo 2 dan angka
 * tabular supaya urutan hari terbaca sebagai jadwal, bukan sebagai daftar kartu.
 */
export default function WawancaraPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-display text-[28px] font-extrabold leading-[1.15]">
          Jadwal wawancara
        </h1>
        <p className="mt-1 max-w-[68ch] text-[16px] text-ink-soft">
          Tiga jadwal terdekat. Siapkan biodata ananda sebelum sesi dimulai.
        </p>
      </header>

      <div className="overflow-hidden rounded-field border border-cream-200 bg-white">
        {Object.entries(hari).map(([tanggal, daftar]) => (
          <section key={tanggal} aria-labelledby={`hari-${tanggal.replace(/[^a-z0-9]+/gi, '-')}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-y border-cream-200 bg-cream-100 px-4 py-2.5 first:border-t-0">
              <h2
                id={`hari-${tanggal.replace(/[^a-z0-9]+/gi, '-')}`}
                className="font-display text-[19px] font-bold text-ink"
              >
                {tanggal}
              </h2>
              <p className="text-[13.5px] tabular-nums text-ink-soft">{daftar.length} jadwal</p>
            </div>

            <ul className="divide-y divide-cream-200">
              {daftar.map((j) => (
                <li
                  key={j.kode}
                  className="grid grid-cols-[4.25rem_minmax(0,1fr)] items-start gap-x-4 gap-y-2 px-4 py-3 md:grid-cols-[5rem_minmax(0,1fr)_auto]"
                >
                  <p className="font-display text-[19px] font-bold leading-none tabular-nums text-ink">
                    {j.jam}
                  </p>

                  <div className="min-w-0">
                    <p className="text-[16px] font-bold leading-tight text-ink">{j.nama}</p>
                    <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px] text-ink-soft">
                      <span className="font-display font-bold tabular-nums">{j.kode}</span>
                      <span>{j.jenjang}</span>
                      <span>{j.ruang}</span>
                    </p>
                  </div>

                  <div className="col-span-2 md:col-span-1 md:justify-self-end">
                    <StatusBadge status={j.status} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="border-t border-cream-200 px-4 py-3 text-[13.5px] text-ink-soft">
          Daftar contoh tanpa sambungan server. Kabari orang tua lewat WhatsApp bila jadwal
          berubah.
        </p>
      </div>
    </div>
  )
}
