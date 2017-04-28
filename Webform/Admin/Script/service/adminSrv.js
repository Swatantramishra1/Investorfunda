app.service("adminSrv", ['$http','$q', function ($http,$q) {
    var deferObject,
    GetUserList = {

        getPromise: function () {
            var promise = $http.get(API_GetUserListAdmin),
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
    GetUserInfoList = {

        getPromise: function (UserID) {
            var promise = $http.get(API_GetUserDetailsInfo + UserID),
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
    GetUserPlanList = {

        getPromise: function (ClientCode) {
            var promise = $http.get(API_GetUserPlanList + ClientCode),
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
    GetUserInvestmentDetailsList = {

        getPromise: function (ClientCode,PlanID) {
            var promise = $http.get(API_GetUserInvestmentDetails + ClientCode + "/"+PlanID),
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
        GetUserList: GetUserList,
        GetUserPlanList: GetUserPlanList,
        GetUserInvestmentDetailsList: GetUserInvestmentDetailsList,
        GetUserInfoList: GetUserInfoList
    }
}])