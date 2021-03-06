﻿

app.service('ULoginService', ['$http', '$q', '$httpParamSerializer', function ($http, $q,$httpParamSerializer) {
    var deferObject,
    LoginUser = {

        getPromise: function (Email, Password) {
            let returnValue;
            //var promise = $.ajax({
            //    type: 'GET',
            //    async: false,
            //    contentType: 'application/x-www-form-urlencoded; charset=iso-8859-1',
            //    url: API_Login_All + Email + "/" + Password,
            //    defaultHeaders: {
            //        'Content-Type': 'application/json',
            //        "Access-Control-Allow-Origin": "*",
            //        'Accept': 'application/json'
            //    },

            //    data: '',
            //    dataType: 'JSONP',
            //    success: function (response) {
            //        //    BindTableData();
            //        console.log("success ");
            //        alert(response);
            //        returnValue= response;
            //    },
            //    error: function (xhr) {
            //        console.log("error ");
            //        console.log(xhr);
            //        returnValue= xhr;
            //    }
            //});

            //return returnValue;
            var promise = $http.get(API_Login_All + Email + "/" + Password),
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
    updatePassword = {

        getPromise: function (mobile, Password) {
            let returnValue;
            //var promise = $.ajax({
            //    type: 'GET',
            //    async: false,
            //    contentType: 'application/x-www-form-urlencoded; charset=iso-8859-1',
            //    url: API_Login_All + Email + "/" + Password,
            //    defaultHeaders: {
            //        'Content-Type': 'application/json',
            //        "Access-Control-Allow-Origin": "*",
            //        'Accept': 'application/json'
            //    },

            //    data: '',
            //    dataType: 'JSONP',
            //    success: function (response) {
            //        //    BindTableData();
            //        console.log("success ");
            //        alert(response);
            //        returnValue= response;
            //    },
            //    error: function (xhr) {
            //        console.log("error ");
            //        console.log(xhr);
            //        returnValue= xhr;
            //    }
            //});

            //return returnValue;
            var promise = $http.get(API_UpdatePassword + mobile + "/" + Password),
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
    Register = {

        PostPromise: function (PostData) {
            deferObject = deferObject || $q.defer();
            $.ajax({
                url: API_UserRegistration,
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data:JSON.stringify( PostData),
                processData: false,
                async:false,
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
        LoginUser: LoginUser,
        Register: Register,
        updatePassword: updatePassword
    } 

}]);