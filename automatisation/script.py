import os
import time
from decouple import config

GITHUB_USER = config('GITHUB_USER')
GITHUB_TOKEN = config('GITHUB_TOKEN')

while (True):
    os.system('echo $(date -u)  "Login to GITHUB_TOKENgithub"')
    t = f'docker login -u {GITHUB_USER} -p {GITHUB_TOKEN} docker.pkg.github.com'
    print(t)
    os.system(t)
    os.system('echo $(date -u) "Refresh docker images"')
    os.system('docker-compose pull --include-deps')
    os.system('echo $(date -u) "Refresh docker images"')
    os.system(
        'docker-compose -p genie-log up -d --build --remove-orphans --force-recreate')
    os.system('echo $(date -u) "Kill current containers"')
    os.system('docker-compose down')
    os.system('echo $(date -u) "Refresh docker containers"')
    os.system('docker-compose up -d')
    os.system('echo $(date -u) "Housekeeping"')
    os.system('docker image prune -f')
    os.system('docker volume prune -f')
    os.system('echo DONE')
    time.sleep(300)