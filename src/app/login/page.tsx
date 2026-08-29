'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { Mail, Lock, User as UserIcon } from 'lucide-react'
import Link from 'next/link'

type Mode = 'login' | 'signup'

export default function LoginPage() {
  const router = useRouter()
  const { login, signup } = useStore()
  const [mode, setMode] = useState<Mode>('login')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulation d'une requête
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (mode === 'login') {
      login(formData.email, formData.password)
    } else {
      signup(formData.email, formData.name, formData.password)
    }

    setLoading(false)
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cocoona-cream via-cocoona-beige to-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 mb-12 cursor-pointer"
          >
            <span className="text-4xl">🤱</span>
            <span className="font-display text-3xl font-bold text-cocoona-dark">Cocoona</span>
          </motion.div>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          {/* Tabs */}
          <div className="flex gap-2 bg-cocoona-cream rounded-lg p-1">
            {(['login', 'signup'] as const).map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMode(tab)}
                className={`flex-1 py-2 rounded-md font-semibold transition ${
                  mode === tab
                    ? 'bg-white text-cocoona-bronze shadow-sm'
                    : 'text-gray-600 hover:text-cocoona-dark'
                }`}
              >
                {tab === 'login' ? 'Connexion' : 'Inscription'}
              </motion.button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name (Signup only) */}
            {mode === 'signup' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-cocoona-dark">
                  Nom complet
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cocoona-bronze" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jean Martin"
                    required={mode === 'signup'}
                    className="w-full pl-10 pr-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze transition"
                  />
                </div>
              </motion.div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-cocoona-dark">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cocoona-bronze" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze transition"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-cocoona-dark">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cocoona-bronze" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-cocoona-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-cocoona-bronze transition"
                />
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-cocoona-bronze hover:bg-cocoona-dark disabled:bg-gray-400 text-white py-3 rounded-lg font-bold text-lg transition"
            >
              {loading
                ? 'Chargement...'
                : mode === 'login'
                ? 'Se connecter'
                : "S'inscrire"}
            </motion.button>
          </form>

          {/* Demo Note */}
          <div className="bg-cocoona-cream p-4 rounded-lg text-sm text-gray-700 text-center">
            Demo: Utilisez n'importe quel email/mot de passe
          </div>
        </div>

        {/* Link back */}
        <div className="text-center mt-6">
          <Link href="/" className="text-cocoona-bronze hover:text-cocoona-dark font-semibold">
            ← Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
