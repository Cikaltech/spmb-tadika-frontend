import { Icon } from './Icon'

type Keadaan = 'selesai' | 'aktif' | 'belum' | 'galat'

/**
 * Stepper 12 bagian. design.md 8.2.
 * Selalu terlihat, grid 4/3/2 kolom, tanpa geser horizontal di 360px.
 */
export function Stepper({
  bagian,
  aktif,
  selesai = [],
  galat = [],
}: {
  bagian: string[]
  aktif: number
  selesai?: number[]
  galat?: number[]
}) {
  const keadaan = (i: number): Keadaan => {
    if (galat.includes(i)) return 'galat'
    if (selesai.includes(i)) return 'selesai'
    if (i === aktif) return 'aktif'
    return 'belum'
  }

  const sel: Record<Keadaan, string> = {
    selesai: 'border-transparent bg-teal-100 text-teal-700',
    aktif: 'border-2 border-gold-700 bg-gold-600 text-white',
    belum: 'border-[1.5px] border-cream-200 bg-white text-ink',
    galat: 'border-[1.5px] border-coral-600 bg-coral-100 text-coral-700',
  }

  const lingkaran: Record<Keadaan, string> = {
    selesai: 'bg-white text-teal-700',
    aktif: 'bg-white text-gold-700',
    belum: 'bg-cream-100 text-ink-soft',
    galat: 'bg-white text-coral-700',
  }

  const subteks: Record<Keadaan, string> = {
    selesai: 'text-teal-700',
    aktif: 'text-white',
    belum: 'text-ink-soft',
    galat: 'text-coral-700',
  }

  const label = (k: Keadaan) =>
    k === 'selesai'
      ? 'Selesai'
      : k === 'aktif'
        ? 'Sedang diisi'
        : k === 'galat'
          ? 'Perlu diperbaiki'
          : 'Belum diisi'

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-[19px] font-bold text-ink">
          Bagian {aktif + 1} dari {bagian.length}
        </p>
        <p className="text-[14.5px] text-ink-soft">{selesai.length} bagian selesai</p>
      </div>

      <div
        className="h-2 w-full overflow-hidden rounded-full bg-cream-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={bagian.length}
        aria-valuenow={selesai.length}
        aria-label="Kemajuan pengisian formulir"
      >
        <div
          className="h-full rounded-full bg-teal-700 transition-all duration-200 ease-warm"
          style={{ width: `${(selesai.length / bagian.length) * 100}%` }}
        />
      </div>

      <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {bagian.map((nama, i) => {
          const k = keadaan(i)
          return (
            <li key={nama} className={`step-cell ${sel[k]}`} aria-current={k === 'aktif' ? 'step' : undefined}>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[14.5px] font-extrabold ${lingkaran[k]}`}
                aria-hidden="true"
              >
                {k === 'selesai' ? (
                  <Icon name="check" className="h-4 w-4" />
                ) : k === 'galat' ? (
                  <Icon name="alert" className="h-4 w-4" />
                ) : (
                  i + 1
                )}
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block truncate text-[14.5px] font-bold">{nama}</span>
                <span className={`block text-[12.5px] font-normal ${subteks[k]}`}>{label(k)}</span>
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
