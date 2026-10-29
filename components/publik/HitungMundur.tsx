'use client'

import { useEffect, useState } from 'react'

type Sisa = { bulan: number; hari: number; jam: number }

/** Tambah bulan dengan hari dirapikan agar 31 Jan plus 1 bulan tidak melompat ke Maret. */
function tambahBulan(d: Date, n: number) {
  const hasil = new Date(d)
  const tanggal = hasil.getDate()
  hasil.setDate(1)
  hasil.setMonth(hasil.getMonth() + n)
  const akhirBulan = new Date(hasil.getFullYear(), hasil.getMonth() + 1, 0).getDate()
  hasil.setDate(Math.min(tanggal, akhirBulan))
  return hasil
}

function hitungSisa(tutup: Date, sekarang: Date): Sisa | null {
  if (tutup.getTime() <= sekarang.getTime()) return null

  let bulan = 0
  let kursor = new Date(sekarang)
  while (true) {
    const maju = tambahBulan(kursor, 1)
    if (maju.getTime() <= tutup.getTime()) {
      kursor = maju
      bulan += 1
    } else {
      break
    }
  }

  const sisaMs = tutup.getTime() - kursor.getTime()
  return {
    bulan,
    hari: Math.floor(sisaMs / 86_400_000),
    jam: Math.floor((sisaMs % 86_400_000) / 3_600_000),
  }
}

/**
 * Hitung mundur pendaftaran ditutup, dalam bulan, hari, jam.
 * Dihitung di klien supaya angka tidak ikut membeku saat build statis.
 */
export function HitungMundur({ tutup }: { tutup: string }) {
  const [sisa, setSisa] = useState<Sisa | null | undefined>(undefined)

  useEffect(() => {
    const target = new Date(tutup)
    const perbarui = () => setSisa(hitungSisa(target, new Date()))
    perbarui()
    const timer = setInterval(perbarui, 60_000)
    return () => clearInterval(timer)
  }, [tutup])

  if (sisa === undefined) {
    // Sebelum klien siap: kerangka tenang, bukan teks kosong.
    return <p className="mt-3 text-[16px] leading-[1.5] text-ink-soft">Menghitung sisa waktu.</p>
  }

  if (sisa === null) {
    return (
      <p className="mt-3 text-[16px] font-bold leading-[1.5] text-coral-700">
        Pendaftaran sudah ditutup. Hubungi admin untuk gelombang berikutnya.
      </p>
    )
  }

  const angka = [
    { nilai: sisa.bulan, satuan: 'Bulan', warna: 'text-teal-700' },
    { nilai: sisa.hari, satuan: 'Hari', warna: 'text-coral-600' },
    { nilai: sisa.jam, satuan: 'Jam', warna: 'text-sky-600' },
  ]

  return (
    <div className="mt-3 flex items-end gap-5" role="timer" aria-live="off">
      {angka.map((a) => (
        <div key={a.satuan}>
          <p className={`font-display text-[34px] font-extrabold leading-none ${a.warna}`}>
            {a.nilai}
          </p>
          <p className="mt-1 text-[12.5px] font-extrabold uppercase tracking-[0.08em] text-ink-soft">
            {a.satuan}
          </p>
        </div>
      ))}
    </div>
  )
}
