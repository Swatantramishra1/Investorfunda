﻿/// <reference path="../../Webform/Common/Blog/home.html" />
/// <reference path="../../Webform/Common/Home.html" />


var app = angular.module('app', ['ngMaterial', 'ngAnimate', 'ui.router', 'ngStorage', 'rzModule', 'ng-fusioncharts', 'angular.filter']);
//, 'ui.router']
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //
    // For any unmatched url, redirect to /state1
    
    $urlRouterProvider.otherwise("/Index");

    // Now set up the states
    $stateProvider
      .state('Index', {
          url: "/Index",
          templateUrl: "../../Webform/Common/Home.html",
          controller: "MainCtrl"
      })
        .state('CAL', {
            url: "/CAL",
            templateUrl: "../../Webform/Common/Calculator.html",
            controller: "MainCtrl"
        })
        .state('Authentication', {
            url: "/Authentication/:From",
            templateUrl: "../../Webform/Common/LoginRegister.html",
            controller: "AuthCtrl"
        })
      .state('SIP', {
          url: "/SIP",
          templateUrl: "../../Webform/Common/SIP/SIP.html",
          controller: "SIP.Ctrl"
      }).state('StartSIP', {
          url: "/StartSIP",
          templateUrl: "../../Webform/Common/SIP/EasySip.html",
          controller: "SIP.Ctrl"
      })
        .state('EasySIP', {
            url: "/EasySIP",
            templateUrl: "../../Webform/Common/SIP/EasySip.html",
            controller: "SIP.Ctrl"
        })
    .state('ChildGoal', {
        url: "/ChildGoal",
        templateUrl: "../../Webform/Common/SIP/SIP_ChildGoal.html",
        controller: "SIP.Ctrl"
    })
        .state('Retirement', {
        url: "/Retirement",
        templateUrl: "../../Webform/Common/SIP/SIP_RetirementGoal.html",
        controller: "SIP.Ctrl"
        })
        .state('HousePlan', {
        url: "/HousePlan",
        templateUrl: "../../Webform/Common/SIP/SIP_BuyHouse.html",
        controller: "SIP.Ctrl"
    }).state('CarPlan', {
        url: "/CarPlan",
        templateUrl: "../../Webform/Common/SIP/SIP_BuyCar.html",
        controller: "SIP.Ctrl"
    }).state('ChildMerrage', {
        url: "/ChildMerrage",
        templateUrl: "../../Webform/Common/SIP/SIP_ChildMerrage.html",
        controller: "SIP.Ctrl"
    }).state('Tour', {
        url: "/Tour",
        templateUrl: "../../Webform/Common/SIP/SIP_Tour.html",
        controller: "SIP.Ctrl"
    }).state('BankList', {
        url: "/BankList",
        templateUrl: "../../WebForm/HtmlPages/Bank/bankList.html",
        controller: "MainCtrl"
    }).state('MutualFunds', {
        url: "/MutualFunds",
        templateUrl: "../../Webform/Common/MutualFundsDetails.html",
        controller: "MtualFunds.Ctrl"
    })
    .state('MutualFundsList', {
        url: "/MutualFundsList",
        templateUrl: "../../Webform/Common/MutualFunds.html",
        controller: "MtualFunds.Ctrl"
    })
        .state('Faq', {
            url: "/Faq",
            templateUrl: "../../Webform/Common/faq.html",
            controller: "MtualFunds.Ctrl"
        }).state('ELSS', {
        url: "/ELSS",
        templateUrl: "../../Webform/Common/ElssListing.html",
        controller: "MtualFunds.Ctrl"
    }).state('CustomElss', {
        url: "/CustomElss",
        templateUrl: "../../Webform/Common/ElssCustomise.html",
        controller: "SIP.Ctrl"
    })
        .state('AdminUpload', {
        url: "/AdminUpload",
        templateUrl: "../../WebForm/HtmlPages/Admin/ExportExcel.html",
        controller: "MainCtrl"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "../../Webform/Common/contact.html",
            controller: "MainCtrl"})
            .state('about', {
                url: "/about",
                templateUrl: "../../Webform/Common/Aboutus.html",
                controller: "MainCtrl"
    }).state('compare', {
        url: "/compare",
        templateUrl: "../../Webform/Common/compare.html",
        controller: "MtualFunds.Ctrl"
    })
        .state('recommonded', {
            url: "/recommonded",
            templateUrl: "../../Webform/Common/recommonded.html",
            controller: "MtualFunds.Ctrl"
        }).state('corporateFixedDeposite', {
            url: "/corporateFixedDeposite",
            templateUrl: "../../Webform/Common/corporateFixedDeposite.html",
            controller: "MtualFunds.Ctrl"
        }).state('privacy', {
        url: "/privacy",
        templateUrl: "../../Webform/Common/privacyPolicy.html",
        controller: "MainCtrl"
    }).state('terms', {
        url: "/terms",
        templateUrl: "../../Webform/Common/terms.html",
        controller: "MainCtrl"
    }).state('blog', {
        url: "/blog",
        templateUrl: "../../Webform/Common/Blog/home.html",
        controller: "MainCtrl"
        
    }).state('blogDetails', {
        url: "/blogDetails/:title/:id",
        templateUrl: "../../Webform/Common/Blog/blogDetailPage.html",
        controller: "BlogCtrl"
    });

    //.state('state1.list', {
    //    url: "/list",
    //    templateUrl: "partials/state1.list.html",
    //    controller: function ($scope) {
    //        $scope.items = ["A", "List", "Of", "Items"];
    //    }
    //})
    //.state('state2', {
    //    url: "/state2",
    //    templateUrl: "partials/state2.html"
    //})
    //.state('state2.list', {
    //    url: "/list",
    //    templateUrl: "partials/state2.list.html",
    //    controller: function ($scope) {
    //        $scope.things = ["A", "Set", "Of", "Things"];
    //    }
    //});
});
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post['Content-Type'] = 'multipart/form-data; charset=utf-8';
}
]);

app.config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
});
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

app.config(function ($mdThemingProvider) {
    var customPrimary = {
        '50': '#00ffff',
        '100': '#00e6e6',
        '200': '#00cccc',
        '300': '#00b3b3',
        '400': '#009999',
        '500': '#008080',
        '600': '#006666',
        '700': '#004d4d',
        '800': '#003333',
        '900': '#001a1a',
        'A100': '#1affff',
        'A200': '#33ffff',
        'A400': '#4dffff',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#000a08',
        '100': '#00231d',
        '200': '#003d31',
        '300': '#005646',
        '400': '#00705a',
        '500': '#00896f',
        '600': '#00bc97',
        '700': '#00d6ac',
        '800': '#00efc0',
        '900': '#0affcf',
        'A100': '#00bc97',
        'A200': '#00a383',
        'A400': '#00896f',
        'A700': '#23ffd4'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#ffb280',
        '100': '#ffa266',
        '200': '#ff934d',
        '300': '#ff8333',
        '400': '#ff741a',
        '500': '#ff6400',
        '600': '#e65a00',
        '700': '#cc5000',
        '800': '#b34600',
        '900': '#993c00',
        'A100': '#ffc199',
        'A200': '#ffd1b3',
        'A400': '#ffe0cc',
        'A700': '#803200'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#737373',
        '100': '#666666',
        '200': '#595959',
        '300': '#4d4d4d',
        '400': '#404040',
        '500': '#333',
        '600': '#262626',
        '700': '#1a1a1a',
        '800': '#0d0d0d',
        '900': '#000000',
        'A100': '#808080',
        'A200': '#8c8c8c',
        'A400': '#999999',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customBackground',
                        customBackground);

    $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')
        .warnPalette('customWarn')
        .backgroundPalette('customBackground')
});



app.directive('ngFiles', ['$parse', function ($parse) {

    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function (event) {
            onChange(scope, { $files: event.target.files });
        });
    };

    return {
        link: fn_link
    }
}]);

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (data) {
            console.log(data);
        })
        .error(function () {
        });
    }
}]);
app.factory('GetCommonData', ['$rootScope', function ($rootScope) {

    var _factoryData = {};
    getChildCommonData = {
        "Name1": "COURSE FEE",
        "Name2": "LIVING EXPENSES",
        "Name3": "LUMPSUM AMOUNT",
        "isShowDataChild": true
    },
     getRetirementCommonData = {
         "Name1": "Current Age",
         "Name2": "Retirement Age",
         "Name3": "Currently Expenditure AMOUNT",
         "isShowDataRetirement": true
     },
     getBuyHouseCommonData = {
         "Name1": "Current Cost Of Home",
         "Name2": "Your Loan Amount",
         "Name3": "Your Monthly EMI",
         "isShowDataBuyHouse": true
     }
    getBuyCarCommonData = {
        "Name1": "Year To Achieve Goal",
        "Name2": "Month To Achieve Goal",
        "Name3": "Goal Amount",
        "isShowDataBuyCar": true
    }
    getChildMarrigeCommonData = {
        "Name1": "Budget For Wedding",
        "Name2": "Year For Wedding",
        "Name3": "Goal Year",
        "isShowDataChildMarrige": true
    }
    getChildTourCommonData = {
        "Name1": "Budget For World Tour",
        "Name2": "Year For Tour",
        "Name3": "Monthly Amount",
        "isShowDataTour": true
    }
    return _factoryData = {
        getChildCommonData: getChildCommonData,
        getRetirementCommonData: getRetirementCommonData,
        getBuyHouseCommonData: getBuyHouseCommonData,
        getBuyCarCommonData: getBuyCarCommonData,
        getChildMarrigeCommonData: getChildMarrigeCommonData,
        getChildTourCommonData: getChildTourCommonData
    }

}]);

app.directive('demoFileModel', function ($parse) {
    return {
        restrict: 'A', //the directive can be used as an attribute only

        /*
         link is a function that defines functionality of directive
         scope: scope associated with the element
         element: element on which this directive used
         attrs: key value pair of element attributes
         */
        link: function (scope, element, attrs) {
            var model = $parse(attrs.demoFileModel),
                modelSetter = model.assign; //define a setter for demoFileModel

            //Bind change event on the element
            element.bind('change', function () {
                //Call apply on scope, it checks for value changes and reflect them on UI
                scope.$apply(function () {
                    //set the model value
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
});


app.service('fileUploadService', function ($http, $q) {

    this.uploadFileToUrl = function (file, uploadUrl) {
        //FormData, object of key/value pair for form fields and values
        var fileFormData = new FormData();
        fileFormData.append('file', file);

        var deffered = $q.defer();
        $http.post(uploadUrl, fileFormData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        }).success(function (response) {
            deffered.resolve(response);

        }).error(function (response) {
            deffered.reject(response);
        });

        return deffered.promise;
    }
});

app.run(function ($rootScope, $location, $window) {
    // initialise google analytics
    $window.ga('create', 'UA-87385218-1', 'auto');

    // track pageview on state change
    $rootScope.$on('$stateChangeSuccess', function (event) {
        $window.ga('send', 'pageview', $location.path());

        dataLayer.push({
            event: 'ngRouteChange',
            attributes: {
                route: $location.path()
            }
        });
    });
})


