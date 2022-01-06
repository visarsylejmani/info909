### Comment utiliser l'automatisation ?

### Etape 0

On doit avoir au préalable installé docker et python, on suppose que tout le monde possède ces outils.

Clonez le dépôt git

```sh
mkdir info909
cd info909
git clone https://github.com/visarsylejmani/info909.git .
```

Supprimez le dossier .git


Lancez les commandes suivantes après avoir créé un repository git sur votre github

Nom:info909

```sh
git init
```

```sh
git add .
```

```sh
git commit -m init
```

```sh
git remote add origin <Le lien de votre repository github>
```

```sh
git branch -M master
```

```sh
git push -u origin master
```

### Etape 1

Dans votre dossier automatisation

```bash
pip install -r requirements.txt
```

### Etape 2

:exclamation: Attention :exclamation:

Assurez vous que le token créer possède les droits de lecture de package

#### Pour le créer

:one: Sur github: Settings / Developer settings / Personal access tokens
  - [Clicez ici](https://github.com/settings/tokens "Tokens")

:two: Generate new token

:three: Sélectionnez  read:packages


Créer un fichier .env dans le répertoire où se trouve le script
Le fichier devrait ressembler à ça :

```
GITHUB_USER=<github username>
GITHUB_TOKEN=<github token>
```
