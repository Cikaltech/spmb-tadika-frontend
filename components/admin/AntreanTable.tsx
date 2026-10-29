'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { rupiah } from '@/content/site'
import type { Pendaftar } from '@/content/admin'

type Bukti = Pendaftar

type Kolom = 'nama' | 'nominal' | 'dikirim' | 'menunggu'
type Saring = 'semua' | 'menunggu' | 'disetujui' | 'ditolak'

const saringan: { id: Saring; label: string }[] = [
  { id: 'semua', label: 'Semua' },
  { id: 'menunggu', label: 'Menunggu' },
  { id: 'disetujui', label: 'Disetujui' },
  { id: 'ditolak', label: 'Ditolak' },
]

const cocokSaring = (b: Bukti, s: Saring) =>
  s === 'semua'
    ? true
    : s === 'menunggu'
      ? b.status === 'menunggu-verifikasi'
      : s === 'disetujui'
        ? b.status === 'disetujui'
        : b.status === 'ditolak'

const labelTunggu = (menit: number | null) => {
  if (menit === null) return 'Selesai'
  if (menit < 60) return `${menit} menit`
  const jam = Math.round(menit / 60)
  return `${jam} jam`
}

const nilai = (b: Bukti, k: Kolom) =>
  k === 'nama' ? b.nama : k === 'nominal' ? b.nominal : k === 'dikirim' ? b.dikirimISO : b.menit ?? -1

/**
 * Tabel antrean verifikasi. Cari, saring, dan urut bekerja di peramban karena
 * halaman ini static export tanpa server. Baris 48px, nominal angka tabular.
 */
export function AntreanTable({ data }: { data: Bukti[] }) {
  const [cari, setCari] = useState('')
  const [saring, setSaring] = useState<Saring>('semua')
  const [urut, setUrut] = useState<{ kolom: Kolom; arah: 'naik' | 'turun' }>({
    kolom: 'menunggu',
    arah: 'turun',
  })

  const hasil = useMemo(() => {
    const kueri = cari.trim().toLowerCase()
    const saringBaris = data
      .filter((b) => cocokSaring(b, saring))
      .filter(
        (b) =>
          kueri === '' ||
          b.nama.toLowerCase().includes(kueri) ||
          b.kode.toLowerCase().includes(kueri),
      )

    const arah = urut.arah === 'naik' ? 1 : -1
    return [...saringBaris].sort((a, b) => {
      const ka = nilai(a, urut.kolom)
      const kb = nilai(b, urut.kolom)
      if (ka === kb) return a.kode.localeCompare(b.kode)
      return ka > kb ? arah : -arah
    })
  }, [data, cari, saring, urut])

  const putarUrut = (kolom: Kolom) =>
    setUrut((k) =>
      k.kolom === kolom
        ? { kolom, arah: k.arah === 'naik' ? 'turun' : 'naik' }
        : { kolom, arah: kolom === 'menunggu' || kolom === 'dikirim' ? 'turun' : 'naik' },
    )

  const ariaSort = (kolom: Kolom) =>
    urut.kolom === kolom ? (urut.arah === 'naik' ? 'ascending' : 'descending') : 'none'

  const JudulKolom = ({
    kolom,
    label,
    rata = 'left',
  }: {
    kolom: Kolom
    label: string
    rata?: 'left' | 'right'
  }) => (
    <button
      type="button"
      onClick={() => putarUrut(kolom)}
      className={`kicker flex min-h-[40px] w-full items-center gap-1.5 text-ink hover:text-teal-700 ${
        rata === 'right' ? 'justify-end' : 'justify-start'
      }`}
    >
      {label}
      {urut.kolom === kolom && (
        <Icon
          name="chevron-down"
          className={`h-3.5 w-3.5 text-teal-700 ${urut.arah === 'naik' ? 'rotate-180' : ''}`}
        />
      )}
    </button>
  )

  return (
    <section className="rounded-field border border-cream-200 bg-white">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-cream-200 px-4 py-3">
        <div className="relative">
          <label htmlFor="cari-antrean" className="sr-only">
            Cari nama atau kode pendaftaran
          </label>
          <Icon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
          />
          <input
            id="cari-antrean"
            type="search"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Nama atau kode"
            className="h-10 w-[15rem] rounded-field border-[1.5px] border-ink-soft bg-white pl-9 pr-3 text-[14.5px] text-ink placeholder:text-ink-soft focus:border-teal-700 focus:outline-none"
          />
        </div>

        <div role="group" aria-label="Saring status bukti" className="flex flex-wrap gap-1">
          {saringan.map((s) => {
            const dipilih = saring === s.id
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={dipilih}
                onClick={() => setSaring(s.id)}
                className={`inline-flex min-h-[40px] items-center rounded-field border px-3 text-[14.5px] font-bold transition-colors duration-150 ${
                  dipilih
                    ? 'border-teal-700 bg-teal-50 text-teal-700'
                    : 'border-cream-200 bg-white text-ink hover:bg-cream-50'
                }`}
              >
                {s.label}
              </button>
            )
          })}
        </div>

        <p className="ml-auto text-[13.5px] font-bold tabular-nums text-ink-soft" aria-live="polite">
          {hasil.length} dari {data.length} bukti
        </p>
      </div>

      {hasil.length === 0 ? (
        <div className="px-4 py-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
            <Icon name="search" className="h-6 w-6 text-teal-700" />
          </div>
          <h2 className="mt-4 font-display text-[19px] font-bold text-ink">
            Tidak ada bukti yang cocok
          </h2>
          <p className="mt-1 max-w-[52ch] text-[16px] text-ink-soft">
            Cari dengan nama lain, atau kosongkan saringan. Antrean asli {data.length}{' '}
            bukti.
          </p>
          <button
            type="button"
            onClick={() => {
              setCari('')
              setSaring('semua')
            }}
            className="mt-4 inline-flex min-h-[40px] items-center rounded-field border-[1.5px] border-teal-700 px-4 text-[14.5px] font-bold text-teal-700 transition-colors duration-150 hover:bg-teal-50"
          >
            Tampilkan semua bukti
          </button>
        </div>
      ) : (
        <>
          <div className="hidden md:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Antrean bukti transfer. Klik nama untuk membuka detail.
              </caption>
              <thead>
                <tr className="bg-cream-100">
                  <th scope="col" aria-sort={ariaSort('nama')} className="px-4">
                    <JudulKolom kolom="nama" label="Calon siswa" />
                  </th>
                  <th scope="col" className="px-4">
                    <span className="kicker flex min-h-[40px] items-center text-ink">Jenjang</span>
                  </th>
                  <th scope="col" aria-sort={ariaSort('nominal')} className="px-4">
                    <JudulKolom kolom="nominal" label="Nominal" rata="right" />
                  </th>
                  <th scope="col" aria-sort={ariaSort('dikirim')} className="px-4">
                    <JudulKolom kolom="dikirim" label="Dikirim" />
                  </th>
                  <th scope="col" aria-sort={ariaSort('menunggu')} className="px-4">
                    <JudulKolom kolom="menunggu" label="Menunggu" />
                  </th>
                  <th scope="col" className="px-4">
                    <span className="kicker flex min-h-[40px] items-center text-ink">Status</span>
                  </th>
                  <th scope="col" className="w-10 pr-4">
                    <span className="sr-only">Buka detail</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {hasil.map((b) => (
                  <tr
                    key={b.kode}
                    className="border-t border-cream-200 transition-colors duration-150 hover:bg-cream-50 focus-within:bg-cream-50"
                  >
                    <td className="px-4 py-2">
                      <Link
                        href={`/admin/verifikasi/${b.kode}`}
                        className="group inline-flex max-w-[26ch] flex-col rounded-sm"
                      >
                        <span className="text-[16px] font-bold leading-tight text-ink group-hover:text-teal-700 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                          {b.nama}
                        </span>
                        <span className="mt-0.5 font-display text-[13.5px] font-bold leading-tight tabular-nums text-ink-soft">
                          {b.kode}
                        </span>
                      </Link>
                    </td>
                    <td className="px-4 text-[14.5px] text-ink">{b.jenjang}</td>
                    <td className="whitespace-nowrap px-4 text-right">
                      <span className="font-display text-[16px] font-bold tabular-nums text-ink">
                        {rupiah(b.nominal)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 text-[14.5px] tabular-nums text-ink">
                      {b.dikirim}
                    </td>
                    <td className="whitespace-nowrap px-4 text-[14.5px] tabular-nums text-ink-soft">
                      {labelTunggu(b.menit)}
                    </td>
                    <td className="px-4">
                      <StatusBadge status={b.status} />
                    </td>
                    <td className="pr-4 text-right">
                      <Icon name="arrow-right" className="ml-auto h-4 w-4 text-ink-soft" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="divide-y divide-cream-200 md:hidden">
            {hasil.map((b) => (
              <li key={b.kode}>
                <Link
                  href={`/admin/verifikasi/${b.kode}`}
                  className="block px-4 py-3 transition-colors duration-150 hover:bg-cream-50"
                >
                  <p className="text-[16px] font-bold leading-tight text-ink">{b.nama}</p>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14.5px] text-ink-soft">
                    <span className="font-display font-bold tabular-nums text-ink">{b.kode}</span>
                    <span>{b.jenjang}</span>
                    <span className="font-display font-bold tabular-nums text-ink">
                      {rupiah(b.nominal)}
                    </span>
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                    <p className="text-[13.5px] tabular-nums text-ink-soft">
                      Dikirim {b.dikirim}
                      {b.menit === null ? '' : `, menunggu ${labelTunggu(b.menit).toLowerCase()}`}
                    </p>
                    <StatusBadge status={b.status} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
