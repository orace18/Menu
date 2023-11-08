const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Indique à Express de servir les fichiers statiques à partir du répertoire "views"
app.use(express.static(path.join(__dirname, 'views')));

// Route pour servir le fichier "page.html"
app.get('/page', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route pour servir le fichier "autrepage.html"
app.get('/autrepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'autrepage.html'));
});

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil');
});

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
