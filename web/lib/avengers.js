var avengersApp = angular.module("avengersApp", []);
avengersApp.factory('Avengers', function () {
        var Avengers = {};
        Avengers.cast = [
            {
                name: "John",
                character: "Carmack"
            },
            {
                name: "Loew",
                character: "Meow"
            },
            {
                name: "Timmy",
                character: "Cocker"
            },
            {
                name: "Lilly",
                character: "Allen"
            },
            {
                name: "Anna",
                character: "Miri"
            },
            {
                name: "Michael",
                character: "Jordan"
            },
            {
                name: "Steffen",
                character: "Shepard"
            },
            {
                name: "Frederick",
                character: "Manu"
            },
            {
                name: "Frank",
                character: "Hard"
            }
        ];
        return Avengers;
    }
);

avengersApp.filter('reverse', function () {
    return function (message) {
        return message.split("").reverse().join("");
    };
})

avengersApp.controller('AvengersCtrl', function (Avengers) {
    this.avengers = Avengers;
});

avengersApp.directive('hero', function () {
    return {
        restrict: "E",
        template: "<div>Hello I'm a superhero!"

    };
});

avengersApp.directive('faster', function () {
    return {
        restrict: "A",
        link: function () {
            alert("I'm working faster now!")
        }
    };
});

avengersApp.directive('enter', function () {
    return function (scope, element) {
        element.bind('mouseenter', function () {
            console.log("I'm inside!");
        })
    };
});

avengersApp.directive('exit', function () {
    return function (scope, element) {
        element.bind('mouseleave', function () {
            console.log("I'm outside!");
        })
    };
});
