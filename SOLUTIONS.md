# Solutions des problèmes

## Problème #1: Navigation incorrecte

### Nature du problème

La page se rechargeait entièrement quand on cliquait sur les liens du menu.
C'était pas normal pour une app Angular et ça rendait l'app lente.

### Solution technique

Dans app.component.html, j'ai remplacé les href par routerLink :

- Pour le lien Accueil : `href="/"` → `routerLink="/"`
- Pour le lien Bibliothèque : `href="/books"` → `routerLink="/books"`

### Concepts Angular utilisés

J'ai utilisé routerLink qui est une directive d'Angular pour la navigation.
Je pense que ça fait partie du système de routing d'Angular mais je suis pas sûr.

## Problème #2: Besoin de formatage de texte

### Nature du problème

Le titre de l'application n'est pas affiché correctement. Il y avait des underscores dedans et les majuscules n'étaient pas bien mises.

### Solution technique

J'ai créé un pipe personnalisé `formatTitle` dans le dossier pipes. Ce pipe fait plusieurs choses:

- Il remplace les "\_" par des espaces
- Il met la première lettre en majuscule
- Il met le reste en minuscule

### Concepts Angular utilisés

J'ai appris qu'on peut créer des pipes pour transformer des données avant de les afficher. Pour ça j'ai dû:

- Créer une classe avec le décorateur @Pipe
- Implémenter l'interface PipeTransform
- Coder la méthode transform qui fait les changements

## Problème #3: Structure de page incomplète

Même processus que le Problème 1

## Problème #4: Pages non affichées

### Nature du problème

Les pages ne s'affichaient pas quand on naviguait dans l'application. La balise `router-outlet` ne fonctionnait pas correctement.

### Solution technique

J'ai modifié le fichier app.component.ts pour ajouter l'import de CommonModule et réorganiser les imports dans le component.

### Concepts Angular utilisés

J'ai appris que pour faire fonctionner le router en Angular, il faut:

- Importer CommonModule dans le composant principal
- S'assurer que RouterOutlet est bien importé
- Déclarer ces modules dans la liste des imports du composant

## Problème #5: Route manquante

### Nature du problème

Il n'y avait pas de route pour afficher les détails d'un livre quand on cliquait dessus.

### Solution technique

J'ai ajouté une route dans le fichier app.routes.ts pour les détails d'un livre:

```
{ path: 'books/:id', component: BookDetailComponent }
```

### Concepts Angular utilisés

J'ai appris comment créer une route avec un paramètre dynamique:

- `:id` est un paramètre qui change selon le livre sélectionné
- Ce paramètre peut être récupéré dans le composant avec ActivatedRoute

## Problème #6 et #7

### Nature du problème

Le formulaire pour ajouter un nouveau livre était incomplet. Il ne créait pas les champs nécessaires.

### Solution technique

J'ai complété la méthode ngOnInit() dans le composant add-book en créant un formulaire avec FormBuilder:

```ts
this.bookForm = this.fb.group({
  title: ["", Validators.required],
  author: ["", Validators.required],
  description: ["", Validators.required],
  category: ["", Validators.required],
});
```

### Concepts Angular utilisés

J'ai utilisé:

- FormBuilder pour construire mon formulaire
- FormGroup pour regrouper tous les champs
- Validators.required pour rendre les champs obligatoires
- Reactive Forms qui est l'approche formulaire recommandée par Angular

## Problème #8: Navigation manquante

### Nature du problème

Le bouton de retour dans la page détail d'un livre ne fonctionnait pas correctement. Il retournait toujours à la liste des livres au lieu de la page précédente.

### Solution technique

J'ai modifié la méthode goBack() dans le composant book-detail pour utiliser la méthode location.back() qui permet de revenir à la page précédente:

```ts
goBack(): void {
  this.location.back();
}
```

### Concepts Angular utilisés

J'ai utilisé:

- La méthode back() qui simule le comportement du bouton retour du navigateur

## Problème #9: Erreur dans la console

### Nature du problème

Il y avait une erreur dans la console : "ERROR TypeError: Cannot read properties of undefined (reading 'title')".
C'était parce que le template essayait d'afficher les propriétés du livre avant que celui-ci ne soit chargé.

### Solution technique

J'ai ajouté une directive \*ngIf pour vérifier que le livre existe avant de l'afficher :

```html
<div class="book-card" *ngIf="book">
  <!-- le reste du code -->
</div>
```

### Concepts Angular utilisés

J'ai utilisé :

- Directive structurelle \*ngIf pour afficher conditionnellement un élément
- Gestion asynchrone des données qui arrivent après le chargement du template

## Problème #10: Directive non appliquée

### Nature du problème

Le titre du livre ne s'affichait pas de manière mise en évidence quand le livre était en favori.

### Solution technique

J'ai appliqué la directive appHighlight au titre du livre et je lui ai passé la propriété isFavorite comme valeur :

```html
<h1 class="book-title" [appHighlight]="book.isFavorite">{{ book.title }}</h1>
```

### Concepts Angular utilisés

J'ai utilisé :

- Directive d'attribut avec une liaison de propriété entre crochets []
- Passage d'une valeur à la directive via l'input @Input()
- Mise en évidence conditionnelle basée sur un état du livre

## Problème #11: Bouton non fonctionnel

### Nature du problème

Les boutons de l'application devaient être vérifiés pour s'assurer qu'ils réagissent correctement aux clics.

### Solution technique

Après vérification, tous les boutons sont déjà correctement implémentés dans le composant book-list :

- Navigation avec routerLink pour "Ajouter un livre" et "Retour"

## Problème #12: Données non affichées

### Nature du problème

Il y avait une incohérence dans l'affichage des données : le composant utilisait deux propriétés (`books` et `data`) mais seule `books` était correctement remplie. Le template vérifiait la présence de données dans `data` mais itérait sur `books`, ce qui pouvait empêcher l'affichage des livres.

### Solution technique

J'ai apporté deux modifications principales :

1. Dans le composant TypeScript :

   - Suppression de la propriété `data` inutilisée
   - Conservation uniquement de la propriété `books` qui est correctement remplie par le service

2. Dans le template HTML :
   - Remplacement de la condition `*ngIf="data && data.length > 0"` par `*ngIf="books.length > 0"`

### Concepts Angular utilisés

- Directives structurelles (*ngIf, *ngFor) pour le contrôle de l'affichage

## Problème #13: Descriptions trop longues

### Nature du problème

La description d'un livre prenait trop de place dans la page de détails.

### Solution technique

J'ai créé un pipe personnalisé `truncate` dans le dossier pipes. Ce pipe limite la longueur du texte à 100 caractères et ajoute des points de suspension si le texte est plus long.

```html
{{ book.description | truncate:100 }}
```

### Concepts Angular utilisés

J'ai utilisé :

- Un pipe personnalisé pour transformer les données avant de les afficher
- La méthode `substring` pour limiter la longueur du texte

## Problème #14: Notifications manquantes

### Nature du problème

L'application ne donnait aucun retour visuel à l'utilisateur après les actions importantes comme l'ajout aux favoris, la suppression d'un livre ou la mise à jour de la note. L'utilisateur ne savait donc pas si ses actions avaient réussi ou échoué.

### Solution technique

J'ai ajouté des alertes dans les différents composants pour informer l'utilisateur :

### Concepts Angular utilisés

J'ai utilisé :

- Les alertes JavaScript pour informer l'utilisateur

## Problème #15: Directive incomplète

### Nature du problème

La directive highlight ne mettait le texte qu'en gras, ce qui n'était pas suffisant pour une bonne mise en évidence visuelle des éléments favoris.

### Solution technique

J'ai amélioré la directive highlight pour ajouter l'effet en gras :

### Concepts Angular utilisés

J'ai utilisé :

- Les directives d'attribut avec le décorateur @Directive
- Le décorateur @Input pour recevoir des données du composant parent
- La manipulation directe des styles CSS via l'API du DOM

## Problème #16: Affiche une alerte qui indique que le favori a été modifié

### Solution technique

Déjà résolu dans le problème #14

## Problème #17: Affiche une alerte qui indique que la modification du favori a échoué

### Solution technique

Déjà résolu dans le problème #14

## Problème #18: Affiche une alerte qui indique que le livre a été supprimé

### Solution technique

Déjà résolu dans le problème #14

## Problème #19: Affiche une alerte qui indique que la suppression du livre a échoué

### Solution technique

Déjà résolu dans le problème #14
