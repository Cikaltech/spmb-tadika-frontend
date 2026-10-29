# Product

<!-- impeccable:product-schema 1 -->

Ditulis 29 Okt 2026 dari 00-BRIEF.md, DESIGN.md, content/site.ts, dan PRD-SPMB.md. Tidak ada wawancara pemilik. Bagian yang tidak ada buktinya di repo sengaja dikosongkan.

## Platform

web

## Stack

Next.js 15 dengan static export (output: 'export'), React 19, Tailwind 3. Tanpa server, tanpa basis data, tanpa autentikasi sungguhan. Semua data di repo adalah contoh.

## Users

- Staf SPMB sekolah, satu sampai dua orang, bekerja di desktop delapan jam sehari. Tugasnya memutuskan bukti transfer dan menyusun jadwal wawancara.
- Orang tua calon siswa usia 30 sampai 45. Mayoritas membuka portal dari HP. Banyak yang belum biasa memakai aplikasi.

## Product Purpose

Portal SPMB menampung pendaftaran siswa baru dari pembuatan akun sampai pengumuman hasil. Panel admin menutup lingkaran itu: bukti transfer yang masuk harus diputuskan, dan anak yang lolos verifikasi harus mendapat jadwal wawancara. Sukses berarti tidak ada pendaftaran yang tertahan karena antrean admin terlupa.

## Positioning

Satu portal dengan tujuh tahap berurutan dan satu keluarga warna per tahap. Orang tua melihat posisinya sendiri. Staf melihat antrean tahap yang sedang ditangani.

## Operating Context

- Staf membuka panel ini di desktop sambil membuka mutasi rekening bank di jendela lain. Bukti transfer dicocokkan dengan nominal dan nama.
- Bukti transfer masuk sebagai foto dari HP orang tua, sering buram atau terpotong.
- Keputusan tolak wajib memuat alasan. Alasan itu tampil ke orang tua di portal.
- Wawancara dijadwalkan manual oleh staf, lalu dikabarkan lewat WhatsApp.
- Tahun ajaran 2026/2027. Jenjang TK A dan TK B.

## Capabilities and Constraints

- Rute panel admin: /admin (antrean verifikasi), /admin/verifikasi/[kode] (detail dan keputusan), /admin/wawancara (jadwal).
- Sebelas status pendaftaran, dari menunggu pembayaran sampai daftar ulang selesai. Panel admin hanya memutuskan dua di antaranya: disetujui atau ditolak.
- Bahasa antarmuka Indonesia. Istilah tetap: kode pendaftaran, ananda, bukti transfer, jenjang, wawancara.
- Keputusan tolak butuh alasan minimal 10 karakter karena alasan itu dibaca orang tua.
- Tidak ada sambungan server. Tombol yang mengubah data belum boleh berpura-pura menyimpan.
- Batas unggah berkas belum diputuskan: PRD menyebut 3 MB, layar portal sekarang menampilkan 4 MB.
- Nomor WhatsApp admin SPMB belum diputuskan. Nomor di content/site.ts adalah nomor landing page.

## Brand Commitments

- Nama: Portal SPMB Tadika Cikal Mulia. Yayasan Abbas Cikal Mulia. Tagline: Mulia Karena Taqwa.
- Logo resmi emas dan bronze. Identitas emas tidak dilawan.
- Nada bicara tenang dan hormat. Tanpa superlatif, tanpa em dash, tanpa titik tengah, tanpa emoji di judul.
- Token warna dan tipografi mengikuti DESIGN.md v4.2 landing page. Hex baru dilarang.

## Evidence on Hand

- DESIGN.md di repo ini: design system portal v1.1, mengikat.
- Tangkapan layar ERP lama dan portal sekarang di folder induk (berkas WhatsApp Image).
- UI kit kuning mustard di folder induk, acuan rasa ceria untuk formulir.
- Logo: /images/logo-cikal-mulia.jpeg.
- Tidak ada antrean sungguhan, tidak ada gambar bukti transfer, tidak ada testimoni. Jangan mengarang ketiganya.

## Product Principles

1. Antrean dulu. Layar pertama menjawab apa yang harus diputuskan sekarang.
2. Satu keputusan, satu alasan. Setiap tombol membawa akibat yang tertulis di dekatnya.
3. Status selalu warna, ikon, dan kata. Warna saja tidak pernah cukup.
4. Kerapatan untuk staf, kelegaan untuk orang tua. Dua audiens, dua kepadatan, satu palet.
5. Data contoh diakui sebagai data contoh. Tidak ada angka yang tampak sungguhan tanpa sumber.

## Accessibility & Inclusion

WCAG 2.1 AA. Body minimal 17px di portal dan 16px di panel admin. Target sentuh 44px, panel admin minimal 40px. Ring fokus dua lapis yang terlihat di latar terang maupun blok pekat. Sebagian orang tua buta warna merah dan hijau, jadi status tidak boleh dibedakan lewat warna saja.
