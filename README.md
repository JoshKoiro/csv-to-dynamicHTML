# csv-to-dynamicHTML

The goal of this project is to create a build system that will take a .csv file and build it out to a bootstrap table that is searchable using angular filters. This is a work in process.

### Build Dependencies:

- **[Angular.js](https://angularjs.org/)** - version 1.57
- **[Jquery](https://jquery.com/)** - Version 2.24
- **[Bootstrap](http://getbootstrap.com/)** - Version 3.36

### Dev Dependencies:

- **[Gulp.js](http://gulpjs.com/)**
- **[simplehttpserver](https://www.npmjs.com/package/simplehttpserver)**

### Usage:

Run `git clone https://github.com/JoshKoiro/csv-to-dynamicHTML.git ` to clone the repo onto your machine and then run `npm install` to complete the initialization process.

---

Once you have the repo initialized, you next need to bring your .csv file and place it in the `./source-csv` folder.

- - -


Make sure you have gulp.js CLI installed globally as well as the local version installed for your repository. You can check this by using the `gulp --version` command.

![gulpVersion.png](csv-to-dynamicHTML/Readme images/gulpVersion.png)





Once you have Gulp installed, open a terminal in the project's root directory and run `gulp`.

- - -


The `gulp` command takes the .csv file and runs it through a parser to convert it to a json object.

- - -

Once that process is complete `simplehttpserver`

- - -


Navigate to your `http://localhost:8000/`, and you should be able to view the .csv file as a table.


- - -

### Next Steps:


- [ ] Integrate dynamically built filters for the table
- [ ] Integrate the ability to convert .csv into js without using gulp
- [ ] Build a UI interface to choose a .csv file from within the application
- [ ] Wrap into an Electron application (potential)
