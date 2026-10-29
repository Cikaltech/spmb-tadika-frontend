---
name: anti-slop-ui
description: Gunakan saat membangun, mengubah, atau meninjau tampilan Portal SPMB Tadika, agar layar tidak terasa hasil generate AI dan tetap terbaca orang tua dari HP.
applies_to:
  - app/**
  - components/**
  - tailwind.config.js
---

# Anti-Slop UI: Portal yang Tidak Terasa Hasil AI

Skill ini hanya mengurus visual dan perilaku layar. Kalimat dan klaim diurus `agents/skills/anti-slug/SKILL.md`.
Bentuk rumah (Jewel Blocks) ada di `agents/skills/ui-craft/SKILL.md`. Token dan kontras sah hanya di `design.md`. Hex baru di luar token ditolak.

## Tanda slop UI yang ditolak

| Tanda | Kenapa terasa AI | Ganti dengan |
|---|---|---|
| Kartu seragam berulang 3 atau lebih | Pola default model, tanpa prioritas | Satu kartu, satu tabel, satu daftar status |
| Gradien ungu ke biru sebagai latar | Warna template, bukan identitas sekolah | `cream-50` atau satu blok `teal-700` |
| Emoji di judul atau tombol | Pengganti ikon yang tidak dipikirkan | Ikon set rumah 24px, `aria-hidden` |
| Ikon dari 3 library berbeda | Ketebalan garis dan sudut tidak konsisten | Satu set ikon, stroke 1.5px |
| Shadow di hampir semua elemen | Semua kartu mengambang | `soft` untuk kartu diam, `lift` untuk aktif |
| Radius campur 6px, 10px, 18px, 30px | Tidak ada bahasa bentuk | Hanya token: panel 32, kartu 24, field 12, pill 999 |
| Semua konten di tengah | Tidak ada arah baca dan hierarki | Judul kiri, isi 6 kolom, satu panel warna |
| Teks abu `ink-soft` di blok pekat | Kontras jatuh di bawah 4.5:1 | Putih penuh di atas blok, abu hanya di `cream-50` |
| Label form samar dan kecil | Orang tua salah isi data | Label 16px `ink`, bobot 700, di atas field |
| Placeholder dianggap label | Label hilang setelah mengetik | `<label>` selalu ada, placeholder hanya contoh |
| Spasi acak 13px, 27px, 41px | Irama halaman rusak | Skala 4/8/12/16/24/32/48/64 |
| Blob, gelombang, partikel dekorasi | Ornamen tanpa fungsi | Kosongkan. Latar rata atau satu lengkung cikal |
| Badge status hanya warna | Buta warna tidak bisa membedakan | Warna plus ikon plus teks status |
| Spinner tanpa pesan | Orang tua menunggu tanpa tahu apa | Skeleton 3 baris plus teks "Sedang memuat data ananda" |
| Angka, testimoni, statistik tanpa sumber | Klaim palsu | Hapus atau pakai data resmi sekolah |

Uji cepat: hapus satu elemen. Kalau tidak ada informasi yang hilang, hapus permanen.

## Satu ide, satu aksi, satu blok pekat

- Satu layar menjawab satu pertanyaan. Contoh: "sampai mana pendaftaran ananda".
- Satu aksi utama per layar. Tombol `gold-600` penuh, sisanya outline `teal-700` atau tautan.
- Dua tombol warna penuh bersebelahan selalu ditolak. Orang tua bingung harus tekan yang mana.
- Maksimal 3 tingkat hierarki per layar: judul, isi, aksi. Kicker hanya pendamping judul.
- Warna pekat untuk blok, bukan untuk teks panjang. Teks badan `ink` di atas `cream`.
- Maksimal 4 warna blok per layar, urutan tetap teal, coral, gold, plum.
- `sun-500` hanya badge dengan teks `ink`. Teks putih di atasnya gagal keras, 2.02:1.
- `gold-600` sebagai teks di `cream-100` hanya 4.22:1. Untuk teks emas pakai `gold-700`.

## Khusus orang tua

- Teks badan minimal 17px, tinggi baris 1.65. Label dan teks bantu minimal 16px.
- Target sentuh minimal 44x44px. Jarak antar tombol minimal 12px.
- Bahasa Indonesia sederhana. Satu pesan satu kalimat, tanpa istilah teknis.
- Kata tombol memakai kata kerja nyata: "Simpan data anak", bukan "Submit" atau "OK".
- Status pendaftaran selalu warna plus ikon plus teks. Menunggu verifikasi, Disetujui, Ditolak.
- Stepper 12 bagian wajib terlihat: "Bagian 3 dari 12", bar kemajuan, dan nama bagian.
- Ringkas data di bawah stepper. Orang tua tidak perlu mengingat langkah sebelumnya.
- Galat menunjuk apa yang salah dan cara betulkan, di dekat field, bukan di atas halaman.
- Field yang sudah benar diberi centang kecil. Orang tua butuh kepastian.
- Unggah berkas menyebut syarat di depan: format JPG atau PDF, batas ukuran dari `design.md`.
- Simpan otomatis saat pindah bagian, lalu tampilkan tanda "Tersimpan".

## Resep perbaikan

| Slop | Resep |
|---|---|
| Tiga kartu fitur seragam | Ubah satu jadi tabel biaya, satu jadi daftar status, sisakan satu kartu |
| Hero teks di tengah | Kiri rata, judul 2 baris, satu panel `cream-100`, foto kanan |
| Teks abu di blok warna | Ganti putih penuh. Turunkan ukuran, jangan turunkan kontras |
| Label hilang saat mengetik | Tambah `<label>` 16px `ink`, placeholder jadi contoh format |
| Badge warna saja | Tambah ikon centang, silang, atau jam, lalu teks status lengkap |
| Formulir 12 bagian tanpa penanda | Stepper tetap di atas, nama bagian aktif dan jumlah bagian terlihat |
| Spinner sendirian | Skeleton plus teks "Sedang memuat", tombol kirim mati sampai selesai |

## Checklist sebelum selesai

- [ ] `grep -n $'\xe2\x80\x94' app components` kosong, dan `grep -n $'\xc2\xb7' app components` kosong.
- [ ] Tidak ada hex baru di luar token, radius atau shadow di luar token, kecuali `globals.css`.
- [ ] `grep -nE "from-(purple|violet|indigo|fuchsia)|to-(blue|cyan)" app components` kosong.
- [ ] `grep -n "placeholder=" app components` tanpa `<label>` berdekatan kosong.
- [ ] `grep -nE "text-\[1[0-4]px\]" app components` kosong. Teks kecil minimal 16px.
- [ ] `grep -nE "animate-spin" app components` selalu punya teks atau skeleton.
- [ ] `grep -n "ink-soft" app components` tidak ada di atas blok warna pekat.
- [ ] Tidak ada dua grid kartu seragam bersebelahan.
- [ ] Satu aksi utama per layar. Tombol lain outline atau tautan.
- [ ] Target sentuh 44px. Uji di 390px, tanpa scroll horizontal.
- [ ] Kontras teks minimal 4.5:1, dicek angka. Putih di `gold-600` batas 4.65:1.
- [ ] `prefers-reduced-motion` mematikan semua transisi.

## Referensi
`design.md` (token dan kontras), `agents/skills/ui-craft/SKILL.md` (bentuk rumah), `agents/skills/anti-slug/SKILL.md` (teks).
