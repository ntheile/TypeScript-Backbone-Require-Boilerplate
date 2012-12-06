/* Globals - jQuery, $, Backbone, _ */

/// <reference path="../libs/jquery.d.ts"/>
/// <reference path="../libs/backbone.d.ts"/>

declare var $: any;

export class Todo extends Backbone.Model  {
    
    defaults() {
        return {
            content: 'Default Thing to do'
        };
    };

    initialize() {
        alert("Todo init'd.");
    };

};
