﻿app.controller("adminCtrl", ['$scope', 'adminSrv', '$state', '$localStorage', function ($scope, adminSrv, $state, $localStorage) {
    $scope.user = {
        Name: ""
    }
    $scope.getUserList = function () {
        if ($localStorage.status) {
            var GetUserList = adminSrv.GetUserList.getPromise();
            GetUserList.then(
            // OnSuccess function
            function (answer) {
                if (answer.data.GetUserlistAdminResult.ResponseCode == "0") {


                    $scope.userList = answer.data.GetUserlistAdminResult.Result;
                }

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                $scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;
                //$scope.somethingWrong = reason;
                //$scope.error = true;
            }
          )
        }
    }

    $scope.getuserPlanList = function (index) {
        var GetUserInfoList = adminSrv.GetUserInfoList.getPromise($scope.userList[index].LoginID);
        var GetUserPlanList = adminSrv.GetUserPlanList.getPromise($scope.userList[index].LoginID);
        GetUserPlanList.then(
        // OnSuccess function
        function (answer) {
            if (answer.data.GetUserPlanlistsResult.ResponseCode == "0") {
                if (answer.data.GetUserPlanlistsResult.Result.length > 0) {
                    $state.go('UserPlanDetails');
                    $scope.user.Name = $scope.userList[index].Name;
                    $scope.user.LoginID = $scope.userList[index].LoginID;
                    $scope.userPlanList = answer.data.GetUserPlanlistsResult.Result;

                                                GetUserInfoList.then(
                                               // OnSuccess function
                                               function (answer) {
                                                   if (answer.data.GetUserProfileDetailsInfoResult.ResponseCode == "0") {

                                                       $localStorage.userAdminDetail = answer.data.GetUserProfileDetailsInfoResult.Result;
                                                   }

                                               },
                                               // OnFailure function
                                               function (reason) {

                                                   $scope.ErrorMessage = answer.GetUserPlanlistsResult.ResponseMessage;
                                                   //$scope.somethingWrong = reason;
                                                   //$scope.error = true;
                                               }
                                             )
                }
                else {
                    alert("Do not have any plan associated with it.")
                }

            }

        },
        // OnFailure function
        function (reason) {

            $scope.ErrorMessage = answer.GetUserPlanlistsResult.ResponseMessage;
            //$scope.somethingWrong = reason;
            //$scope.error = true;
        }
      )
    }

    $scope.admin = {
        UserID: "",
        Password: ""
    }
    $scope.Login = function () {
        if ($scope.admin.UserID == "admin" && $scope.admin.Password == "admin") {
            $localStorage.status = true;
            $state.go('ListOfUser');
            $scope.getUserList();
        }
    }
    $scope.LogOut = function () {
        $localStorage.status = false;
        $scope.userList = [];
        $state.go('AdminLogin');
    }

    $scope.goToViewPage = function (index) {

        var GetUserInvestmentDetailsList = adminSrv.GetUserInvestmentDetailsList.getPromise($scope.user.LoginID, $scope.userPlanList[index].PlanID);
        GetUserInvestmentDetailsList.then(
        // OnSuccess function
        function (answer) {
            if (answer.data.GetUserInvestmentDetailsResult.ResponseCode == "0") {
                if (answer.data.GetUserInvestmentDetailsResult.Result.UserInvestmentSchemeDetailsData.length > 0) {
                    $state.go('UserSingleView');

                    $scope.usernvestmentdetails = answer.data.GetUserInvestmentDetailsResult.Result.UserInvestmentDetailsData;
                    $scope.UserInvestmentSchemeDetailsData = answer.data.GetUserInvestmentDetailsResult.Result.UserInvestmentSchemeDetailsData;

                }
                else {
                    alert("Do not have any plan associated with it.")
                }

            }

        },
        // OnFailure function
        function (reason) {

            $scope.ErrorMessage = answer.GetUserInvestmentDetailsResult.ResponseMessage;
            //$scope.somethingWrong = reason;
            //$scope.error = true;
        }
      )

    }

    $scope.GetAllDetails = function () {
        $scope.userCompleteDetails = $localStorage.userAdminDetail;
    };

}]);