/**
 * Satu set ikon inline, stroke 1.5px. Tanpa paket ikon.
 * Ikon merek (WhatsApp) digambar padat mengikuti glyph resmi, bukan garis,
 * karena goresan tangan pada bentuk itu mudah terlihat miring.
 */
type Name =
  | 'arrow-right'
  | 'check'
  | 'close'
  | 'clock'
  | 'upload'
  | 'file'
  | 'whatsapp'
  | 'chevron-down'
  | 'alert'
  | 'copy'
  | 'menu'
  | 'shield'

/** Ikon merek, digambar padat. viewBox 0 0 24 24. */
const solid: Partial<Record<Name, string>> = {
  whatsapp:
    'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z',
}

/** Ikon garis, stroke 1.5px. */
const paths: Partial<Record<Name, React.ReactNode>> = {
  'arrow-right': <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  check: <path d="m5 13 4.5 4.5L19 7" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  upload: <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" />,
  file: <path d="M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8L14 3.5Zm0 0V8h4.5" />,
  'chevron-down': <path d="m6 9.5 6 6 6-6" />,
  alert: (
    <>
      <path d="M12 4.5 3.5 19.5h17L12 4.5Z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M15 6.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  shield: <path d="M12 3.5 5 6v6c0 4 3 7 7 8.5 4-1.5 7-4.5 7-8.5V6l-7-2.5Z" />,
}

export function Icon({
  name,
  className = 'h-5 w-5',
}: {
  name: Name
  className?: string
}) {
  const padat = solid[name]
  if (padat) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d={padat} />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}

export type IconName = Name
