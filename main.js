$(document).ready(function() {
  
    var $todoForm = $("#todo-form");
    var $taskInput = $("#task-input");
    var $taskList = $("#task-list");
    $todoForm.on("submit", function(event) {
        event.preventDefault();
        var taskName = $taskInput.val();
        $taskList.append("<li>" + taskName + "</li>");
        $taskInput.val("");
    });
    $taskList.on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
