// Récupération d'objet des composant importés
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Analyse les reqêtes de type - application/json
app.use(bodyParser.json());

// Analyse les requêtes de type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// On définit une route simple et on retourne un message de test
app.get("/", (req, res) => {
  res.json({ message: "Bravo l'API fonctionne correctement." });
});

// Définition du port en écoute
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Le serveur a démarré sur le port ${PORT}.`);
});