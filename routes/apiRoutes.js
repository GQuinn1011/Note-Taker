var router = require('express').Router();
var connection = require('../db/connection');

router.get("/api/newNote", function(req, res) {
    connection.query("SELECT * FROM notes", function(err, dbnewNote) {
        if (err) throw err;
        res.json(dbnewNote);
    })
});


router.post("/api/newNote", function(req, res) {
    connection.query("INSERT INTO notes SET ?", [req.body], function(err, result) {
        if (err) throw err;
        res.json(result);
    })
});

router.put("/api/newNote/:id", function(req, res) {
    connection.query("UPDATE notes SET ? WHERE id = ?", [req.body, req.params.id], function(err, result) {
        if (err) throw err;
        res.json(result);
    })
});

router.delete("/api/newNote/:id", function(req, res) {
    connection.query("DELETE FROM notes WHERE id = ?", [req.params.id], function(err, result) {
        if (err) throw err;
        res.json(result);
    })
})

module.exports = router;