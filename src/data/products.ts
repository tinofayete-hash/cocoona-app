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
    image: '👶',
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
    image: '🍼',
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
    image: '🧻',
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
    image: '🥜',
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
    image: '💦',
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
    image: '👕',
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
    image: '👶',
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
    image: '🧼',
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
    image: '🧦',
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
    image: '🌡️',
    description: 'Mesure rapide et sans contact. Écran LCD.',
    rating: 4.8,
    reviews: 1876,
    inStock: true,
  },
]
