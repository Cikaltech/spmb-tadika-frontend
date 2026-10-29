'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { Textarea } from '@/components/ui/Field'

function kelasTolak(cukup: boolean) {
  return cukup
    ? 'border-coral-700 bg-white text-coral-700 hover:bg-coral-100'
    : 'border-ink-soft/40 bg-white text-ink-soft'
}

function kelasAlasan(kurang: boolean) {
  return kurang ? 'border-2 border-coral-700' : 'border-ink-soft'
}

const MIN = 10
const tombolDasar =
  'mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-field px-4 text-[14.5px] font-bold transition-colors duration-150'
const tombolSetujui = tombolDasar + ' bg-gold-600 text-white hover:bg-gold-700'
const tombolTolak = tombolDasar + ' border-2'

/**
 * Panel keputusan. Tolak wajib alasan dulu karena alasan itu dibaca orang tua.
 * Aksi merusak memakai coral-700 sebagai garis dan teks, bukan latar penuh. DESIGN.md bab 11.
 * Tanpa kotak di dalam kotak: pemisahnya garis rambut, bukan kartu kedua.
 */
export function PanelKeputusan({ kode }: { kode: string }) {
  const [alasan, setAlasan] = useState('')
  const panjang = alasan.trim().length
  const cukup = panjang >= MIN
  const kurang = panjang > 0 && !cukup

  return (
    <aside
      aria-labelledby="judul-keputusan"
      className="rounded-field border border-cream-200 bg-white p-4 lg:sticky lg:top-6"
    >
      <h2 id="judul-keputusan" className="font-display text-[19px] font-bold text-ink">
        Keputusan verifikasi
      </h2>
      <p className="mt-1 text-[13.5px] text-ink-soft">Bukti {kode} belum diputuskan.</p>

      <div className="mt-4">
        <p className="text-[14.5px] font-bold text-ink">Setujui bukti transfer</p>
        <p className="mt-1 text-[13.5px] leading-[1.5] text-ink-soft">
          Formulir ananda terbuka setelah bukti disetujui.
        </p>
        <button type="button" className={tombolSetujui}>
          <Icon name="check" className="h-4 w-4" />
          Setujui bukti transfer
        </button>
        <p className="mt-2 text-[13.5px] text-ink-soft">
          Orang tua menerima kabar di portal begitu bukti disetujui.
        </p>
      </div>

      <hr className="my-4 border-cream-200" />

      <div>
        <p className="text-[14.5px] font-bold text-ink">Tolak bukti transfer</p>
        <p className="mt-1 text-[13.5px] leading-[1.5] text-ink-soft">
          Alasan tampil ke orang tua. Tulis satu kalimat yang jelas.
        </p>

        <label htmlFor="alasan" className="field-label mt-3">
          Alasan penolakan
        </label>
        <Textarea
          id="alasan"
          value={alasan}
          onChange={(e) => setAlasan(e.target.value)}
          minLength={MIN}
          required
          aria-invalid={kurang || undefined}
          aria-describedby="alasan-hitung alasan-ketentuan"
          placeholder="Contoh: nominal transfer kurang Rp 50.000"
          className={'field-input min-h-[104px] text-[16px] ' + kelasAlasan(kurang)}
        />

        <p
          id="alasan-hitung"
          aria-live="polite"
          className="mt-2 text-[13.5px] tabular-nums text-ink-soft"
        >
          {panjang} dari {MIN} karakter minimum
        </p>

        {kurang && (
          <p role="alert" className="field-error">
            <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
            Alasan minimal {MIN} karakter.
          </p>
        )}

        <button
          type="button"
          disabled={!cukup}
          aria-describedby="alasan-ketentuan"
          className={tombolTolak + ' ' + kelasTolak(cukup)}
        >
          <Icon name="close" className="h-4 w-4" />
          Tolak bukti transfer
        </button>
        <p id="alasan-ketentuan" className="mt-2 text-[13.5px] text-ink-soft">
          Tombol aktif setelah alasan terisi.
        </p>
      </div>

      <p className="mt-4 border-t border-cream-200 pt-3 text-[13.5px] text-ink-soft">
        Halaman contoh. Keputusan tidak tersimpan.
      </p>
    </aside>
  )
}
