import Link from 'next/link'
import { site, tahap } from '@/content/site'
import { Icon } from '@/components/ui/Icon'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { KodePendaftaran } from './KodePendaftaran'
import { pendaftaran } from './data'

/** Kartu status pendaftaran: bilah tahap, kode, badge, dan satu aksi utama. design.md bab 6. */
export function StatusPendaftaran() {
  const aktif = tahap[pendaftaran.tahapAktif]

  return (
    <section aria-labelledby="judul-status" className="panel flex overflow-hidden">
      <div className={`w-2 shrink-0 ${aktif.warna}`} aria-hidden="true" />
      <div className="min-w-0 flex-1 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <KodePendaftaran kode={pendaftaran.kode} />
          <StatusBadge status={pendaftaran.status} />
        </div>

        <h2 id="judul-status" className="mt-5 text-[23px] font-extrabold">
          {pendaftaran.anak}
        </h2>
        <p className="mt-1 text-[14.5px] text-ink-soft">
          {pendaftaran.jenjang}. Tahun ajaran {site.tahunAjaran}.
        </p>

        <p className="mt-4 max-w-[52ch] text-[19px] leading-[1.5] text-ink">
          Transfer biaya pendaftaran, lalu unggah bukti transfer. Admin memeriksa bukti maksimal 1
          kali 24 jam kerja.
        </p>

        <p className="mt-3 text-[16px] font-bold text-gold-700">
          Tahap {aktif.nomor} dari {tahap.length}: {aktif.nama}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/akun/pendaftaran/${pendaftaran.kode}/pembayaran`}
            className="btn-gold"
          >
            <Icon name="upload" className="h-5 w-5" />
            Bayar dan unggah bukti
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
              `Halo admin SPMB, saya ingin bertanya tentang pendaftaran ${pendaftaran.kode}.`,
            )}`}
            className="btn-secondary"
            target="_blank"
            rel="noopener"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Tanya admin
          </a>
        </div>
      </div>
    </section>
  )
}
