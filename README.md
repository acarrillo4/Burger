# Burger Application

### Overview
In this assignment, we created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). We followed the MVC design pattern; used Node and MySQL to query and route data in our app, and Handlebars to generate our HTML.

### How it works
* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `DEVOUR` button. When the user clicks it, the burger will move to the right side of the page.

* The app stores every burger in a database, whether devoured or not.

### Directory Structure
```
├── config
|  ├── connection.js
|  └── orm.js
├── controllers
|  └── burgersController.js
├── db
|  ├── schema.sql
|  └── seeds.sql
├── models
|  └── burger.js
├── node_modules
├── public
|   └── assets
|       └── css
|       └── images
|       └── js
├── views
|   ├── index.handlebars
|   ├── layouts
|   |   └── main.handlebars
|   └── partials
|        └── burgers
|            └──burger-block.handlebars
├── package.json
├── package-lock.json
└── server.js
```
