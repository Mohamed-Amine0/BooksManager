# BookStore-MERN-stack

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Une application MERN stack pour la gestion d'une librairie. Cette application permet aux utilisateurs de gérer une collection de livres, y compris l'ajout, la modification, la suppression et l'affichage des livres. Elle offre une interface utilisateur réactive et moderne grâce à React et TailwindCSS, et utilise une API RESTful construite avec Express et MongoDB pour la gestion des données.

## Présentation

### Table des matières
- [Présentation](#présentation)
- [Démarrage rapide](#démarrage-rapide)
- [Utilisation](#utilisation)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Contributions](#contributions)
- [Licence](#licence)
- [Autres](#autres)

### Fonctionnalités clés
- Ajouter, modifier, supprimer et afficher des livres
- Interface utilisateur réactive avec React et TailwindCSS
- API RESTful avec Express et MongoDB

## Démarrage rapide

### Prérequis
- Node.js: v18.0.0+
- MongoDB: v5.0+

### Installation
```bash
git clone <REPOSITORY_URL>
cd BookStore-MERN-stack
npm install
```

### Configuration minimale
Créez un fichier `.env` à la racine du répertoire backend avec le contenu suivant :
```env
PORT=5555
MONGODNURL=<YOUR_MONGODB_CONNECTION_STRING>
```

## Utilisation

### Exemple concret
Pour démarrer le serveur backend :
```bash
cd backend
npm run dev
```

Pour démarrer le serveur frontend :
```bash
cd frontend
npm run dev
```

### Variables d'environnement critiques
- `PORT`: Le port sur lequel le serveur backend écoute
- `MONGODNURL`: URL de connexion à la base de données MongoDB

### Cas d'usage typiques
- Gestion des livres dans une bibliothèque
- Application de démonstration pour le stack MERN

## Technologies

### Stack technique
- ![Node.js](https://img.shields.io/badge/Node.js-18.0.0+-brightgreen)
- ![Express](https://img.shields.io/badge/Express-4.21.2-blue)
- ![React](https://img.shields.io/badge/React-18.3.1-blue)
- ![MongoDB](https://img.shields.io/badge/MongoDB-5.0+-brightgreen)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.1-blue)

### Bibliothèques principales
- axios
- react-router-dom
- mongoose
- nodemon
- vite

## Architecture

### Schéma d'architecture
```mermaid
graph TD;
    A[Client] -->|HTTP Requests| B[Frontend (React)];
    B -->|API Calls| C[Backend (Express)];
    C -->|Database Queries| D[Database (MongoDB)];
```

### Structure des répertoires essentiels
```
BookStore-MERN-stack/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── config.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   ├── package.json
│   └── index.html
└── README.md
```

### Modèle-Vue-Contrôleur (MVC)

#### Modèles (Models)
Les modèles représentent les données et la logique métier de l'application. Dans ton projet, les modèles se trouvent dans le dossier `backend/models`. Par exemple :
- `backend/models/bookModel.js` : Ce fichier définit le schéma du modèle de données pour les livres.

#### Vues (Views)
Les vues sont responsables de l'affichage des données à l'utilisateur. Dans ton projet, les vues sont principalement gérées par le frontend avec React. Les fichiers de vue se trouvent dans le dossier `frontend/src`. Par exemple :
- `frontend/src/pages` : Contient les différentes pages de l'application (e.g., `Home.jsx`, `CreateBooks.jsx`, `EditBooks.jsx`, `ShowBook.jsx`, `DeleteBooks.jsx`).
- `frontend/src/components` : Contient les composants réutilisables de l'interface utilisateur (e.g., `BackButton.jsx`, `Spinner.jsx`, `home/BooksTable.jsx`, `home/BooksCard.jsx`).

#### Contrôleurs (Controllers)
Les contrôleurs gèrent la logique de l'application et les interactions entre les modèles et les vues. Dans ton projet, les contrôleurs se trouvent dans le dossier `backend/routes`. Par exemple :
- `backend/routes/booksRoute.js` : Ce fichier contient les routes et la logique pour gérer les requêtes HTTP liées aux livres (e.g., création, lecture, mise à jour, suppression de livres).

## Configurer la base de données MongoDB
- Voir la section [Configuration minimale](#configuration-minimale).
- Créez un compte sur MongoDB Atlas.
- Créez un projet et un cluster nommé `Books-Store-MERN`.
- Créez une base de données nommée `books-collection` et une collection (table) nommée `books`.
- Cliquez sur le cluster `Books-Store-MERN`, puis sur `Connect`.
- Choisissez `Drivers` dans `Connect to your application` et copiez l'URL de connexion.
- Utilisez cette URL de connexion dans le fichier de configuration `config.js` du backend.
