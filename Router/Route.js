export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize; 
    }
}



/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté 
["visiteur"] -> Réserver aux utilisateurs avec le rôle visiteur
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["véto"] -> Réserver aux utilisateurs avec le rôle vétérinaire 
["employé"] -> Réserver aux utilisateurs avec le rôle employé
["admin", "véto"] -> Réserver aux utilisateurs avec le rôle nommé
["admin", "employé"] -> Réserver aux utilisateurs avec le rôle nommé
["véto", "employé"] -> Réserver aux utilisateurs avec le rôle nommé
["admin" "véto", "employé"] -> Réserver aux utilisateurs avec le rôle nommé
*/