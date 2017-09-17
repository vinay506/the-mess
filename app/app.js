var app = angular.module('app', [

    'ngCookies',
    'ngRoute',
    'ui-notification',
    'ngStorage',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'nya.bootstrap.select',
    'oitozero.ngSweetAlert'
]);
app.config(function($routeProvider, $locationProvider, NotificationProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/app/components/login/loginPage.html',
            controller: "loginController",
        })
        .when('/home', {
            templateUrl: '/app/components/home/home.html',
            controller: 'homeController'
        })
        .when('/messDetails', {
            templateUrl: '/app/components/mess-details/messDetails.html',
            controller: 'messDetailsCtrls'
        })
        .when('/pendings', {
            templateUrl: '/app/components/pendings/pendings.html',
            controller: 'pendingsCtrls'
        })
        .otherwise({
            redirectTo: '/login'
        })

    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'left',
        positionY: 'bottom'
    });

});


/*var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            template: 'I could sure use a drink right now.'
        })


});*/