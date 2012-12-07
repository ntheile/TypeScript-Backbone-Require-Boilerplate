define(["require", "exports", "models/Todo"], function(require, exports, __Model__) {
    /* Globals - jQuery, $, Backbone, _ */
    /// <reference path="libs/jquery.d.ts"/>
    /// <reference path="libs/backbone.d.ts"/>
    //import your classes
    var Model = __Model__;

    //initilize the backbone module
    var task = new Model.Todo();
    //Get the default value for content
    alert(task.get("content"));
    //Now set it to a new value
    task.set({
        "content": "First task to do"
    });
    //Get the new value we just set
    alert(task.get("content"));
    //This simply shows that jQuery works. In Visual Studio you get intellisense since we referenced jquery.d.ts!!
    $(document).ready(function () {
        alert("dom is loaded");
    });
})

//@ sourceMappingURL=app.js.map
