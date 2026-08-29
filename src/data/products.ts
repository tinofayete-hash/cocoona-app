export interface Product {
  id: string
  name: string
  category: 'Couches' | 'Alimentation' | 'Hygiène' | 'Vêtements' | 'Bien-être'
  price: number
  image: string
  description: string
  rating: number
  reviews: number
  inStock: boolean
  badge?: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Couches Pampers Premium Protection T2',
    category: 'Couches',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1587113835581-e730efad6ad0?w=400&h=400&fit=crop',
    description: 'Couches ultra-absorbantes pour bébés de 4-8 kg. Confort maximal, protection 24h.',
    rating: 4.9,
    reviews: 2483,
    inStock: true,
    badge: 'Best seller'
  },
  {
    id: '2',
    name: 'Lait Gallia Calisma 2 - 800g',
    category: 'Alimentation',
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1590080876990-cd51b1e8dbea?w=400&h=400&fit=crop',
    description: 'Lait 2e âge pour nourrissons. Formule adaptée de 6 à 12 mois.',
    rating: 4.7,
    reviews: 1845,
    inStock: true,
  },
  {
    id: '3',
    name: 'Lingettes WaterWipes - 60 unités',
    category: 'Hygiène',
    price: 3.90,
    image: 'https://images.unsplash.com/photo-1607860591413-07d5e293de94?w=400&h=400&fit=crop',
    description: 'Lingettes 99% eau. Douces et efficaces pour la peau délicate du bébé.',
    rating: 4.8,
    reviews: 3200,
    inStock: true,
  },
  {
    id: '4',
    name: 'Pâte à tartiner Good Goût - 120g',
    category: 'Alimentation',
    price: 2.20,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd27c4f?w=400&h=400&fit=crop',
    description: 'Pâte naturelle sans sucre ajouté. Bio certifié.',
    rating: 4.6,
    reviews: 892,
    inStock: true,
  },
  {
    id: '5',
    name: 'Spray corporel Mustela - 500ml',
    category: 'Bien-être',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Spray hydratant pour peau fragile. Formule testée dermatologiquement.',
    rating: 4.7,
    reviews: 1543,
    inStock: true,
  },
  {
    id: '6',
    name: 'Body en coton bio - Manches longues',
    category: 'Vêtements',
    price: 9.90,
    image: 'https://images.unsplash.com/photo-1519689373023-dd07faf4f82d?w=400&h=400&fit=crop',
    description: 'Body 100% coton biologique. Doux et respirant. 0-3 mois.',
    rating: 4.8,
    reviews: 1203,
    inStock: true,
  },
  {
    id: '7',
    name: 'Culotte d\'apprentissage Pull-Ups',
    category: 'Couches',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=400&h=400&fit=crop',
    description: 'Culotte d\'apprentissage facile à enfiler et retirer.',
    rating: 4.6,
    reviews: 945,
    inStock: true,
  },
  {
    id: '8',
    name: 'Savon doux Bébé Klorane - 100g',
    category: 'Hygiène',
    price: 5.90,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Savon surgras avec calendula. pH neutre, peau sensible.',
    rating: 4.9,
    reviews: 2100,
    inStock: true,
  },
  {
    id: '9',
    name: 'Chausson de bain antidérapant',
    category: 'Vêtements',
    price: 12.90,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop',
    description: 'Chausson de bain sécurisant. 0-2 ans.',
    rating: 4.7,
    reviews: 567,
    inStock: true,
  },
  {
    id: '10',
    name: 'Thermomètre frontal infrarouge',
    category: 'Bien-être',
    price: 35.90,
    image: 'https://images.unsplash.com/photo-1631217314830-e250f6b5f2b2?w=400&h=400&fit=crop',
    description: 'Mesure rapide et sans contact. Écran LCD.',
    rating: 4.8,
    reviews: 1876,
    inStock: true,
  },
]
