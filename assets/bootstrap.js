import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/angular-material/angular-material.css";
import "./css/main.css";

(function () {
    'use strict';
    
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('angular');
    require('angular-route');
    require('angular-sanitize');
    require('angular-animate');
    require('angular-aria');
    require('angular-material');
    require('../bower_components/d3/d3.js');
    require('../bower_components/ng-knob/dist/ng-knob.js');
    require('tc-angular-chartjs');
})();