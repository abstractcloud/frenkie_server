var socket = io();
var frenkie = angular.module('frenkie', [
    'ngRoute',
    'ngMaterial',
    'ui.knob',
    'tc.chartjs'
]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').dark();
});

frenkie.socket = socket;