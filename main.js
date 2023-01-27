$(document).ready(function() {
    // cache DOM elements
    var $todoForm = $("#todo-form");
    var $taskInput = $("#task-input");
    var $taskList = $("#task-list");

    // Event listener for form submission
    $todoForm.on("submit", function(event) {
        event.preventDefault();
        var taskName = $taskInput.val();
        $taskList.append("<li>" + taskName + "</li>");
        $taskInput.val("");
    });

    // Event listener for task list items
    $taskList.on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
