'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react'
import { useStore } from '@/store/useStore'

export default function PanierPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore()
  const total = cartTotal()
  const deliveryFee = 0 // Livraison gratuite
  const finalTotal = total + deliveryFee

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cocoona-beige flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-md"
        >
          <div className="text-8xl">🛒</div>
          <h1 className="font-display text-3xl text-cocoona-dark">Votre panier est vide</h1>
          <p className="text-gray-600">
            Commencez par ajouter des produits à votre panier pour commander
          </p>
          <Link href="/produits">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cocoona-bronze text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux produits
            </motion.button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cocoona-beige py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/produits" className="text-cocoona-bronze hover:text-cocoona-dark font-semibold flex items-center gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Continuer vos achats
          </Link>
          <h1 className="font-display text-4xl text-cocoona-dark">Votre panier</h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg p-6 flex gap-6 items-start hover:shadow-md transition"
              >
                {/* Product Image */}
                <div className="text-4xl bg-cocoona-cream p-4 rounded-lg">
                  {item.image}
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-cocoona-dark text-lg">{item.name}</h3>
                  <p className="text-cocoona-bronze font-bold text-lg mt-2">
                    {item.price.toFixed(2)}€
                  </p>
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-2 bg-cocoona-cream rounded-lg p-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-1 hover:bg-white rounded transition"
                    >
                      <Minus className="w-4 h-4" />
                    </motion.button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white rounded transition"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <p className="text-gray-600 font-semibold">
                    {(item.price * item.quantity).toFixed(2)}€
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg p-8 sticky top-28 space-y-6 shadow-sm">
              <h2 className="font-display text-2xl text-cocoona-dark">Résumé</h2>

              <div className="space-y-3 border-t border-b border-cocoona-cream py-4">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span className="text-cocoona-sage font-semibold">Gratuite</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-display text-xl text-cocoona-dark">Total</span>
                <span className="font-bold text-2xl text-cocoona-bronze">
                  {finalTotal.toFixed(2)}€
                </span>
              </div>

              <Link href="/checkout">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-cocoona-bronze hover:bg-cocoona-dark text-white py-4 rounded-lg font-bold text-lg transition"
                >
                  Procéder au paiement
                </motion.button>
              </Link>

              <p className="text-xs text-gray-500 text-center">
                Livraison estimée: 30-60 minutes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
