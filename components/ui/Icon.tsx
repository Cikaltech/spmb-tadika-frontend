/** Satu set ikon inline, stroke 1.5px. Tanpa paket ikon. design.md: satu set, jangan campur. */
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

const paths: Record<Name, React.ReactNode> = {
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
  whatsapp: (
    <path d="M20 11.7a8 8 0 0 1-11.9 7L4 20l1.4-4A8 8 0 1 1 20 11.7Zm-11.4 2.6c.4.9 1.9 2.2 3 2.6 1 .4 1.8.3 2.4-.2.4-.4.6-1 .4-1.2l-1.7-.8c-.2-.1-.5 0-.7.2-.2.3-.3.5-.6.4-.8-.3-1.6-1.1-1.9-1.9-.1-.2.2-.4.4-.6.2-.2.2-.4.1-.6l-.7-1.6c-.2-.4-.6-.5-.9-.2-.7.6-1 1.7-.2 3Z" />
  ),
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
  filled = false,
}: {
  name: Name
  className?: string
  filled?: boolean
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
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
