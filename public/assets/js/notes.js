// variables to create note list and content on html
var newNotesList = $("#newNotes-list");
var newNote = $("#num-newNotes");
// function to create new notes that get populated to html using ajax GET method from apiRoutes
var makeNewNotes = function() {
    $.ajax({
        method: "GET",
        url: "/api/newNote"
    }).then(function(data) {
        var newNotesListItems = [];

        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            var newNotes = data[i];
            var noteList = $("<li class='list-group-item'>");
            var title = $("<p>").text("Title: " + newNotes.title);
            var body = $("<p>").text("Body: " + newNotes.body);
            var deleteButton = $("<button data-noteid= " + newNotes.id + " type='button' class='delete'><span class='fa fa-trash'></button>");
            noteList.append(title, body, deleteButton);

            newNotesListItems.push(noteList);
        }

        newNotesList.append(newNotesListItems);
        newNote.text(newNotesListItems.length);
    });
};

makeNewNotes();
// delete button that deletes notes 
$(document).on("click", ".delete", function() {
    var dataID = $(this).data("noteid");
    $.ajax({
        url: "/api/newNote/" + dataID,
        type: "DELETE",
    }).then(
        function(data) {
            location.reload();
        }
    );
})