(function () {
    "use strict";
    frenkie.controller('defaultController', function ($scope, $http, $routeParams, $mdDialog) {
        $scope.value = 65;
        $scope.options = {
            startAngle: 30,
            endAngle: 330,
            unit: 'MB',
            trackColor: "rgba(189,191,193,1)",
            barColor: 'rgba(102,0,204,.5)',
            trackWidth: 15,
            barWidth: 15,
            subText: {
                enabled: true,
                text: 'RAM used'
            },
            max: 1024
        };

        $scope.value2 = 35;
        $scope.options2 = {
            unit: "%",
            scale: {
                enabled: true,
                type: 'dots',
                color: 'rgba(189,191,193,1)',
                width: 2,
                quantity: 50,
                spaceWidth: 10
            },
            trackWidth: 25,
            barWidth: 40,
            barColor: 'rgba(66,139,202,.2)',
            trackColor: 'rgba(0,0,0,.1)',
            dynamicOptions: true,
            subText: {
                enabled: true,
                text: 'CPU used',
                color: 'gray',
                font: 'auto'
            },
        };

        $scope.value3 = 3.4;
        $scope.options3 = {
            skin: {
                type: 'tron',
                width: 5,
                color: 'rgba(189,191,193,1)',
                spaceWidth: 3
            },
            barColor: '#CCC',
            trackWidth: 30,
            barWidth: 30,
            textColor: '#494B52',
            step: 0.1,
            max: 10
        };

        $scope.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    fillColor: 'rgba(92, 184, 92, 0.5)',
                    strokeColor: 'rgba(92, 184, 92, 0.7)',
                    highlightFill: 'rgba(92, 215, 92, 0.7)',
                    highlightStroke: 'rgba(92, 184, 92, 0.7)',
                    data: [65, 59, 80, 81, 56, 55, 40, 33, 22, 33, 55, 45]
                },
                {
                    fillColor: 'rgba(217 ,83 ,79, 0.5)',
                    strokeColor: 'rgba(217 ,83 ,79, 0.8)',
                    highlightFill: 'rgba(250 ,83 ,79, 0.8)',
                    highlightStroke: 'rgba(217 ,83 ,79, 0.8)',
                    data: [12, 12, 10, 12, 24, 12, 16, 12, 12, 13, 22, 13]
                }
            ]
        };
        
        $scope.drive = function (go, drive) {
            console.log(go, drive);
            socket.emit('control', {
                go: go,
                drive: drive
            });
        }
        
        $(document).keydown(function (e) {
            console.log(e.keyCode);
            switch(e.keyCode){
                case 38 : $scope.drive('forward', 'U');
                break;
                    
                case 40 : $scope.drive('back', 'D');
                break;
                    
                case 37 : $scope.drive('left', 'L');
                break;
                    
                case 39 : $scope.drive('right', 'R');
                break;
                    
                case 32 : $scope.drive('stop', 'S');
                break;
            }
        });
        
    })
})();