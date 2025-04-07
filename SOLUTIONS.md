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
