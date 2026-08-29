'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingBag, User, LogOut } from 'lucide-react'
import { useStore } from '@/store/useStore'

export default function Header() {
  const { cart, user, isAuthenticated, logout } = useStore()
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cocoona-cream">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-3xl">🤱</span>
            <span className="font-display text-2xl font-bold text-cocoona-dark">
              Cocoona
            </span>
          </motion.div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-cocoona-dark hover:text-cocoona-bronze transition">
            Accueil
          </Link>
          <Link href="/produits" className="text-cocoona-dark hover:text-cocoona-bronze transition">
            Produits
          </Link>
          <Link href="/services" className="text-cocoona-dark hover:text-cocoona-bronze transition">
            Services
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link href="/panier">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
            >
              <ShoppingBag className="w-6 h-6 text-cocoona-dark" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cocoona-rose text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.div>
          </Link>

          {/* Auth */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-cocoona-dark">{user?.name}</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => logout()}
                className="p-2 hover:bg-cocoona-cream rounded-lg transition"
              >
                <LogOut className="w-5 h-5 text-cocoona-bronze" />
              </motion.button>
            </div>
          ) : (
            <Link href="/login">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <User className="w-6 h-6 text-cocoona-dark" />
              </motion.div>
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
