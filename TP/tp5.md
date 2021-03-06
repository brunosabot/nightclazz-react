## PW5 - Les Ressources

Nous allons à présent intégrer à notre application une API REST.
Pour lancer le serveur, vous devez exécuter la commande suivante :

```shell
cd server
npm install
npm start
```
ou
```shell
cd server
yarn
yarn start
```

Le serveur sera disponible via l'URL `http://localhost:1337/api/v1`.

Cette API propose plusieurs points d'entrée :

- `GET` sur `/beers` retournera la liste des bières
- `GET` sur `/basket`  retournera le panier de l'utilisateur
- `POST` sur `/basket` pour ajouter une nouvelle bière au panier de l'utilisateur

Pour consommer cette API nous allons utiliser `fetch` dans l'étape `componentDidMount` du cycle de vie React.

Dans le composant principal :

* Récupérez la liste des bières à afficher. Le tableau JavaScript que nous avions défini pourra à présent être remplacé.

* Récupérez le panier de l'utilisateur. Ce panier sera passé en paramètre du composant `menu` afin d'afficher les informations associées (nombre d'élément, montant du panier).

* Ajoutez lorsque l'utilisateur sélectionne une bière, veuillez l'ajouter au panier.
