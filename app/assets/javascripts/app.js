var ticketHero = angular.module('ticketHero',['ui.router', 'templates']);

example.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('settings', {
            url: '/settings',
            templateUrl: 'templates/settings.html'
        })
        .state('settings.profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
        })
        .state('settings.account', {
            url: '/account',
            templateUrl: 'templates/account.html',
            controller: 'AccountController'
        });
    $urlRouterProvider.otherwise('/settings/profile');
}]);

//https://thinkster.io/angular-rails/