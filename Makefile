SHELL=/bin/bash
GULP=./node_modules/gulp/bin/gulp.js --gulpfile ./gulpfile.babel.js --cwd .
DOCKER=/usr/local/bin/docker

# Configurable variables 
DIST=./dist
DOCKER-REPO=jjperezaguinaga/webpage

build-app:
	$(GULP) build

build-image:
	$(DOCKER) build -t=$(DOCKER-REPO) $(DIST)

build: build-app build-image
