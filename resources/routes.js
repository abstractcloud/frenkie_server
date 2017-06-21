frenkie.config(['$routeProvider', function ($routeProvider) {
    
    "use strict";
    
    $routeProvider.when('/', {
        templateUrl: '/resources/views/default/index.html',
        controller: 'defaultController'
    })
    .when('/terminal', {
        templateUrl: '/resources/views/terminal/index.html',
        controller: 'terminalController'
    });
}]);