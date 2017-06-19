var frenkie = angular.module('frenkie', [
    'ngRoute',
    'ngMaterial',
    'ui.knob'
]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').dark();
});