import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import CartModal from './components/CartModal.jsx'

function App() {
  const [theme, setTheme] = useState('dark')
  const [currentPage, setCurrentPage] = useState('landing')
  const [isLoading, setIsLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('foodies-theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
    } else {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.localStorage.setItem('foodies-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      ),
    [cartItems],
  )

  const handleCheckoutWhatsApp = () => {
    if (!cartItems.length) return

    const lines = cartItems.map(
      (item) =>
        `- ${item.name} x ${item.quantity} — Rp ${(
          item.price * item.quantity
        ).toLocaleString('id-ID')}`,
    )

    const message = [
  'Halo Qinin Cake \u{1F44B}',
  '',
  'Pesanan saya 🍰:',
  ...lines,
  '',
  `Total: Rp ${cartTotal.toLocaleString('id-ID')} 💳💰`,
  '',
  'Note Tambahan Untuk Request : ',
  'Tanggal Pengambilan : ',
  '',
  'Terima kasih \u{1F64F}',
].join('\n')

    const phone = '6285783573184'
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=` +
  encodeURIComponent(message)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const cartCount = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems],
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.15),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),transparent_55%)]" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar
          theme={theme}
          onToggleTheme={handleToggleTheme}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          cartCount={cartCount}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentPage === 'landing' ? (
                <LandingPage
                  isLoading={isLoading}
                  onSeeMenu={() => setCurrentPage('menu')}
                />
              ) : (
                <MenuPage isLoading={isLoading} onAddToCart={handleAddToCart} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="border-t border-slate-200/80 bg-white/80 dark:border-slate-800/80 dark:bg-slate-950/80">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 sm:flex-row md:px-6">
            <p>© {new Date().getFullYear()} Sponsored by Opalyth. All rights reserved.</p>
            <p></p>
          </div>
        </footer>
      </div>

      <CartModal
        isOpen={isCartOpen}
        items={cartItems}
        total={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        onCheckout={handleCheckoutWhatsApp}
      />
    </div>
  )
}

export default App
