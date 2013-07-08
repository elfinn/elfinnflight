JADE = $(shell find . -wholename './*.jade')
JS = $(shell find . -wholename './*.js')
HTML = $(JADE:.jade=.html)

all: js $(HTML)
	# Depends on the js and HTML rules' completion, in that order
	# Copy the contents of the static directory into the output directory
	cp static/* output

%.html: %.jade
	# For each <filename>.jade file in the curennt directory...
	# Create the output directory if it does not exist.
	mkdir -p output
	# Run the jade script on the template, and send the result to the output
	# directory as <filename>.html
	jade < $< --path $< > output/$@

js:
	# Create the bin directory if it does not exist.
	mkdir -p bin
	# Run the uglifyjs script on main.js and copy it to the bin directory.
	uglifyjs main.js > bin/main.js

clean:
	# To clean, remove all generated HTMl files, and the contents of the output
	# and bin directories.
	rm -f $(HTML)
	rm -f output/*
	rm -f bin/*

.PHONY: clean