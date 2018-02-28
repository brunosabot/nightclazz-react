## PW8 - Redux

Pour terminer ce codelab, nous allons intégrer la bibliothèque **Redux** afin de gérer les états de l'application.

* Installez le module `redux` et le module `react-redux`

* Créez le store qui sera utilisé dans l'ensemble de l'application.

* Lorsque l'utilisateur selectionne une bière, veuillez créer une mutation permettant d'ajouter la bière selectionnée au panier.

* Dans les composants `basket` et `menu`, utilisez le panier stocké dans le `store` pour afficher les informations nécessaires.

* Dans le composant principal, si la propriété stockée dans le `store` n'est pas définie, veuillez envoyer la requête vers le serveur, afin de l'initialiser.

* Faire la même chose pour la liste des bières de l'application
