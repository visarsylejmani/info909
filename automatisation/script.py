import os
import time
from decouple import config

GITHUB_USER = config('GITHUB_USER')
GITHUB_TOKEN = config('GITHUB_TOKEN')

while (True):
    os.environ.setdefault(key='GITHUB_USER',value=GITHUB_USER)
    os.environ.setdefault(key='GITHUB_TOKEN',value=GITHUB_TOKEN)
    os.system('echo "Login to github"')
    os.system(f'docker login docker.pkg.github.com -u {os.environ.get("GITHUB_USER")} -p {os.environ.get("GITHUB_TOKEN")}')
    os.system('echo "Pulling images"')
    os.system('docker compose pull app')
    os.system('echo "Refresh docker images"')
    os.system('docker compose -p genie-log up -d --build --remove-orphans --force-recreate')
    os.system('echo DONE')
    time.sleep(15)
