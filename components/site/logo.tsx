import { cn } from '@/lib/utils'

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  const color = tone === 'dark' ? 'text-forest' : 'text-ivory'
  return (
    <span className={cn('flex items-center gap-3', color, className)}>
      <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M7 26 C 12 12, 16 12, 20 22 S 28 30, 33 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-bold tracking-[-0.03em]">MCR</span>
        <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] opacity-70">Physiotherapy</span>
      </span>
    </span>
  )
}
