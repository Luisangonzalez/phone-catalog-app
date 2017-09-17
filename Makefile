.PHONY: build install_front dev_front build_front install_back dev_back build_back dev up

# Important
PROJECT_NAME=phone-catalog-app
DOCKER_COMPOSE_WEB=docker-compose -p ${PROJECT_NAME} -f environment/docker-compose.yml
DOCKER_COMPOSE_RUN_WEB=${DOCKER_COMPOSE_WEB} run web

default: build

install_front:
	${DOCKER_COMPOSE_RUN_WEB}  /bin/bash -ci "cd ./front && yarn";

dev_front: build_front
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./front && yarn run dev";

build_front: install_front
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./front && yarn run build";

install_back:
	${DOCKER_COMPOSE_RUN_WEB}  /bin/bash -ci "cd ./back && yarn";

dev_back: build_back
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./back && yarn run dev";

build_back: install_back
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./back && yarn run compile";

dev: build_back build_front
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./back && yarn run dev & sleep 5 && cd front && yarn run dev";

up:
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web /bin/bash

# create_test: build
# 		${DOCKER_COMPOSE_RUN_WEB} npm run createTest
#
