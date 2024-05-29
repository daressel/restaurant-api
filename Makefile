# Makefile for managing Docker container operations

NODE_ENV ?= development
PROJECT_NAME := nest-app
RUN := run --rm

DOCKER_COMPOSE_FILES := -f docker-compose.yml
DOCKER_COMPOSE := docker-compose $(DOCKER_COMPOSE_FILES) --project-name $(PROJECT_NAME)
DOCKER_COMPOSE_RUN := $(DOCKER_COMPOSE) $(RUN)

run:
	${DOCKER_COMPOSE_RUN} -e "NODE_ENV=${NODE_ENV}" --service-ports db

down:
	${DOCKER_COMPOSE} down

build:
	${DOCKER_COMPOSE} build

install:
	${DOCKER_COMPOSE_RUN} -e "NODE_ENV=${NODE_ENV}" db 