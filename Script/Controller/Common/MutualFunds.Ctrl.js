/// <reference path="../../../Webform/Common/Popup/MutualFundsDetailPopup.html" />
app.controller("MtualFunds.Ctrl", ['$scope', '$rootScope', '$http', 'fileUpload', '$mdDialog', 'FundsService', '$stateParams', '$state', '$localStorage', '$interval', '$timeout',
function ($scope, $rootScope, $http, fileUpload, $mdDialog, FundsService, $stateParams, $state, $localStorage,$interval, $timeout) {
    
    $rootScope.Logout = function () {
        $localStorage.LoginStatus = false;
        $rootScope.LoginStatus = false;
        $localStorage.CurrentStatusOfPage = "";
        $localStorage.UserDetails = {};
        $rootScope.UserDetails = {};
        $localStorage.LoginStatus = false;
        $localStorage.MutualFundsState = false;
        $localStorage.ChildState = false;
        $state.go('Index');
    };
    var ListEx = {};
    $scope.InvestmentList = [];
    $localStorage.POstJson = {
        "User_ID": "",
        "userPlan": {
            "MasterPlan_ID": '6',
            "Goal": "",
            "CurrentAge": "",
            "CourseTime": "",
            "CourseDuration": "",
            "CourseFeePerYear": "",
            "LivingCostPerYear": "",
            "SavedAmount_Lumpsum": "",
            "InflationRate": "",
            "TotalCourseFees": "",
            "TotalLivingExpanses": "",
            "TotalAmount": "",
            "TotalLumpsumAmount": "",
            "EstimatedInflationRate": ""
        },
        "userPortfolio": {
            "Equity": "",
            "Debt": "",
            "EstimatedTotalSIPAmt": "",
            "Scheme_IDs": ""
        },
   "InvestmentList":$scope.InvestmentList
    }
    $localStorage.tempData = {};
    $scope.SchemeLimitTo = 15;
    $scope.GetFundList = function (AmcCode, CategoryCode, SchemeOption) {
        if ($scope.FundsList == '' || $scope.FundsList == undefined) {
            var getListOfMutualFunds = FundsService.FundsList.getPromise(AmcCode, CategoryCode, SchemeOption);
            getListOfMutualFunds.then(
            // OnSuccess function
            function (response) {

                HideLoader();
                //if(response.@type=='success')
                //{

                //}
                $localStorage.LSStatus = true;
                $localStorage.LSFundsList = response.data.response.data.Schemelist.Scheme;
                ListEx = response.data.response.data.Schemelist.Scheme;
                $scope.FundsList = response.data.response.data.Schemelist.Scheme;
            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
        }


    }
    $scope.OnloadFunction = function () {
        ShowLoader();
        if ($state.current.name == 'MutualFundsList') {
            //OnLoad Calss
            $scope.GetFundList('-', '-', 'Growth');

            var getDetailsFundsHouse = FundsService.FundsHouse.getPromise();
            getDetailsFundsHouse.then(
            // OnSuccess function
            function (response) {
                $localStorage.LSFundsHouse = response.data.response.data.Schemelist.Scheme;
                $scope.FundsHouse = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {

                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundCategoryEQUITY = FundsService.FundCategoryEQUITY.getPromise();
            FundCategoryEQUITY.then(
            // OnSuccess function
            function (response) {
                $localStorage.LSFundCategoryEQUITY = response.data.response.data.Schemelist.Scheme;
                $scope.FundCategoryEQUITY = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundCategoryHybrid = FundsService.FundCategoryHybrid.getPromise();
            FundCategoryHybrid.then(
            // OnSuccess function
            function (response) {
                $localStorage.LSFundCategoryHybrid = response.data.response.data.Schemelist.Scheme;
                $scope.FundCategoryHybrid = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundCategoryDebt = FundsService.FundCategoryDebt.getPromise();
            FundCategoryDebt.then(
            // OnSuccess function
            function (response) {
                $localStorage.LSFundCategoryDebt = response.data.response.data.Schemelist.Scheme;
                $scope.FundCategoryDebt = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            HideLoader();
        }
        else {
            var getDetailsOfMutualFunds = FundsService.FundsDetails.getPromise($localStorage.Scheme_ID);
            getDetailsOfMutualFunds.then(
            // OnSuccess function
            function (response) {
                HideLoader();
              
               // $localStorage.LSFundsDetailsData = response.data.response.data;
                $rootScope.FundsDetailsData = response.data.response.data;
                $scope.Return_3Mon = $scope.FundsDetailsData.Schemelist.Scheme.Return_3Mon;
                $scope.Return_6Mon = $scope.FundsDetailsData.Schemelist.Scheme.Return_6Mon;
                $scope.Return_1Yr = $scope.FundsDetailsData.Schemelist.Scheme.Return_1Yr;
                $scope.Return_3Yr = $scope.FundsDetailsData.Schemelist.Scheme.Return_3Yr;
                $scope.Return_5Yr = $scope.FundsDetailsData.Schemelist.Scheme.Return_5Yr;
                $scope.myDataSourceStart = {
                    chart: {
                        caption: "Returns Snapshot",
                        subCaption: "Top 5 Snapshot",
                        numberSuffix: "%",
                        xaxisname: "Months",
                        yaxisname: "Returns",
                        BgColor: "rgba(102,0,51,1)",
                        theme: "ocean"
                    },
                    data: [
                                 {
                                     label: "3 Month",
                                     value: parseInt($scope.Return_3Mon).toFixed(2)
                                 },
                                {
                                    label: "6 Month",
                                    value: parseInt($scope.Return_6Mon).toFixed(2)
                                },
                                {
                                    label: "1 Year",
                                    value: parseInt($scope.Return_1Yr).toFixed(2)
                                },
                                {
                                    label: "3 Year",
                                    value: parseInt($scope.Return_3Yr).toFixed(2)
                                },
                                {
                                    label: "5 Year",
                                    value: parseInt($scope.Return_5Yr).toFixed(2)
                                }]
                };
            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });

            var FundAssetAllocation = FundsService.FundAssetAllocation.getPromise($localStorage.Scheme_ID);
            FundAssetAllocation.then(
            // OnSuccess function
            function (response) {
                HideLoader();
                $localStorage.LSFundAssetAllocation = response.data.response.data.Schemelist.Scheme;
                $rootScope.FundAssetAllocation = response.data.response.data.Schemelist.Scheme;
            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundTopHolding = FundsService.FundTopHolding.getPromise($localStorage.Scheme_ID);
            FundTopHolding.then(
            // OnSuccess function
            function (response) {
                HideLoader();
                $localStorage.LSFundTopHolding = response.data.response.data.Schemelist.Scheme;
                $rootScope.FundTopHolding = response.data.response.data.Schemelist.Scheme;
            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
        }
        HideLoader();
    }
    $rootScope.InsertPlanForMutuals=function()
    {
        //alert($localStorage.CurrentSchemeCode)
        ShowLoader();
        $scope.InvestmentList.push({
            "ISIN": "INF204K01562",
            "BSESchemeCode": $localStorage.CurrentSchemeCode,
            "SchemeName": "RELIANCE TOP 200 FUND - GROWTH PLAN - GROWTH",
            "Amount": $localStorage.SchemeAmount,
            "DateString": "",
            "Scheme_ID": "5167",
            "InvestmentType": "LUMPSUM",
            "DueDate": "02/10/2000"

                            


                           
        })
        $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

        var CreateUserList = FundsService.CreatePlan.PostPromise($localStorage.POstJson);
        CreateUserList.then(
        // OnSuccess function
        function (answer) {
            HideLoader();
            $localStorage.CurrentSchemeCode = "";
            $localStorage.SchemeAmount = "";
            $scope.InvestmentList = {};
            //window.location = "../../../Webform/User/dist/index.html"
            if (answer.CreateUsersPlanResult.ResponseCode == "0") {
                window.location = answer.CreateUsersPlanResult.ResponseMessage;
            }

            //$scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;


        },
        // OnFailure function
        function (reason) {
            HideLoader();
            $scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;
            //$scope.somethingWrong = reason;
            //$scope.error = true;
        }
      )
        $localStorage.POstJson = {
            "User_ID": "",
            "userPlan": {
                "MasterPlan_ID": '6',
                "Goal": "",
                "CurrentAge": "",
                "CourseTime": "",
                "CourseDuration": "",
                "CourseFeePerYear": "",
                "LivingCostPerYear": "",
                "SavedAmount_Lumpsum": "",
                "InflationRate": "",
                "TotalCourseFees": "",
                "TotalLivingExpanses": "",
                "TotalAmount": "",
                "TotalLumpsumAmount": "",
                "EstimatedInflationRate": ""
            },
            "userPortfolio": {
                "Equity": "",
                "Debt": "",
                "EstimatedTotalSIPAmt": "",
                "Scheme_IDs": ""
            },
            "InvestmentList": []
        }
        $mdDialog.hide();
    }
    if ($localStorage.LoginStatus)
    {
        if ($localStorage.CurrentStatusOfPage == "MutualfundsLumpSum")
        {
            if( $localStorage.LSStatus)
            {
                
                $rootScope.FundTopHolding = $localStorage.LSFundTopHolding;
                $rootScope.FundAssetAllocation = $localStorage.LSFundAssetAllocation;
                $scope.FundsList = $localStorage.LSFundsList;
          

                $scope.FundCategoryDebt = $localStorage.LSFundCategoryDebt;
                $scope.FundCategoryHybrid = $localStorage.LSFundCategoryHybrid;
                $scope.FundCategoryEQUITY = $localStorage.LSFundCategoryEQUITY;
                $scope.FundsHouse = $localStorage.LSFundsHouse;

                
            }
        }
        else {
            $scope.OnloadFunction();
        }
        $rootScope.LoginStatus = $localStorage.LoginStatus;
        $rootScope.UserDetails = $localStorage.UserDetails;
    }
    else {
        $scope.OnloadFunction();
    }
  
    $scope.InvestorFundaConfMessage = function (Header, Content) {
        $rootScope.MessageHeader = Header;
        $rootScope.MessageContent = Content;
        $mdDialog.show({
            controller: InvestorfundaMessageDetails,
            templateUrl: '../../../Webform/Common/Popup/ConfirmationPopup.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };

    function InvestorfundaMessageDetails($scope, $mdDialog) {
        $scope.InvestorFundaMsg = {
            MessageContent: "",
            Header: ""
        };
        $scope.InvestorFundaMsg.MessageContent = $rootScope.MessageContent;
        $scope.InvestorFundaMsg.Header = $rootScope.MessageHeader;

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $localStorage.CurrentStatusOfPage = "";
            $mdDialog.cancel();
        };

        $scope.ClickToProcedNextStep=function()
        {
            $rootScope.InsertPlanForMutuals();
        }
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    };
    $scope.Return_3Mon = 0;
    $scope.Return_6Mon = 0;
    $scope.Return_1Yr = 0;
    $scope.Return_3Yr = 0;
    $scope.Return_5Yr = 0;

        //Onload Loader
   
    //$scope.Timer = $interval(function () {
    //    SchemeLimitTo = SchemeLimitTo + 5;
    //}, 1000);
   
    $scope.CheckFundsListExists=function()
    {
        if ($('tr').find('td').length == 1)
        {
            $scope.FundsListShowMore = true;
        }
        else {
            $scope.FundsListShowMore = false;
        }
    }

    
        
   

        $scope.ShowMore=function()
        {
            $scope.SchemeLimitTo =$scope.SchemeLimitTo+ 15;
        }
        $scope.DataForChart = [
                     {
                       label: "3 Month",
                       value: $scope.Return_3Mon
                    },
                    {
                        label: "6 Month",
                        value: $scope.Return_6Mon
                    },
                    {
                        label: "1 Year",
                        value: $scope.Return_1Yr
                    },
                    {
                        label: "3 Year",
                        value: $scope.Return_3Yr
                    },
                    {
                        label: "5 Year",
                        value: $scope.Return_5Yr
                    }];
        $scope.datasourceData = {
            "chart": {
                "caption": "NAV Performance",
                "xaxisname": "Month",
                "yaxisname": "Changes",
                "theme": "fint"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Jan"
                        },
                        {
                            "label": "Feb"
                        },
                        {
                            "label": "Mar"
                        },
                        {
                            "label": "Apr"
                        },
                        {
                            "label": "May"
                        },
                        {
                            "label": "Jun"
                        },
                        {
                            "label": "Jul"
                        },
                        {
                            "label": "Aug"
                        },
                        {
                            "label": "Sep"
                        },
                        {
                            "label": "Oct"
                        },
                        {
                            "label": "Nov"
                        },
                        {
                            "label": "Dec"
                        }
                    ]
                }
            ],
            "dataset": [
                
                {
                    "seriesname": "NAV",
                    "renderas": "area",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "4000"
                        },
                        {
                            "value": "5000"
                        },
                        {
                            "value": "3000"
                        },
                        {
                            "value": "4000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "7000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "4000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "8000"
                        },
                        {
                            "value": "2000"
                        },
                        {
                            "value": "7000"
                        }
                    ]
                }
            ]
        }
    $scope.MfPopUp = function () {
        $mdDialog.show({
            controller: MFSortDetails,
            templateUrl: '../../../Webform/Common/Popup/MutualFundsDetailPopup.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };
    $scope.showAdvanced = function (SchemeID) {
      
        ShowLoader();
        var getDetailsOfMutualFunds = FundsService.FundsDetails.getPromise(SchemeID);
        getDetailsOfMutualFunds.then(
        // OnSuccess function
        function (response) {
            HideLoader();
            $rootScope.FundsDetailsData = response.data.response.data.Schemelist.Scheme;
            $scope.MfPopUp();
        },
        // OnFailure function
        function (reason) {
            HideLoader();
            console.log(reason.GetLoginResult.ResponseMessage)
            $scope.somethingWrong = reason;
            $scope.error = true;
        });
    };
   

    function MFSortDetails($scope, $mdDialog) {

        $scope.FundsDetails = $rootScope.FundsDetailsData;


        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.GoForMFDetails=function(Scheme_ID)
    {
        $localStorage.Scheme_ID = Scheme_ID;
        $state.go('MutualFunds');
    }
    
    $scope.myDataSourceStart = {
        chart: {
            caption: "Returns Snapshot",
            subCaption: "Top 5 Snapshot",
            numberPrefix: "%",
            theme: "ocean"
        },
        data:  [
                     {
                         label: "3 Month",
                         value: $scope.Return_3Mon
                     },
                    {
                        label: "6 Month",
                        value: $scope.Return_6Mon
                    },
                    {
                        label: "1 Year",
                        value: $scope.Return_1Yr
                    },
                    {
                        label: "3 Year",
                        value: $scope.Return_3Yr
                    },
                    {
                        label: "5 Year",
                        value: $scope.Return_5Yr
                    }]
    };
    var ArrayList =
        [
        {
            "FundsHouseList": []

        },
        {
            "FundsEquityList": []

        }
        ];

    $scope.ApplyFilterOnFundsList=function()
    {
        var FinalOutPutList = {};
        if(ArrayList[0].FundsHouseList.length>0)
        {
            var ids = [];
            _.each(ArrayList[0].FundsHouseList, function (objFundsHouseList) { ids.push(objFundsHouseList.mf_cocode); });

            $scope.FundsList = _.filter($scope.FundsList, function (val) {
                // return ids[val.mf_cocode];
                return _.find(ids, function (listObj) {
                    return val.mf_cocode === listObj;
                })
            });

        }
       else if (ArrayList[1].FundsEquityList.length > 0) {
           
            var ids = [];
            _.each(ArrayList[1].FundsEquityList, function (objFundsEquityHouseList) { ids.push(objFundsEquityHouseList.CategoryCode); });

            $scope.FundsList = _.filter($scope.FundsList, function (val) {
                // return ids[val.mf_cocode];
                return _.find(ids, function (listObj) {
                    return val.CategoryCode === listObj;
                })
            });

        }

        

        if ((ArrayList[0].FundsHouseList.length > 0) || (ArrayList[1].FundsEquityList.length > 0))
        {
        }
        else {
            $scope.FundsList = ListEx;
        }
        HideLoader();
    }
    $scope.SortFundsList=function(FilterType,Code)
    {
        ShowLoader();
        var SelectedList = {};
        var SelectionExists = false;
        if(FilterType=='FundsHouse')
        {
            SelectedList = {
                "mf_cocode": Code
            }
            SelectionExists = _.some(ArrayList[0].FundsHouseList, function (obj) {
                return obj.mf_cocode == Code
            })

            if(SelectionExists)
            {
                ArrayList[0].FundsHouseList = _.filter(ArrayList[0].FundsHouseList, function (obj) {
                    return obj.mf_cocode !== Code
                })
            }
            else {
                ArrayList[0].FundsHouseList.push(SelectedList);
            }
        }
        else if (FilterType == 'Equity') {
            SelectedList = {
                "CategoryCode": Code
            }
            SelectionExists = _.some(ArrayList[1].FundsEquityList, function (obj) {
                return obj.CategoryCode == Code
            })

            if (SelectionExists) {
                ArrayList[1].FundsEquityList = _.filter(ArrayList[1].FundsEquityList, function (obj) {
                    return obj.CategoryCode !== Code
                })
            }
            else {
                ArrayList[1].FundsEquityList.push(SelectedList);
            }
        }
        $scope.ApplyFilterOnFundsList();
    }
    
    $scope.InvestLumpsum = function (SchemeCode, Page) {
        var tesmp = "";
        if (document.getElementById(SchemeCode + "Amount").value != null)
        {
            tesmp = document.getElementById(SchemeCode + "Amount").value
        }
        else {
            tesmp = "";
        }
        if (tesmp  !="" || ($localStorage.SchemeAmount != undefined && $localStorage.SchemeAmount !=""))
        {
            if (Page != undefined)
            {
                $localStorage.SchemeAmount = document.getElementById(SchemeCode + "Amount").value;
            }
            else {
                document.getElementById(SchemeCode + "Amount").value=$localStorage.SchemeAmount;
            }
          
            if ($localStorage.MutualFundsState) {
                $scope.InvestorFundaConfMessage("Confirmation of Proceed", "Do you realy want to proceed for Scheme");
            }
            else {
                $localStorage.CurrentSchemeCode = SchemeCode;
                $localStorage.CurrentStatusOfPage = "MutualfundsLumpSum";
                $state.go('Authentication', { From: 'Mutualfunds' });
            }
        }
        else {
            alert("Please insert value")
        }
      
        
    };

    $scope.ChangeAmount=function(ID)
    {
        alert(ID)
    }

    //Confirmation Popup
    if ($localStorage.CurrentStatusOfPage == "MutualfundsLumpSum") {
        if ($localStorage.CurrentSchemeCode != "")
        {
            $scope.InvestLumpsum($localStorage.CurrentSchemeCode);
        }
        else {
            $scope.OnloadFunction();
        }
        
    }
}]);

