# A Random Quote Generator (version 01) #

This program prints the following to the DOM:

What?

- a random quote w/ (source, citation, tag)
- a random background color

How?

- when the button `Show another quote` is clicked, setInterval function invokes the printQuote function
- the buttons text content changes to display `Stop slideshow`
- when the button `Stop slideshow` is clicked, clearInterval() is invoked, stopping setInterval(), program ends.

When?

- every 10 seconds