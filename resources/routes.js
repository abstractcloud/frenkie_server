frenkie.config(['$routeProvider', function ($routeProvider) {
    
    "use strict";
    
    $routeProvider.when('/', {
        templateUrl: '/resources/views/default/index.html',
        controller: 'defaultController'
    });
}]);