import { create } from 'zustand'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface User {
  id: string
  email: string
  name: string
  address?: string
}

interface Store {
  // Cart
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  cartTotal: () => number

  // Auth
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  signup: (email: string, name: string, password: string) => void
  logout: () => void
}

export const useStore = create<Store>((set, get) => ({
  // Cart
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((c) => c.id === item.id)
      if (existing) {
        return {
          cart: state.cart.map((c) =>
            c.id === item.id ? { ...c, quantity: c.quantity + item.quantity } : c
          ),
        }
      }
      return { cart: [...state.cart, item] }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
  cartTotal: () => {
    const state = get()
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  },

  // Auth
  user: null,
  isAuthenticated: false,
  login: (email, _password) =>
    set({
      user: {
        id: '1',
        email,
        name: email.split('@')[0],
      },
      isAuthenticated: true,
    }),
  signup: (email, name, password) =>
    set({
      user: {
        id: '1',
        email,
        name,
      },
      isAuthenticated: true,
    }),
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      cart: [],
    }),
}))
