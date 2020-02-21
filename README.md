# Note-Taker

## Introduction

Is a Node, Express, and MySQL powered note-taking application. You have the ability to create and delete notes from a MySQL database.

Deployed link: https://agile-fjord-54086.herokuapp.com/


### Prerequisites

Download and install on your computer:
* MySQL Workbench
* NodeJS

## Getting Started

* Clone the Repository
* Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and won't be commited to Github.
```
node_modules
.DS_Store
.env
```
* In the in your .env file put MYSQL_KEY='enter_your_password_here (the one you setup when you installed MySQL). This will allow to connect with oyur workbench.

* After you've completed the above steps you then have to install the following node modules in the command line in terminal/bash:
```
npm install <package name>
  * dotenv
  * mysql
  * express
  
```


### List of Features/Functions

To run program type in the command line:
* node server.js  
  * This will log you into the MySQL database and terminal will state your connected.
  * Then go to your browser type in localhost:3000, this should bring you to the Note Taking app home page to enter notes or view notes.
  * Once you type in a note and hit submit, click on view notes. You will see the note you just submitted.
  * If you type in the browser localhost:3000/api/newNote you will see your list of notes in JSON format.
  
### Built With
  
1. MySQL Workbench
1. javascript
1. node.js
1. https://www.npmjs.com/ - for node modules
  
