'use client'

import { useRef, useState } from 'react'
import { Icon } from '@/components/ui/Icon'

const BATAS_MB = 3
const FORMAT = 'JPG, PNG, atau PDF'

type Berkas = { nama: string; ukuran: string }

function ukuranBerkas(bita: number) {
  if (bita >= 1024 * 1024) return `${(bita / 1024 / 1024).toFixed(1)} MB`
  return `${Math.max(1, Math.round(bita / 1024))} KB`
}

/**
 * Kotak unggah pengganti input bawaan browser. Input asli tetap ada, hanya tak terlihat.
 * design.md bab 6 dan 10 nomor 20.
 */
export function KotakUnggah({ id, galat }: { id: string; galat?: string }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [berkas, setBerkas] = useState<Berkas | null>(null)
  const [pesan, setPesan] = useState<string | null>(galat ?? null)

  const saatPilih = (e: React.ChangeEvent<HTMLInputElement>) => {
    const berkasBaru = e.target.files?.[0]
    if (!berkasBaru) return
    if (berkasBaru.size > BATAS_MB * 1024 * 1024) {
      setBerkas(null)
      setPesan(`Berkas lebih dari ${BATAS_MB} MB. Perkecil berkas lalu unggah lagi.`)
      return
    }
    setPesan(null)
    setBerkas({ nama: berkasBaru.name, ukuran: ukuranBerkas(berkasBaru.size) })
  }

  const hapus = () => {
    setBerkas(null)
    setPesan(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  const garis = pesan ? 'border-coral-600' : 'border-ink-soft'

  return (
    <div>
      <div className={`rounded-field border-2 border-dashed bg-cream-50 p-5 ${garis}`}>
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept="image/jpeg,image/png,application/pdf"
          onChange={saatPilih}
          className="sr-only"
          aria-invalid={pesan ? true : undefined}
          aria-describedby={pesan ? `${id}-galat` : undefined}
        />

        {berkas ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <Icon name="file" className="h-6 w-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[16px] font-bold text-ink">{berkas.nama}</span>
              <span className="block text-[14.5px] text-ink-soft">
                Ukuran {berkas.ukuran}. Format {FORMAT}.
              </span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-olive-100 px-3 py-1 text-[14.5px] font-bold text-olive-700">
              <Icon name="check" className="h-4 w-4" />
              Terpilih
            </span>
            <span className="flex items-center gap-2">
              <label
                htmlFor={id}
                className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-full border-2 border-teal-700 px-5 text-[16px] font-bold text-teal-700 transition-colors duration-200 ease-warm hover:bg-white focus-within:ring-4 focus-within:ring-gold-300 focus-within:ring-offset-2"
              >
                Ganti
              </label>
              <button
                type="button"
                onClick={hapus}
                className="inline-flex min-h-[44px] items-center px-2 text-[16px] font-bold text-coral-700 underline decoration-2 underline-offset-4"
              >
                Hapus
              </button>
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <Icon name="upload" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[17px] font-bold text-ink">Belum ada berkas dipilih</p>
                <p id={`${id}-syarat`} className="text-[14.5px] text-ink-soft">
                  Format {FORMAT}. Ukuran maksimal {BATAS_MB} MB.
                </p>
              </div>
            </div>
            <label
              htmlFor={id}
              className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-full border-2 border-teal-700 bg-white px-5 text-[16px] font-bold text-teal-700 transition-colors duration-200 ease-warm hover:bg-teal-50 focus-within:ring-4 focus-within:ring-gold-300 focus-within:ring-offset-2"
            >
              Pilih berkas
            </label>
          </div>
        )}
      </div>

      {pesan && (
        <p id={`${id}-galat`} className="field-error" role="alert">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          {pesan}
        </p>
      )}
    </div>
  )
}
