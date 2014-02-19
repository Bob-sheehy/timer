// this comment needs to be in javascript if your source file is .js
//  # is a coffee script comment
// // is a javascript comment

/*
# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
*/
 
jQuery(document).on("ready page:load", function() {
  $(function () { 
    $('#until2d').countdown({until: '+2d'});
  });
});
