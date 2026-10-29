# Surface brief: panel admin SPMB

Diperbarui 29 Okt 2026. Rute: /admin, /admin/verifikasi/[kode], /admin/wawancara.

## Surface mode

**Operate.** Staf datang ke layar ini untuk menyelesaikan tugas, bukan untuk menilai merek. Keberhasilan diukur dari waktu: berapa detik sampai staf tahu bukti mana yang harus diputuskan, dan berapa klik sampai keputusan tercatat.

Bukan Persuade. Panel admin bukan tempat menjual apa pun ke staf. Bukan Read: tidak ada teks panjang untuk dipahami. Bukan Experience.

## Visitor and job

Staf SPMB, desktop, delapan jam. Pekerjaan hari itu: memeriksa bukti transfer yang masuk semalam, memutuskan satu per satu, lalu menyusun jadwal wawancara anak yang lolos.

## Success

- Dalam lima detik pertama, staf tahu berapa bukti yang menunggu dan mana yang paling lama menunggu.
- Satu keputusan selesai tanpa berpindah layar lebih dari sekali.
- Tidak ada baris yang bisa terlewat karena tampak seperti hiasan.
- Alasan penolakan terbaca sebelum tombol tolak bisa ditekan.

## The five gates

| Gate | Pertanyaan | Putusan |
|---|---|---|
| Truth | Apa yang benar-benar diketahui layar ini? | Lima baris data contoh, satu status per baris. Tidak ada angka yang tidak dihitung dari data itu sendiri. |
| Purpose | Apa satu hal yang harus dikerjakan? | Memutuskan bukti transfer teratas di antrean. |
| Consequence | Apa yang rusak kalau salah? | Uang orang tua dan jadwal anak. Tolak tanpa alasan yang jelas membuat orang tua mengulang tanpa tahu sebabnya. |
| Feasibility | Apa yang mungkin tanpa server? | Cari, saring, urut, dan pindah halaman. Tidak ada penyimpanan. Tombol yang menyimpan diberi keterangan contoh. |
| Fit | Apakah bentuknya cocok untuk staf? | Ya, kalau kerapatan dan pola yang dikenal dipertahankan: sidebar, tabel, panel keputusan. |

## The world it borrows

Dunia panel admin dipinjam dari **meja verifikasi bank**: satu kolom waktu, satu kolom nominal yang lurus, satu kolom keadaan. Yang diambil hanya empat hal, sesuai batas Operate:

1. **Tipografi**: Baloo 2 untuk semua angka dan nominal, Nunito Sans untuk sisanya. Angka memakai tabular-nums supaya kolom tidak bergoyang.
2. **Palet**: sidebar teal-800, permukaan cream-50, kartu putih bergaris cream-200. Warna jewel hanya untuk keadaan, bukan hiasan.
3. **Kerapatan**: baris 48px, body 16px, tombol 40px. Tanpa kartu mengambang berbayang.
4. **Satu gerakan tanda tangan**: rel tujuh tahap di halaman detail. Tahap yang sudah lewat terisi warna keluarganya, tahap sekarang diberi cincin, tahap berikutnya garis rambut. Itu satu-satunya tempat palet tahap tampil sebagai bentuk.

Yang tidak dipinjam: tata letak, model navigasi, atau kontrol khas alat lain. Sidebar, tabel, kolom, dan panel tetap pola web yang staf sudah tahu.

## Preserved strengths

1. Panel keputusan yang memaksa alasan sebelum menolak. Dipakai ulang, tidak dilonggarkan.
2. Badge status tiga lapis: warna, ikon, kata. Dipakai apa adanya.
3. Sidebar teal-800 yang sudah sama dengan ERP lama, jadi staf tidak perlu belajar palet baru.
4. Tautan kode pendaftaran di tabel antrean menuju halaman detail. Alur itu tidak berubah.

## Removed

- Kicker di atas judul halaman. Judul membawa beratnya sendiri, dan label di atasnya adalah kebiasaan template.
- Pil jumlah yang mengambang di kanan judul. Jumlah pindah ke bilah alat, di sebelah hasil saring yang benar-benar ia hitung.
- Tombol Muat ulang tanpa server. Kontrol yang tidak melakukan apa pun adalah hiasan.
- Menu Pendaftar dan Pengaturan yang tidak punya tujuan. Menu yang tidak bisa diklik adalah janji kosong.
- Bilah warna 4px di tepi kiri item sidebar, dan bilah plum di daftar wawancara. Keduanya penanda template, bukan penanda keadaan.
