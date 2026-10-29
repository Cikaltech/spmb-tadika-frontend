'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'

/** Kode pendaftaran sebagai pill. Tombol salin 44px, hanya bila diminta. design.md bab 6. */
export function KodePendaftaran({
  kode,
  salin = true,
  latar = 'krem',
}: {
  kode: string
  salin?: boolean
  latar?: 'krem' | 'putih'
}) {
  const [tersalin, setTersalin] = useState(false)

  const salinKode = async () => {
    try {
      await navigator.clipboard.writeText(kode)
      setTersalin(true)
      window.setTimeout(() => setTersalin(false), 2400)
    } catch {
      setTersalin(false)
    }
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full py-1 pl-4 ${
        salin ? 'pr-1' : 'pr-4'
      } ${latar === 'putih' ? 'border border-cream-200 bg-white' : 'bg-cream-100'}`}
    >
      <span className="font-display text-[14.5px] font-bold tracking-wide text-ink">{kode}</span>
      {salin && (
        <>
          <button
            type="button"
            onClick={salinKode}
            aria-label={tersalin ? 'Kode pendaftaran tersalin' : `Salin kode pendaftaran ${kode}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-teal-700 transition-colors duration-200 ease-warm hover:bg-cream-200"
          >
            <Icon name={tersalin ? 'check' : 'copy'} className="h-5 w-5" />
          </button>
          <span className="sr-only" aria-live="polite">
            {tersalin ? 'Kode pendaftaran tersalin' : ''}
          </span>
        </>
      )}
    </span>
  )
}
