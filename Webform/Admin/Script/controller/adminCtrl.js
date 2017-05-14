app.controller("adminCtrl", ['$scope', 'adminSrv', '$state', '$localStorage', 'textAngularManager', '$rootScope', '$http', function ($scope, adminSrv, $state, $localStorage, textAngularManager,$rootScope, $http) {
    $scope.user = {
        Name: ""
    }
    $scope.EditBlogStatus = false;
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


    $scope.getUserDetails = function (UserID)

    {
        $state.go("UserView");
        var GetUserInfoList = adminSrv.GetUserInfoList.getPromise(UserID);
        GetUserInfoList.then(
        // OnSuccess function
        function (answer) {
            if (answer.data.GetUserProfileDetailsInfoResult.ResponseCode == "0") {
               
                $scope.UserInfoDetails = answer.data.GetUserProfileDetailsInfoResult.Result;

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

    $scope.InsertBlog = function () {


        if (!$scope.EditBlogStatus)
        {
            var Datafiles = document.getElementById("blogImage");
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", Datafiles.files[0]);

            $http.post(API_InsertBlog + "/0/0/0", fd, {
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
            })
          .success(function (data, status) {
              var postData = {
                  "request": {
                      Header: $scope.blog.header,
                      Content: $scope.blog.htmlContent,
                      BlogID: data.InsertBlogDetailsResult.Result,
                      CategoryID: $scope.blog.category,
                      Tags: $scope.blog.Tags,
                      Summary: $scope.blog.Summary,
                      Author: $scope.blog.Author
                  }
              }

              var UpdteUploadImage = adminSrv.UpdteUploadImage.PostPromise(postData);
              UpdteUploadImage.then(
              // OnSuccess function
              function (answer) {
                  alert("Blog Inserted Succesfully")

              },
              // OnFailure function
              function (reason) {


                  //$scope.somethingWrong = reason;
                  //$scope.error = true;
              }
            )

          })
          .catch(function (response) {
              alert("Blog Inserted Failed")
              // $rootScope.UploadMessage = "File Uploaded Successfully";
          });
        }
        else {
            var UpdateBlog = function () {
                var postData = {
                    "request": {
                        Header: $scope.blog.header,
                        Content: $scope.blog.htmlContent,
                        BlogID: $scope.blog.Blog_ID,
                        CategoryID: $scope.blog.category,
                        Tags: $scope.blog.Tags,
                        Summary: $scope.blog.Summary,
                        Author: $scope.blog.Author
                    }
                }

                var UpdteUploadImage = adminSrv.UpdteUploadImage.PostPromise(postData);
                UpdteUploadImage.then(
                // OnSuccess function
                function (answer) {
                    $scope.EditBlogStatus = false;
                    alert("Blog Inserted Succesfully")

                },
                // OnFailure function
                function (reason) {

                }
              )
            }

            if (document.getElementById("blogImage").value != "") {
                var Datafiles = document.getElementById("blogImage");

                var fd = new FormData();
                //Take the first selected file
                fd.append("file", Datafiles.files[0]);
                var URL = API_UpdateBlogImage + $scope.blog.Blog_ID;
                $http.post(URL, fd, {
                    headers: { 'Content-Type': undefined },
                    transformRequest: angular.identity
                })
              .success(function (data, status) {
                  UpdateBlog();

              })
              .catch(function (response) {
                  alert("Blog Inserted Failed")
                  // $rootScope.UploadMessage = "File Uploaded Successfully";
              });
            }
        }

        
    }

  
    var getBlogDetails = adminSrv.getBlogDetails.getPromise();
    getBlogDetails.then(
        // OnSuccess function
        function (answer) {


            $scope.DetailsBlogList = answer.data.GetBlogDetailsResult.Result;


        },
        // OnFailure function
        function (reason) {
            
            $scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;
            //$scope.somethingWrong = reason;
            //$scope.error = true;
        }
      )

    $scope.AddBlog = function () {
        $scope.blog = {
            header: "",
            Image: "",
            category: "",
            htmlContent: "Write your Blog Here",
            Author: "",
            Tags: "",
            Summary:""
        }
        $scope.adDeditBlog = true;
    }

    $scope.BlogBack = function () {
        $scope.adDeditBlog = false;
    }


    $scope.deleteBlog = function (Index) {
        var deleteBlockDetails = adminSrv.deleteBlockDetails.getPromise($scope.DetailsBlogList[Index].Blog_ID);
        deleteBlockDetails.then(
        // OnSuccess function
        function (answer) {
            alert("Deleted Succesfully");
            $scope.DetailsBlogList.splice(Index, 1);
            if (answer.data.GetUserProfileDetailsInfoResult.ResponseCode == "0") {

                $scope.UserInfoDetails = answer.data.GetUserProfileDetailsInfoResult.Result;

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

    $scope.EditBlog=function(Index)
    {
        $scope.blog = {
            header: $scope.DetailsBlogList[Index].Blog_Header,
            Image: "",
            category: $scope.DetailsBlogList[Index].Blog_CategoryID,
            htmlContent: $scope.DetailsBlogList[Index].Blog_Content,
            Author: $scope.DetailsBlogList[Index].Author,
            Tags: $scope.DetailsBlogList[Index].Tags,
            Summary: $scope.DetailsBlogList[Index].Summary,
            Blog_ID: $scope.DetailsBlogList[Index].Blog_ID
        }
        $scope.adDeditBlog = true;
        $scope.EditBlogStatus = true;

    }
}]);