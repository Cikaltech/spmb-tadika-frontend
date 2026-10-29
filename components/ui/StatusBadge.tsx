import { Icon, type IconName } from './Icon'

/** Status SPMB. Wajib warna + ikon + teks, jangan warna saja. design.md bab 7. */
type Status =
  | 'menunggu-pembayaran'
  | 'menunggu-verifikasi'
  | 'disetujui'
  | 'ditolak'
  | 'sedang-diperiksa'
  | 'selesai'
  | 'belum-diisi'
  | 'sudah-diisi'

const map: Record<Status, { label: string; icon: IconName; kelas: string }> = {
  'menunggu-pembayaran': {
    label: 'Menunggu pembayaran',
    icon: 'clock',
    kelas: 'bg-gold-100 text-gold-700 border-gold-300',
  },
  'menunggu-verifikasi': {
    label: 'Menunggu verifikasi',
    icon: 'clock',
    kelas: 'bg-sky-100 text-sky-700 border-sky-500/40',
  },
  'sedang-diperiksa': {
    label: 'Sedang diperiksa',
    icon: 'clock',
    kelas: 'bg-sky-100 text-sky-700 border-sky-500/40',
  },
  disetujui: {
    label: 'Disetujui',
    icon: 'check',
    kelas: 'bg-olive-100 text-olive-700 border-olive-500/40',
  },
  selesai: {
    label: 'Selesai',
    icon: 'shield',
    kelas: 'bg-teal-100 text-teal-700 border-teal-300',
  },
  ditolak: {
    label: 'Ditolak',
    icon: 'close',
    kelas: 'bg-coral-100 text-coral-700 border-coral-500/40',
  },
  'belum-diisi': {
    label: 'Belum diisi',
    icon: 'alert',
    kelas: 'bg-cream-100 text-ink-soft border-cream-200',
  },
  'sudah-diisi': {
    label: 'Sudah diisi',
    icon: 'check',
    kelas: 'bg-olive-100 text-olive-700 border-olive-500/40',
  },
}

export function StatusBadge({ status, className = '' }: { status: Status; className?: string }) {
  const s = map[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[14.5px] font-bold ${s.kelas} ${className}`}
    >
      <Icon name={s.icon} className="h-4 w-4" />
      {s.label}
    </span>
  )
}

export type StatusName = Status
