var bookStoreAPP = angular.module('bookStroeApp', ['ui.router', 'ngAnimate', 'bookStoreAppCtrls','bookStoreDirectives'])

bookStoreAPP.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/hello');
    $stateProvider
        .state('hello', {
            url: '/hello',
            templateUrl:'tpls/hello.html',
            controller:'HelloCtrl'
        })
        .state('list',{
            url:'/list',
            templateUrl:'tpls/list.html',
            controller:'BookListCtrl'
        })
        .state('login',{
            url:'/login',
            templateUrl:'tpls/login.html',
            controller:'LoginCtrl'
        })
        .state('directive',{
            url:'/directive',
            templateUrl:'tpls/directive.html',
            controller:'DirectiveCtrl'
        })
})