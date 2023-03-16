## Run

docker-compose up -d

## Delete

docker-compose down --rmi all
docker rmi $(docker images -a -q)

## list container

docker ps
docker image ls

docker volume
docker volume rm $(docker volume ls -q)
