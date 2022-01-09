## A faire pendant la séance du 12 janvier

### Récupération du dépôt git sur son compte

:exclamation: _Attention : on veut faire un **fork** du dépôt et pas juste le cloner, de sorte que chacun puisse faire toutes les manipulations._ :exclamation:

On commence par faire un fork du dépôt : 

![image](https://user-images.githubusercontent.com/43339411/148648272-13c335a0-c50a-4361-af7c-01a1098836d9.png)

On clique sur le bouton indiqué sur l'image, puis on choisit de faire le fork dans son propore espace.

![image](https://user-images.githubusercontent.com/43339411/148648366-5e7ad2ed-2282-4f09-aa80-430629114c86.png)

On obtient un dépôt similaire au dépôt original, mais dans ses propres dépôts git : ![image](https://user-images.githubusercontent.com/43339411/148648402-c04e8051-93f9-4857-a609-e1c3c590cf71.png)

On peut ensuite cloner ce dépôt comme d'habitude : 

On récupère le lien vers le dépôt ici : ![image](https://user-images.githubusercontent.com/43339411/148648489-0fd35fe3-9234-45c9-9b16-10c26b443aa0.png)

Puis dans une console : 

```sh
mkdir info909
cd info909
git clone <lien du dépôt perso> .
```

### Tester la mise en place d'un serveur automatisé en local


#### Etape 1 : Utiliser un token GitHub

Pour que le serveur soit autorisé à récupérer ce qui est poussé sur le dépôt git, il faut qu'il est des tokens d'accès GitHub

##### Créer un token GitHub

:one: Sur github: Settings / Developer settings / Personal access tokens
  - [Cliquez ici](https://github.com/settings/tokens "Tokens")

:two: Generate new token

:three: Sélectionnez  read:packages

:exclamation: Attention :exclamation: Assurez-vous que le token créé possède les droits de lecture de package

##### Utiliser le token créé

Créer un fichier .env dans le répertoire `automatisation`, où se trouve le script

Le fichier devrait ressembler à ça :

```
GITHUB_USER=<github username>
GITHUB_TOKEN=<github token>
```


#### Etape 2 : Mettre en place un serveur local automatisé

Dans le dossier `automatisation`, on installe les librairies python nécessaires.

```bash
pip install -r requirements.txt
```

Puis on peut lancer le script de lancement du serveur :

```bash
python script.py
```
