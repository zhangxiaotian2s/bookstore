var bookStoreDirectives = angular.module('bookStoreDirectives', []);


bookStoreDirectives.run(function ($templateCache) {
    $templateCache.put('E_hello', '<div>hello,everyone <div ng-transclude></div></div>')
})

bookStoreDirectives.directive('hello', function ($templateCache) {
    return {
        restrict: 'AE',
        template: $templateCache.get('E_hello'),
        transclude: true,
        link: function (scope, element, attrs) {
            //element.bind('mouseenter', function () {
            //    //scope.$apply('loadDate()')
            //    scope.loadDate()
            //})
        }
    }
})
bookStoreDirectives.directive('superman', function ($scope) {
    return {
        scope: {},
        restrict: 'AE',
        controller: function () {
            $scope.abilites = [];
            this.addStrength = function () {
                $scope.abilites.push("力量");
            }
            this.addSpeed = function () {
                $scope.abilites.push("速度");
            }
            this.addLight = function () {
                $scope.abilites.push("发光");
            }
        },
        link: function (scope, element, attrs) {
            element.bind('mouseenter', function () {
                //$scope.manshow={
                //    text:scope.abilites
                //}
            })
        }
    }
})
bookStoreDirectives.directive('strength', function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, supermanCtrl) {
            supermanCtrl.addStrength()
        }
    }
})
bookStoreDirectives.directive('speed', function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed()
        }
    }
})
bookStoreDirectives.directive('light', function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight()
        }
    }
})
