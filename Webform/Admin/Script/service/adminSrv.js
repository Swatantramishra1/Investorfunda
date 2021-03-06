﻿app.service("adminSrv", ['$http','$q', function ($http,$q) {
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
    GetUserNotificationList = {

        getPromise: function () {
            var promise = $http.get(API_GetNotification),
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
    GetFolioList = {

        getPromise: function (Plan_ID) {

            var promise = $http.get(API_GetFolioDetails + Plan_ID),
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
    AdminGetActionList = {

        getPromise: function (UserID) {
            var promise = $http.get(API_getAllUserAction + UserID),
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

    UploadImage = {

        PostPromise: function (fd) {
            deferObject = deferObject || $q.defer();
            $http.post(API_InsertBlog + "/0/0/0", fd, {
                withCredentials: true,
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
            }).success(function (data, textStatus, jQxhr) {
                deferObject.resolve(data);
            })
      .catch(function (jqXhr, textStatus, errorThrown) {
          deferObject.reject(errorThrown);
      })
            return deferObject.promise;
        }
    };

    UpdteUploadImage = {

        PostPromise: function (PostData) {
            deferObject = deferObject || $q.defer();
            $.ajax({
                url: API_UpdateBlogDetails,
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(PostData),
                processData: false,
                async: false,
                success: function (data, textStatus, jQxhr) {
                    deferObject.resolve(data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    deferObject.reject(errorThrown);
                }
            });
            return deferObject.promise;
        }

    };
    userinvesment = {

        PostPromise: function (PostData) {
            deferObject = deferObject || $q.defer();
            $.ajax({
                url: API_InsertUserInvestment,
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(PostData),
                processData: false,
                async: false,
                success: function (data, textStatus, jQxhr) {
                    deferObject.resolve(data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    deferObject.reject(errorThrown);
                }
            });
            return deferObject.promise;
        }

    };
    getBlogDetails = {

        getPromise: function () {
            var promise = $http.get(API_GetBlogDetails),
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
    deleteBlockDetails = {

        getPromise: function (BlogID) {
            var promise = $http.get(API_DeleteBlog + BlogID),
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

    deleteUserPlan = {

        getPromise: function (Plan_ID) {
            var promise = $http.get(API_DeleteUserPlan + Plan_ID),
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
    UpdateClintCode = {

        getPromise: function (URID,ClientCode) {
            var promise = $http.get(API_UpdateClientCode + URID + "/" + ClientCode),
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
    UpdateMFInvestment = {

        PostPromise: function (PostData) {
            deferObject = deferObject || $q.defer();
            $.ajax({
                url: API_UpdateMFInvestDetails,
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(PostData),
                processData: false,
                async: false,
                success: function (data, textStatus, jQxhr) {
                    deferObject.resolve(data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    deferObject.reject(errorThrown);
                }
            });
            return deferObject.promise;
        }

    };
    UpdateFolio = {

        PostPromise: function (InvestmentSchemeID,Folio) {
            deferObject = deferObject || $q.defer();
            $.ajax({
                url: API_UpdateFolio + InvestmentSchemeID+"/"+Folio,
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                processData: false,
                async: false,
                success: function (data, textStatus, jQxhr) {
                    deferObject.resolve(data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    deferObject.reject(errorThrown);
                }
            });
            return deferObject.promise;
        }

    };
    return {
        GetUserList: GetUserList,
        GetUserPlanList: GetUserPlanList,
        GetUserInvestmentDetailsList: GetUserInvestmentDetailsList,
        GetUserInfoList: GetUserInfoList,
        AdminGetActionList: AdminGetActionList,
        UploadImage: UploadImage,
        UpdteUploadImage: UpdteUploadImage,
        getBlogDetails: getBlogDetails,
        deleteBlockDetails: deleteBlockDetails,
        UpdateClintCode: UpdateClintCode,
        UpdateMFInvestment: UpdateMFInvestment,
        userinvesment: userinvesment,
        deleteUserPlan: deleteUserPlan,
        UpdateFolio: UpdateFolio,
        GetFolioList: GetFolioList,
        GetUserNotificationList: GetUserNotificationList
    }
}])