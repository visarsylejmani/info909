import os
import time

while (True):
    os.system('echo $(date -u)  "Login to github"')
    os.system('docker login -u visarsylejmani -p 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 docker.pkg.github.com')
    os.system('echo $(date -u) "Refresh docker images"')
    os.system('docker-compose pull --include-deps')
    os.system('echo $(date -u) "Refresh docker images"')
    os.system('docker-compose -f /home/visar/webhook/click-and-work/docker-compose.yml -p click-and-work up -d --build --remove-orphans --force-recreate')
    os.system('echo $(date -u) "Kill current containers"')
    os.system('docker-compose down')
    os.system('echo $(date -u) "Refresh docker containers"')
    os.system('docker-compose up -d')
    os.system('echo $(date -u) "Housekeeping"')
    os.system('docker image prune -f')
    os.system('docker volume prune -f')
    os.system('echo DONE')
    time.sleep(300)