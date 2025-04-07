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
