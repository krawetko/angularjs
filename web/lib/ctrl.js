var myApp = angular.module("myApp", []);
myApp.factory('myData', function () {
    return {message: "I'm data from the service"};
})

myApp.filter('reverse', function (myData) {
    return function (message) {
        return message.split("").reverse().join("") + myData.message;
    };
})

myApp.controller('FirstCtrl', function ($scope, myData) {
    $scope.data = myData;
});

myApp.controller('SecondCtrl', function ($scope, myData) {
    $scope.data = myData;
    $scope.reversedMessage = function (message) {
        return message.split("").reverse().join("");
    };
});