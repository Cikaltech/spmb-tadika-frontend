import { tahap } from '@/content/site'

/**
 * Rel tujuh tahap. Satu-satunya tempat palet tahap tampil sebagai bentuk di panel admin.
 * Tahap lewat memakai warna keluarganya, tahap sekarang lebih tinggi, tahap depan garis rambut.
 * Tinggi berbeda dipakai supaya keadaan tidak dibedakan warna saja. DESIGN.md bab 2.3 dan bab 7.
 */
export function TahapRail({ sekarang }: { sekarang: number }) {
  const aktif = tahap.find((t) => t.nomor === sekarang) ?? tahap[0]
  const depan = tahap.find((t) => t.nomor === sekarang + 1)

  return (
    <section aria-labelledby="rel-tahap" className="rounded-field border border-cream-200 bg-white px-4 py-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h2 id="rel-tahap" className="text-[14.5px] font-bold text-ink">
          Tahap {sekarang} dari 7, <span className={aktif.teksTint}>{aktif.nama}</span>
        </h2>
        <p className="text-[13.5px] text-ink-soft">{aktif.ringkas}</p>
      </div>

      <div className="mt-3 flex items-center gap-1" aria-hidden="true">
        {tahap.map((t) => (
          <span
            key={t.id}
            className={relBar(t.nomor <= sekarang, t.nomor === sekarang, t.warna)}
          />
        ))}
      </div>

      <p className="sr-only">
        Urutan tahap: buat akun, pembayaran, verifikasi, isi formulir, observasi, wawancara, pengumuman.
      </p>

      {depan && (
        <p className="mt-2 text-[13.5px] text-ink-soft">
          Sesudah ini tahap {depan.nomor}, {depan.nama}.
        </p>
      )}
    </section>
  )
}

function relBar(lewat: boolean, sekarang: boolean, warna: string) {
  const tinggi = sekarang ? 'h-3' : 'h-2'
  return `flex-1 rounded-full ${lewat ? warna : 'bg-cream-200'} ${tinggi}`
}
