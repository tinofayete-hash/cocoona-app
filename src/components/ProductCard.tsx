'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart } from 'lucide-react'
import { Product } from '@/data/products'
import { useStore } from '@/store/useStore'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useStore()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative bg-cocoona-cream p-8 flex items-center justify-center h-48 overflow-hidden group">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-6xl transition-transform"
        >
          {product.image}
        </motion.div>
        {product.badge && (
          <div className="absolute top-3 right-3 bg-cocoona-rose text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-cocoona-bronze font-semibold uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="font-body font-semibold text-cocoona-dark text-sm line-clamp-2 mt-1">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-cocoona-rose text-cocoona-rose'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-cocoona-cream">
          <div>
            <span className="text-lg font-bold text-cocoona-bronze">
              {product.price.toFixed(2)}€
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`p-2 rounded-lg transition ${
              product.inStock
                ? 'bg-cocoona-bronze hover:bg-cocoona-dark text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
