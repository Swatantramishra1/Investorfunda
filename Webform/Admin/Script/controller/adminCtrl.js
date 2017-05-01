app.controller("adminCtrl", ['$scope', 'adminSrv', '$state', '$localStorage', 'textAngularManager', function ($scope, adminSrv, $state, $localStorage, textAngularManager) {
    $scope.user = {
        Name: ""
    }
    $scope.version = textAngularManager.getVersion();
    $scope.versionNumber = $scope.version.substring(1);
    $scope.blog = {
        header: "",
        Image: "",
        category: "",
        htmlContent:""
    }
    $scope.blog.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE9+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>';



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

    $scope.getuserActionList=function(index)
    {

        $state.go('ActionList');

        var AdminGetActionList = adminSrv.AdminGetActionList.getPromise($scope.userList[index].LoginID);
        AdminGetActionList.then(
        // OnSuccess function
        function (answer) {
            if (answer.data.getAllUserActionResult.ResponseCode == "0") {
                if (answer.data.getAllUserActionResult.Result.Admin_getAllActionListData.length > 0) {
                    
                    $scope.getuserActionListData = answer.data.getAllUserActionResult.Result.Admin_getAllActionListData;
                  

                }
                else {
                    alert("Do not have any plan associated with it.")
                }

            }

        },
        // OnFailure function
        function (reason) {

            $scope.ErrorMessage = answer.getAllUserActionResult.ResponseMessage;
            //$scope.somethingWrong = reason;
            //$scope.error = true;
        }
      )
    }


}]);