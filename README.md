# Eat-De-Burger--ORM  
### You can find this app at : https://sleepy-castle-22988.herokuapp.com/

By:
Soheila Lotfi


### Overview

I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!) , followed the MVC design pattern; 
used Node and MySQL to query and routed data inthe app, and Handlebars to generate the HTML.

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right
side of the page.Then each burger on the right side has "delete" button. When the user clicks it, the burger will be deleted 
from the database and also from the screen.

* The app will store every burger in a database, whether devoured or not. However, when a user delete them,
they will be deleted from the database.

## Instructions

#### App Setup


1. Make a package.json file by running `npm init` from the command line.

2. Install the Express npm package: `npm install express`.

3. Create a server.js file.

4. Install the Handlebars npm package: `npm install express-handlebars`.

5. Install MySQL npm package: `npm install mysql`.

6. Require the following npm packages inside of the server.js file:
   * express

#### DB Setup

1. Inside the `burger` directory, create a folder named `db`.

2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   * Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line


#### Config Setup

1. Inside the `burger` directory, create a folder named `config`.

2. Create a `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, setup the code to connect Node to MySQL.

   * Export the connection.

3. Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
   These are the methods you need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.

#### Model setup

* Inside the `burger` directory, create a folder named `models`.

  * In `models`, make a `burger.js` file.

    * Inside `burger.js`, import `orm.js` into `burger.js`

    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    * Export at the end of the `burger.js` file.

#### Controller setup

1. Inside the `burger` directory, create a folder named `controllers`.

2. In `controllers`, create the `burgers_controller.js` file.

3. Inside the `burgers_controller.js` file, import the following:

   * Express
   * `burger.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside the `burger` directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Hosting on Heroku

I used Heroku for hosting.


- - -

![image](https://user-images.githubusercontent.com/49765334/64212619-f21e1a80-ce77-11e9-836a-f2927fa5e8a7.png)


![image](https://user-images.githubusercontent.com/49765334/64212636-04985400-ce78-11e9-8829-9048d8a7f95a.png)


