DROP DATABASE IF EXISTS note_db;
CREATE DATABASE note_db;

USE note_db;

-- Create the notes table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  PRIMARY KEY(id)
);
SELECT * FROM notes;