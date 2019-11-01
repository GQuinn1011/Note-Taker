var newNoteList = $("#title");
var newNotetitle = $("#title");
var newNotebody = $("#body");
var submitBtn = $("#newNote-submit");
var deleteBtn = $("#newNote-clear");

var makeNewNote = function() {
    $.ajax({
        url: "/api/newNote",
        method: "GET"
    }).then(function(data) {
        var listItems = [];

        for (var i = 0; i < data.length; i++) {
            var newNote = data[i];

            var li = $("<li class='list-group-item'>").data(newNote);
            var row = $("<div class='row'>");
            var column11 = $("<div class='col-11'>");
            var newNoteBody = $("<p>").body('"' + newNote.body + '"');
            var titleNote = $("<p class='float-right'>").body("- " + newNote.title);
            var clearFix = $("<div class='clearfix'>");
            var ratingNote = $("<p class='float-right'>").body(newNote.rating);
            var column1 = $("<div class='col-1'>");
            var upIcon = $("<i class='fas fa-angle-up'>");
            var downIcon = $("<i class='fas fa-angle-down'>");

            li.append(
                row.append(
                    column11.append(newNoteBody, titleNote, clearFix, ratingNote),
                    column1.append(upIcon, downIcon)
                )
            );

            listItems.push(li);
        }

        newNoteList.empty();

        newNoteList.append(listItems);
    });
};

var submitNewNote = function(event) {
    event.preventDefault();

    var newNote = {
        title: newNotetitle.val().trim(),
        body: newNotebody.val().trim()
    };

    if (!newNote.title || !newNote.body) {
        alert("Please fill out all the required fields!");
        return;
    }

    $.ajax({
            url: "/api/newNote",
            method: "POST",
            data: newNote
        })
        .then(function() {
            makeNewNote();
            newNotetitle.val("");
            newNotebody.val("");
        });
};

submitBtn.on("click", submitNewNote);