import type { StatusName } from '@/components/ui/StatusBadge'
import { site } from '@/content/site'

/**
 * Data contoh panel admin. Satu sumber untuk antrean dan halaman detail supaya
 * nama, nominal, dan status tidak pernah berbeda antar layar.
 * Tidak ada sambungan server. Angka menit adalah sisa waktu tunggu saat halaman dibuka.
 */
export type RiwayatBayar = {
  tanggal: string
  nominal: number
  status: StatusName
  catatan: string
}

export type Pendaftar = {
  kode: string
  nama: string
  jenjang: string
  orangTua: string
  whatsapp: string
  nominal: number
  dikirim: string
  dikirimISO: string
  /** Sisa waktu tunggu dalam menit. null berarti sudah diputuskan. */
  menit: number | null
  status: StatusName
  /** Tahap pendaftaran yang sedang berjalan, 1 sampai 7. */
  tahap: number
  riwayat: RiwayatBayar[]
}

const biaya = site.biaya.pendaftaran

export const pendaftar: Pendaftar[] = [
  {
    kode: 'TCM-2026-0001',
    nama: 'Aisyah Nur Fadilah',
    jenjang: 'TK A',
    orangTua: 'Rahmawati',
    whatsapp: '0812-0000-0001',
    nominal: biaya,
    dikirim: '29 Okt 2026, 09.41',
    dikirimISO: '2026-10-29T09:41',
    menit: 120,
    status: 'menunggu-verifikasi',
    tahap: 3,
    riwayat: [
      {
        tanggal: '29 Okt 2026, 09.41',
        nominal: biaya,
        status: 'menunggu-verifikasi',
        catatan: 'Bukti baru, menunggu pemeriksaan staf.',
      },
      {
        tanggal: '12 Okt 2026, 14.02',
        nominal: biaya,
        status: 'ditolak',
        catatan: 'Foto buram, nominal tidak terbaca.',
      },
    ],
  },
  {
    kode: 'TCM-2026-0002',
    nama: 'Yusuf Arkan Pratama',
    jenjang: 'TK B',
    orangTua: 'Hendra Pratama',
    whatsapp: '0812-0000-0002',
    nominal: biaya,
    dikirim: '29 Okt 2026, 08.15',
    dikirimISO: '2026-10-29T08:15',
    menit: null,
    status: 'disetujui',
    tahap: 4,
    riwayat: [
      {
        tanggal: '29 Okt 2026, 08.15',
        nominal: biaya,
        status: 'disetujui',
        catatan: 'Bukti sesuai nominal. Formulir dibuka.',
      },
    ],
  },
  {
    kode: 'TCM-2026-0003',
    nama: 'Khadijah Zahra',
    jenjang: 'TK A',
    orangTua: 'Siti Aminah',
    whatsapp: '0812-0000-0003',
    nominal: biaya,
    dikirim: '29 Okt 2026, 07.52',
    dikirimISO: '2026-10-29T07:52',
    menit: 180,
    status: 'menunggu-verifikasi',
    tahap: 3,
    riwayat: [
      {
        tanggal: '29 Okt 2026, 07.52',
        nominal: biaya,
        status: 'menunggu-verifikasi',
        catatan: 'Bukti baru, menunggu pemeriksaan staf.',
      },
    ],
  },
  {
    kode: 'TCM-2026-0004',
    nama: 'Muhammad Rizky Hakim',
    jenjang: 'TK B',
    orangTua: 'Nurhakim',
    whatsapp: '0812-0000-0004',
    nominal: biaya,
    dikirim: '28 Okt 2026, 16.20',
    dikirimISO: '2026-10-28T16:20',
    menit: null,
    status: 'ditolak',
    tahap: 2,
    riwayat: [
      {
        tanggal: '28 Okt 2026, 16.20',
        nominal: biaya,
        status: 'ditolak',
        catatan: 'Nominal transfer tidak terbaca.',
      },
    ],
  },
  {
    kode: 'TCM-2026-0005',
    nama: 'Fatimah Az-Zahra',
    jenjang: 'TK A',
    orangTua: 'Ahmad Fauzi',
    whatsapp: '0812-0000-0005',
    nominal: biaya,
    dikirim: '28 Okt 2026, 14.05',
    dikirimISO: '2026-10-28T14:05',
    menit: 1260,
    status: 'menunggu-verifikasi',
    tahap: 3,
    riwayat: [
      {
        tanggal: '28 Okt 2026, 14.05',
        nominal: biaya,
        status: 'menunggu-verifikasi',
        catatan: 'Bukti baru, menunggu pemeriksaan staf.',
      },
    ],
  },
]

export const cariPendaftar = (kode: string) => pendaftar.find((p) => p.kode === kode)
