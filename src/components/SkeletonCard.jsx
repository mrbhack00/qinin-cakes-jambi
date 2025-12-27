const SkeletonCard = ({ variant = 'card' }) => {
  if (variant === 'hero-image') {
    return (
      <div className="relative h-80 md:h-[420px] w-full overflow-hidden rounded-2xl bg-slate-200/80 dark:bg-slate-900/60">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/90 via-slate-300/90 to-slate-400/90 dark:from-slate-800/70 dark:via-slate-900/90 dark:to-slate-950" />
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
      </div>
    )
  }

  if (variant === 'hero-text') {
    return (
      <div className="space-y-4">
        <div className="relative h-8 w-40 rounded-full bg-slate-200/80 dark:bg-slate-800/70 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
        </div>
        <div className="relative h-10 w-3/4 rounded-full bg-slate-200/80 dark:bg-slate-800/70 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
        </div>
        <div className="relative h-4 w-full rounded-full bg-slate-200/80 dark:bg-slate-800/70 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
        </div>
        <div className="relative h-4 w-2/3 rounded-full bg-slate-200/80 dark:bg-slate-800/70 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
        </div>
        <div className="relative mt-6 h-11 w-40 rounded-full bg-slate-200/90 dark:bg-slate-800/80 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/15 animate-shimmer" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-80 flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100/80 shadow-soft-xl dark:border-slate-800/60 dark:bg-slate-900/70">
      <div className="relative h-40 w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="relative h-5 w-3/4 rounded-full bg-slate-200/90 dark:bg-slate-800/80 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
        </div>
        <div className="relative h-4 w-full rounded-full bg-slate-200/80 dark:bg-slate-800/70 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
        </div>
        <div className="relative h-4 w-2/3 rounded-full bg-slate-200/80 dark:bg-slate-800/70 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="relative h-6 w-24 rounded-full bg-slate-200/90 dark:bg-slate-800/80 overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
          </div>
          <div className="relative h-10 w-24 rounded-full bg-slate-200/90 dark:bg-slate-800/80 overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard


