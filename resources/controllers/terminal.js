(function () {
    "use strict";
    
    frenkie.controller('terminalController', function ($scope, $http, $routeParams, $mdDialog) {
        
        $scope.logs = [];
        
        $scope.sendCommand = function () {
            console.log($scope.command);
            socket.emit('command', {
                command: $scope.command
            });
            $scope.command = '';
        }
        
        socket.on('logs', function (logs) {
            $scope.logs.push(logs);
        });
    })
    
})();