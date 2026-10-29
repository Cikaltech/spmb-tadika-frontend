# spmb-tadika-frontend

Portal SPMB (Sistem Penerimaan Murid Baru) **Tadika Cikal Mulia**, Pontianak Barat.
Dua wajah dalam satu aplikasi:

| Area | Route | Pengguna |
|---|---|---|
| Publik | `/`, `/daftar`, `/masuk`, `/privasi` | Calon orang tua |
| Akun orang tua | `/akun`, `/akun/pendaftaran/:id/...` | Orang tua pendaftar |
| Panel admin | `/admin`, `/admin/verifikasi/:id`, `/admin/wawancara` | Staf sekolah |

Frontend murni. Belum ada backend, belum ada autentikasi, data masih contoh di dalam
berkas halaman. Build statis (`output: 'export'`).

## Sumber kebenaran

- **`DESIGN.md`** — design system portal, v1.0. Warna, tipografi, kontras, komponen.
  Dibaca sebelum menulis komponen apa pun.
- **`agents/skills/anti-slop-ui/SKILL.md`** — aturan agar tampilan tidak terasa hasil AI.
- Desain landing page (di luar repo ini) tetap memakai `DESIGN.md` v4.2. Token warnanya sama.

## Stack

| Lapisan | Isi |
|---|---|
| Framework | Next.js 15.5 App Router, React 19, TypeScript |
| Build | webpack (default Next 15), `output: 'export'` ke `out/` |
| Styling | Tailwind CSS 3.4, token di `tailwind.config.js`, kelas komponen di `app/globals.css` |
| Font | self-host `public/fonts/*.woff2`, Baloo 2 + Nunito Sans |
| Ikon | SVG inline di `components/ui/Icon.tsx`, satu set, tanpa paket ikon |

Tanpa: backend, database, auth, framer-motion, paket ikon, analytics.

## Perintah

```bash
npm install --cache ./.npm-cache   # cache lokal, folder .npm dilindungi sandbox
npm run dev                        # http://localhost:3000
npm run build                      # hasil statis di out/
npm run typecheck                  # tsc --noEmit
```

## Peta folder

```
app/
  layout.tsx             root layout: font, metadata, lang="id"
  globals.css            @font-face, kelas komponen, ring fokus, reduced motion
  page.tsx               beranda SPMB
  daftar/ masuk/ privasi/
  akun/                  dashboard, pembayaran, formulir 12 bagian, selesai
  admin/                 sidebar, antrean verifikasi, keputusan, wawancara
components/
  layout/Chrome.tsx      Header dan Footer
  ui/                    Icon, StatusBadge, Stepper, Field
  publik/ akun/ admin/   komponen per area
content/site.ts          fakta terkunci: sekolah, biaya, kontak, enam tahap, 12 bagian
public/fonts public/images
```

## Aturan kerja

1. Warna hanya dari token. Hex baru dilarang di luar `tailwind.config.js` dan `globals.css`.
2. Status pendaftaran selalu **warna + ikon + teks**. Warna saja gagal untuk buta warna.
3. Teks badan minimal 17px, label 16px. Placeholder bukan label.
4. Satu aksi utama per layar. Target sentuh 44px.
5. Tanpa em dash dan tanpa titik tengah di teks yang dibaca pengguna.
6. Route `[id]` wajib punya `generateStaticParams` karena build statis.
7. Tanpa dependency baru. Butuh sesuatu? CSS native dulu, lalu komponen 20 baris.
8. Semua animasi mati saat `prefers-reduced-motion: reduce`.

## Yang belum ada

Autentikasi, API, unggah berkas nyata, dan pengiriman formulir. Halaman mengirim data
ke mana pun. Kontrak API menunggu backend. Lihat `DESIGN.md` bab 15 untuk pertanyaan terbuka.
