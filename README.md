# Compression breaks SSE!

	./bin/www

Visit:

	http://localhost:3000/

Open console, and note SSE is happening.

Then edit app.js and uncomment

	app.use(compress)

Run the app and note SSE is broken.
