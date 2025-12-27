import { motion } from 'framer-motion'

const navVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const Navbar = ({
  theme,
  onToggleTheme,
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const isDark = theme === 'dark'

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate('landing')}
        >
          <div className="flex h-12 w-12">
            <img src="/QininLogoNoBg.png" alt="logos" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-200">
              Qinin Cake
            </span>
            <span className="text-[11px] text-slate-400">
              Specialist of Cake
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300 md:flex">
            <button
              onClick={() => onNavigate('landing')}
              className={`transition-colors hover:text-red-300 ${
                currentPage === 'landing' ? 'text-red-300' : ''
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className={`transition-colors hover:text-red-300 ${
                currentPage === 'menu' ? 'text-red-300' : ''
              }`}
            >
              Menu
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.94 }}
            onClick={onOpenCart}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-white/90 text-slate-900 shadow-soft-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100"
            aria-label="Buka keranjang"
          >
            <span className="text-lg">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-gradient-to-r from-red-300 to-red-400 px-1 text-[10px] font-semibold text-navy">
                {cartCount}
              </span>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.94 }}
            onClick={onToggleTheme}
            className="relative flex h-10 w-16 items-center rounded-full border border-slate-300/90 bg-white/90 px-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-soft-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold dark:border-slate-700/90 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label="Toggle mode"
          >
            <span className={`flex-1 text-center ${isDark ? 'text-red-300' : 'text-slate-500'}`}>
              ☾
            </span>
            <span className={`flex-1 text-center ${!isDark ? 'text-red-300' : 'text-slate-500'}`}>
              ☀
            </span>
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              className={`absolute inset-y-1 w-7 rounded-full bg-gradient-to-br from-red-300 via-red-400 to-red-500 shadow-soft-xl ${
                isDark ? 'left-1' : 'right-1'
              }`}
            />
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar


