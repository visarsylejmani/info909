### Comment utiliser l'automatisation ?

### Etape 0

On doit avoir au préalable installé docker et python, on suppose que tout le monde possède ces outils.

### Etape 1

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
GITHUB_USER= <github username>
GITHUB_TOKEN=<github token>
```
