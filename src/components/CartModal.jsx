import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const modal = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 16,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
}

const CartModal = ({
  isOpen,
  items,
  total,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
  onCheckout,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/70 backdrop-blur-md"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            variants={modal}
            className="relative mx-4 flex max-h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 shadow-soft-xl"
          >
            <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-red/80 to-transparent" />
            <div className="flex items-start justify-between gap-4 px-6 pb-4 pt-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-300">
                  Keranjang
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-tight">
                  Qinin Cake Experience
                </h2>
                <p className="mt-1 text-[11px] text-slate-400">
                  Pastikan pesanan Anda sudah sesuai sebelum checkout ke WhatsApp.
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-1 text-xs text-slate-300 hover:text-red-300"
              >
                ✕
              </button>
            </div>

            <div className="border-y border-slate-800/80 bg-slate-900/50">
              <div className="max-h-64 space-y-3 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <p className="text-xs text-slate-400">
                    Keranjang masih kosong. Tambahkan menu favorit Anda terlebih dahulu.
                  </p>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/40 px-3 py-3"
                    >
                      <div className="flex flex-1 items-center gap-3">
                        <div className="h-11 w-11 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/70">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-xs font-medium text-slate-100">
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-[11px] text-slate-400">
                            Rp {item.price.toLocaleString('id-ID')} / porsi
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-1 text-xs">
                          <button
                            onClick={() => onDecrement(item.id)}
                            className="flex h-6 w-6 items-center justify-center rounded-full text-slate-300 hover:bg-slate-800"
                          >
                            -
                          </button>
                          <span className="min-w-[1.5rem] text-center text-[11px] font-medium text-slate-100">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onIncrement(item.id)}
                            className="flex h-6 w-6 items-center justify-center rounded-full text-slate-300 hover:bg-slate-800"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-semibold text-red-400">
                            Rp{' '}
                            {(item.price * item.quantity).toLocaleString('id-ID')}
                          </p>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-[11px] text-slate-500 hover:text-rose-400"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="space-y-3 px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Total
                </span>
                <span className="text-base font-semibold text-red-300">
                  Rp {total.toLocaleString('id-ID')}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: items.length ? 1.01 : 1 }}
                whileTap={{ scale: items.length ? 0.97 : 1 }}
                onClick={items.length ? onCheckout : undefined}
                disabled={items.length === 0}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-300 via-red-400 to-red-500 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy shadow-soft-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>Checkout via WhatsApp</span>
              </motion.button>
              <p className="text-[10px] text-slate-500">
                Dengan menekan checkout, Anda akan diarahkan ke WhatsApp resmi Qinin Cake
                dengan ringkasan pesanan otomatis.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CartModal



