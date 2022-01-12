# INFO909 : Intégration continue - Déploiement continu
## Kubasik Tom
## Bollon Ration

## A faire en amont du cours du 12 janvier

### Pré-requis

Docker et Python doivent être installés sur vos machines :
- https://docs.docker.com/engine/install/
- https://www.python.org/downloads/

### Récupération du dépôt git sur son compte

:exclamation: _Attention : on veut faire un **fork** du dépôt et pas juste le cloner, de sorte que chacun puisse faire toutes les manipulations._ :exclamation:

On commence par faire un fork du dépôt : 

![image](https://user-images.githubusercontent.com/43339411/148648272-13c335a0-c50a-4361-af7c-01a1098836d9.png)

On clique sur le bouton indiqué sur l'image, puis on choisit de faire le fork dans son propre espace.

![image](https://user-images.githubusercontent.com/43339411/148648366-5e7ad2ed-2282-4f09-aa80-430629114c86.png)

On obtient un dépôt similaire au dépôt original, mais dans ses propres dépôts git : ![image](https://user-images.githubusercontent.com/43339411/148648402-c04e8051-93f9-4857-a609-e1c3c590cf71.png)

Avant de cloner ce dépôt, il est nécessaire d'activer les GitHub Actions sur celui-ci. Cela se fait en cliquant sur ce bouton :
![image](https://user-images.githubusercontent.com/75121454/149013188-e41cbb8f-b23c-4b3d-be3b-b9a17f353a79.png)

Puis en les activant ici :
![image](https://user-images.githubusercontent.com/75121454/149013338-e5fd9b5b-2306-41a2-b53d-08ab46ccbf9e.png)

On peut ensuite cloner ce dépôt comme d'habitude : 

On récupère le lien vers le dépôt ici : ![image](https://user-images.githubusercontent.com/43339411/148648489-0fd35fe3-9234-45c9-9b16-10c26b443aa0.png)

Puis dans une console : 

```sh
mkdir info909
cd info909
git clone <lien du dépôt perso> .
```

## A faire pendant la séance du 12 janvier

### Tester la mise en place d'un serveur automatisé en local

Le but est ici de mettre en place un serveur local qui fera tourner l'application présente dans ce dépôt (une calculatrice web).

#### Etape 1 : Utiliser un token GitHub

Pour que le serveur soit autorisé à récupérer ce qui est poussé sur le dépôt git, il faut qu'il ait un token d'accès GitHub

##### Créer un token GitHub

:one: Sur github: Settings / Developer settings / Personal access tokens
  - [Cliquez ici](https://github.com/settings/tokens "Tokens")

:two: Generate new token

:exclamation: Attention :exclamation: Assurez-vous que le token créé possède les droits de lecture de package

:three: Sélectionnez  read:packages

![image](https://user-images.githubusercontent.com/75121454/148825832-205e6f9c-4305-4eaa-9689-4991ee1ce974.png)


##### Utiliser le token créé

Créez un fichier .env dans le répertoire `automatisation`, où se trouve le script

Le fichier devrait ressembler à ça :

```
GITHUB_USER=<github username>
GITHUB_TOKEN=<github token>
```
À noter que le 'github username' doit être écrit en minuscules.

#### Etape 2 : Mettre en place un serveur local automatisé

Dans le dossier `automatisation`, on installe les librairies python nécessaires.

```bash
pip install -r requirements.txt
```

Puis on peut exécuter le script qui démarre le serveur de l'application (docker doit être lancé sur la machine au préalable). Attention, ce script va récupérer une image docker automatiquement construite à chaque push sur la branche main. Cela ne fonctionnera donc pas s'il n'y a eu aucun commit/pull request sur la branche principale après avoir fork le projet (une image n'a pas encore été construite).
```bash
python script.py
```
Lorque le script pull une image, il lance automatiquement un conteneur pour l'exécuter. La calculatrice est alors accessible en <a href="http://127.0.0.1:8080">127.0.0.1:8080</a>.

### Premier exercice : intégration de la division

Comme vous avez pu le voir, l'application est une calculatrice simple avec l'addition, la soustraction et la multiplication. Ce premier exercice consiste à intégrer une fonctionnalité, la division.
Il existe donc une branche "division" sur le dépôt git, avec une fonction division et des tests associés déjà mis en place.
Pour ce premier exercice, créez une pull request de la branche division vers la branche master de **VOTRE** dépôt (attention, par défaut elle sera créée vers le dépôt de base que vous avez fork).
Depuis github, pouvez-vous repérer pourquoi cette pull request n'est pas valide ? 

Faites ensuite les modifications appropriées pour pouvoir merge la fonctionnalité de division.
Une fois les changements fusionnés à la branche principal, et si le script python est toujours actif, alors vous devriez pouvoir voir les changements ajoutés automatiquement à l'application (http://127.0.0.1:8080).

### Deuxième exercice : création d'une nouvelle fonctionnalité

Pour cette deuxième activité, le but sera d'ajouter une nouvelle fonctionnalité à la calculatrice : élever un nombre à une puissance choisie. Pour cela, il faudra écrire d'abord le test unitaire de cette fonction, puis implémenter la fonction en tant que telle. Il faudra également modifier l'interface pour pouvoir faire appel à cette fonction !
N'oubliez pas de créer une branche, afin de pouvoir ensuite réaliser une pull request.

Fichiers concernés :
Fonction : app/server.js
Test : app/tests.js
Interface : app/views/index.ejs

### Troisième exercice : Création d'une branche de développement

Pour cette dernière activité, le but sera de mettre en place une branche "dev" où les pushs déclencheront les tests afin de valider les changements importés. Pour cela, une solution possible est de vous inspirer du fichier ".github/workflows/docker-image.yml" et de créer un nouveau workflow (un nouveau fichier .yml). Dans l'idéal, seuls les tests seront exécutés sur la branche dev (pas la construction de l'image docker).
Créez la branche dev et mettez en place le lancement automatique des tests sur celle-ci. Vérifiez qu'ils sont bien exécutés à chaque push.