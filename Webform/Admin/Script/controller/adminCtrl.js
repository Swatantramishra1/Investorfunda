app.controller("adminCtrl", ['$scope', 'adminSrv', '$state', '$localStorage', 'textAngularManager', '$rootScope', '$http', function ($scope, adminSrv, $state, $localStorage, textAngularManager,$rootScope, $http) {
    $scope.user = {
        Name: ""
    }
    $scope.SortMFInvetList = [];
    $scope.GlobalPlanID = "";
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

    $scope.getuserPlanList = function (ID) {

        var UserIDIndex = $scope.userList.map(function (cur, index) {
            if (cur.LoginID == ID)
                return index
        });
        UserIDIndex = UserIDIndex.filter(function (n) { return n != undefined });
        var GetUserInfoList = adminSrv.GetUserInfoList.getPromise(ID);
        var GetUserPlanList = adminSrv.GetUserPlanList.getPromise(ID);
        GetUserPlanList.then(
        // OnSuccess function
        function (answer) {
            if (answer.data.GetUserPlanlistsResult.ResponseCode == "0") {
                if (answer.data.GetUserPlanlistsResult.Result.length > 0) {
                    $state.go('UserPlanDetails');
                    $scope.user.Name = $scope.userList[UserIDIndex[0]].Name;
                    $scope.user.LoginID = $scope.userList[UserIDIndex[0]].LoginID;
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
                    $scope.SortMFInvetList = [];
                    $scope.GlobalPlanID = $scope.userPlanList[index].PlanID;
                    $scope.usernvestmentdetails = answer.data.GetUserInvestmentDetailsResult.Result.UserInvestmentDetailsData;
                    $scope.UserInvestmentSchemeDetailsData = answer.data.GetUserInvestmentDetailsResult.Result.UserInvestmentSchemeDetailsData;

                    for(var a=0;a<$scope.UserInvestmentSchemeDetailsData.length;a++)
                    {
                        $scope.SortMFInvetList.push({
                            MF_CurrentNavValue: "",
                            DueDate: "",
                            InvestmentSchemePlan_ID: $scope.UserInvestmentSchemeDetailsData[a].InvestmentSchemePlan_ID,
                            SchemeName: $scope.UserInvestmentSchemeDetailsData[a].SchemeName,
                            InvestmentType: $scope.UserInvestmentSchemeDetailsData[a].InvestmentType,
                            Amount: $scope.UserInvestmentSchemeDetailsData[a].Amount,
                            BSESchemeCode: $scope.UserInvestmentSchemeDetailsData[a].BSESchemeCode,
                            ISIN: $scope.UserInvestmentSchemeDetailsData[a].ISIN,
                            UR_ID: $scope.usernvestmentdetails[0].UR_ID
                        })
                    }

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

    $scope.getuserActionList=function(ID)
    {

        $state.go('ActionList');

        var AdminGetActionList = adminSrv.AdminGetActionList.getPromise(ID);
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
                      Author: $scope.blog.Author,
                     
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
            else {
                UpdateBlog();
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

    $scope.UpdateClientCode = function () {
        var a = $scope.clientCode;
        var ClintCode = document.getElementById("clientCode").value;
        var UpdateClintCode = adminSrv.UpdateClintCode.getPromise($scope.UserInfoDetails.User_ID, ClintCode);
        UpdateClintCode.then(
        // OnSuccess function
        function (answer) {

            if (answer.data.UpdateClientCodeResult.ResponseCode == "0") {

                alert("Client Code Updated Succesfully");

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


    $scope.UpdateMFInvestment = function () {
        var PostJson = {
            Plan_ID: $scope.GlobalPlanID,
            listMFInvestmentDetails: $scope.SortMFInvetList
        }

        console.log("Data to be posted", PostJson);

        var askForPromise = adminSrv.UpdateMFInvestment.PostPromise(PostJson);
        askForPromise.then(
        // OnSuccess function
        function (answer) {
            alert("done")
            if (answer.UserRegistrationResult.ResponseCode == "0") {
                $localStorage.IsComplete = "1";
                $scope.ErrorMessage = "Your registration has been successfully done . Thanks for registering with us.";
            }
            else {
                $scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;
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


    $scope.userInvestmentList = function (item) {
        var postData = {
            "request": {
                InvestmentType: item.InvestmentType,
                ISIN: item.ISIN,
                BSESchemeCode: item.BSESchemeCode,
                SchemeName: item.SchemeName,
                Amount: item.Amount,
                Plan_ID: $scope.GlobalPlanID,
                Portfolio_ID: $scope.GlobalPlanID,
                User_ID: item.UR_ID,
                Nav:item.MF_CurrentNavValue
            }
        }

        var userinvesment = adminSrv.userinvesment.PostPromise(postData);
        userinvesment.then(
        // OnSuccess function
        function (answer) {
            alert("Inserted Succesfully")

        },
        // OnFailure function
        function (reason) {


            //$scope.somethingWrong = reason;
            //$scope.error = true;
        }
      )
    }
}]);