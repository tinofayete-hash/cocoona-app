# 🚀 GUIDE COMPLET : GitHub → Vercel Déploiement

Suivi étape par étape pour pousser Cocoona sur GitHub et le déployer en live sur Vercel.

---

## ✅ PRÉREQUIS (À faire une seule fois)

### 1️⃣ Installer Git
```bash
# Vérifier si Git est installé
git --version

# Si absent, télécharger à https://git-scm.com
```

### 2️⃣ Installer Node.js
```bash
# Vérifier si Node est installé
node --version
npm --version

# Si absent, télécharger à https://nodejs.org (LTS)
```

### 3️⃣ Créer un compte GitHub (gratuit)
- Accédez à https://github.com/signup
- Remplissez votre email, mot de passe, nom d'utilisateur
- Cliquez "Create account"
- Vérifiez votre email

### 4️⃣ Configurer Git Localement
```bash
git config --global user.name "Tino"
git config --global user.email "tino@creativenation.com"

# Vérifier la config
git config --global --list
```

---

## 📋 ÉTAPE 1 : Préparer le Dossier Local

### 1. Créer le dossier du projet
```bash
# Depuis votre terminal/PowerShell
mkdir ~/Projects  # si le dossier n'existe pas
cd ~/Projects
```

### 2. Créer le dossier cocoona-app
```bash
mkdir cocoona-app
cd cocoona-app
```

### 3. Copier TOUS les fichiers créés
✅ Vous avez reçu les fichiers suivants:
- `package.json`
- `next.config.js`
- `tsconfig.json`
- `tailwind.config.js`
- `postcss.config.js`
- `README.md`
- `DEMO_GUIDE.md`
- `.gitignore`
- `.env.example`
- `tsconfig.node.json`

Et les dossiers:
- `src/app/` (7 pages)
- `src/components/` (Header, ProductCard)
- `src/data/` (products.ts)
- `src/store/` (useStore.ts)

**Copiez TOUT** dans `~/Projects/cocoona-app/`

### 4. Vérifier la structure
```bash
# Depuis cocoona-app/
ls -la

# Vous devez voir:
# - src/ (dossier)
# - package.json
# - README.md
# - .gitignore
# - etc.
```

---

## 🔧 ÉTAPE 2 : Initialiser Git Localement

### 1. Initialiser le repo Git
```bash
# Depuis ~/Projects/cocoona-app/
git init
```
✅ Cela crée un dossier `.git` caché

### 2. Ajouter TOUS les fichiers
```bash
git add .
```
✅ Le point `.` signifie "tous les fichiers"

### 3. Vérifier les fichiers prêts
```bash
git status
```
Vous devez voir des fichiers en vert (prêts à être committé)

### 4. Faire le premier commit
```bash
git commit -m "Initial commit: Cocoona MVP - Next.js + animations"
```
✅ Le message entre quotes décrit ce commit

---

## 🌐 ÉTAPE 3 : Créer le Repo sur GitHub

### 1. Aller sur GitHub
- Ouvrez https://github.com
- Connectez-vous avec vos identifiants

### 2. Créer un nouveau repo
- En haut à gauche, cliquez sur **votre avatar → "Your repositories"**
- Ou allez directement à https://github.com/new
- Cliquez le bouton vert **"New"**

### 3. Remplir les détails

```
Repository name: cocoona-app
Description: 24/7 baby product delivery web app
Visibility: Public (pour que Vercel puisse y accéder)
Initialize with: ❌ (LAISSEZ VIDE - vous avez déjà un repo local)
```

### 4. Cliquer "Create repository"
✅ GitHub crée votre repo et vous affiche des instructions

---

## 🔗 ÉTAPE 4 : Connecter Local → GitHub

### Vous verrez une page avec des commandes. Exécutez ceci:

```bash
# Depuis ~/Projects/cocoona-app/

# 1. Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/cocoona-app.git

# 2. Renommer la branche en "main"
git branch -M main

# 3. Pousser vers GitHub
git push -u origin main
```

**⚠️ Remplacez `VOTRE_USERNAME`** par votre nom d'utilisateur GitHub

### Exemple complet:
```bash
git remote add origin https://github.com/tino-creative/cocoona-app.git
git branch -M main
git push -u origin main
```

✅ Git vous demande votre identifiant GitHub (email/token)

---

## 🔐 ÉTAPE 5 : Authentification GitHub (Première Fois)

Si Git vous demande votre mot de passe:

### Option A: Token Personnel (Recommandé)
1. Accédez à https://github.com/settings/tokens
2. Cliquez "Generate new token"
3. Nommez-le: `github-cli-token`
4. Cochez: `repo` et `workflow`
5. Cliquez "Generate token"
6. **Copiez le token** (vous ne le reverrez plus !)
7. Collez-le quand Git vous le demande

### Option B: Authentification SSH (Plus avancé)
Voir: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

## ✅ ÉTAPE 6 : Vérifier que c'est sur GitHub

### 1. Ouvrez votre repo GitHub
```
https://github.com/VOTRE_USERNAME/cocoona-app
```

### 2. Vous devez voir:
✅ Tous vos fichiers
✅ Tous les dossiers (src/, etc.)
✅ Votre message de commit: "Initial commit: Cocoona MVP..."
✅ Le README.md affiché en bas

---

## 🚀 ÉTAPE 7 : Déployer sur Vercel (3 clics)

### 1. Aller sur Vercel
- Accédez à https://vercel.com
- Cliquez "Sign Up"
- Connectez-vous avec GitHub

### 2. Créer un nouveau projet
- Cliquez **"New Project"**
- Vercel va vous lister vos repos GitHub
- Cherchez **"cocoona-app"**
- Cliquez **"Import"**

### 3. Configurer le projet
```
Framework Preset: Next.js ✅ (auto-détecté)
Root Directory: ./
Environment Variables: (laissez vide pour now)
```

### 4. Cliquer "Deploy"
🎉 Vercel construit et déploie votre app !

---

## ⏳ ATTENDRE LA COMPILATION

Vercel affichera un log en direct:

```
✓ Cloning repository...
✓ Installing dependencies...
✓ Building application...
✓ Deployment complete!

Preview URL: https://cocoona-app-xyz123.vercel.app
```

---

## 🎉 ÉTAPE 8 : Accéder à Votre App Live

### Votre URL en production:
```
https://cocoona-app.vercel.app
```

(Ou un URL personnalisé que vous configurez dans Vercel)

### Testez-la:
✅ Accédez à `/`
✅ Cliquez "Commander"
✅ Testez la navigation complète
✅ Partagez l'URL à votre associé !

---

## 🔄 ÉTAPE 9 : Futures Modifications

### Quand vous voulez pusher des changements:

```bash
# 1. Faire vos modifications (ex: ajouter un produit)
# (Modifiez un fichier quelconque)

# 2. Ajouter les changements
git add .

# 3. Commiter
git commit -m "Feature: Add new baby products"

# 4. Pousser vers GitHub
git push

# Vercel détecte automatiquement et redéploie !
```

---

## 📋 CHECKLIST FINALE

```
✅ Git installé
✅ Node.js installé
✅ Compte GitHub créé
✅ Dossier cocoona-app/ avec tous les fichiers
✅ git init exécuté
✅ Premier commit fait localement
✅ Repo créé sur GitHub
✅ git push vers GitHub
✅ Fichiers visibles sur GitHub
✅ Compte Vercel créé
✅ Projet importé de GitHub vers Vercel
✅ Déploiement Vercel réussi
✅ URL live accessible et fonctionnelle
✅ Partagé à votre associé !
```

---

## 🆘 DÉPANNAGE

### "Permission denied (publickey)"
→ Problème d'authentification. Utilisez un token GitHub (voir Étape 5)

### "fatal: destination path 'cocoona-app' already exists"
→ Le dossier existe déjà. Utilisez un autre nom ou supprimez l'ancien

### "Vercel build failed"
→ Vérifiez que `npm install` fonctionne localement:
```bash
cd cocoona-app
npm install
npm run build
```

### "Page vierge après déploiement"
→ Vercel peut avoir besoin de la branche "main". Vérifiez dans Vercel Settings → Git

---

## 📞 SUPPORT

- Documentation Git: https://git-scm.com/doc
- Documentation Vercel: https://vercel.com/docs
- Aide GitHub: https://docs.github.com

---

**Vous y êtes presque ! 🚀**
