'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Filter } from 'lucide-react'

const categories = ['Tous', 'Couches', 'Alimentation', 'Hygiène', 'Vêtements', 'Bien-être']

export default function ProduitsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [sortBy, setSortBy] = useState('popular')

  const filteredProducts = selectedCategory === 'Tous'
    ? products
    : products.filter((p) => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-cocoona-cream to-cocoona-beige py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="font-display text-4xl md:text-5xl text-cocoona-dark">
              Nos produits
            </h1>
            <p className="text-gray-600 text-lg">
              Découvrez notre sélection de {products.length} produits essentiels pour bébé
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="sticky top-20 z-40 bg-white border-b border-cocoona-cream">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="space-y-4">
            {/* Categories */}
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-cocoona-bronze" />
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    selectedCategory === cat
                      ? 'bg-cocoona-bronze text-white'
                      : 'bg-cocoona-cream text-cocoona-dark hover:bg-cocoona-rose/10'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-cocoona-cream bg-white text-cocoona-dark cursor-pointer hover:border-cocoona-bronze transition"
              >
                <option value="popular">Populaire</option>
                <option value="price-low">Prix: bas au haut</option>
                <option value="price-high">Prix: haut au bas</option>
                <option value="rating">Meilleures notes</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-cocoona-beige">
        <div className="max-w-7xl mx-auto px-4">
          {sortedProducts.length > 0 ? (
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-600 mb-8"
              >
                {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
              </motion.p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-600">Aucun produit trouvé</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
