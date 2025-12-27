import { motion, AnimatePresence } from 'framer-motion'
import FoodCard from '../components/FoodCard.jsx'
import SkeletonCard from '../components/SkeletonCard.jsx'
import menuData from '../data/menuData.js'

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

const MenuPage = ({ isLoading, onAddToCart }) => {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-300">
              Premium Cakes
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Menu List
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Setiap kue dibuat dengan perhatian terhadap detail dan bahan
              berkualitas tinggi.
            </p>
          </div>
          <div className="text-[11px] text-slate-400">
            <p></p>
            <p></p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="menu-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="menu-grid"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {menuData.map((item) => (
                <FoodCard key={item.id} item={item} onAdd={onAddToCart} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default MenuPage


