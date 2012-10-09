define(["require", "exports", "models/Todo"], function(require, exports, __Model__) {
    var Model = __Model__;

    var task = new Model.Todo();
    alert(task.get("content"));
    task.set({
        "content": "First task to do"
    });
    alert(task.get("content"));
    $(document).ready(function () {
        alert("dom loaded");
    });
})

