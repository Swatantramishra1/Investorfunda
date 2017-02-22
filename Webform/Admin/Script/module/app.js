
var app = angular.module("app", ['ui.router', 'ngStorage']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/AdminLogin');
    $stateProvider
    .state('Index', {
        url: 'Index',
        templateUrl: '../../../../Index.html',
        
    })
    .state('AdminLogin', {
        url: '/AdminLogin',
        templateUrl: '../Admin/view/login.html'
    })
    .state('ListOfUser', {
        url: '/ListOfUser',
        templateUrl: '../Admin/view/userList.html'
    })
     .state('UserPlanDetails', {
         url: '/UserPlanDetails',
         templateUrl: '../Admin/view/userPlanDetails.html'
     })
        .state('UserSingleView', {
            url: '/UserSingleView',
         templateUrl: '../Admin/view/singleView.html'
     })
})