'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { CheckCircle, Loader, CreditCard, MapPin, User } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, cartTotal, isAuthenticated, user, clearCart } = useStore()
  const [loading, setLoading] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    phone: '',
  })

  const total = cartTotal()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cocoona-beige flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-md bg-white p-8 rounded-lg"
        >
          <div className="text-6xl">🔐</div>
          <h1 className="font-display text-3xl text-cocoona-dark">Authentification requise</h1>
          <p className="text-gray-600">
            Veuillez vous connecter ou créer un compte pour continuer
          </p>
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cocoona-bronze text-white px-8 py-3 rounded-lg font-semibold block w-full"
            >
              Se connecter
            </motion.button>
          </Link>
        </motion.div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cocoona-beige flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-md bg-white p-8 rounded-lg"
        >
          <div className="text-6xl">🛒</div>
          <h1 className="font-display text-3xl text-cocoona-dark">Panier vide</h1>
          <p className="text-gray-600">Ajoutez des produits avant de commander</p>
          <Link href="/produits">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cocoona-bronze text-white px-8 py-3 rounded-lg font-semibold block w-full"
            >
              Retour aux produits
            </motion.button>
          </Link>
        </motion.div>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulation du paiement
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setLoading(false)
    setOrderPlaced(true)
    clearCart()
    
    // Redirection après 3 secondes
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  if (orderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-br from-cocoona-sage to-cocoona-cream flex items-center justify-center px-4"
      >
        <div className="text-center space-y-6 max-w-md">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="flex justify-center"
          >
            <CheckCircle className="w-24 h-24 text-cocoona-sage" />
          </motion.div>
          <h1 className="font-display text-4xl text-cocoona-dark">Commande confirmée!</h1>
          <p className="text-lg text-gray-600">
            Votre commande a été validée. Livraison prévue dans 30-60 minutes.
          </p>
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div>
              <p className="text-sm text-gray-600">Commande #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p className="text-2xl font-bold text-cocoona-bronze">{total.toFixed(2)}€</p>
            </div>
            <p className="text-sm text-gray-600">Redirection vers l'accueil...</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-cocoona-beige py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl text-cocoona-dark mb-8"
        >
          Finaliser votre commande
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="md:col-span-2 space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-lg p-8 space-y-6">
              <h2 className="font-display text-2xl text-cocoona-dark flex items-center gap-3">
                <User className="w-6 h-6 text-cocoona-bronze" />
                Informations personnelles
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-cocoona-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full px-4 py-3 bg-cocoona-cream rounded-lg text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-cocoona-dark mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={user?.name || ''}
                    disabled
                    className="w-full px-4 py-3 bg-cocoona-cream rounded-lg text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-cocoona-dark mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 XX XX XX XX"
                    required
                    className="w-full px-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg p-8 space-y-6">
              <h2 className="font-display text-2xl text-cocoona-dark flex items-center gap-3">
                <MapPin className="w-6 h-6 text-cocoona-bronze" />
                Adresse de livraison
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-cocoona-dark mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 Rue de la Paix"
                    required
                    className="w-full px-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-cocoona-dark mb-2">
                    Ville
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze cursor-pointer"
                  >
                    <option value="">Sélectionnez une ville</option>
                    <option value="neuilly">Neuilly-sur-Seine</option>
                    <option value="levallois">Levallois-Perret</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-lg p-8 space-y-6">
              <h2 className="font-display text-2xl text-cocoona-dark flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-cocoona-bronze" />
                Paiement
              </h2>
              <p className="text-sm text-gray-600 bg-cocoona-cream p-4 rounded-lg">
                ℹ️ Paiement simulé - utilisez 4242 4242 4242 4242 pour tester
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Numéro de carte"
                  defaultValue="4242 4242 4242 4242"
                  className="w-full px-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    defaultValue="12/25"
                    className="px-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    defaultValue="123"
                    className="px-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze"
                  />
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-cocoona-bronze hover:bg-cocoona-dark disabled:bg-gray-400 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Traitement...
                </>
              ) : (
                `Confirmer la commande (${total.toFixed(2)}€)`
              )}
            </motion.button>
          </motion.form>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-1"
          >
            <div className="bg-white rounded-lg p-8 sticky top-28 space-y-6">
              <h2 className="font-display text-xl text-cocoona-dark">Récapitulatif</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 text-sm pb-3 border-b border-cocoona-cream">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-cocoona-dark text-xs line-clamp-2">{item.name}</p>
                      <p className="text-gray-600 text-xs">x{item.quantity}</p>
                    </div>
                    <p className="font-semibold whitespace-nowrap">{(item.price * item.quantity).toFixed(2)}€</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-cocoona-cream pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-cocoona-sage">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>
                <div className="border-t border-cocoona-cream pt-2 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-cocoona-bronze">{total.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
