* Javascript files can't use # as comments

* The Rails Asset Pipeline takes care of including all javascript for you.  Instead of using <script> tags, you should add the required javascript files to the app/assets/application.js file as a `require`.

* when you add javascript or css from external projects (downloaded from the net or wherever) you should put them in `vendor/assets/javascripts` or `vendor/assets/stylesheets` accordingly.  You can then add them to the `app/assets/application.js` or `application.css` (as appropriate) with the `require` syntax.

* you should *not* put javascript files under the app/views directory - they will not be found by rails



