import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/habitats", "Les habitats", "/pages/habitats/habitats.html", {}),
    new Route("/services", "Les services", "/pages/services.html", []),
    new Route("/savane", "La savane", "/pages/habitats/savane.html",[]),
    new Route("/jungle", "La jungle", "/pages/habitats/jungle.html", []),
    new Route("/marais", "Le marais", "/pages/habitats/marais.html", []),
    new Route("/signin", "Espace salariés", "/pages/auth/signin.html", ["disconnected"]),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"), ["admin", "véto", "employé"],
    new Route("/galerie", "Galerie", "/pages/galerie.html", []),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";