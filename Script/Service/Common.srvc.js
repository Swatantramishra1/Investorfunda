
angular.module("app.ctrls", []).service('CommonSrvc', ['$http', '$q', function ($http, $q) {
    var deferObject,
    GetCountryDetails = {

        getPromise: function () {
            var promise = $http.get(API_GetCountryDetails),
                  deferObject = deferObject || $q.defer();

            promise.then(
              // OnSuccess function
              function (answer) {
                  // This code will only run if we have a successful promise.
                  deferObject.resolve(answer);
              },
              // OnFailure function
              function (reason) {
                  // This code will only run if we have a failed promise.
                  deferObject.reject(reason);
              });

            return deferObject.promise;
        }
    };
    GetStateDetails = {

        getPromise: function () {
            var promise = $http.get(API_GetStateDetails),
                  deferObject = deferObject || $q.defer();

            promise.then(
              // OnSuccess function
              function (answer) {
                  // This code will only run if we have a successful promise.
                  deferObject.resolve(answer);
              },
              // OnFailure function
              function (reason) {
                  // This code will only run if we have a failed promise.
                  deferObject.reject(reason);
              });

            return deferObject.promise;
        }
    };
    GetCityDetails = {

        getPromise: function () {
            var promise = $http.get(API_GetCityDetails),
                  deferObject = deferObject || $q.defer();

            promise.then(
              // OnSuccess function
              function (answer) {
                  // This code will only run if we have a successful promise.
                  deferObject.resolve(answer);
              },
              // OnFailure function
              function (reason) {
                  // This code will only run if we have a failed promise.
                  deferObject.reject(reason);
              });

            return deferObject.promise;
        }
    };
    GetTaxStatus = {

        getPromise: function () {
            var promise = $http.get(API_GetTaxStatus),
                  deferObject = deferObject || $q.defer();

            promise.then(
              // OnSuccess function
              function (answer) {
                  // This code will only run if we have a successful promise.
                  deferObject.resolve(answer);
              },
              // OnFailure function
              function (reason) {
                  // This code will only run if we have a failed promise.
                  deferObject.reject(reason);
              });

            return deferObject.promise;
        }
    };
    GetSourceOfWealth = {

        getPromise: function () {
            var promise = $http.get(API_GetSourceOfWealth),
                  deferObject = deferObject || $q.defer();

            promise.then(
              // OnSuccess function
              function (answer) {
                  // This code will only run if we have a successful promise.
                  deferObject.resolve(answer);
              },
              // OnFailure function
              function (reason) {
                  // This code will only run if we have a failed promise.
                  deferObject.reject(reason);
              });

            return deferObject.promise;
        }
    };
    HoldingNature = {

        getPromise: function () {
            var promise = $http.get(API_HoldingNature),
                  deferObject = deferObject || $q.defer();

            promise.then(
              // OnSuccess function
              function (answer) {
                  // This code will only run if we have a successful promise.
                  deferObject.resolve(answer);
              },
              // OnFailure function
              function (reason) {
                  // This code will only run if we have a failed promise.
                  deferObject.reject(reason);
              });

            return deferObject.promise;
        }
    };

    return {
        GetCountryDetails: GetCountryDetails,
        GetStateDetails: GetStateDetails,
        GetCityDetails: GetCityDetails,
        GetTaxStatus: GetTaxStatus,
        GetSourceOfWealth: GetSourceOfWealth,
        HoldingNature: HoldingNature

    };

}]);
//angular.module("app", []).factory('GetCommonData', ['$rootScope', function ($rootScope) {

//    var _factoryData = {};
//    getChildCommonData = {
//        "Name1": "COURSE FEE",
//        "Name2": "LIVING EXPENSES",
//        "Name3": "LUMPSUM AMOUNT",
//        "isShowDataChild": true
//    },
//     getRetirementCommonData = {
//         "Name1": "Current Age",
//         "Name2": "Retirement Age",
//         "Name3": "Currently Expenditure AMOUNT",
//         "isShowDataRetirement": true
//     },
//     getBuyHouseCommonData = {
//         "Name1": "Current Cost Of Home",
//         "Name2": "Your Loan Amount",
//         "Name3": "Your Monthly EMI",
//         "isShowDataBuyHouse": true
//     }
//    getBuyCarCommonData = {
//        "Name1": "Year To Achieve Goal",
//        "Name2": "Month To Achieve Goal",
//        "Name3": "Goal Amount",
//        "isShowDataBuyCar": true
//    }
//    getChildMarrigeCommonData = {
//        "Name1": "Budget For Wedding",
//        "Name2": "Year For Wedding",
//        "Name3": "Goal Year",
//        "isShowDataChildMarrige": true
//    }
//    getChildTourCommonData = {
//        "Name1": "Budget For World Tour",
//        "Name2": "Year For Tour",
//        "Name3": "Monthly Amount",
//        "isShowDataTour": true
//    }
//    return _factoryData = {
//        getChildCommonData: getChildCommonData,
//        getRetirementCommonData: getRetirementCommonData,
//        getBuyHouseCommonData: getBuyHouseCommonData,
//        getBuyCarCommonData: getBuyCarCommonData,
//        getChildMarrigeCommonData: getChildMarrigeCommonData,
//        getChildTourCommonData: getChildTourCommonData
//    }

//}]);
