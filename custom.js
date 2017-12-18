// Custom js file for New Primo Catalog

(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/  


    // version 1.
    /* StackMap: Start */
    app.component('prmSearchBarAfter', {
        template: `<div id="stackmap-cssloader">
            <link type="text/css" rel="Stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link type="text/css" rel="Stylesheet" href="https://www.stackmap.com/integration/<SUBDOMAIN>/StackMap.css">
        </div>`,
        controller: 'FullViewAfterController'
    });
    app.controller('FullViewAfterController', ['angularLoad', function (angularLoad) {
        var vm = this;
         vm.$onInit = function () {
            angularLoad.loadScript('https://www.stackmap.com/integration/<SUBDOMAIN>/StackMap.js')
        };
    }]);
    /* StackMap: END */


})();


// version 2.
/* StackMap: Start */
// (function(){

    // var a = document.querySelector("head");
    // var css1 = document.createElement("link"); 
    // css1.type = "text/css";
    // css1.rel = "Stylesheet";
    // css1.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    // css1.crossorigin = "anonymous";
    // a.appendChild(css1);

    // var css2 = document.createElement("link"); 
    // css2.type = "text/css";
    // css2.rel = "Stylesheet";
    // css2.href = "https://www.stackmap.com/integration/<SUBDOMAIN>/StackMap.css";
    // a.appendChild(css2);

    // var w = document.createElement("script"); 
    // w.type = "text/javascript"; w.async = true;
    // w.src = "https://www.stackmap.com/integration/<SUBDOMAIN>/StackMap.js";
    // var b = document.body;
    // b.appendChild(w);

// })();
/* StackMap: END */
   
