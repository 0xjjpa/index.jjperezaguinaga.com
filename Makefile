SHELL=/bin/bash
GULP=./node_modules/gulp/bin/gulp.js --gulpfile ./gulpfile.babel.js --cwd .
DOCKER=/usr/local/bin/docker

# Configurable variables 
DIST=./dist
DOCKER-FILE=Dockerfile
DOCKER-REPO=jjperezaguinaga/webpage

build-app:
	$(GULP) build

build-image:
	cp $(DOCKER-FILE) $(DIST)
	$(DOCKER) build -t=$(DOCKER-REPO) $(DIST)

build: build-app build-image

# Tutum.co
deploy-tutum:
	# Assumes docker login on tutum.co
	$(DOCKER)	tag -f $(DOCKER-REPO) tutum.co/$(DOCKER-REPO)

deploy: deploy-tutum
