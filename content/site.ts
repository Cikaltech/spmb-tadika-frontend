/** Fakta terkunci. Sumber: AGENTS.md landing + PRD-SPMB.md. Jangan diubah tanpa izin pemilik. */
export const site = {
  sekolah: 'Tadika Cikal Mulia',
  tagline: 'Mulia Karena Taqwa',
  yayasan: 'Yayasan Abbas Cikal Mulia',
  alamat: 'Jl. Karet, Gg. Karet Jaya No. 31, Pontianak Barat',
  tahunAjaran: '2026/2027',
  semester: 'Ganjil',
  whatsapp: { label: '+62 851-6755-7464', number: '6285167557464' },
  biaya: {
    pendaftaran: 250000,
    pengembanganNormal: 8000000,
    pengembanganDiskon: 2800000,
    diskonPersen: 65,
    kuotaDiskon: 30,
    kuotaTerpakai: 1,
  },
  jenjang: ['TK A', 'TK B'],
  logoSrc: '/images/logo-cikal-mulia.jpeg',
}

export const rupiah = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n)

/** Enam tahap pendaftaran, satu keluarga jewel per tahap. design.md 2.3. */
export type Tahap = {
  id: string
  nomor: number
  nama: string
  ringkas: string
  warna: string
  tint: string
  teksTint: string
}

export const tahap: Tahap[] = [
  {
    id: 'bayar',
    nomor: 1,
    nama: 'Bayar',
    ringkas: 'Transfer biaya pendaftaran lalu unggah bukti.',
    warna: 'bg-gold-600',
    tint: 'bg-gold-100',
    teksTint: 'text-gold-700',
  },
  {
    id: 'verifikasi',
    nomor: 2,
    nama: 'Verifikasi',
    ringkas: 'Admin memeriksa bukti transfer, maksimal 1 kali 24 jam kerja.',
    warna: 'bg-sky-600',
    tint: 'bg-sky-100',
    teksTint: 'text-sky-700',
  },
  {
    id: 'formulir',
    nomor: 3,
    nama: 'Isi formulir',
    ringkas: 'Dua belas bagian data ananda dan keluarga.',
    warna: 'bg-teal-700',
    tint: 'bg-teal-100',
    teksTint: 'text-teal-700',
  },
  {
    id: 'wawancara',
    nomor: 4,
    nama: 'Wawancara',
    ringkas: 'Jadwal datang ke sekolah bersama ananda.',
    warna: 'bg-plum-600',
    tint: 'bg-plum-100',
    teksTint: 'text-plum-700',
  },
  {
    id: 'hasil',
    nomor: 5,
    nama: 'Hasil',
    ringkas: 'Keputusan penerimaan dan langkah berikutnya.',
    warna: 'bg-olive-600',
    tint: 'bg-olive-100',
    teksTint: 'text-olive-700',
  },
  {
    id: 'kendala',
    nomor: 6,
    nama: 'Kendala',
    ringkas: 'Ada yang perlu diperbaiki. Ikuti petunjuk admin.',
    warna: 'bg-coral-600',
    tint: 'bg-coral-100',
    teksTint: 'text-coral-700',
  },
]

/** Dua belas bagian formulir. Nama mengikuti stepper portal yang berjalan. */
export const bagianFormulir = [
  'Orang tua',
  'Anak',
  'Kesehatan',
  'Tinggal',
  'Mandiri',
  'Makan',
  'Kecerdasan',
  'Sosialisasi',
  'Ibadah',
  'Harapan',
  'Berkas',
  'Kirim',
]
