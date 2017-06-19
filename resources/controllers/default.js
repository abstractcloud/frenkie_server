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

        $scope.value3 = 5.4;
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
    })
})();