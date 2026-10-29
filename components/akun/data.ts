/** Data contoh area akun. Tanpa fetch: build memakai output export. */
export const pendaftaran = {
  kode: 'TCM-2026-0003',
  anak: 'Aisyah Nur Ramadhani',
  jenjang: 'TK A',
  orangTua: 'Sari Dewi',
  status: 'menunggu-pembayaran' as const,
  /** Indeks tahap aktif di content/site.ts. Tahap 2: Pembayaran. */
  tahapAktif: 1,
  bagianTerisi: 11,
}
