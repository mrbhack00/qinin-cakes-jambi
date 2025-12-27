import { motion, AnimatePresence } from 'framer-motion'
import SkeletonCard from '../components/SkeletonCard.jsx'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const text = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const image = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const LandingPage = ({ onSeeMenu, isLoading }) => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(250,204,21,0.08),transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:gap-12 md:px-6 lg:py-16">
        <div className="order-2 w-full md:order-1 md:w-1/2">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="hero-text-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SkeletonCard variant="hero-text" />
              </motion.div>
            ) : (
              <motion.div
                key="hero-text-content"
                variants={container}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <motion.p
                  variants={text}
                  className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-800 shadow-soft-xl dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  baker • Indonesia
                </motion.p>

                <motion.div variants={text} className="space-y-3">
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
                    Qinin Cake
                  </h1>
                  <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    Lakukan Perjalanan Rasa yang Tak Terlupakan dengan Kue
                    Artisan Kami, Dirancang untuk Momen Spesial Anda.
                  </p>
                </motion.div>

                <motion.div
                  variants={text}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      boxShadow: '0 28px 80px -24px rgba(250,204,21,0.9)',
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onSeeMenu}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-300 via-red-300 to-red-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy shadow-soft-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950"
                  >
                    <span>Lihat Menu</span>
                    <span className="text-sm">↗</span>
                  </motion.button>

                  <div className="flex flex-col text-[11px] text-slate-500 dark:text-slate-400">
                    <span>Menu&apos;s Cake</span>
                    <span>Dibuat dengan rasa dan dipadukan cinta</span>
                  </div>
                </motion.div>

                <motion.div
                  variants={text}
                  className="flex gap-6 pt-4 text-[11px] text-slate-500 dark:text-slate-400"
                >
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-200">
                      Premium Ingredients
                    </p>
                    <p>Bahan berkualitas tinggi yang dipilih dengan cermat.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-200">
                      Curated Courses
                    </p>
                    <p>Menu kue yang mengikuti alur cerita rasa.</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="order-1 w-full md:order-2 md:w-1/2">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="hero-image-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SkeletonCard variant="hero-image" />
              </motion.div>
            ) : (
              <motion.div
                key="hero-image-content"
                variants={image}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="relative h-80 w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-soft-xl dark:border-slate-700/80 dark:bg-slate-900/80"
              >
                <img
                  src="https://images.pexels.com/photos/8478056/pexels-photo-8478056.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Chef preparing a fine dining dish at Foodies Qinin"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/10 to-transparent dark:from-slate-950" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-[11px] text-slate-800 backdrop-blur dark:border-slate-700/80 dark:bg-slate-950/80 dark:text-slate-200">
                  <div className="flex flex-col">
                    <span className="font-semibold">Qinin Cake</span>
                    <span className="text-slate-500 dark:text-slate-400">
                      Order Online Time
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-red-300 dark:text-red-400">
                      Open Time
                    </span>
                    <p className="text-xs text-slate-900 dark:text-slate-100">
                      07.00 — 22.00 WIB
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
