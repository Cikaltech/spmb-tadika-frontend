'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { Textarea } from '@/components/ui/Field'

const MIN = 10

/** Panel keputusan. Tolak wajib alasan dulu, waran coral-700 bukan latar penuh. design.md bab 11. */
export function PanelKeputusan({ kode }: { kode: string }) {
  const [alasan, setAlasan] = useState('')
  const panjang = alasan.trim().length
  const cukup = panjang >= MIN
  const kurang = panjang > 0 && !cukup

  return (
    <div className="rounded-field border border-cream-200 bg-white p-4 lg:sticky lg:top-6">
      <h2 className="font-display text-[19px] font-bold text-ink">Keputusan verifikasi</h2>

      <div className="mt-4 rounded-field border border-cream-200 bg-cream-50 p-3">
        <p className="text-[14.5px] font-bold text-ink">Setujui pembayaran</p>
        <p className="mt-1 text-[13.5px] text-ink-soft">
          Formulir ananda terbuka setelah bukti disetujui.
        </p>
        <button
          type="button"
          className="mt-3 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-field bg-gold-600 px-4 text-[14.5px] font-bold text-white transition-colors duration-150 hover:bg-gold-700"
        >
          <Icon name="check" className="h-4 w-4" />
          Setujui bukti
        </button>
      </div>

      <hr className="my-4 border-cream-200" />

      <div>
        <p className="text-[14.5px] font-bold text-ink">Tolak bukti</p>
        <p className="mt-1 text-[13.5px] text-ink-soft">
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
          aria-describedby="alasan-hitung"
          placeholder="Contoh: nominal transfer kurang Rp 50.000"
          className={`field-input min-h-[112px] text-[16px] ${
            kurang ? 'border-2 border-coral-700' : 'border-ink-soft'
          }`}
        />

        <p id="alasan-hitung" aria-live="polite" className="mt-2 text-[13.5px] text-ink-soft">
          {panjang} dari {MIN} karakter minimum
        </p>

        {kurang && (
          <p role="alert" className="mt-1 flex items-start gap-2 text-[13.5px] font-bold text-coral-700">
            <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
            Alasan minimal 10 karakter.
          </p>
        )}

        <button
          type="button"
          disabled={!cukup}
          className={`mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-field border-2 px-4 text-[14.5px] font-bold transition-colors duration-150 ${
            cukup
              ? 'border-coral-700 bg-white text-coral-700 hover:bg-coral-100'
              : 'border-ink-soft/40 bg-white text-ink-soft'
          }`}
        >
          <Icon name="close" className="h-4 w-4" />
          Tolak bukti
        </button>
        <p className="mt-2 text-[13.5px] text-ink-soft">
          Tombol Tolak aktif setelah alasan terisi.
        </p>
      </div>

      <p className="mt-4 border-t border-cream-200 pt-3 text-[13.5px] text-ink-soft">
        Pratinjau tampilan untuk {kode}. Keputusan belum tersimpan tanpa server.
      </p>
    </div>
  )
}
