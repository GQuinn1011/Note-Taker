DROP DATABASE IF EXISTS ad5piavmbboomg5h;
CREATE DATABASE ad5piavmbboomg5h;

USE ad5piavmbboomg5h;

-- Create the notes table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  PRIMARY KEY(id)
);
SELECT * FROM notes;