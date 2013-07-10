JADE = $(shell find . -wholename './*.jade')
JS = $(shell find . -wholename './*.js')
HTML = $(JADE:.jade=.html)
HTML_PRETTY = $(JADE:.jade=.html_pretty)

all: $(HTML)
	# Depends on the js and HTML rules' completion, in that order
	# Copy the contents of the static directory into the output directory
	cp static/* output
	
pretty: index.jade static/*
	cp static/* pretty
	jade < index.jade --path index.jade --pretty > pretty/index.html

%.html: %.jade
	# For each <filename>.jade file in the curennt directory...
	# Create the output directory if it does not exist.
	mkdir -p output
	# Run the jade script on the template, and send the result to the output
	# directory as <filename>.html
	jade < $< --path $< > output/$@

clean:
	# To clean, remove all generated HTMl files, and the contents of the output
	# and bin directories.
	rm -f $(HTML)
	rm -f output/*
	rm -f bin/*
	rm -f pretty/*

.PHONY: clean