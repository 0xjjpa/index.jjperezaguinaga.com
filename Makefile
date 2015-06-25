SHELL=/bin/bash
GULP=./node_modules/gulp/bin/gulp.js --gulpfile ./gulpfile.babel.js --cwd .

build:
	$(GULP) build
