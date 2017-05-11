/// <reference path="../../../Webform/User/dist/index.html" />
/// <reference path="../../User/Form/dist/index.html" />
app.controller("AuthCtrl", ['$scope', '$rootScope', 'ULoginService', '$localStorage', '$stateParams', '$state', '$http', function ($scope, $rootScope, ULoginService, $localStorage, $stateParams, $state, $http) {
    $scope.user = {
        username: '',
        password: ''
    };
   $rootScope.showFooterView = false;
    $scope.Register = {
        FirstName: '',
        LastName: '',
        PanCard: '',
        Email: '',
        Password: '',
        mobileno: '',
    };
    
    $scope.Login_All = function () {
    
        ShowLoader();
        var askForPromise = ULoginService.LoginUser.getPromise($scope.user.username, $scope.user.password);
        askForPromise.then(
        // OnSuccess function
        function (answer) {
            HideLoader();
            if (answer.data.GetLoginResult.ResponseCode == 0)
            {
                $localStorage.setCounterStatus = true;
                $localStorage.LoginStatus = true;
                $rootScope.LoginStatus = true;
                $localStorage.TempUserDetails = answer.data.GetLoginResult.Result;
                $rootScope.UserDetails = answer.data.GetLoginResult.Result;
                if ($localStorage.CurrentStatusOfPage == "ChildGoal")
                {
                    $localStorage.ChildState = true;
                    $state.go('ChildGoal');
                }
                else if ($localStorage.CurrentStatusOfPage == "MutualfundsLumpSum")
                {
                    $localStorage.MutualFundsState = true;
                    $state.go('MutualFundsList');
                }
                else if ($localStorage.CurrentStatusOfPage == "Retirement") {
                    //$localStorage.MutualFundsState = true;
                    $state.go('Retirement');
                }
                else if ($localStorage.CurrentStatusOfPage == "HousePlan") {
                    //$localStorage.MutualFundsState = true;
                    $state.go('HousePlan');
                }
                else if ($localStorage.CurrentStatusOfPage == "ChildMerrage") {
                    //$localStorage.MutualFundsState = true;
                    $state.go('ChildMerrage');
                }
                else if ($localStorage.CurrentStatusOfPage == "StartSIP") {
                    //$localStorage.MutualFundsState = true;
                    
                    $state.go('StartSIP');
                }
                else if ($localStorage.CurrentStatusOfPage == "LUMPSUM" || $localStorage.CurrentStatusOfPage == "SIP") {
                    //$localStorage.MutualFundsState = true;

                    switch($localStorage.CurrentStateOfPage)
                    {
                        case 'MutualFundsList':
                            $localStorage.MutualFundsState = true;
                            $state.go('MutualFundsList');
                            break;

                        case 'recommonded':
                            $localStorage.MutualFundsState = true;
                            $state.go('recommonded');
                            break;

                        case 'compare':
                            $localStorage.MutualFundsState = true;
                            $state.go('compare');
                            break;
                        case 'ELSS':
                            $localStorage.MutualFundsState = true;
                            $state.go('ELSS');
                            break;
                    }
                    
                }
                
                else  {
                    
                    window.location = "../../../Webform/User/dist/index.html"
                }
          
            }
            else {
                $scope.ErrorMessage = answer.data.GetLoginResult.ResponseMessage;
                $localStorage.LoginStatus = false;
                $rootScope.LoginStatus = false;
            }
            
        },
        // OnFailure function
        function (reason) {
            HideLoader();
            $scope.ErrorMessage = answer.data.GetLoginResult.ResponseMessage;
            //$scope.somethingWrong = reason;
            //$scope.error = true;
        }
      )
       
    }

    $scope.RegistrationFun = function ()
    {
        var PostDataReq =
            {
                "request": 
                   {
                      
                "UR_First_Name":$scope.Register.FirstName,
                "UR_Middle_Name":"",
                "UR_Surname":$scope.Register.LastName,
                "UR_PanCardNo":$scope.Register.PanCard,
                "UR_Password":$scope.Register.Password,
                "UR_Gender":$scope.Register.Gender,
                "UR_Email":$scope.Register.Email,
                "UR_Mobile":$scope.Register.mobileno,
                "UR_Phone":"",
                "UR_Howdidyou":"",
                "UR_Comments":"",
                "UR_TaxStatus_ID":"",
                "UR_DOB":"",
                "UR_SourceOfWealth_ID":"",
                "UR_Ocucupation_ID":"",
                "UR_Income":"",
                "UR_HoldingNature_ID":""
                   }
                
            };

        ShowLoader();


        var askForPromise = ULoginService.Register.PostPromise(PostDataReq);
        askForPromise.then(
        // OnSuccess function
        function (answer) {
            HideLoader();
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
    };

    $scope.ForgotPassWordStep1 = function () {
        $scope.ForgotPasswordDiv = true;
        $scope.ForgotPasswordDiv2 = true;
        $scope.ForgotPasswordDivPassEnter = false;
    };

    $scope.ForgotPassWordStep2 = function () {
        $scope.ForgotPasswordDiv = true;
        $scope.ForgotPasswordDiv2 = false;
        $scope.ForgotPasswordDivPassEnter = true;

    };
    $scope.ChangePassword = function () {
        $scope.ForgotPasswordDiv = false;
        $scope.ForgotPasswordDiv2 = false;
        $scope.ForgotPasswordDivPassEnter = false;
    };

    $scope.SendMObileSMS = function () {
        $scope.RandomNumber = Math.floor(100000 + Math.random() * 900000);
        var message = "Hi Your OTP for Investorfunda is " + $scope.RandomNumber;

        var URl = "http://174.143.34.193/MtSendSMS/SingleSMS.aspx?usr=crazyachievers&pass=Q8gyw3&msisdn=" + $scope.Register.mobileno + "&msg=" + message + "&sid=IFLGIN&mt=0";

        $http.post(URl, {
            withCredentials: true,
            headers: { 'Content-Type': undefined },
            transformRequest: angular.identity
        })
         .success(function (data, status) {
             alert("Pass")
             var get = data;


         })
         .catch(function (response) {
          
             $scope.sendedOTP = true;
             $scope.getOtpBtn = true;
         });
    }


    $scope.MatchOTP = function () {
        if($scope.RandomNumber==$scope.matchOTP)
        {
            $scope.showRegistationForm = true;
            $scope.ErrorMessage = "";
        }
        else
        {
            $scope.ErrorMessage = "Enter Correct OTP";
        }
    }
}]);