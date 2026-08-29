'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { ArrowRight, Truck, Users, ShieldCheck, Clock } from 'lucide-react'

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

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-cocoona-cream via-cocoona-beige to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-cocoona-rose/10 text-cocoona-bronze px-4 py-2 rounded-full text-sm font-semibold">
                Livraison 30-60 min
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl leading-tight text-cocoona-dark">
              Tout ce dont votre bébé a besoin,{' '}
              <span className="text-cocoona-bronze">tout le soutien</span> dont vous avez
              besoin.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Livraison rapide, soins experts et services bien-être pour une parentalité
              sereine à Neuilly-sur-Seine, Levallois-Perret et alentours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/produits">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cocoona-bronze hover:bg-cocoona-dark text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition"
                >
                  Commander en 2 clics
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cocoona-bronze text-cocoona-bronze hover:bg-cocoona-bronze/5 px-8 py-4 rounded-lg font-semibold transition"
                >
                  Découvrir nos services
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-cocoona-rose/20">
              <div>
                <p className="text-3xl font-bold text-cocoona-bronze">30-60 min</p>
                <p className="text-sm text-gray-600">Livraison express</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cocoona-bronze">24/7</p>
                <p className="text-sm text-gray-600">Experts disponibles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cocoona-bronze">4.9★</p>
                <p className="text-sm text-gray-600">3000+ avis</p>
              </div>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-cocoona-rose/20 to-cocoona-sage/20 rounded-3xl"
              />
              <div className="absolute inset-0 flex items-center justify-center text-9xl">
                👨‍👩‍👧
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Truck,
                title: 'Livraison ultra-rapide',
                desc: '30 à 60 min',
              },
              {
                icon: Clock,
                title: 'Accès santé immédiat',
                desc: 'Sage-femme, pédiatre, chat 24/7',
              },
              {
                icon: Users,
                title: 'Experts de confiance',
                desc: 'Professionnels sélectionnés',
              },
              {
                icon: ShieldCheck,
                title: 'Paiement sécurisé',
                desc: 'CB, Apple Pay, etc.',
              },
            ].map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center space-y-4">
                <div className="inline-block p-4 bg-cocoona-cream rounded-full">
                  <feature.icon className="w-8 h-8 text-cocoona-bronze" />
                </div>
                <h3 className="font-display text-lg text-cocoona-dark">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-cocoona-beige">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-cocoona-dark mb-4">
              Les essentiels du moment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos produits phares sélectionnés avec soin pour vos bébés
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.slice(0, 5).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/produits">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cocoona-bronze hover:bg-cocoona-dark text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto transition"
              >
                Voir tous les produits
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cocoona-bronze to-cocoona-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl"
          >
            Prêts à faire vos achats ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90"
          >
            Profitez de la livraison express pour vos produits bébé essentiels
          </motion.p>
          <Link href="/produits">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-cocoona-bronze px-8 py-4 rounded-lg font-bold hover:bg-cocoona-cream transition inline-block"
            >
              Commander maintenant
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
