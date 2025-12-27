import { memo } from 'react'
import { motion } from 'framer-motion'

const FoodCard = ({ item, onAdd }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-soft-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/0 to-slate-900/40" />
        <div className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-red-300 shadow-soft-xl backdrop-blur">
          Signature
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
            {item.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 line-clamp-2 dark:text-slate-300">
            {item.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
              Harga
            </span>
            <p className="text-sm font-semibold text-red-400">
              Rp {item.price.toLocaleString('id-ID')}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 18px 45px -15px rgba(250,204,21,0.75)' }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onAdd(item)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-300 to-red-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy shadow-soft-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold focus-visible:ring-offset-slate-950"
          >
            <span>Tambah</span>
            <span className="text-lg leading-none">+</span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

export default memo(FoodCard)


