### Comment utiliser l'automatisation ?

### Etape 0

On doit avoir au préalable installé docker et python, on suppose que tout le monde possède ces outils.

### Etape 1

```bash
pip install -r requirements.txt
```

### Etape 2

Créer un fichier .env dans le répertoire où se trouve le script
Le fichier devrait ressembler à ça :

:exclamation: Attention :exclamation:

Assurez vous que le token créer possède les droits de lecture de package

```
GITHUB_USER= <github username>
GITHUB_TOKEN=<github token>
```
