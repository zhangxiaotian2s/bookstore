var bookStoreAppCtrls = angular.module('bookStoreAppCtrls', []);
bookStoreAppCtrls.controller('HelloCtrl', ['$scope',
    function ($scope) {
        $scope.greeting = {
            text: "hello"
        }
        $scope.pageClass='hello';
        $scope.loadDate= function () {
            console.log("dfwfwwww")
        }
    }
])
bookStoreAppCtrls.controller('BookListCtrl', ['$scope',
    function ($scope) {
        $scope.books = [
            {title: "范围", author: "xxfwefwef1"},
            {title: "范围", author: "xxfwefwef2"},
            {title: "范围", author: "xxfwefwef3"},
            {title: "你是谁啊", author: "xxfwefwef3"}
        ]
        $scope.pageClass='list';
        $scope.loadDate2= function () {
            console.log("dfwfww3333ww")
        }
    }
])
bookStoreAppCtrls.controller('LoginCtrl', ['$scope',
    function ($scope) {
        $scope.userInfo = {
            email: '5245414141@qq.com',
            password: 'fwefwefwef',
            autologin: true
        }
        $scope.getFormDate = function () {
            console.log($scope.userInfo)
        }
    }
])
bookStoreAppCtrls.controller('DirectiveCtrl', ['$scope',
    function ($scope) {
        //$scope.manshow={
        //    text:""
        //}
        $scope.pageClass='list';
    }
])

