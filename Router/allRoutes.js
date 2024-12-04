import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/habitats", "Les habitats", "/pages/habitats/habitats.html", []),
    new Route("/services", "Les services", "/pages/services.html", []),
    new Route("/savane", "La savane", "/pages/habitats/savane.html", []),
    new Route("/jungle", "La jungle", "/pages/habitats/jungle.html", []),
    new Route("/marais", "Le marais", "/pages/habitats/marais.html", []),
    new Route("/contact", "Le marais", "/pages/contact.html",[]),
    new Route("/signin", "Connexion/Déconnexion salariés", "/pages/auth/signin.html",["connected"],"/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html",[],"/js/auth/signup.js"),
    new Route("/account", "Mon compte salarié", "/pages/auth/account.html", [] ),
    new Route("/galerie", "Galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/editPassword", "Changer de mot de passe", "/pages/auth/editPassword.html", []),
    new Route("/ensavoirplus", "En savoir plus", "/pages/ensavoirplus.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";