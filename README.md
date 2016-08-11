# csv-to-dynamicHTML

The goal of this project is to create a build system that will take a .csv file and build it out to a bootstrap table that is searchable using angular filters. This is a work in process.

### Requirements:

- Gulp.js
- simplehttpserver

### Usage:

Run `git clone https://github.com/JoshKoiro/csv-to-dynamicHTML.git ` to clone the repo onto your machine and then run `npm install` to complete the initialization process.

Once you have the repo initialized, you next need to bring your .csv file and place it in the `./source-csv` folder.

Make sure you have gulp.js installed (see [link] for instructions on installing gulp.js globally).

Once you have Gulp installed, open a terminal in the project's root directory and run `gulp`.

This takes the .csv file and runs it through a parser to convert it to a json object.

Finally, in the project directory run `simplehttpserver`

Navigate to your localhost:8000, and view your csv file as a dynamic HTML webpage.

