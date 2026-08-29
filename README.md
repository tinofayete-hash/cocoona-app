# Cocoona - Plateforme de Livraison Express de Produits Bébé

Application web moderne pour la vente et la livraison express de produits pour bébé à Neuilly-sur-Seine et Levallois-Perret.

## 🎯 Fonctionnalités

- **Landing Page** : Hero section attrayante avec présentation des services
- **Catalogue Produits** : 10+ produits avec filtrage par catégorie et tri
- **Panier** : Gestion complète des articles avec animation fluide
- **Authentification** : Signup/Login basique avec Zustand
- **Checkout** : Processus de paiement simulé
- **Design Moderne** : Animations Framer Motion, Tailwind CSS, palette Cocoona
- **Responsive** : Optimisé pour mobile, tablette et desktop
- **PWA Ready** : Déployable sur Vercel

## 🚀 Déploiement Rapide (Vercel)

### Prérequis
- GitHub Account
- Vercel Account (gratuit)

### Étapes

1. **Créer un repo GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cocoona app"
   git remote add origin https://github.com/votre-username/cocoona-app.git
   git branch -M main
   git push -u origin main
   ```

2. **Déployer sur Vercel**
   - Accédez à [vercel.com](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre repo GitHub
   - Cliquez sur "Deploy"
   - Voilà ! Votre app est live 🎉

### URL de déploiement
`https://cocoona-app.vercel.app` (ou un domaine personnalisé)

## 💻 Développement Local

### Installation

```bash
# Cloner le repo
git clone https://github.com/votre-username/cocoona-app.git
cd cocoona-app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Accédez à `http://localhost:3000` dans votre navigateur.

### Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Créer un build de production
- `npm run start` - Lancer le serveur de production
- `npm run lint` - Vérifier le code

## 📁 Structure du Projet

```
cocoona-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Accueil
│   │   ├── produits/page.tsx   # Catalogue
│   │   ├── panier/page.tsx     # Panier
│   │   ├── checkout/page.tsx   # Paiement
│   │   ├── login/page.tsx      # Auth
│   │   ├── services/page.tsx   # Services
│   │   └── globals.css         # Styles globaux
│   ├── components/
│   │   ├── Header.tsx          # Navigation
│   │   └── ProductCard.tsx     # Composant produit
│   ├── data/
│   │   └── products.ts         # Données mockées
│   └── store/
│       └── useStore.ts         # Zustand store
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Design System

**Couleurs**
- Cream: `#F5F1EE`
- Beige: `#F9F7F5`
- Bronze: `#A67C52`
- Rose: `#E8B4A8`
- Sage: `#B8C9A8`

**Typography**
- Display: Playfair Display (serif)
- Body: Poppins (sans-serif)

**Animations**
- Framer Motion pour les micro-interactions
- Tailwind pour les transitions

## 🔧 Modifications Futures

Pour modifier le design ou ajouter des fonctionnalités :

1. **Produits** : Modifier `src/data/products.ts`
2. **Couleurs** : Mettre à jour `tailwind.config.js`
3. **Pages** : Ajouter des fichiers `.tsx` dans `src/app/`
4. **Composants** : Créer dans `src/components/`

## 📦 Dépendances

- **Next.js 14** : Framework React
- **React 18** : UI library
- **Tailwind CSS** : Styling
- **Framer Motion** : Animations
- **Zustand** : State management
- **Lucide React** : Icons

## ⚠️ Notes

- Les données sont mockées (JSON en mémoire)
- L'authentification est basique (sans backend)
- Le paiement est simulé (pas de vraie transaction)
- Pour la production, intégrer Firebase/Backend réel

## 📞 Support

Pour des questions ou améliorations, contactez Tino (Creative Nation)

---

**Version**: 0.1.0  
**Créé avec** ❤️ pour Cocoona

