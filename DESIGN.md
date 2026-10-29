---
name: 'Tadika Cikal Mulia: Design System Portal SPMB'
version: 1.2
updated: 2026-10-29
scope: spmb.tadikacikalmulia.com, portal orang tua dan panel admin. Landing page tetap di DESIGN.md v4.2.
source_of_truth: DESIGN.md v4.2 + tailwind.config.js + PRD-SPMB.md. Berkas ini yang mengikat portal.
audience: orang tua usia 30 sampai 45, mayoritas membuka dari HP, banyak yang belum biasa aplikasi
tokens:
  # Warna diambil persis dari DESIGN.md v4.2 dan tailwind.config.js. Hex baru dilarang.
  teal-900: '#0B3B38'
  teal-800: '#124A46'
  teal-700: '#17605A'    # tautan, tombol sekunder, fokus
  teal-600: '#1E756D'
  teal-300: '#8FC4BC'
  teal-100: '#E3F0ED'
  teal-50: '#F0F7F5'
  gold-700: '#6B5212'
  gold-600: '#8F702B'    # identitas logo, tombol aksi utama
  gold-500: '#B08E3F'
  gold-300: '#D8BE84'    # ring fokus, garis lengkung cikal
  gold-100: '#F7EEDC'
  coral-700: '#A83E28'
  coral-600: '#C24A2E'
  coral-500: '#D9603F'
  coral-100: '#FBE7E0'
  plum-700: '#5C3350'
  plum-600: '#7A3E63'
  plum-500: '#96527C'
  plum-100: '#F5E7EF'
  olive-700: '#3F5A33'
  olive-600: '#55733F'
  olive-500: '#6E8B53'
  olive-100: '#EDF3E6'
  sky-700: '#1F5673'
  sky-600: '#2C6E8F'
  sky-500: '#3E88A8'
  sky-100: '#E9F3F7'
  sun-500: '#EFA92F'     # badge saja, teks di atasnya WAJIB ink
  sun-100: '#FDF1D6'
  cream-50: '#FEFBF6'    # latar halaman
  cream-100: '#FBF3E7'
  cream-200: '#F5E7D3'
  ink: '#231F1A'
  ink-soft: '#6C655C'
typography:
  display: 'Baloo 2 700 sampai 800 untuk judul, angka, dan label bagian'
  body: 'Nunito Sans 400 sampai 800 untuk paragraf, label, tombol, tabel'
  files: 'public/fonts/baloo2-latin.woff2 dan public/fonts/nunito-sans-latin.woff2, self-host, tanpa Google Fonts'
  fallback_display: 'Baloo 2, ui-rounded, Trebuchet MS, system-ui, sans-serif'
  fallback_body: 'Nunito Sans, Segoe UI, system-ui, sans-serif'
  loading: 'font-display: swap pada dua berkas, preload kedua woff2'
  body_size: '17px / 1.65'
  scale_body: [17, 19, 23, 28, 34, 44, 58]
  scale_label: [12.5, 13.5, 14.5, 16]
  h1: 'clamp(28px, 4vw, 44px) / 1.15 / 800'
  h2: 'clamp(23px, 3vw, 34px) / 1.2 / 800'
  h3: '19px sampai 23px / 1.25 / 700'
radius:
  panel: 32px
  card: 24px
  field: 12px
  pill: 999px
shadow:
  soft: '0 1px 2px rgba(35,31,26,.05), 0 16px 32px -20px rgba(35,31,26,.18)'
  lift: '0 2px 4px rgba(35,31,26,.06), 0 24px 48px -24px rgba(35,31,26,.24)'
spacing:
  scale: [4, 8, 12, 16, 24, 32, 48, 64]
  block: '48px mobile / 64px desktop'
  card: '24px mobile / 32px desktop'
  stack: '24px antar field, 8px label ke field, 8px field ke pesan'
breakpoints:
  md: 768px
  lg: 1024px
portal:
  container: '1200px maks, tepi 20px mobile / 40px desktop'
  column_form: '720px'
  column_dashboard: '960px'
  touch_min: '44px'
  touch_gap: '8px'
  button_height: '52px'
  input_height: '52px'
  font_min: '12.5px'
  body_min: '17px'
  contrast_body: '4.5:1'
  contrast_large: '3:1'
  contrast_ui: '3:1'
---

# Design System Portal SPMB v1: Jewel per Tahap

Portal SPMB dibaca orang tua yang sedang mengurus anaknya, sering sambil berdiri.
Layar kecil, tangan sibuk, kadang mata sudah lelah. Tugas visual portal: **jelas dulu**, warna kemudian.

Desain sekarang memilih satu permukaan krem untuk semua layar. Aksi memakai navy `#182432`.
Hasilnya datar: semua langkah tampak sama penting. Penggantinya terukur: **setiap tahap pendaftaran punya satu keluarga warna jewel**.
Warna dipakai sebagai penanda tahap, bukan hiasan. Teks tetap ink di atas permukaan terang.

## 1. Untuk siapa dokumen ini

| Pembaca | Yang dicari di sini |
|---|---|
| Penulis UI | Token, ukuran, dan aturan komponen di bab 6 sampai 10 |
| Peninjau | Ambang kontras di bab 4, daftar periksa mesin di bab 13 |
| Pemilik | Riwayat keputusan di bab 14, pertanyaan terbuka di bab 15 |

Aturan dasar untuk pembaca sasaran:

1. Body minimal 17px, tinggi baris 1.65, lebar baris maksimal 68 karakter.
2. Target sentuh minimal 44 kali 44 px, jarak antar target minimal 8px.
3. Tidak ada huruf di bawah 12.5px. Tangga ukuran landing sudah dipangkas untuk portal.
4. Satu aksi utama per layar. Tombol lain tampil sebagai sekunder.
5. Label selalu terlihat. Placeholder tidak pernah menggantikan label.
6. Status selalu tiga lapis: warna, ikon, dan teks.
7. Formulir satu kolom. Tidak ada dua kolom field di layar HP.
8. Kalimat pendek. Maksimal 20 kata per kalimat.

## 2. Warna: peran, bukan selera

Tiga lapis warna. Permukaan untuk latar. Aksi untuk tombol dan tautan. Jewel untuk blok dan tahap.

### 2.1 Lapis permukaan

| Peran | Token | Hex | Dipakai untuk | Teks di atasnya |
|---|---|---|---|---|
| Latar halaman | `cream-50` | `#FEFBF6` | semua halaman portal | ink 15.86 |
| Pita lembut | `cream-100` | `#FBF3E7` | header tabel, kartu biaya, strip info | ink 14.88 |
| Kartu dan panel | `white` | `#FFFFFF` | kartu status, formulir, tabel | ink 16.38 |
| Garis dan pita tipis | `cream-200` | `#F5E7D3` | pemisah 1px, track progress, kartu terkunci | ink 13.45 |
| Latar tenang | `teal-50` | `#F0F7F5` | strip bantuan dalam formulir | ink 15.07 |
| Band gelap | `teal-900` | `#0B3B38` | banner bantuan, footer | putih 12.38 |

### 2.2 Lapis aksi

| Peran | Token | Hex | Dipakai untuk | Kontras teks |
|---|---|---|---|---|
| Aksi utama | `gold-600` | `#8F702B` | tombol utama, satu per layar | putih 4.65 |
| Aksi utama saat hover | `gold-700` | `#6B5212` | hover dan tombol aktif | putih 7.39 |
| Tautan, aksi sekunder | `teal-700` | `#17605A` | tautan, garis tombol outline, ring fokus isi | di cream-50 7.12 |
| Aksi di band gelap | `gold-600` di atas `teal-900` | `#8F702B` | tombol di banner dan footer | putih 4.65 |
| Ikon pendamping | `teal-800` | `#124A46` | ikon di dalam tombol sekunder | di cream-50 10.03 |

`gold-600` adalah warna logo. Tombol utama memakai emas di semua halaman portal.
`teal-700` tidak dipakai sebagai tombol utama. Tugasnya tautan dan aksi pendukung.

### 2.3 Blok jewel: tujuh warna, tujuh tahap

| Tahap | Token | Hex | Blok untuk | Putih di atasnya | Tint muda | Teks di atas tint |
|---|---|---|---|---|---|---|
| 1 Buat akun | `gold-600` | `#8F702B` | nomor langkah, bilah kartu | 4.65 | `gold-100` | `gold-700` 6.41 |
| 2 Pembayaran | `sky-600` | `#2C6E8F` | nomor langkah, header bagian | 5.62 | `sky-100` | `sky-700` 7.06 |
| 3 Verifikasi | `teal-700` | `#17605A` | nomor langkah, progress bar | 7.35 | `teal-100` | `teal-700` 6.28 |
| 4 Isi formulir | `plum-600` | `#7A3E63` | nomor langkah, kartu bagian | 7.79 | `plum-100` | `plum-700` 8.59 |
| 5 Observasi | `olive-600` | `#55733F` | nomor langkah, kartu jadwal | 5.37 | `olive-100` | `olive-700` 6.82 |
| 6 Wawancara | `coral-600` | `#C24A2E` | nomor langkah, kartu jadwal | 4.87 | `coral-100` | `coral-700` 5.20 |
| 7 Pengumuman | `teal-900` | `#0B3B38` | bilah penutup, kartu hasil | 12.38 | `teal-100` | `teal-900` 10.58 |

Aturan pakai:

- Satu layar memakai maksimal 2 keluarga jewel pada blok besar. Badge status tidak dihitung.
- Urutan tahap tetap: emas, sky, teal, plum, olive, coral, teal-900. Jangan diacak per render.
- `teal-900` hanya dipakai tahap 7 dan band gelap. Jangan dipakai tahap lain.
- Warna blok dipakai untuk bidang besar. Panjang teks di atas blok jewel maksimal 2 baris.
- `sun-500` bukan anggota urutan tahap. Perannya badge sorotan saja.
- `sun-100` dipakai untuk latar badge sorotan, selalu dengan teks `ink` 14.61. Contohnya badge diskon 65%.

### 2.4 Putih di atas blok, angka hasil hitung

| Blok | Hex | Putih | Putusan |
|---|---|---|---|
| `teal-900` | `#0B3B38` | 12.38 | aman semua ukuran |
| `teal-800` | `#124A46` | 10.03 | aman |
| `teal-700` | `#17605A` | 7.35 | aman |
| `teal-600` | `#1E756D` | 5.50 | aman |
| `gold-700` | `#6B5212` | 7.39 | aman |
| `gold-600` | `#8F702B` | 4.65 | aman, batas bawah, jangan dikecilkan |
| `gold-500` | `#B08E3F` | 3.09 | teks 24px ke atas saja |
| `coral-700` | `#A83E28` | 6.20 | aman |
| `coral-600` | `#C24A2E` | 4.87 | aman |
| `plum-600` | `#7A3E63` | 7.79 | aman |
| `olive-600` | `#55733F` | 5.37 | aman |
| `sky-600` | `#2C6E8F` | 5.62 | aman |
| `sun-500` | `#EFA92F` | 2.02 | dilarang, pakai teks ink 8.10 |

### 2.5 Teks gelap di atas permukaan terang

| Teks | cream-50 | cream-100 | white | Putusan |
|---|---|---|---|---|
| `ink` `#231F1A` | 15.86 | 14.88 | 16.38 | aman semua ukuran |
| `ink-soft` `#6C655C` | 5.57 | 5.22 | 5.75 | aman, teks bantuan dan label kecil |
| `teal-700` `#17605A` | 7.12 | 6.68 | 7.35 | aman, tautan |
| `gold-700` `#6B5212` | 7.16 | 6.71 | 7.39 | aman, teks emas |
| `coral-700` `#A83E28` | 6.01 | 5.64 | 6.20 | aman, pesan error |
| `sky-600` `#2C6E8F` | 5.45 | 5.11 | 5.62 | aman |
| `olive-600` `#55733F` | 5.20 | 4.88 | 5.37 | aman |
| `plum-600` `#7A3E63` | 7.54 | 7.07 | 7.79 | aman |
| `gold-600` `#8F702B` | 4.50 | 4.22 | 4.65 | **dilarang sebagai teks di krem** |

### 2.6 Warna yang dilarang diberi teks putih

Putih di atas warna berikut tidak mencapai 4.5:1. Larangan ini berlaku di semua komponen.

| Warna | Hex | Putih | Pakai gantinya |
|---|---|---|---|
| `sun-500` | `#EFA92F` | 2.02 | teks `ink` 8.10 |
| `gold-300` | `#D8BE84` | 1.81 | teks `ink` 9.06 |
| `teal-300` | `#8FC4BC` | 1.95 | teks `teal-900` 6.36 |
| `gold-500` | `#B08E3F` | 3.09 | putih 24px ke atas, atau teks `ink` 5.29 |
| `coral-500` | `#D9603F` | 3.69 | `coral-700` + putih 6.20 |
| `olive-500` | `#6E8B53` | 3.83 | `olive-700` + putih 7.72 |
| `sky-500` | `#3E88A8` | 3.97 | `sky-700` + putih 7.96 |
| semua tint `*-100` | `#F7EEDC` dan kawan | 1.12 sampai 1.19 | teks `ink` atau `*-700` |
| `cream-100`, `cream-200` | `#FBF3E7`, `#F5E7D3` | 1.10, 1.22 | teks `ink` |

### 2.7 Dua jebakan yang wajib diingat

1. `gold-600` sebagai **teks** di atas `cream-100` hanya 4.22. Gagal.
   Untuk teks emas di latar krem pakai `gold-700` 6.71. Di `cream-50` pun `gold-600` cuma 4.50.
2. `sun-500` sebagai latar tombol dengan teks putih gagal keras, 2.02.
   `sun-500` hanya untuk badge dengan teks `ink`, misalnya badge diskon 65% (8.10).

## 3. Tipografi

### 3.1 Kenapa Baloo 2 dan Nunito Sans

Tampilan sekarang memakai sans-serif sistem sekitar 14px dengan abu `#4B4B43`.
Kontras teksnya justru lulus, 7.96. Masalahnya ukuran dan bentuk huruf yang rapat.

- **Nunito Sans** punya x-height besar dan tebal huruf yang ringan. Pada 17px ia terbaca lebih jelas daripada sans-serif sistem pada 14px.
- Bentuk hurufnya membulat dan terbuka. Huruf `a`, `g`, `l`, dan `1` mudah dibedakan pada layar kecil.
- Lebar huruf lega. Baris tidak terasa padat walau di layar 360px.
- **Baloo 2** dipakai untuk judul, angka rupiah, kode pendaftaran, dan nomor bagian. Bobot 800 tegas tanpa terlihat kaku.
- Dua huruf ini sudah dipakai landing page. Portal jadi senada tanpa menambah beban muat.

### 3.2 Pemuatan font

- Dua berkas `woff2` di `public/fonts/`, disajikan dari domain sendiri. Tanpa Google Fonts.
- `font-display: swap` pada dua berkas. Teks tidak pernah kosong menunggu font.
- `preload` kedua berkas, `crossorigin` disetel, dan `size-adjust` dipakai bila metrik fallback jauh berbeda.
- Fallback berurutan: `ui-rounded, Trebuchet MS, system-ui, sans-serif` untuk display, `Segoe UI, system-ui, sans-serif` untuk body.
- Tanpa FOUT yang menggeser layout. Tinggi baris ditetapkan pada elemen, bukan pada font.

### 3.3 Tangga ukuran

Dua tangga saja. Ukuran di luar tangga dilarang.

| Peran | Ukuran | Bobot | Font | Tinggi baris |
|---|---|---|---|---|
| H1 halaman | 28px mobile, 44px desktop | 800 | Baloo 2 | 1.15 |
| H2 bagian | 23px mobile, 34px desktop | 800 | Baloo 2 | 1.2 |
| H3 judul kartu | 19px mobile, 23px desktop | 700 | Baloo 2 | 1.25 |
| Angka besar (nominal, kode) | 23px, 34px, 44px | 700 atau 800 | Baloo 2 | 1.15 |
| Body | 17px | 400 | Nunito Sans | 1.65 |
| Body tegas | 17px | 700 | Nunito Sans | 1.65 |
| Body pengantar | 19px | 400 | Nunito Sans | 1.6 |
| Label field | 16px | 700 | Nunito Sans | 1.4 |
| Label bagian formulir | 14.5px | 800 | Nunito Sans | 1.4 |
| Teks bantuan | 14.5px | 400 | Nunito Sans | 1.5 |
| Kicker, teks tabel kepala | 12.5px, uppercase, letter-spacing 0.08em | 800 | Nunito Sans | 1.4 |
| Copyright | 13.5px | 400 | Nunito Sans | 1.5 |

Aturan tambahan:

- Huruf 11px dan 12px dari tangga landing tidak dipakai di portal. Batas bawah portal 12.5px.
- Teks 12.5px hanya untuk kicker dan label tabel, bukan untuk kalimat.
- Tidak ada huruf miring untuk pesan penting. Pakai bobot dan ikon.
- Tidak ada teks rata tengah lebih dari 2 baris. Kecuali empty state satu kalimat.
- Paragraf maksimal 68 karakter per baris. Di form, lebar kolom 720px sudah memenuhi.
- Judul tidak memakai emoji, tidak memakai huruf kapital semua, tidak memakai dua warna.

## 4. Kontras keras

Bagian ini mengikat. Angka diambil dari perhitungan WCAG 2.1, bukan perkiraan.

### 4.1 Ambang

| Jenis | Ambang minimum | Contoh di portal |
|---|---|---|
| Teks biasa di bawah 24px | 4.5:1 | body 17px, label 16px, tabel 16px |
| Teks besar 24px ke atas atau 19px tebal | 3:1 | nominal 34px, h1 44px |
| Batas kontrol dan ikon penanda | 3:1 | garis field, garis tombol outline, ikon status |
| Ring fokus | 3:1 terhadap latar di sekitarnya | semua elemen yang bisa difokus |

### 4.2 Pasangan resmi per komponen

Pakai pasangan ini. Jangan susun pasangan baru di luar tabel bab 2.

| Bagian | Keadaan | Pasangan | Rasio |
|---|---|---|---|
| Field | diam | teks `ink` di `white` | 16.38 |
| Field | garis diam | `ink-soft` di `white` | 5.75 |
| Field | fokus | garis 2px `teal-700` di `white` | 7.35 |
| Field | error | garis 2px `coral-700` di `white` | 6.20 |
| Field | bantuan | `ink-soft` di `white` | 5.75 |
| Field | placeholder | `ink-soft` di `white` | 5.75 |
| Tombol utama | diam | putih di `gold-600` | 4.65 |
| Tombol utama | hover | putih di `gold-700` | 7.39 |
| Tombol sekunder | diam | `teal-700` di `cream-50` | 7.12 |
| Tombol di band gelap | diam | putih di `teal-900` | 12.38 |
| Badge | diam | teks `*-700` di tint `*-100` | 5.20 sampai 8.59 |
| Tabel | kepala | `ink` di `cream-100` | 14.88 |
| Tabel | sel | `ink` di `white` | 16.38 |
| Footer | tautan | putih 87% di `teal-900` | 9.78 |
| Footer | copyright | putih 85% di `teal-900` | 9.40 |

### 4.3 Larangan teks abu di atas blok pekat

- Tidak ada teks `ink-soft` atau abu lain di atas blok `teal`, `gold`, `coral`, `plum`, `olive`, atau `sky`.
- Sebabnya terukur. Putih 85% di atas `gold-600` hanya 3.86. Putih 90% hanya 4.12. Dua-duanya gagal.
- Karena itu teks di atas blok pekat selalu **putih penuh**, tanpa opasitas, sampai kapan pun.
- Putih beropasitas hanya boleh di `teal-900`, dan minimal 85% (9.40). Contohnya copyright footer.
- Di atas blok pekat, teks pendukung memakai putih penuh dengan ukuran lebih kecil. Bukan abu.

### 4.4 Ring fokus dua lapis

Satu lapis tidak cukup. `gold-300` di atas `cream-50` hanya 1.75. `gold-300` di atas `teal-900` 6.85.

```css
:focus-visible {
  outline: 3px solid #D8BE84;
  outline-offset: 3px;
  box-shadow: 0 0 0 6px rgba(11, 59, 56, 0.60);
}
```

- Lapis dalam `gold-300` terlihat di latar gelap, 6.85.
- Lapis luar `rgba(11,59,56,.60)` terlihat di latar terang, 3.70.
- Dua lapis selalu memberi satu yang lulus 3:1, apa pun latarnya.
- `outline` tidak pernah dihapus. `:focus` tanpa `:focus-visible` dilarang sebagai pengganti.
- Elemen yang menerima fokus: tautan, tombol, input, select, textarea, ringkasan `<details>`.

### 4.5 Status tidak boleh warna saja

Tiga lapis wajib pada setiap status: warna, ikon, teks. Aturannya ada di bab 7.
Alasan: sebagian orang tua buta warna, terutama merah dan hijau. Warna saja tidak menyampaikan apa pun kepada mereka.
Larangan turunan:

- Ikon status selalu punya bentuk berbeda, bukan hanya beda warna.
- Teks status selalu kata penuh, bukan singkatan.
- Badge status minimal memuat 3 huruf. Tidak ada titik warna tanpa teks.
- Perubahan status diumumkan lewat `aria-live="polite"`.

## 5. Ukuran, jarak, dan bingkai

| Hal | Angka | Aturan |
|---|---|---|
| Container | 1200px, tepi 20px mobile, 40px desktop | sama dengan landing |
| Kolom formulir | 720px | satu kolom, tidak pernah dua kolom |
| Kolom dashboard | 960px | kartu maksimal 2 kolom di desktop |
| Jarak antar blok | 48px mobile, 64px desktop | tidak boleh lebih rapat dari 32px |
| Padding kartu | 24px mobile, 32px desktop | semua sisi |
| Jarak antar field | 24px | tetap, tidak boleh dikurangi |
| Label ke field | 8px | tidak boleh menempel |
| Field ke pesan | 8px | pesan error atau bantuan |
| Radius kartu | 24px | kartu, tabel, banner |
| Radius panel | 32px | hanya kartu status pendaftaran |
| Radius field | 12px | input, select, kotak unggah, kartu admin |
| Radius pill | 999px | tombol, badge, chip, progress bar |
| Tinggi tombol | 52px | semua tombol aksi portal. Panel admin 40px, lihat bab 11 |
| Tinggi input | 52px | minimal 44px bila ruang sempit |
| Target sentuh | 44 kali 44 px, jarak 8px | ikon tutup, tombol salin, stepper |
| Bayangan | `soft` untuk kartu, `lift` hanya saat hover kartu yang bisa diklik | tidak ada bayangan di tombol |
| Breakpoint | 768px dan 1024px | di bawah 768px satu kolom |

Aturan reflow: pada 320px lebar dan 200% zoom, tidak ada geser horizontal.
Tabel riwayat berubah menjadi daftar kartu di bawah 768px, bukan tabel yang bisa digeser.

## 6. Komponen portal

Satu tabel untuk semua komponen wajib. Angka di kolom kanan bisa diukur.

| Komponen | Aturan visual | Angka |
|---|---|---|
| **Navbar sekolah** | Putih, lengket di atas, garis bawah 1px `cream-200`. Kiri: logo 40px, nama sekolah 19px Baloo 800, baris kedua "Portal SPMB" 13.5px `ink-soft`. Kanan: pill `cream-100` berisi kode pendaftaran 14.5px 700, tombol Keluar outline. Mobile: tinggi 64px, kode pindah ke kartu status. | tinggi 72px, logo 40px, target 44px, ink di putih 16.38, ink-soft 5.75 |
| **Kartu status pendaftaran** | Kartu putih radius 32, `shadow-soft`, bilah kiri 8px warna tahap. Urutan isi: kode dan badge, nama anak 23px 800, kalimat langkah berikut 19px maksimal 2 baris, satu tombol utama, satu tombol sekunder. Mobile tetap satu kolom. | padding 24/32, bilah 8px, jarak 16, ink 16.38 |
| **Stepper 12 bagian** | Lihat bab 8. Ringkasnya: grid sel 64px, nomor dalam lingkaran 28px, label 14.5px 700, keadaan berwarna plus ikon. | sel 64px, nomor 28px, 2 kolom mobile |
| **Field input dan pesan error** | Label di atas field, selalu terlihat, 16px 700 `ink`. Input putih, garis 1.5px `ink-soft`, radius 12, teks 17px. Fokus: garis 2px `teal-700` plus ring. Error: garis 2px `coral-700`, ikon seru 20px, pesan 14.5px 700 `coral-700`. Placeholder hanya contoh isi. | tinggi 52px, batas 5.75, error 6.20, jarak 8 |
| **Unggah berkas** | Kotak garis putus 2px `ink-soft`, latar `cream-50`, radius 12, tinggi minimal 120px. Isi: ikon unggah 24px `teal-700`, judul 17px 700, keterangan format 14.5px `ink-soft`, tombol "Pilih berkas" 44px. Setelah terpilih: nama berkas 16px 700, ukuran berkas, ikon centang `olive-700`, tombol "Ganti" dan "Hapus". Teks bawaan browser tidak boleh muncul. | 120px, 44px, ink-soft 5.57, olive-700 di olive-100 6.82 |
| **Tabel riwayat pembayaran** | Kepala `cream-100` 12.5px 800 uppercase. Baris putih, garis 1px `cream-200`, tinggi 56px. Kolom: Tanggal, Nominal rata kanan Baloo 2 700 19px, Status berupa badge, Catatan. Mobile: jadi kartu bertumpuk dengan label 12.5px 800 di kiri. | baris 56px, nominal 19px, ink 16.38 |
| **Badge status** | Pill, latar tint keluarga tahap, teks `*-700` 14.5px 800, ikon 16px di kiri, radius 999. Tidak boleh warna saja. Tidak boleh memuat lebih dari 4 kata. | tinggi 28px, padding 6px 12px, kontras 5.20 sampai 8.59 |
| **Tombol utama** | Pill 52px, latar `gold-600`, teks putih 17px 800, ikon 20px di kiri, padding 0 24px. Hover `gold-700`, tekan turun 1px. Satu per layar. Tanpa bayangan. | 52px, putih 4.65, hover 7.39 |
| **Tombol sekunder** | Pill 52px, latar transparan, garis 2px `teal-700`, teks `teal-700` 17px 800. Di atas blok pekat: garis dan teks putih. Ikon 20px. | teal-700 di cream-50 7.12, putih di teal-700 7.35 |
| **Tautan** | `teal-700`, garis bawah selalu ada, `text-underline-offset: 3px`, bobot 700. Tidak ada tautan yang hanya berwarna. | 7.12 di cream-50 |
| **Kartu biaya** | Panel `cream-100` radius 24. Kicker 12.5px 800. Nominal Baloo 2 800 34px `ink`. Tiga baris label kiri dan nilai kanan 17px. Kode pendaftaran di pill putih dengan tombol Salin 44px. Badge diskon `sun-100` dengan teks `ink`. | nominal 34px, ink di cream-100 14.88, ink di sun-100 14.61 |
| **Kartu kuota diskon** | Kartu putih. Baris atas label 14.5px 700, angka "18 dari 30" Baloo 2 800 23px. Bar 8px radius 999, track `cream-200`, isi `teal-700`, `role="progressbar"` dengan `aria-valuenow`. Baris bawah "Diperbarui 12.03" 13.5px `ink-soft`. Bila kuota 0: bar dihapus, ganti kalimat "Kuota diskon sudah habis". | bar 8px, angka 23px, ink-soft 5.57 |
| **Empty state** | Kartu putih garis putus 1.5px `cream-200`, radius 24, teks rata kiri bukan tengah. Lingkaran 56px `teal-100` berisi ikon `teal-700`. Judul 23px 800, satu kalimat 17px, satu tombol utama. | 56px, teal-700 di teal-100 6.28 |
| **Banner bantuan WhatsApp** | Band `teal-900` radius 24. Ikon WhatsApp 24px putih. Judul 23px 800 putih, satu kalimat 17px putih. Tombol `gold-600` "Hubungi admin" (teks WhatsApp terisi kode pendaftaran). Muncul di 5 halaman inti, tidak bisa ditutup. | padding 24/32, putih 12.38, tombol 4.65 |
| **Footer** | `teal-900`, tiga kolom: sekolah, bantuan, legal. Judul kolom 14.5px 800 putih penuh. Tautan 16px putih 87%. Garis atas 1px `teal-800`. Copyright 13.5px putih 85%. Tanpa lengkung cikal. | putih 87% 9.78, 85% 9.40 |

Aturan lintas komponen:

1. Ikon dari satu set garis, tebal 1.5px sampai 2px, ukuran 20px atau 24px. Tidak dicampur tiga pustaka.
2. Ikon dekoratif `aria-hidden="true"`. Ikon yang berdiri sendiri tanpa teks wajib `aria-label`.
3. Tombol tanpa ikon hanya boleh untuk aksi pendek. Aksi utama selalu punya ikon.
4. Tidak ada tombol `disabled` untuk aksi utama. Ganti dengan tombol aktif plus kalimat alasan.
5. Semua tombol memakai satu dari dua gaya: utama atau sekunder. Tidak ada gaya ketiga.

## 7. Status SPMB

Tujuh keluarga warna, sebelas status. Satu tahap satu keluarga. Di dalam satu tahap, ikon dan kata yang membedakan.

| Status kode | Bahasa manusia | Keluarga | Pill | Teks pill | Ikon | Kontras |
|---|---|---|---|---|---|---|
| `awaiting_payment` | Menunggu pembayaran | Emas | `gold-100` | `gold-700` | uang kertas | 6.41 |
| `awaiting_approval` | Menunggu verifikasi | Sky | `sky-100` | `sky-700` | jam berputar | 7.06 |
| `payment_rejected` | Bukti ditolak, unggah ulang | Coral | `coral-100` | `coral-700` | lingkaran seru | 5.20 |
| `form_unlocked` | Siap diisi | Teal | `teal-100` | `teal-700` | pensil dan kertas | 6.28 |
| `form_submitted` | Formulir terkirim | Plum | `plum-100` | `plum-700` | kalender | 8.59 |
| `interview_scheduled` | Wawancara dijadwalkan | Plum | `plum-100` | `plum-700` | kalender bertanggal | 8.59 |
| `observed` | Wawancara selesai | Plum | `plum-100` | `plum-700` | tanda centang ganda | 8.59 |
| `accepted` | Diterima | Olive | `olive-100` | `olive-700` | medal atau bintang | 6.82 |
| `rejected` | Belum diterima | Coral | `coral-100` | `coral-700` | lingkaran seru | 5.20 |
| `enrolled` | Daftar ulang selesai | Olive | `olive-100` | `olive-700` | kotak centang | 6.82 |
| `withdrawn` | Dibatalkan | Coral | `coral-100` | `coral-700` | garis miring | 5.20 |

Aturan keras:

- Badge selalu memuat ikon 16px, kata penuh, dan warna keluarga tahap. Tiga lapis, tidak dua.
- Bilah kiri kartu status memakai warna 600 keluarga, bukan tint 100.
- Warna tidak pernah menjadi satu-satunya pembeda. Ikon wajib punya bentuk berbeda.
- Teks status memakai kata kerja yang jelas. Contoh "Unggah ulang bukti", bukan "Rejected".
- Status tidak dipakai sebagai label tombol. Tombol memakai aksi, bukan status.

## 8. Formulir 12 bagian dan stepper

Dua belas bagian tetap dari PRD: Orang tua, Anak, Kesehatan, Tinggal, Mandiri, Makan, Kecerdasan, Sosialisasi, Ibadah, Harapan, Berkas, Kirim.

### 8.1 Kepala lengket

- Tinggi 96px mobile, 80px desktop. Latar `white`, garis bawah 1px `cream-200`.
- Baris 1: "Bagian 4 dari 12, Tinggal" 17px 800 `ink`, di kanan "11 bagian terisi" 14.5px `ink-soft`.
- Baris 2: progress bar 8px radius 999, track `cream-200`, isi `teal-700`, transisi 320ms.
- `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="12"`, `aria-valuenow` diisi jumlah bagian terisi.
- Baris 3 bila perlu: "Jawaban tersimpan otomatis saat Anda pindah bagian" 14.5px `ink-soft`.
- Penanda simpan memakai `aria-live="polite"` dan teks "Tersimpan 12.03". Tanpa animasi berputar.

### 8.2 Stepper

| Keadaan | Latar | Garis | Teks | Ikon | Kontras |
|---|---|---|---|---|---|
| Selesai | `teal-100` | tanpa garis | `teal-700` | centang 16px | 6.28 |
| Sedang diisi | `gold-600` | 2px `gold-700` | putih, subteks putih | titik penuh | 4.65 |
| Belum diisi | `white` | 1.5px `cream-200` | `ink` | nomor | 16.38 |
| Terkunci | `cream-100` | 1.5px `cream-200` | `ink-soft` | gembok | 5.22 |

- Sel minimal 64px. Nomor dalam lingkaran 28px, 14.5px 800.
- Label bagian 14.5px 700, maksimal 2 baris. Subteks keadaan 12.5px.
- Grid 4 kolom desktop, 3 kolom tablet, 2 kolom mobile. Tidak pernah geser horizontal.
- Sel adalah tombol 44px minimal. Bagian terkunci tetap bisa diklik dan menampilkan alasan.
- Belum diisi dan terkunci tidak boleh dibedakan hanya dengan warna. Nomor dan gembok sudah berbeda bentuk.

### 8.3 Navigasi bawah formulir

- Kiri: tombol sekunder "Sebelumnya". Kanan: tombol utama "Simpan dan lanjut".
- Bagian 12 memakai "Kirim formulir" plus kotak centang persetujuan 24px dengan label 17px.
- Kotak centang persetujuan wajib bisa dicapai keyboard, `aria-describedby` menunjuk kalimat "Formulir tidak bisa diubah setelah dikirim".
- Tombol kirim membuka konfirmasi dua langkah. Isi konfirmasi: nama anak, jumlah bagian terisi, dua tombol.
- Tidak ada tombol kirim yang bisa ditekan dua kali. Saat mengirim, label berubah menjadi "Mengirim" dan tombol nonaktif secara visual.

## 9. Gerak

Gerak dipakai untuk memberi rasa selesai, bukan hiburan. Tanpa library. Hanya `transform`, `opacity`, `width`.

| Kejadian | Aturan | Durasi |
|---|---|---|
| Kartu masuk layar | `opacity 0 ke 1`, `translateY(8px)` ke 0, stagger 40ms, maksimal 6 elemen | 180ms |
| Progress bar berubah | lebar dari nilai lama ke baru | 320ms |
| Tombol ditekan | `translateY(1px)`, tanpa bayangan | 120ms |
| Tautan dan tombol | warna dan garis bawah | 160ms |
| Badge status berubah | ganti isi, tanpa animasi | 0ms |
| Pesan error muncul | `opacity` saja, tanpa geser | 140ms |
| Ringkasan `<details>` | tanpa animasi tinggi, buka langsung | 0ms |

Anggaran: maksimal 1 elemen bergerak per blok. Tidak ada animasi berulang.
Dilarang: parallax, marquee, float, blob bergerak, skeleton berdenyut, spinner tanpa teks.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- Gerak hanya lapisan tambahan. Konten tetap terbaca bila animasi mati.
- Tidak ada teks yang hanya muncul setelah animasi selesai.
- Tidak ada animasi pada elemen yang membawa status. Status harus langsung terbaca.

## 10. Aksesibilitas WCAG 2.1 AA

Bisa diperiksa satu per satu. Nomor di kurung adalah tingkat kriteria.

1. Kontras teks minimal 4.5:1, teks besar 3:1 (1.4.3). Pakai tabel bab 2 dan bab 4.
2. Batas kontrol minimal 3:1 (1.4.11). Garis field `ink-soft` 5.75. Garis `cream-200` tidak boleh menjadi batas satu-satunya.
3. Status tidak hanya warna (1.4.1). Selalu warna, ikon, teks.
4. Ring fokus dua lapis terlihat di semua latar (2.4.7). Lihat 4.4.
5. Target sentuh minimal 44 kali 44 px dengan jarak 8px (2.5.5).
6. Zoom 200% tanpa kehilangan konten (1.4.4). Reflow pada 320px tanpa geser horizontal (1.4.10).
7. Satu `h1` per halaman, urutan heading tidak melompat (1.3.1, 2.4.6).
8. `lang="id"` pada `<html>`. Label dan pesan berbahasa Indonesia, termasuk teks bawaan browser.
9. Input punya `<label for>`. Placeholder tidak menggantikan label (1.3.1, 3.3.2).
10. Error: `aria-invalid="true"`, `aria-describedby` ke pesan, dan ringkasan error di atas form dengan `role="alert"` (3.3.1).
11. Perubahan status dan penanda simpan diumumkan lewat `aria-live="polite"` (4.1.3).
12. `autocomplete` diisi: `email`, `tel`, `new-password` untuk daftar, `current-password` untuk masuk. `inputmode="numeric"` untuk nomor WhatsApp.
13. Tautan "Lewati ke isi utama" sebagai elemen pertama yang bisa difokus.
14. Semua fungsi bisa dipakai dengan keyboard. Esc menutup dialog. Fokus terperangkap di dialog (2.1.1, 2.4.3).
15. Tanpa batas waktu yang memaksa. Sesi panjang tetap punya peringatan.
16. Ikon dekoratif `aria-hidden`. Ikon berdiri sendiri punya `aria-label`.
17. Tabel memakai `<caption>`, `<th scope>`, dan header yang tetap terbaca saat jadi kartu.
18. Tidak ada teks yang dimatikan dengan `user-scalable=no` (1.4.4).
19. Animasi bisa dimatikan lewat `prefers-reduced-motion` (2.3.3).
20. Unggah berkas punya alternatif teks: tombol "Pilih berkas" memakai input asli, bukan div palsu.

## 11. Panel admin: pengecualian terkontrol

Panel admin dipakai staf di desktop, 8 jam sehari. Token warna sama persis. Bedanya kerapatan.

| Hal | Portal orang tua | Panel admin |
|---|---|---|
| Sidebar | tidak ada | `teal-800` `#124A46`, lebar 240px, teks putih 10.03 |
| Judul halaman | 44px | 28px |
| Body | 17px | 16px, tidak lebih kecil |
| Tinggi baris tabel | 56px | 48px |
| Tinggi tombol | 52px pill | 40px, radius 12px |
| Kartu | radius 24, `shadow-soft` | radius 12, garis 1px `cream-200`, tanpa bayangan |
| Jarak blok | 48/64px | 24/32px |
| Target sentuh | 44px | 40px minimum, 44px untuk aksi merusak |

Aturan yang tidak boleh dilonggarkan di admin:

1. Warna status tetap warna, ikon, teks.
2. Tombol "Tolak" dan "Setujui" selalu berbeda bentuk dan posisi. Tidak bersebelahan tanpa jarak 16px.
3. Aksi merusak memakai `coral-700` sebagai garis dan teks, bukan latar `coral-600` penuh.
4. Alasan penolakan wajib terlihat sebelum tombol aktif.
5. Nominal uang memakai Baloo 2 700 dan rata kanan. Tidak ada angka tanpa pemisah ribuan.
6. Sidebar `teal-800` sama dengan warna ERP sekarang, jadi staf tidak perlu belajar palet baru.
7. Bilah alat antrean memuat cari, saring status, dan hitung hasil dalam satu baris. Hitungan hasil ada di bilah alat, bukan pil di samping judul.
8. Kepala kolom yang bisa diurutkan memakai tombol di dalam `<th aria-sort>`. Penanda arah hanya muncul di kolom yang sedang mengurutkan.
9. Sel nama memuat nama dan kode dalam dua baris. Tinggi baris 48px untuk isi satu baris, 56px untuk isi dua baris.
10. Nominal, tanggal, dan sisa waktu memakai `tabular-nums`. Uang rata kanan, waktu rata kiri.
11. Di bawah 768px tabel antrean dan riwayat berubah menjadi daftar kartu. Tidak ada tabel yang digeser mendatar.
12. Rel tujuh tahap di halaman detail: tahap lewat memakai warna keluarganya, tahap sekarang lebih tinggi 4px, tahap depan `cream-200`. Tinggi berbeda dipakai supaya keadaan tidak dibedakan warna saja.
13. Menu sidebar hanya memuat tujuan yang benar-benar ada. Tidak ada item bertanda "Segera" dan tidak ada tautan yang mati.

## 12. Yang ditolak dari desain sekarang

Diukur dari tangkapan layar portal sekarang, 29 Oktober 2026.

| Sekarang | Masalah terukur | Pengganti |
|---|---|---|
| Latar `#F4F4EC` di formulir, `#F6F3EC` di `/daftar` | Dua krem berbeda dengan rasio 1.00. Tidak terlihat beda, tetapi kode sudah bercabang | Satu permukaan `cream-50` `#FEFBF6` |
| Tombol utama navy `#182432` | Kontras aman, 15.70, tetapi tidak memuat identitas emas logo. Semua aksi tampak sama | Tombol `gold-600` 4.65 dengan teks putih penuh |
| Garis field `#E5E3D7` di atas putih | Batas kontrol hanya 1.29. Ambang 3:1. Field nyaris tidak terlihat di layar HP | Garis 1.5px `ink-soft` 5.75 |
| Halaman terasa seperti dokumen cetak | Tidak ada kartu, tidak ada bidang warna, hanya garis rambut | Kartu putih radius 24 dengan `shadow-soft`, jarak 24px |
| Stepper 12 kotak krem | Semua bagian tampak sama, kecil, tanpa ikon keadaan | Sel 64px, nomor lingkaran, 4 keadaan berwarna plus ikon (bab 8) |
| Badge "Sedang diperiksa" abu | Status tidak terbaca sebagai status | Badge warna, ikon, kata penuh (bab 7) |
| Tidak ada warna tahap | Orang tua tidak tahu sedang di tahap mana | Tujuh keluarga jewel, satu per tahap |
| Unggah berkas memakai input bawaan | Muncul teks Inggris "Choose file" dan "No file chosen" | Kotak unggah Indonesia, tombol "Pilih berkas", pratinjau nama dan ukuran |
| Unggah berkas tanpa pratinjau | Nama berkas kecil, tanpa ukuran, tanpa tombol hapus | Nama 16px 700, ukuran, ikon centang, tombol Ganti dan Hapus |
| Kepala halaman dan progres ikut tergulung | Saat mengisi bagian 11, orang tua tidak melihat posisi bagiannya | Kepala lengket 96px mobile dan 80px desktop (bab 8.1) |
| Label dan teks bantuan berukuran hampir sama | Hierarki hilang, mata tidak tahu mana yang wajib dibaca | Label 16px 700 `ink`, bantuan 14.5px `ink-soft` |
| Kotak centang persetujuan kecil dan menyatu dengan kalimat | Sulit ditekan di HP, mudah terlewat | Kotak 24px, label 17px, satu baris penuh bisa diklik |
| Bantuan hanya tautan kebijakan privasi | Tidak ada jalur cepat ke admin | Banner `teal-900` dengan tombol Hubungi admin |
| Kode pendaftaran `TCM-2026-0003` di baris abu | Kode penting untuk berita transfer tidak menonjol | Pill `cream-100`, 14.5px 700, tombol salin 44px |
| Dua tombol sekunder setara di bawah formulir | "Sebelumnya" dan "Kembali ke pendaftaran" bersaing, arah hilang | Satu tombol utama, satu tombol sekunder, satu tautan teks |

Aturan keras hasil evaluasi ini: tidak ada hex baru. Semua pengganti memakai token bab 2.

## 13. Aturan yang bisa dicek mesin

Jalankan dari akar repo portal. Setiap perintah punya hasil yang diharapkan.

| Pemeriksaan | Perintah | Hasil yang benar |
|---|---|---|
| Hex baru di luar token | `grep -rnE "#[0-9A-Fa-f]{6}" app components` | hanya berkas token yang muncul |
| Huruf di bawah 12.5px | `grep -rnoE "text-\[[0-9.]+px\]" app \| sort -u` | tidak ada nilai di bawah 12.5px |
| Huruf di luar tangga | `grep -rnoE "text-\[[0-9.]+px\]" app \| sort -u` | hanya 12.5, 13.5, 14.5, 16, 17, 19, 23, 28, 34, 44, 58 |
| Tombol lebih pendek dari 44px | `grep -rnE "h-(8\|9\|10\|11)([^0-9]\|$)" app \| grep -i button` | kosong |
| Abu di atas blok pekat | `grep -rn "text-ink-soft" app \| grep -E "bg-(teal\|gold\|coral\|plum\|olive\|sky)-(6\|7\|8\|9)"` | kosong |
| Opasitas putih di blok jewel | `grep -rnE "text-white/[0-9]{2}" app` | kosong |
| Ring fokus ada | `grep -rn "focus-visible" app` | minimal satu aturan global |
| Gerak dihormati | `grep -rn "prefers-reduced-motion" app` | ada |
| Tombol nonaktif pada submit | `grep -rn "disabled" app \| grep -i submit` | kosong |
| Badge status tanpa teks | tinjau manual tiap `<Badge` | selalu ada ikon dan kata |
| Teks Inggris bawaan | `grep -rn "Choose file" app` | kosong |
| Em dash dan titik tengah | `grep -rnP "\x{2014}\|\x{00B7}" app content` | kosong |
| Bahasa halaman | `grep -rn "lang=" app/layout.tsx` | `lang="id"` |
| Alt foto | `grep -rn "<img" app` | setiap hasil punya `alt` |
| Ringkasan error form | `grep -rn "role=\"alert\"" app` | ada di form panjang |
| Label input | `grep -rn "<input" app` | setiap input di dalam `<label>` atau punya `htmlFor` |

Uji manual yang tidak bisa diganti grep:

1. Tab keliling halaman: ring fokus terlihat di semua latar.
2. Zoom 200% dan lebar 320px: tidak ada geser horizontal.
3. Lihat badge status dalam mode buta warna: masih terbaca tanpa warna.
4. Matikan animasi di setelan sistem: tidak ada konten hilang.
5. Cek kontras tiap pasangan baru dengan penghitung, bukan mata.

## 14. Riwayat keputusan

- **29 Okt 2026, v1.2 panel admin dirapikan.** Panel admin disusun ulang sebagai alat kerja, bukan tabel contoh. Antrean mendapat cari, saring status, urut kolom, dan hitung hasil. Tabel di bawah 768px berubah menjadi kartu. Halaman detail mendapat rel tujuh tahap dan remah. Panel keputusan tidak lagi memakai kartu di dalam kartu. Kicker di atas judul dihapus di tiga halaman, dan bilah 4px di item sidebar diganti isian `teal-900` dengan ikon `gold-300`. Ditemukan pula tautan mati: antrean menautkan lima kode, tetapi hanya satu halaman detail yang dibangun. Semua lima kode sekarang punya halaman.

- **29 Okt 2026, v1.1 alur tujuh tahap.** Pemilik menetapkan ulang alur pendaftaran menjadi tujuh tahap: buat akun, pembayaran, verifikasi, isi formulir, observasi, wawancara, pengumuman. Sebelumnya enam tahap dan belum memisahkan observasi dari wawancara. Tabel 2.3 diperluas menjadi tujuh baris. Tahap 7 memakai `teal-900` sebagai penutup urutan. `coral-600` berpindah dari "kendala" ke "wawancara", karena kendala adalah status, bukan tahap. Warna status di bab 7 tidak berubah.
- **29 Okt 2026, hitung mundur dan kuota.** Panel ringkas di beranda sekarang memuat dua blok berwarna: sisa kuota diskon pada `gold-100` dengan teks `gold-700` 6.41, dan hitung mundur penutupan pada latar putih. Angka hitung mundur memakai Baloo 2 34px dengan tiga warna berbeda. Tanggal tutup adalah data, bukan hardcode di komponen.
- **29 Okt 2026, v1.0.** Design System portal SPMB dibuat. Pemilik menilai tampilan lama monoton: satu permukaan krem, tombol navy `#182432`, tanpa warna tahap. Keputusan: token sama persis dengan DESIGN.md v4.2 landing. `gold-600` untuk aksi utama, `teal-700` untuk tautan dan aksi sekunder. Enam keluarga jewel memetakan enam tahap pendaftaran. Sasaran baca orang tua menetapkan batas bawah 12.5px, body 17px, target 44px. Garis field dinaikkan dari `#E5E3D7` (1.29) ke `ink-soft` (5.75). Status wajib tiga lapis. Font Baloo 2 dan Nunito Sans dipakai karena landing page sudah memakainya.
- **29 Okt 2026, batas token.** Sempat dipertimbangkan tombol utama `teal-700` seperti tertulis di ringkasan tugas. Dibatalkan karena `00-BRIEF.md` keputusan 2 menetapkan emas sebagai tombol aksi utama. `teal-700` tetap dipakai untuk tautan, garis sekunder, dan ring fokus isi. Tidak ada hex baru di kedua pilihan.
- **29 Okt 2026, kesejajaran token.** Token di berkas ini diuji satu per satu dengan `tailwind.config.js` landing. Hasilnya sama persis untuk 35 warna. Satu selisih ditemukan: `teal-500` `#2A8A80` ada di tabel kontras `00-BRIEF.md`, tetapi tidak ada di config. Token itu tidak diadopsi supaya portal tidak memperkenalkan warna baru.
- **29 Okt 2026, kontras.** Semua angka dihitung ulang dengan rumus WCAG, bukan disalin dari ingatan. Tiga temuan mengubah aturan: putih 90% di `gold-600` hanya 4.12 sehingga opasitas dilarang di blok jewel. `gold-600` sebagai teks di `cream-100` hanya 4.22 sehingga teks emas selalu `gold-700`. `gold-300` di `cream-50` hanya 1.75 sehingga ring fokus wajib dua lapis.
- Panel admin mengikuti palet portal. Sidebar `teal-800` `#124A46` kebetulan sama dengan warna ERP sekarang, jadi tidak ada migrasi rasa untuk staf.

## 15. Open questions

1. **Nomor WhatsApp admin.** DESIGN.md landing memuat `+62 851-6755-7464`. Portal memakai nomor yang sama atau nomor admin SPMB terpisah? Semua tombol bantuan bergantung pada jawaban ini.
2. **Batas ukuran berkas.** PRD-SPMB menyebut maksimal 3 MB. Layar portal sekarang menampilkan "maksimal 4 MB". Mana yang benar? Teks di kotak unggah mengikuti keputusan ini.
3. **Nama final 12 bagian formulir.** Nama di bab 8 diambil dari stepper yang berjalan sekarang. PRD merujuk `agents/formulir/` yang belum ada. Nama boleh berubah tanpa mengubah aturan visual.
4. **Konfirmasi sebelum kirim formulir.** Formulir tidak bisa diubah setelah dikirim. Saya menyarankan dialog konfirmasi dua langkah. Perlu persetujuan pemilik karena menambah satu klik.
5. **Berkas logo akhir.** Navbar butuh logo emas tinggi 40px, idealnya SVG satu warna. Sekarang tersedia JPEG `Logo Cikal Mulia.jpeg` yang tidak bisa dipakai di latar gelap footer.
6. **Mode teks besar.** Apakah portal perlu tombol "Perbesar teks" yang menaikkan skala 125%? Manfaat untuk pembaca 45 tahun ke atas, biaya satu fitur baru.
7. **Kuota diskon 65%.** Badge diskon memakai `sun-500` dengan teks `ink`. Apakah diskon masih berlaku saat portal dirilis? Bila tidak, badge dan kartu kuota dihapus bersama.
