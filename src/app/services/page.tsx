'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Stethoscope, BookOpen } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Stethoscope,
    title: 'Accès santé immédiat',
    description: 'Discutez avec nos experts: sage-femme, pédiatre, médecin disponibles 24/7',
    color: 'cocoona-rose',
  },
  {
    icon: Heart,
    title: 'Bien-être bébé & parents',
    description: 'Massages, relaxation, conseils parentalité pour une sérénité optimale',
    color: 'cocoona-sage',
  },
  {
    icon: Users,
    title: 'Services de conciergerie',
    description: 'Garde d\'enfant temporaire, nettoyage spécialisé, préparation de repas',
    color: 'cocoona-bronze',
  },
  {
    icon: BookOpen,
    title: 'Masterclasses',
    description: 'Formation en ligne: alimentation, sommeil, développement de bébé',
    color: 'cocoona-rose',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-r from-cocoona-cream to-cocoona-beige py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-cocoona-dark"
          >
            Nos services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Au-delà des produits, nous vous offrons un soutien global pour votre parentalité
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-cocoona-beige rounded-xl p-8 space-y-4 hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cocoona-bronze to-cocoona-rose rounded-lg flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl text-cocoona-dark">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
                <button className="text-cocoona-bronze font-semibold hover:text-cocoona-dark transition">
                  En savoir plus →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cocoona-bronze to-cocoona-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl"
          >
            Découvrez comment Cocoona vous aide
          </motion.h2>
          <Link href="/produits">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-cocoona-bronze px-8 py-4 rounded-lg font-bold text-lg inline-block"
            >
              Commencer maintenant
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
