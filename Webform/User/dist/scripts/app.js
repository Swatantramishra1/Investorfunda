/// <reference path="../views/popup/TableListPopup.html" />
/// <reference path="../../../../Script/Service/Common.srvc.js" />
/// <reference path="../../../../Index.html" />
/// <reference path="../../../../DesignContent/Plugins/Script/Angular/ngStorage.js" />
/// <reference path="../../../../DesignContent/assets/plugins/bootstrap/js/bootstrap.min.js" /> 
! function () {
    "use strict";
    angular.module("app", ["ngRoute", "ngAnimate", "ngSanitize", "ngAria", "ngMaterial", "oc.lazyLoad", "ui.bootstrap", "angular-loading-bar", "FBAngular", "app.ctrls", "app.directives", "app.ui.ctrls", "app.ui.directives", "app.form.ctrls", "app.table.ctrls", "app.email.ctrls", "app.todo", "ngStorage"]).config(["cfpLoadingBarProvider", function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = !1, cfpLoadingBarProvider.latencyThreshold = 500
    }]).config(["$ocLazyLoadProvider", function ($oc) {
        $oc.config({
            debug: !0,
            event: !1,
            modules: [{
                name: "angularBootstrapNavTree",
                files: ["scripts/lazyload/abn_tree_directive.js", "styles/lazyload/abn_tree.css"]
            }, {
                name: "ui.calendar",
                serie: !0,
                files: ["scripts/lazyload/moment.min.js", "scripts/lazyload/fullcalendar.min.js", "styles/lazyload/fullcalendar.css", "scripts/lazyload/calendar.js"]
            }, {
                name: "ui.select",
                files: ["scripts/lazyload/select.min.js", "styles/lazyload/select.css"]
            }, {
                name: "ngTagsInput",
                files: ["scripts/lazyload/ng-tags-input.min.js", "styles/lazyload/ng-tags-input.css"]
            }, {
                name: "colorpicker.module",
                files: ["scripts/lazyload/bootstrap-colorpicker-module.min.js", "styles/lazyload/colorpicker.css"]
            }, {
                name: "ui.slider",
                serie: !0,
                files: ["scripts/lazyload/bootstrap-slider.min.js", "scripts/lazyload/directives/bootstrap-slider.directive.js", "styles/lazyload/bootstrap-slider.css"]
            }, {
                name: "textAngular",
                serie: !0,
                files: ["scripts/lazyload/textAngular-rangy.min.js", "scripts/lazyload/textAngular.min.js", "scripts/lazyload/textAngularSetup.js", "styles/lazyload/textAngular.css"]
            }, {
                name: "flow",
                files: ["scripts/lazyload/ng-flow-standalone.min.js"]
            }, {
                name: "ngImgCrop",
                files: ["scripts/lazyload/ng-img-crop.js", "styles/lazyload/ng-img-crop.css"]
            }, {
                name: "ngMask",
                files: ["scripts/lazyload/ngMask.min.js"]
            }, {
                name: "angular-c3",
                files: ["scripts/lazyload/directives/c3.directive.js"]
            }, {
                name: "easypiechart",
                files: ["scripts/lazyload/angular.easypiechart.min.js"]
            }, {
                name: "ngMap",
                files: ["scripts/lazyload/ng-map.min.js"]
            }]
        })
    }]).constant("JQ_LOAD", {
        fullcalendar: [],
        moment: ["scripts/lazyload/moment.min.js"],
        sparkline: ["scripts/lazyload/jquery.sparkline.min.js"],
        c3: ["scripts/lazyload/d3.min.js", "scripts/lazyload/c3.min.js", "styles/lazyload/c3.css"],
        gmaps: ["https://maps.google.com/maps/api/js"]
    }).config(["$routeProvider", "$locationProvider", "JQ_LOAD", function ($routeProvider, $locationProvider, jqload) {
        function setRoutes(route) {
            var url = "/" + route,
                config = {
                    templateUrl: "views/" + route + ".html"
                };
            return $routeProvider.when(url, config), $routeProvider
        }
        var routes = ["ui/buttons", "ui/typography", "ui/grids", "ui/panels", "ui/tabs", "ui/modals", "ui/progress-bars", "ui/extras", "icons/font-awesome", "icons/ionicons", "forms/wizard", "tables/tables", "pages/signin", "pages/signup", "pages/404", "pages/forget-pass", "pages/lock-screen", "pages/invoice", "pages/search", "pages/timeline"];
        routes.forEach(function (route) {
            setRoutes(route)
        }), $routeProvider.when("/", {
            redirectTo: "/dashboard"
        }).when("/404", {
            templateUrl: "views/pages/404.html"
        }).otherwise({
            redirectTo: "/404"
        }),
        $routeProvider.when("/dashboard", {
            templateUrl: "views/dashboard.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load([jqload.c3, jqload.sparkline]).then(function () {
                        return a.load({
                            name: "app.directives",
                            files: ["scripts/lazyload/directives/sparkline.directive.js"]
                        })
                    }).then(function () {
                        return a.load("angular-c3")
                    }).then(function () {
                        return a.load("easypiechart")
                    })
                }]
            }
        })
        , $routeProvider.when("/email/inbox", {
            templateUrl: "views/email/inbox.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load("textAngular")
                }]
            }
        }), $routeProvider.when("/calendar", {
            templateUrl: "views/calendar.html",
            controller: "CalendarDemoCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load("ui.calendar").then(function () {
                        return a.load({
                            name: "app.ctrls",
                            files: ["scripts/lazyload/controllers/calendarCtrl.js"]
                        })
                    })
                }]
            }
        }), $routeProvider.when("/material", {
            templateUrl: "views/material.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load({
                        name: "app.ctrls",
                        files: ["scripts/lazyload/controllers/materialCtrl.js"]
                    })
                }]
            }
        }),
        $routeProvider.when("/Profile", {
            templateUrl: "views/profile.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load(["ui.select", "ngTagsInput", "colorpicker.module", "ui.slider", "CommonSrvc"]).then(function () {
                        return a.load({
                            name: "app.ctrls",
                            files: ["scripts/lazyload/controllers/selectCtrl.js", "scripts/lazyload/controllers/tagsInputCtrl.js", "scripts/lazyload/controllers/materialCtrl.js", "../../../../DesignContent/assets/plugins/bootstrap/js/bootstrap.min.js", "../../../../Script/Service/Common.srvc.js"]
                        })
                    }).then(function () {
                        return a.load("textAngular")
                    })

                }]
            }
        }),$routeProvider.when("/Download", {
            templateUrl: "views/KYC-HTMLTOPDF.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load(["ui.select", "ngTagsInput", "colorpicker.module", "ui.slider", "CommonSrvc"]).then(function () {
                        return a.load({
                            name: "app.ctrls",
                            files: ["scripts/lazyload/controllers/selectCtrl.js", "scripts/lazyload/controllers/tagsInputCtrl.js", "scripts/lazyload/controllers/materialCtrl.js", "../../../../DesignContent/assets/plugins/bootstrap/js/bootstrap.min.js", "../../../../Script/Service/Common.srvc.js"]
                        })
                    }).then(function () {
                        return a.load("textAngular")
                    })

                }]
            }
        })
        , $routeProvider.when("/ui/treeview", {
            templateUrl: "views/ui/treeview.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load("angularBootstrapNavTree").then(function () {
                        return a.load({
                            name: "app.ctrls",
                            files: ["scripts/lazyload/controllers/treeviewCtrl.js"]
                        })
                    })
                }]
            }
        }), $routeProvider.when("/ui/notifications", {
            templateUrl: "views/ui/notifications.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load("ui.select")
                }]
            }
        }), $routeProvider.when("/forms/elements", {
            templateUrl: "views/forms/elements.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load(["ui.select", "ngTagsInput", "colorpicker.module", "ui.slider"]).then(function () {
                        return a.load({
                            name: "app.ctrls",
                            files: ["scripts/lazyload/controllers/selectCtrl.js", "scripts/lazyload/controllers/tagsInputCtrl.js"]
                        })
                    }).then(function () {
                        return a.load("textAngular")
                    })
                }]
            }
        }), $routeProvider.when("/forms/uploader", {
            templateUrl: "views/forms/uploader.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load("flow")
                }]
            }
        }), $routeProvider.when("/forms/imagecrop", {
            templateUrl: "views/forms/imagecrop.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load("ngImgCrop").then(function () {
                        return a.load({
                            name: "app.ctrls",
                            files: ["scripts/lazyload/controllers/imageCropCtrl.js"]
                        })
                    })
                }]
            }
        }), $routeProvider.when("/forms/validation", {
            templateUrl: "views/forms/validation.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load("ngMask")
                }]
            }
        }), $routeProvider.when("/charts/sparklines", {
            templateUrl: "views/charts/sparklines.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load(jqload.sparkline).then(function () {
                        return a.load({
                            name: "app.directives",
                            files: ["scripts/lazyload/directives/sparkline.directive.js"]
                        })
                    })
                }]
            }
        }), $routeProvider.when("/charts/c3", {
            templateUrl: "views/charts/c3.html",
            resolve: {
                deps: ["$ocLazyLoad", "$rootScope", "$timeout", function (a, $rootScope, $timeout) {
                    return a.load(jqload.c3).then(function () {
                        return a.load("angular-c3")
                    }).then(function () {
                        return a.load({
                            name: "app.ctrls",
                            files: ["scripts/lazyload/controllers/c3ChartCtrl.js"]
                        })
                    }).then(function () {
                        return a.load("easypiechart")
                    }).then(function () {
                        $timeout(function () {
                            $rootScope.$broadcast("c3.resize")
                        }, 100)
                    })
                }]
            }
        }), $routeProvider.when("/maps/google-map", {
            templateUrl: "views/maps/google-map.html",
            resolve: {
                deps: ["$ocLazyLoad", function (a) {
                    return a.load("ngMap")
                }]
            }
        })
    }])
}();

! function () {
    "use strict";
    angular.module("app.email.ctrls", []).controller("EmailCtrl", ["$scope", "$modal", function ($scope, $modal) {
        $scope.labelColors = ["#5974d9", "#19c395", "#fc3644", "#232429", "#f1d44b"], $scope.labels = [{
            type: "Work",
            color: $scope.labelColors[0]
        }, {
            type: "Reciept",
            color: $scope.labelColors[1]
        }, {
            type: "My Data",
            color: $scope.labelColors[2]
        }], $scope.newlabel = "", $scope.emailLists = [{
            subject: "Some nice subject here.",
            content: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself...",
            read: !0,
            sender: "Jonathan Doe",
            date: "3 mins ago",
            attachment: !0,
            active: !1
        }, {
            subject: "Meetup at C.P, New Delhi",
            content: "Lorem ipsum dolar sit amet...",
            read: !1,
            sender: "Organizer.com",
            date: "12th Feb",
            attachment: !1,
            active: !0
        }, {
            subject: "Calling all android developers to join me",
            content: "Pellentesque habitant morbi tristique senectus et netus...",
            read: !0,
            sender: "android.io",
            date: "11th Jan",
            attachment: !0,
            active: !1
        }, {
            subject: "Meetup at C.P, New Delhi",
            content: "Lorem ipsum dolar sit amet...",
            read: !1,
            sender: "Organizer.com",
            date: "22nd Dec",
            attachment: !1,
            active: !1
        }, {
            subject: "RE: Question about account information V334RE99e: s3ss",
            content: "Hi, Thanks for the reply, I want to know something....",
            read: !1,
            sender: "trigger.io",
            date: "12 Dec",
            attachment: !0,
            active: !1
        }], $scope.addLabel = function () {
            var l = $scope.labelColors.length,
                c = $scope.labelColors[Math.floor(Math.random() * l)];
            $scope.newlabel && $scope.labels.push({
                type: $scope.newlabel,
                color: c
            }), $scope.newlabel = ""
        }, $scope.compose = function () {
            $modal.open({
                templateUrl: "views/email/compose.html",
                size: "md",
                controller: "EmailCtrl",
                resolve: function () { },
                windowClass: "modalRapid"
            })
        }, $scope.composeClose = function () {
            $scope.$close()
        }
    }])
}();

! function () {
    "use strict";
    angular.module("app.form.ctrls", []).controller("WizardMinimalCtrl", ["$scope", function ($scope) {
        $scope.currentInput = 0, $scope.totalInput = 4, $scope.progress = 0, $scope.inputToggle = [!0, !1, !1, !1], $scope._progress = function () {
            $scope.progress = $scope.currentInput * (100 / $scope.totalInput)
        }, $scope.nextInput = function () {
            $scope.currentInput += 1, $scope._progress(), $scope.inputToggle.forEach(function (v, i) {
                $scope.inputToggle[i] = !1
            }), $scope.inputToggle[$scope.currentInput] = !0
        }
    }]).controller("FormWizardCtrl", ["$scope", function ($scope) {
        $scope.steps = [!0, !1, !1], $scope.stepNext = function (index) {
            for (var i = 0; i < $scope.steps.length; i++) $scope.steps[i] = !1;
            $scope.steps[index] = !0
        }, $scope.stepReset = function () {
            $scope.steps = [!0, !1, !1]
        }
    }])
}();

! function () {
    "use strict";
    angular.module("app.ctrls", [])
        .service('CommonSrvc', ['$http', '$q', function ($http, $q) {
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
            var GetStateDetails = {

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
            var GetCityDetails = {

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
            var GetTaxStatus = {

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
            var validateIfscCode = {

                getPromise: function (IFSC) {
                    var promise = $http.get(API_validateIfsc + IFSC),
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
            var UpdateInvestActStats = {

                getPromise: function (InvestActSts_ID, InvestmentSchemePlan_ID) {
                    var promise = $http.get(API_UpdateInvestmentActionStatus + InvestActSts_ID + "/" + InvestmentSchemePlan_ID),
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
            var GetSourceOfWealth = {

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
            var HoldingNature = {

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
            var GetUserDetailsInfo = {

                getPromise: function (UserId) {
                    var promise = $http.get(API_GetUserDetailsInfo + UserId),
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
            var GetAllListDetails = {
                getPromise: function () {
                    var promise = $http.get(API_GetAllListDetails),
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
            }
            var GetCartListDetails = {

                getPromise: function (UserId) {
                    var promise = $http.get(API_GetAllCartListDetails + UserId),
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
            }
            var GetUserPaymentStatus = {

                getPromise: function (BSECode,UserId) {
                    var promise = $http.get(API_GetUserPaymentStatus + BSECode +"/" + UserId),
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
            }
            var GetUserPaymentString = {

                getPromise: function (UserId) {
                    var promise = $http.get(API_GetUserPaymentString + UserId),
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
            }

            var GetUserDashInvestment = {

                getPromise: function (UserId) {
                    var promise = $http.get(API_GetDashInvestmentDetails + UserId),
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
            }
            return {
                GetCountryDetails: GetCountryDetails,
                GetStateDetails: GetStateDetails,
                GetCityDetails: GetCityDetails,
                GetTaxStatus: GetTaxStatus,
                GetSourceOfWealth: GetSourceOfWealth,
                HoldingNature: HoldingNature,
                GetUserDetailsInfo: GetUserDetailsInfo,
                GetAllListDetails: GetAllListDetails,
                GetCartListDetails: GetCartListDetails,
                GetUserPaymentStatus: GetUserPaymentStatus,
                GetUserPaymentString: GetUserPaymentString,
                validateIfscCode: validateIfscCode,
                GetUserDashInvestment: GetUserDashInvestment,
                UpdateInvestActStats: UpdateInvestActStats

            };

        }])
        .service('validateSrvc', ['$http', '$q', 'CommonSrvc', function ($http, $q,CommonSrvc) {
            let _returnData = {
                isValid:false,
                validationMessage:""
            };
          let  authenticationBankDetail = function (_updateDetails) {
              _returnData = {
                  isValid: false,
                  validationMessage: ""
              };
              //$.ajax({
              //    type: 'GET',
              //    async: false,
              //    crossDomain: true,
              //    ContentType: 'application/json',
              //    url: 'https://ifsc.razorpay.com/' + _updateDetails.bankdetails.Bank_IFSC,
              //    dataType: 'text/html',
              //    success: function () { alert("Success"); },
              //    error: function () { alert("Error"); }
              //});

                        for (let a = 0; a < 1; a++) {
                            if (_updateDetails.bankdetails[a].Bank_IFSC == "" || _updateDetails.bankdetails[a].Bank_IFSC == undefined) {
                                  _returnData = {
                                      isValid: true,
                                      validationMessage: "Please Enter Bank_IFSC  Details"
                                  };
                                  break;
                              }
                            else if (_updateDetails.bankdetails[a].Bank_ID == "0" || _updateDetails.bankdetails[a].Bank_ID == undefined) {
                                  _returnData = {
                                      isValid: true,
                                      validationMessage: "Please Select Bank"
                                  };
                                  break;
                              }
                            else if (_updateDetails.bankdetails[a].Bank_AccountTypeID == "0" || _updateDetails.bankdetails[a].Bank_AccountTypeID == undefined) {
                                  _returnData = {
                                      isValid: true,
                                      validationMessage: "Please Select Account Type"
                                  };
                                  break;
                              }
                            else if (_updateDetails.bankdetails[a].Bank_AccountNo == "" || _updateDetails.bankdetails[a].Bank_AccountNo == undefined) {
                                  _returnData = {
                                      isValid: true,
                                      validationMessage: "Please Select Account No"
                                  };
                                  break;
                              }
                              else {
                                  _returnData.isValid = false;
                              }

                          }
        


             
              return _returnData;
              }
          let authenticationProfileSaveDetail = function (_updateDetails) {
              _returnData = {
                  isValid: false,
                  validationMessage: ""
              };
              for (let a = 0; a < 1; a++) {
                  if (_updateDetails.userprofile.HoldingNature_ID == "0" || _updateDetails.userprofile.HoldingNature_ID == null) {
                     
                          _returnData.isValid = true;
                          _returnData.validationMessage = 'Please select Holding Nature';
                          break;
                      
                  }
                  else if (_updateDetails.userprofile.HoldingNature_ID != "1" && (_updateDetails.userprofile.UR_2ndApplicant == '' || _updateDetails.userprofile.UR_2ndApplicant == null)) {
                     
                          _returnData.isValid = true;
                          _returnData.validationMessage = 'Please insert 2nd Applicant';
                          break; 
                  }
                  else if (_updateDetails.userprofile.DateOfBirth == '' || _updateDetails.userprofile.DateOfBirth == null) {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please insert DateOfBirth';
                      break;
                  }
                  else if (_updateDetails.userprofile.Gender == '' || _updateDetails.userprofile.DateOfBirth == null || _updateDetails.userprofile.Gender == 'Select Gender') {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please select  Gender';
                      break;
                  }
                  else if (_updateDetails.userprofile.FirstName == '' || _updateDetails.userprofile.FirstName == null) {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please insert FirstName';
                      break;
                  }
                  else if (_updateDetails.userprofile.LastName == '' || _updateDetails.userprofile.LastName == null) {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please insert  LastName';
                      break;
                  }
                  else if (_updateDetails.userprofile.HoldingNature_ID == '0' || _updateDetails.userprofile.HoldingNature_ID == null) {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please select  Holding Nature';
                      break;
                  }
                  else if (_updateDetails.userprofile.TaxStatus_ID == '0' || _updateDetails.userprofile.TaxStatus_ID == null) {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please select  Tax Status';
                      break;
                  }
                  else if (_updateDetails.userprofile.SOW_ID == '0' || _updateDetails.userprofile.SOW_ID == null) {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please select  Source Of Wealth';
                      break;
                  }
                  else if (_updateDetails.userprofile.ClientTypeID == '0' || _updateDetails.userprofile.ClientTypeID == null) {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please select Client Type';
                      break;
                  }
                  //else if (_updateDetails.userprofile.DividentPayMode_ID == '0' || _updateDetails.userprofile.DividentPayMode_ID == null) {
                  //    _returnData.isValid = true;
                  //    _returnData.validationMessage = 'Please select Divident Pay Mode';
                  //    break;
                  //}
                  //else if (_updateDetails.userprofile.CommunicationModeID == '0' || _updateDetails.userprofile.CommunicationModeID == '' || _updateDetails.userprofile.CommunicationModeID == null) {
                  //    _returnData.isValid = true;
                  //    _returnData.validationMessage = 'Please select Communication Mode';
                  //    break;
                  //}
                  else if (_updateDetails.userprofile.TaxStatus_ID != 2 && (_updateDetails.userprofile.PANNumber == '' || _updateDetails.userprofile.PANNumber == null)) {
                     
                          _returnData.isValid = true;
                          _returnData.validationMessage = 'Please insert PAN Details';
                          break;
                  }
                  else if (_updateDetails.userprofile.TaxStatus_ID == 2 && ((_updateDetails.userprofile.GuardianName == '' || _updateDetails.userprofile.GuardianName == null) || (_updateDetails.userprofile.GuardianPanCard == '' || _updateDetails.userprofile.GuardianPanCard == null))) {
                    
                          _returnData.isValid = true;
                          _returnData.validationMessage = 'Please insert Guardian Details i.e Name and PanCard';
                          break;
                      
                  }
                  else if (_updateDetails.userprofile.HoldingNature_ID != "1") {
                      if((_updateDetails.userprofile.UR_2ndApplicant != '' || _updateDetails.userprofile.UR_2ndApplicant != null) && (_updateDetails.userprofile.SecondApplicantPanCard == '' || _updateDetails.userprofile.SecondApplicantPanCard == null))
                  {
                      _returnData.isValid = true;
                      _returnData.validationMessage = 'Please insert 2nd Applicant Pancard Details';
                      break;
                  }
                        
                      
                  }
                  //else if ((_updateDetails.userprofile.UR_3rdApplicant != '' || _updateDetails.userprofile.UR_3rdApplicant != null) && (_updateDetails.userprofile.ThirdApplicantPanCard == '' || _updateDetails.userprofile.ThirdApplicantPanCard == null)) {

                  //    _returnData.isValid = true;
                  //    _returnData.validationMessage = 'Please insert 3rd Applicant Pancard Details';
                  //    break;

                  //}
                  else if (_updateDetails.listAddress.length !=0) {
                      let j = 0; 
                           if (_updateDetails.listAddress[j].CityID == '' || _updateDetails.listAddress[j].CityID == '0' || _updateDetails.listAddress[j].CityID == null) {
                               _returnData.isValid = true;
                               _returnData.validationMessage = 'Please select City';
                               break;
                           }
                           if (_updateDetails.listAddress[j].StateID == '' || _updateDetails.listAddress[j].StateID == '0' || _updateDetails.listAddress[j].StateID == null) {
                               _returnData.isValid = true;
                               _returnData.validationMessage = 'Please select State';
                               break;
                           }
                           if (_updateDetails.listAddress[j].CountryID == '' || _updateDetails.listAddress[j].CountryID == '0' || _updateDetails.listAddress[j].CountryID == null) {
                               _returnData.isValid = true;
                               _returnData.validationMessage = 'Please select Country';
                               break;
                           }
                           if (_updateDetails.listAddress[j].PinCode == '' || _updateDetails.listAddress[j].PinCode == '0' || _updateDetails.listAddress[j].PinCode == null) {
                               _returnData.isValid = true;
                               _returnData.validationMessage = 'Please insert PinCode';
                               break;
                           }
                           if (_updateDetails.listAddress[j].Address == '' || _updateDetails.listAddress[j].Address == null) {
                               _returnData.isValid = true;
                               _returnData.validationMessage = 'Please insert Address';
                               break;
                           }
                       //}
                  }
                  else {
                      _returnData.isValid = false;
                  }

                 
              }
              return _returnData;
          }

            return {
                authenticationBankDetail: authenticationBankDetail,
                authenticationProfileSaveDetail: authenticationProfileSaveDetail
            }
        }])
        .controller("UserCtrl", ["$rootScope", "$scope", "$timeout", '$localStorage', 'CommonSrvc', '$location', function ($rs, $scope, $timeout, $localStorage, CommonSrvc, $location) {
            var mm = window.matchMedia("(max-width: 767px)");
            $rs.isMobile = mm.matches ? !0 : !1, $rs.safeApply = function (fn) {
                var phase = this.$root.$$phase;
                "$apply" == phase || "$digest" == phase ? fn && "function" == typeof fn && fn() : this.$apply(fn)
            }, mm.addListener(function (m) {
                $rs.safeApply(function () {
                    $rs.isMobile = m.matches ? !0 : !1
                })
            }), $scope.navFull = !0, $rs.toggleNav = function () {
                $scope.navFull = $scope.navFull ? !1 : !0, $rs.navOffCanvas = $rs.navOffCanvas ? !1 : !0, console.log("navOffCanvas: " + $scope.navOffCanvas), $timeout(function () {
                    $rs.$broadcast("c3.resize")
                }, 260)
            }, $scope.toggleSettingsBox = function () {
                $scope.isSettingsOpen = $scope.isSettingsOpen ? !1 : !0
            }, $scope.themeActive = "theme-zero", $scope.fixedHeader = !0, $scope.navHorizontal = !1;
            var SETTINGS_STATES = "_setting-states",
                statesQuery = {
                    get: function () {
                        return JSON.parse(localStorage.getItem(SETTINGS_STATES))
                    },
                    put: function (states) {
                        localStorage.setItem(SETTINGS_STATES, JSON.stringify(states))
                    }
                },
                sQuery = statesQuery.get() || {
                    navHorizontal: $scope.navHorizontal,
                    fixedHeader: $scope.fixedHeader,
                    navFull: $scope.navFull,
                    themeActive: $scope.themeActive
                };
            sQuery && ($scope.navHorizontal = sQuery.navHorizontal, $scope.fixedHeader = sQuery.fixedHeader, $scope.navFull = sQuery.navFull, $scope.themeActive = sQuery.themeActive), $scope.onNavHorizontal = function () {
                sQuery.navHorizontal = $scope.navHorizontal, statesQuery.put(sQuery)
            }, $scope.onNavFull = function () {
                sQuery.navFull = $scope.navFull, statesQuery.put(sQuery), $timeout(function () {
                    $rs.$broadcast("c3.resize")
                }, 260)
            }, $scope.onFixedHeader = function () {
                sQuery.fixedHeader = $scope.fixedHeader, statesQuery.put(sQuery)
            }, $scope.onThemeActive = function () {
                sQuery.themeActive = $scope.themeActive, statesQuery.put(sQuery)
            }, $scope.onThemeChange = function (theme) {
                $scope.themeActive = theme, $scope.onThemeActive()
            }

            //Custom Function
            if ($localStorage.LoginStatus) {
                //Entry Point For User
                $scope.UserBasic = {
                    img: $localStorage.TempUserDetails.Gender == "Male" ? "../../../../Img/Clients/defaultImage.png" : "../../../../Img/Clients/femaleIcon.png",
                    Name: $localStorage.TempUserDetails.Name,
                    EmailID: $localStorage.TempUserDetails.Username,
                }
                if ($localStorage.TempUserDetails.IsComplete == "1") {
                    $rs.toggleNav();
                    $rs.HideNavBarIsCompleteKYC = true;
                    $rs.BgColorWhite = true;
                    $localStorage.UserDetails = {
                        kYCRegistartion: true,
                        kYCStatus:""
                    };
                    $location.path('/Profile');
                }
            }
            else {
                
                $rs.HideNavBarIsCompleteProfile = true;
                window.location = "../../../../Index.html"
            }

            //$('#LoaderShow').modal('hide');
            //$('body').removeClass('modal-open');
            $('div').removeClass('modal-backdrop');



            $scope.homePage = function () {
                window.location = "../../../../Index.html"
            }

            //Logout Function
            $scope.LogOut = function () {
                $localStorage.LoginStatus = false;
                $localStorage.ChildState = false;
                $localStorage.TempUserDetails = null;
                window.location = "../../../../Index.html"
            }

        }])
        .controller("HeadCtrl", ["$scope", "Fullscreen", "CommonSrvc", "$localStorage", "$mdDialog", function ($scope, Fullscreen, CommonSrvc, $localStorage, $mdDialog) {
            $scope.toggleFloatingSidebar = function () {
                $scope.floatingSidebar = $scope.floatingSidebar ? !1 : !0, console.log("floating-sidebar: " + $scope.floatingSidebar)
            }, $scope.goFullScreen = function () {
                Fullscreen.isEnabled() ? Fullscreen.cancel() : Fullscreen.all()
            };
            
            var UserDetailsPromis = CommonSrvc.GetUserDetailsInfo.getPromise($localStorage.TempUserDetails.LoginID);
            UserDetailsPromis.then(
            // OnSuccess function
            function (answer) {

                if (answer.data.GetUserProfileDetailsInfoResult.ResponseCode == 0) {
                
                    $scope.UserDetailInfo = answer.data.GetUserProfileDetailsInfoResult.Result;
                    $scope.CartNotificationTotal = parseInt($scope.UserDetailInfo.UserProfileData.AddedCartCount) + parseInt($scope.UserDetailInfo.UserProfileData.AddedFavCount) + parseInt($scope.UserDetailInfo.UserProfileData.AddedInvestment);
                    $scope.CartNotificationScheme = $scope.UserDetailInfo.UserProfileData.AddedCartCount;
                    $scope.CartNotificationFavorite = $scope.UserDetailInfo.UserProfileData.AddedFavCount;
                    $scope.InvestNotificationScheme = $scope.UserDetailInfo.UserProfileData.AddedInvestment;
                    
                }
                else {
                    $scope.ErrorMessage = answer.data.GetUserProfileDetailsInfoResult.ResponseMessage;
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
            $scope.ShowListOfCart = function (From) {
             
                $localStorage.FromList = From;
                $mdDialog.show({
                    controller: TableListDetails,
                    templateUrl: '../dist/views/popup/TableListPopup.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true
                    // Only for -xs, -sm breakpoints.
                });
            };

            function TableListDetails($scope, $mdDialog) {
                $scope.InvestorFundaMsg = {
                    MessageContent: "",
                    Header: ""
                };
                $scope.InvestorFundaMsg.Header = "List of Cart";
                $scope.getPaymentStatus=function(BSECode)
                {
                    var GetUserPaymentStatus = CommonSrvc.GetUserPaymentStatus.getPromise(BSECode, $localStorage.TempUserDetails.LoginID);
                    GetUserPaymentStatus.then(
              // OnSuccess function
              function (answer) {

                  if (answer.data.GetUserPaymentStatusResult.ResponseCode == 0) {
                   

                      $scope.PaymentStatus = answer.data.GetUserPaymentStatusResult.ResponseMessage;

                  }
                  else {
                      $scope.ErrorMessage = answer.data.GetUserPaymentStatusResult.ResponseMessage;
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

                $scope.getPaymentstring = function () {
                    var GetUserPaymentString = CommonSrvc.GetUserPaymentString.getPromise($localStorage.TempUserDetails.LoginID);
                    GetUserPaymentString.then(
              // OnSuccess function
              function (answer) {

                  if (answer.data.GetUserPaymentStringResult.ResponseCode == 0) {

                      window.location = answer.data.GetUserPaymentStringResult.ResponseMessage
                      

                  }
                  else {
                      $scope.ErrorMessage = answer.data.GetUserPaymentStringResult.ResponseMessage;
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

                
                var UserCartDetails = CommonSrvc.GetCartListDetails.getPromise($localStorage.TempUserDetails.LoginID);
                UserCartDetails.then(
                // OnSuccess function
                function (answer) {

                    if (answer.data.GetInvestmentPlanCartResult.ResponseCode == 0) {
                        if ($localStorage.FromList == "InvestmentList") {
                            $scope.UserCartDetailInfo = answer.data.GetInvestmentPlanCartResult.Result.InvestmentLumpsumList;
                        }
                        else if ($localStorage.FromList == "Lumpsumcart") {
                            $scope.UserCartDetailInfo = answer.data.GetInvestmentPlanCartResult.Result.InvestmentLumpsumCartList;
                        }
                        else if ($localStorage.FromList == "favoritecart") {
                            $scope.UserCartDetailInfo = answer.data.GetInvestmentPlanCartResult.Result.InvestmentFavouriteList;
                        }
                      
                        for(var a=0;a<$scope.UserCartDetailInfo.length;a++)
                        {
                            $scope.UserCartDetailInfo[a].FolioNo = "7084" + a;
                        }

                    }
                    else {
                        $scope.ErrorMessage = answer.data.GetInvestmentPlanCartResult.ResponseMessage;
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

               

                $scope.hide = function () {
                    $mdDialog.hide();
                };

                $scope.cancel = function () {
                    $localStorage.CurrentStatusOfPage = "";
                    $mdDialog.cancel();
                };

                $scope.ClickToProcedNextStep = function () {
                    $rootScope.InsertPlanForMutuals();
                }
                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };



            };
           
            //$scope.CartNotificationTotal = parseInt($localStorage.UserDetailInfoDetails.UserProfileData.AddedCartCount) + parseInt($localStorage.UserDetailInfoDetails.UserProfileData.AddedFavCount);



        }])
        .controller("DashboardCtrl", ["$scope", "CommonSrvc", "$localStorage", "$rootScope", "$mdToast", function ($scope, CommonSrvc, $localStorage, $rootScope, $mdToast) {
            $scope.analyticsconfig = {
                data: {
                    columns: [
                        ["Network Load", 30, 100, 80, 140, 150, 200],
                        ["CPU Load", 90, 100, 170, 140, 150, 50]
                    ],
                    type: "spline",
                    types: {
                        "Network Load": "bar"
                    }
                },
                color: {
                    pattern: ["#3F51B5", "#38B4EE", "#4CAF50", "#E91E63"]
                },
                legend: {
                    position: "inset"
                },
                size: {
                    height: 330
                }
            }, $scope.storageOpts = {
                size: 100,
                lineWidth: 2,
                lineCap: "square",
                barColor: "#E91E63"
            }, $scope.storagePercent = 80, $scope.serverOpts = {
                size: 100,
                lineWidth: 2,
                lineCap: "square",
                barColor: "#4CAF50"
            }, $scope.serverPercent = 35, $scope.clientOpts = {
                size: 100,
                lineWidth: 2,
                lineCap: "square",
                barColor: "#FDD835"
            }, $scope.clientPercent = 54,
            $scope.PortfolioAllocationGraph = {
                data: {
                    columns: [
                        ["Equity", 48],
                        ["Debt", 52]
                    ],
                    type: "donut"
                },
                size: {
                    width: 150,
                    height: 150
                },
                donut: {
                    width: 50
                },
                color: {
                    pattern: ["#3F51B5", "#4CAF50"]
                }
            }
            $scope.showCustomToast = function () {
                $mdToast.show({
                    hideDelay: 30000,
                    position: 'bottom center',
                    controller: ToastCtrl,
                    templateUrl: '../dist/views/toast-template.html'
                });
            };
            function ToastCtrl($scope, $rootScope, $mdDialog, $mdToast, $filter) {
                $scope.Data = $rootScope.UploadMessage;
            }
            var investDetailsPl = [];
            var GetUserDashInvestment = CommonSrvc.GetUserDashInvestment.getPromise($localStorage.TempUserDetails.LoginID);
            GetUserDashInvestment.then(
            // OnSuccess function
            function (answer) {
              
                if (answer.data.GetDashInvestmentDetailsResult.ResponseCode == 0)
                {
                    
                    $scope.investMentDetails = [];
                    var currentUnit = 0;
                    var currentTotal = 0;
                    var currentProfitLoss = 0;
                    var lastNav = 0;
                    var schemeNav = 0;
                    var lastAmount = 0;
                    var InvestmentDetailsList = answer.data.GetDashInvestmentDetailsResult.Result.UserInvestmentSchemeDetailsData;

                    var UniquePlan_ID = InvestmentDetailsList.map(item => item.ISIN).filter((value, index, self) => self.indexOf(value) === index);

                    var UniqueISIN = InvestmentDetailsList.map(item => item.ISIN).filter((value, index, self) => self.indexOf(value) === index);
                    $scope.UniqueDifPlanID = UniquePlan_ID;
                    $scope.UniqueISIN = UniqueISIN;
                    var TotalInvestedAmount = 0;
                    var TempTotalCurrentValue = 0;
                    var TotalCurrentValue = 0;
                    var TotalUnit = 0;
                    var TempTotalProfitLoass = 0;
                    var TotalProfitLoass = 0;
                    for (var a = 0; a < UniqueISIN.length; a++) {
                        
                        var listOfUniquePlanID = InvestmentDetailsList.map(function (cur, index)
                        {
                            if (cur.ISIN == UniqueISIN[a])
                                return index
                        });
                        listOfUniquePlanID = listOfUniquePlanID.filter(function (n) { return n != undefined });
                        var inveInfo = {
                            MasterPlanName: "",

                            details: []
                        }
                        currentTotal = 0;
                        currentUnit = 0;
                        TempTotalCurrentValue = 0;
                        TempTotalProfitLoass = 0;
                        TotalUnit = 0;
                        var investItem = {
                            "SchemeName": "",
                            "CurrentNav": "",
                            ProfitLoss: "",
                            Units: "",
                            Date: "",
                            Total: "",
                            InvstAmount: "",
                            currentValue: "",
                            Investment: "",
                            MasterPlanName: "",
                            PlanID: "",
                            InvestmentSchemePlan_ID:"",
                            MF_CurrentDdate:"",
                            Folio: ""
                        }
                        var Folio = "";
                        for (var b = 0; b < listOfUniquePlanID.length; b++)
                        {
                            investItem = {
                                "SchemeName": "",
                                "CurrentNav": "",
                                ProfitLoss: "",
                                Units: "",
                                Date: "",
                                Total: "",
                                InvstAmount: "",
                                currentValue: "",
                                Investment: "",
                                MasterPlanName: "",
                                PlanID: "",
                                InvestmentSchemePlan_ID: "",
                                MF_CurrentDdate: "",
                                Folio:""
                            }
                             
                            if (InvestmentDetailsList[listOfUniquePlanID[b]].Folio != "")
                            {
                                Folio = InvestmentDetailsList[listOfUniquePlanID[b]].Folio;
                            }
                            
                            investItem.SchemeName = InvestmentDetailsList[listOfUniquePlanID[b]].SchemeName;
                            $scope.MF_CurrentDdate = InvestmentDetailsList[listOfUniquePlanID[b]].MF_CurrentDate;
                            var tempTotal = (InvestmentDetailsList[listOfUniquePlanID[b]].Amount / InvestmentDetailsList[listOfUniquePlanID[b]].SchemeNav).toFixed(3);
                            currentUnit = parseFloat(currentUnit) + parseFloat(tempTotal);
                            TotalUnit = parseFloat(TotalUnit) + parseFloat(tempTotal);
                            
                            currentTotal = currentTotal + parseFloat(InvestmentDetailsList[listOfUniquePlanID[b]].Amount);
                            TotalInvestedAmount = parseFloat(TotalInvestedAmount) + parseFloat(InvestmentDetailsList[listOfUniquePlanID[b]].Amount);
                            lastNav = parseFloat(InvestmentDetailsList[listOfUniquePlanID[b]].CurrentNav);
                            lastAmount = parseFloat(InvestmentDetailsList[listOfUniquePlanID[b]].Amount);
                            inveInfo.MasterPlanName = InvestmentDetailsList[listOfUniquePlanID[b]].MasterPlanName;
                            schemeNav = InvestmentDetailsList[listOfUniquePlanID[b]].SchemeNav;

                            
                            //currentTotal =currentTotal+  parseFloat(InvestmentDetailsList[listOfUniquePlanID[b]].Amount);
                                //currentProfitLoss = (parseFloat((currentUnit * lastNav)) - parseFloat(currentTotal)).toFixed(3);
                                
                                //investItem.ProfitLoss = currentProfitLoss;
                                investItem.Total = currentTotal;
                                investItem.CurrentNav = lastNav;
                                investItem.InvstAmount = lastAmount;
                                
                                TempTotalCurrentValue = parseFloat(TempTotalCurrentValue) + parseFloat((currentUnit * lastNav).toFixed(3));
                                currentProfitLoss = (parseFloat(((investItem.Units * schemeNav).toFixed(3))) - parseFloat(currentTotal)).toFixed(3);
                                
                                TempTotalProfitLoass = parseFloat(TempTotalProfitLoass) + parseFloat(currentProfitLoss);
                                investItem.PlanID = InvestmentDetailsList[listOfUniquePlanID[b]].Plan_ID;
                                investItem.InvestmentSchemePlan_ID = InvestmentDetailsList[listOfUniquePlanID[b]].InvestmentSchemePlan_ID;
                                if (b == (listOfUniquePlanID.length - 1))
                                {
                                    investItem.Units = TotalUnit.toFixed(3);
                                    investItem.currentValue = (investItem.Units * lastNav).toFixed(3);
                                    investItem.ProfitLoss = (parseFloat(investItem.currentValue) - parseFloat(investItem.Total)).toFixed(3);
                                    TotalCurrentValue = TotalCurrentValue + parseFloat(investItem.currentValue);
                                    TotalProfitLoass = (parseFloat(TotalProfitLoass) + parseFloat(investItem.ProfitLoss)).toFixed(3);
                                    investItem.Folio = Folio;
                                    inveInfo.details.push(investItem)
                                }
                                
                               
                            

                           
                        }
                        $scope.investMentDetails.push(inveInfo);
                        console.log($scope.investMentDetails)
                      
                    }
                    $scope.TotalCurrentValue = TotalCurrentValue.toFixed(3);
                    $scope.TotalProfitLoass = TotalProfitLoass;
                    $scope.TotalInvestedAmount = TotalInvestedAmount.toFixed(3);


                    //var inveInfo = {
                    //    "SchemeName":"",
                    //    "Nav":"",
                    //    "CurrentNav":"",
                    //    ProfitLoss:"",
                    //    Units: "",
                    //    Date: "",
                    //    Total
                    //}
                    //for (var a = 0; a < answer.data.GetDashInvestmentDetailsResult.Result.UserInvestmentSchemeDetailsData.length; a++)
                    //{
                    //    inveInfo.SchemeName = answer.data.GetDashInvestmentDetailsResult.Result.UserInvestmentSchemeDetailsData[a].SchemeName; 

                    //}
                   
                }
                else {
                    $scope.ErrorMessage = answer.data.GetCountryDetailsResult.ResponseMessage;
                }

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                $scope.ErrorMessage = answer.data.GetCountryDetailsResult.ResponseMessage;
                //$scope.somethingWrong = reason;
                //$scope.error = true;
            }
          )


            $scope.UpdateInvestAction = function (InvestActSts_ID, InvestmentSchemePlan_ID) {
                var UpdateInvestActStats = CommonSrvc.UpdateInvestActStats.getPromise(InvestActSts_ID, InvestmentSchemePlan_ID);
                UpdateInvestActStats.then(
                // OnSuccess function
                function (answer) {
                    if (answer.data.UpdateInvestmentActnStsResult.ResponseCode == "0")
                    {

                        $rootScope.UploadMessage = answer.data.UpdateInvestmentActnStsResult.Result;
                        $scope.showCustomToast();
                    }
                   
                  

                },
                // OnFailure function
                function (reason) {
                    HideLoader();
                    $scope.ErrorMessage = answer.data.GetCountryDetailsResult.ResponseMessage;
                    //$scope.somethingWrong = reason;
                    //$scope.error = true;
                }
              )
            }
            
        }])
        .directive('dateInput', function () {
            return {
                restrict: 'A',
                scope: {
                    ngModel: '='
                },
                link: function (scope) {
                    if (scope.ngModel) scope.ngModel = new Date(scope.ngModel);
                }
            }
        })
        .filter('DateFilter', function () {
        return function (Date) {
            var date = new Date(Date);
            return date;
        };
    })
        .controller("ProfileCtrl", ["$scope", "CommonSrvc", "$localStorage", "$filter", "$http", "$mdToast", '$rootScope', 'validateSrvc', function ($scope, CommonSrvc, $localStorage, $filter, $http, $mdToast, $rootScope, validateSrvc) {

            $('div').removeClass('modal-backdrop');
            var UserDetailsPromis = CommonSrvc.GetUserDetailsInfo.getPromise($localStorage.TempUserDetails.LoginID);
            $scope.loadUserProfile = function () {
                UserDetailsPromis.then(
              // OnSuccess function
              function (answer) {

                  if (answer.data.GetUserProfileDetailsInfoResult.ResponseCode == 0) {


                      $scope.UserDetailInfo = answer.data.GetUserProfileDetailsInfoResult.Result;
                      $scope.UserDetailInfo.AddressDetailsData[0].CountryID = "101";
                      // $scope.UserDetailInfo.UserProfileData.DateOfBirth = new Date($scope.UserDetailInfo.UserProfileData.DateOfBirth);
                      document.getElementById("CartNotificationTotal").innerText = parseInt($scope.UserDetailInfo.UserProfileData.AddedCartCount) + parseInt($scope.UserDetailInfo.UserProfileData.AddedFavCount);

                     
                  }
                  else {
                      $scope.ErrorMessage = answer.data.GetUserProfileDetailsInfoResult.ResponseMessage;
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

            $scope.ListMaritalStatus = [
            {
                ID: "1",
                Name:"Single"
            },
            {
                ID: "2",
                Name: "Married"
            }
            ,
            {
                ID: "3",
                Name: "Widowed"
            }
            ,
            {
                ID: "4",
                Name: "Divorced"
            }

            ]
            $scope.showCustomToast = function () {
                $mdToast.show({
                    hideDelay: 30000,
                    position: 'bottom center',
                    controller: ToastCtrl,
                    templateUrl: '../dist/views/toast-template.html'
                });
            };
            function ToastCtrl($scope, $rootScope, $mdDialog, $mdToast, $filter) {
                $scope.Data = $rootScope.UploadMessage;
            }
            //Onload Function
            $scope.userAdharCard = "";
            $scope.userAdharCardCheckBOx = false;
            function ProfileDataView() {
              
                UserDetailsPromis.then(
                // OnSuccess function
                function (answer) {

                    if (answer.data.GetUserProfileDetailsInfoResult.ResponseCode == 0) {


                        $scope.UserDetailInfo = answer.data.GetUserProfileDetailsInfoResult.Result;
                        $scope.UserDetailInfo.UserProfileData.PANNumber = $scope.profilePanCard;
                        $scope.UserDetailInfo.UserProfileData.DividentPayMode_ID = "2";
                        $scope.UserDetailInfo.UserProfileData.CommunicationMode_ID = "3";
                        // $scope.UserDetailInfo.UserProfileData.DateOfBirth = new Date($scope.UserDetailInfo.UserProfileData.DateOfBirth);
                        document.getElementById("CartNotificationTotal").innerText = parseInt($scope.UserDetailInfo.UserProfileData.AddedCartCount) + parseInt($scope.UserDetailInfo.UserProfileData.AddedFavCount);
                        $rootScope.HideNavBarIsCompleteProfile = true;
                        
                    }
                    else {
                        $scope.ErrorMessage = answer.data.GetUserProfileDetailsInfoResult.ResponseMessage;
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
            ShowLoader();
            $scope.GenderList = ["Male","Female","Other"]
            var CountryPromis = CommonSrvc.GetCountryDetails.getPromise();
            CountryPromis.then(
            // OnSuccess function
            function (answer) {

                if (answer.data.GetCountryDetailsResult.ResponseCode == 0) {
                    $localStorage.ContryDpwn = answer.data.GetCountryDetailsResult.Result;
                    $scope.CountryListDetails = [];
                    for (var a = 0; a < $localStorage.ContryDpwn.length; a++) {
                        $scope.CountryListDetails.push({ Country_Name: $localStorage.ContryDpwn[a].Country_Name, Country_ID: $localStorage.ContryDpwn[a].Country_ID })
                    }
                    $scope.CountryListDetails.push({ Country_Name: "Demo", Country_ID: "2" })
                }
                else {
                    $scope.ErrorMessage = answer.data.GetCountryDetailsResult.ResponseMessage;
                }

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                $scope.ErrorMessage = answer.data.GetCountryDetailsResult.ResponseMessage;
                //$scope.somethingWrong = reason;
                //$scope.error = true;
            }
          )
            var StatePromis = CommonSrvc.GetStateDetails.getPromise();
            StatePromis.then(
            // OnSuccess function
            function (answer) {

                if (answer.data.GetStateDetailsResult.ResponseCode == 0) {
                    $localStorage.StateDpwn = answer.data.GetStateDetailsResult.Result;
                    $scope.StateList = [];
                    for (var a = 0; a < $localStorage.StateDpwn.length; a++) {
                        $scope.StateList.push({ State_Name: $localStorage.StateDpwn[a].State_Name, Country_ID: $localStorage.StateDpwn[a].Country_ID, State_ID: $localStorage.StateDpwn[a].State_ID })
                    }
                    $scope.StateListDetails = $scope.StateList;
                }
                else {
                    $scope.ErrorMessage = answer.data.GetStateDetailsResult.ResponseMessage;
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
            var CityPromis = CommonSrvc.GetCityDetails.getPromise();
            CityPromis.then(
            // OnSuccess function
            function (answer) {

                if (answer.data.GetCityDetailsResult.ResponseCode == 0) {
                    $localStorage.CityDpwn = answer.data.GetCityDetailsResult.Result;
                    $scope.CityList = [];
                    for (var a = 0; a < $localStorage.CityDpwn.length; a++) {
                        $scope.CityList.push({ State_ID: $localStorage.CityDpwn[a].State_ID, City_Name: $localStorage.CityDpwn[a].City_Name, City_ID: $localStorage.CityDpwn[a].City_ID })
                    }

                    $scope.CityListDetails = $scope.CityList;
                }
                else {
                    $scope.ErrorMessage = answer.data.GetCityDetailsResult.ResponseMessage;
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
            var TaxStatusPromis = CommonSrvc.GetTaxStatus.getPromise();
            TaxStatusPromis.then(
            // OnSuccess function
            function (answer) {

                if (answer.data.GetTaxStatusResult.ResponseCode == 0) {
                    $scope.TaxStatusDpwn = answer.data.GetTaxStatusResult.Result;
                    $scope.TaxStatusList = [];
                    for (var a = 0; a < $scope.TaxStatusDpwn.length; a++) {
                        $scope.TaxStatusList.push({ TaxID: $scope.TaxStatusDpwn[a].TaxID, TaxStatusName: $scope.TaxStatusDpwn[a].TaxStatusName })
                    }

                }
                else {
                    $scope.ErrorMessage = answer.data.GetTaxStatusResult.ResponseMessage;
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
            // Bank and other SaveUploadDetails
            var BankandOtherPromis = CommonSrvc.GetAllListDetails.getPromise();
            BankandOtherPromis.then(
            // OnSuccess function
            function (answer) {

                if (answer.data.GetAllListDetailsResult.ResponseCode == 0) {
                    $scope.BankAccountStatusDpwn = answer.data.GetAllListDetailsResult.Result.BankAccountType;
                    $scope.BankDetailsDpwn = answer.data.GetAllListDetailsResult.Result.BankList;
                    $scope.NomineeDpwn = answer.data.GetAllListDetailsResult.Result.NomineeTypeList;
                    $scope.RelationDpwn = answer.data.GetAllListDetailsResult.Result.RelationList;
                    $scope.ClientTypeDpwn = answer.data.GetAllListDetailsResult.Result.ClientTypeList;
                    $scope.DividentPayModeDpwn = answer.data.GetAllListDetailsResult.Result.DividentPayModeList;
                    $scope.CommunicationDpwn = answer.data.GetAllListDetailsResult.Result.CommunicationModeList;
                    $scope.DepositoryNameList = ['CDSL', 'NSDL'];
                    $scope.ClientTypeList = ['PHYSICAL', 'DEMAT'];
                    $scope.BankAccountList = [];
                    $scope.BankDetailsList = [];
                    $scope.BankNomineeList = [];
                    $scope.BankRelationList = [];
                    for (var a = 0; a < $scope.BankAccountStatusDpwn.length; a++) {
                        $scope.BankAccountList.push({ AccountTypeID: $scope.BankAccountStatusDpwn[a].AccountTypeID, AccountType: $scope.BankAccountStatusDpwn[a].AccountType })
                    }
                    for (var a = 0; a < $scope.BankDetailsDpwn.length; a++) {
                        $scope.BankDetailsList.push({ Bank_ID: $scope.BankDetailsDpwn[a].Bank_ID, Bank_Name: $scope.BankDetailsDpwn[a].Bank_Name })
                    }
                    for (var a = 0; a < $scope.NomineeDpwn.length; a++) {
                        $scope.BankNomineeList.push({ NomineeType_ID: $scope.NomineeDpwn[a].NomineeType_ID, NomineeTypeValue: $scope.NomineeDpwn[a].NomineeTypeValue })
                    }
                    for (var a = 0; a < $scope.RelationDpwn.length; a++) {
                        $scope.BankRelationList.push({ Relationship_ID: $scope.RelationDpwn[a].Relationship_ID, RelationToUser: $scope.RelationDpwn[a].RelationToUser })
                    }


                }
                else {
                    $scope.ErrorMessage = answer.data.GetAllListDetailsResult.ResponseMessage;
                }

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                $scope.ErrorMessage = answer.data.GetAllListDetailsResult.ResponseMessage;
                //$scope.somethingWrong = reason;
                //$scope.error = true;
            }
          )
            var HoldingNaturePromis = CommonSrvc.HoldingNature.getPromise();
            HoldingNaturePromis.then(
            // OnSuccess function
            function (answer) {

                if (answer.data.GetHoldingNatureResult.ResponseCode == 0) {
                    $scope.HoldingNatureDpwn = answer.data.GetHoldingNatureResult.Result;
                    $scope.HoldingNatureList = [];
                    for (var a = 0; a < $scope.HoldingNatureDpwn.length; a++) {
                        $scope.HoldingNatureList.push({ Holding_Nature: $scope.HoldingNatureDpwn[a].Holding_Nature })
                    }

                }
                else {
                    $scope.ErrorMessage = answer.data.GetHoldingNatureResult.ResponseMessage;
                }

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                $scope.ErrorMessage = answer.data.GetHoldingNatureResult.ResponseMessage;
                //$scope.somethingWrong = reason;
                //$scope.error = true;
            }
          )

            var SourceOfWealthPromis = CommonSrvc.GetSourceOfWealth.getPromise();
            SourceOfWealthPromis.then(
            // OnSuccess function
            function (answer) {

                if (answer.data.GetSourceOfWealthResult.ResponseCode == 0) {
                    $scope.SourceOfWealthDpwn = answer.data.GetSourceOfWealthResult.Result;
                    $scope.SourceOfWealthList = [];
                    for (var a = 0; a < $scope.SourceOfWealthDpwn.length; a++) {
                        $scope.SourceOfWealthList.push({ SourceOfWealth_ID: $scope.SourceOfWealthDpwn[a].SourceOfWealth_ID, SourceOf_Wealth: $scope.SourceOfWealthDpwn[a].SourceOf_Wealth })
                    }

                }
                else {
                    $scope.ErrorMessage = answer.data.GetSourceOfWealthResult.ResponseMessage;
                }

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                $scope.ErrorMessage = answer.data.SourceOfWealthResult.ResponseMessage;
                //$scope.somethingWrong = reason;
                //$scope.error = true;
            }
          )

            
            $scope.OnLoadProfileData=function()
            {
                if ($localStorage.TempUserDetails.IsComplete == "1") {
                    if ($localStorage.TempUserDetails.RegistrationType == "2")
                    {
                        $rootScope.HideNavBarIsCompleteProfile = true;
                        $rootScope.HideNavBarIsCompleteKYC = false;
                        $rootScope.HideNavBarIsCompleteAdharCard = false;
                    }
                    else {
                        $rootScope.HideNavBarIsCompleteKYC = true;
                        $rootScope.HideNavBarIsCompleteAdharCard = false;
                        $rootScope.BgColorWhite = true;
                    }
                    
                   
                }
                else
                {
                    $rootScope.HideNavBarIsCompleteProfile = true;
                    $rootScope.HideNavBarIsCompleteKYC = false;
                    $rootScope.HideNavBarIsCompleteAdharCard = false;
                }
                
                
                $scope.loadUserProfile();
              
            }
          
            $scope.OnLoadProfileData();
            HideLoader();
            
            $scope.StateListDetails = $filter('filter')($scope.StateList, { Country_ID: '101' });
            //$scope.SelectedCountry = function (Country_ID) {
            //    $scope.CityListDetails = [];
            //    $scope.StateListDetails = [];
            //    $scope.StateListDetails = $filter('filter')($scope.StateList, { Country_ID: Country_ID });
            //}
           
            $scope.SelectedState = function (State_ID) {
                $scope.CityListDetails = [];
                $scope.CityListDetails = $filter('filter')($scope.CityList, { State_ID: State_ID });
            }
            $scope.TaxStatus = {};
            $scope.DisableField = function (item) {
                if(item !='' ){}
            };
            // demo one
            $scope.TaxStatusList = [
                { TaxtName: 'Individual' },
                { TaxtName: 'Partnership Firm' },
                { TaxtName: 'LLP' }
            ];
            $scope.Holdingnature = {}; 
            // demo one
            $scope.HoldingnatureList = [
                { HoldingName: 'Single' },
                { HoldingName: 'Joint' },
                { HoldingName: 'Anyone / Other' }
            ];
            $scope.SourceOfWealth = {};
            // demo one
            $scope.SourceOfWealthList = [
                { SourceOfWealthName: 'Business Income' },
                { SourceOfWealthName: 'Salary' },
                { SourceOfWealthName: 'Retired' }
            ];
            $scope.YourIncome = {};
            // demo one
            $scope.YourIncomeList = [
                { YourIncomeName: 'Below 1 Lakh' },
                { YourIncomeName: '1 Lacs - 5 Lacs' },
                { YourIncomeName: '5 Lacs - 7 Lacs' }
            ];
            $scope.open = function ($event) {
                $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0
            }, $scope.dt = Date.now()

            $scope.Update = function () {

                

                let UserDetailsUpdate = {



                    "User_ID": $localStorage.TempUserDetails.LoginID,
                    "userprofile": $scope.UserDetailInfo.UserProfileData,

                    "listAddress": $scope.UserDetailInfo.AddressDetailsData,
                    "depositorydetails": {
                        "DepositoryDetails_ID": $scope.UserDetailInfo.DepositoryDetailsData.DepositoryDetails_ID,
                        "ClientType": $scope.UserDetailInfo.DepositoryDetailsData.ClientType,
                        "DepositoryName": $scope.UserDetailInfo.DepositoryDetailsData.DepositoryName,
                        "NSDLDP_ID": $scope.UserDetailInfo.DepositoryDetailsData.NSDLDP_ID,
                        "CDSLBenAcNo": $scope.UserDetailInfo.DepositoryDetailsData.CDSLBenAcNo,
                        "NSDLBenAcNo": $scope.UserDetailInfo.DepositoryDetailsData.NSDLBenAcNo
                    },
                    "bankdetails": {

                    },
                    "listNomineeDetails": [

                    ],
                    "listDocumentDetails": [

                    ]
                }
                let tempVal = validateSrvc.authenticationProfileSaveDetail(UserDetailsUpdate);

                if (!tempVal.isValid) {
                    $scope.errorMessage = "";
                //    for (var a = 0; a < $scope.UserDetailInfo.AddressDetailsData.length; a++)
                //    {
                //    var CountryIndex = $.map($localStorage.ContryDpwn, function (obj, index) {
                //        if(obj.Country_Name == $scope.UserDetailInfo.AddressDetailsData[a].CountryName) {
                //            return index;
                //        }
                //    })
                //    var StateIndex = $.map($localStorage.StateDpwn, function (obj, index) {
                //        if(obj.State_Name == $scope.UserDetailInfo.AddressDetailsData[a].StateName) {
                //            return index;
                //        }
                //    })
                //    var CityIndex = $.map($localStorage.CityDpwn, function (obj, index) {
                //        if (obj.City_Name == $scope.UserDetailInfo.AddressDetailsData[a].CityName) {
                //            return index;
                //        }
                //    })
                //    $scope.UserDetailInfo.AddressDetailsData[a].CountryID = CountryIndex.length > 0 ? $localStorage.ContryDpwn[CountryIndex[0]].Country_ID : "";
                //    $scope.UserDetailInfo.AddressDetailsData[a].StateID = StateIndex.length > 0 ? $localStorage.StateDpwn[StateIndex[0]].State_ID : "";
                //    $scope.UserDetailInfo.AddressDetailsData[a].CityID = CityIndex.length > 0 ? $localStorage.CityDpwn[CityIndex[0]].City_ID : "";
                //}

               
               
                
                $http.post(API_UserDataUpdate, JSON.stringify(UserDetailsUpdate))
                .success(function (data, status) {
                   
                    
                    if (data.UpdateUserDetailsResult.ResponseCode == 0) {
                        $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
                        $scope.showCustomToast();
                        $scope.OnLoadProfileData();
                       // alert(data.UpdateUserDetailsResult.ResponseMessage);
                    }
                    
                })
            .catch(function (response) {
                var d = response.data;
                $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
                $scope.showCustomToast();
            });
                }
                    //Message Part if some validation issue
                else

                {
                    $scope.errorMessage = tempVal.validationMessage;
                }

              
                    
            }

            $scope.SaveBankDetails = function () {
                var BankDetailsUpdate = {
                    "User_ID": $localStorage.TempUserDetails.LoginID,
                    "userprofile": {

                    },
                    "depositorydetails": {
                        "DepositoryDetails_ID": $scope.UserDetailInfo.DepositoryDetailsData.DepositoryDetails_ID,
                        "ClientType": $scope.UserDetailInfo.DepositoryDetailsData.ClientType,
                        "DepositoryName": $scope.UserDetailInfo.DepositoryDetailsData.DepositoryName,
                        "NSDLDP_ID": $scope.UserDetailInfo.DepositoryDetailsData.NSDLDP_ID,
                        "CDSLBenAcNo": $scope.UserDetailInfo.DepositoryDetailsData.CDSLBenAcNo,
                        "NSDLBenAcNo": $scope.UserDetailInfo.DepositoryDetailsData.NSDLBenAcNo
                    },
                    "bankdetails":[ {
                        "BankDetails_ID": $scope.UserDetailInfo.BankDetailsData.BankDetails_ID,
                        "User_ID": $localStorage.TempUserDetails.LoginID,
                        "Bank_ID": $scope.UserDetailInfo.BankDetailsData.Bank_ID,
                        "Bank_IFSC": $scope.UserDetailInfo.BankDetailsData.Bank_IFSC,
                        "Bank_AccountTypeID": $scope.UserDetailInfo.BankDetailsData.Bank_AccountTypeID,
                        "Bank_AccountNo": $scope.UserDetailInfo.BankDetailsData.Bank_AccountNo,
                        "NameAsPerBank": $scope.UserDetailInfo.BankDetailsData.NameAsPerBank
                    }],
                    "listNomineeDetails": [

                    ],
                    "listDocumentDetails": [

                    ]
                }
                let tempVal=validateSrvc.authenticationBankDetail(BankDetailsUpdate);

                if (!tempVal.isValid) {
                    $scope.errorMessage = "";
                    $http.post(API_UserDataUpdate, JSON.stringify(BankDetailsUpdate))
                                   .success(function (data, status) {

                  
                                       if (data.UpdateUserDetailsResult.ResponseCode == 0) {
                                           $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
                                           $scope.showCustomToast();
                                           //$scope.OnLoadProfileData();
                                           //alert(data.UpdateUserDetailsResult.ResponseMessage);
                                       }

                                   })
                               .catch(function (response) {
                                   var d = response.data;
                                   $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
                                   $scope.showCustomToast();
                               });
                }
                else {

                    $scope.errorMessage = tempVal.validationMessage;
                    
                    //Error Message
                }
                

            }

            $scope.AddNominee=function()
            {
               
                $scope.UserDetailInfo.NomineeDetailsData.push({
                        
                                           
                    "Nominee_Name": "",
                    "Nominee_Relationship": "",
                    "Nominee_RiskType": "",
                    "Nominee_DOB": "",
                    "Nominee_AllocationPercentage": "",
                    "UR_Nominee_ID": "",
                    "User_ID": $localStorage.TempUserDetails.LoginID
                })
            }
           
            $scope.SaveNomineeDetails = function () {
                var NomineeDetailsUpdate = {};
                var listNomineeDetails = [];
               
                 NomineeDetailsUpdate = {
                     "User_ID": $localStorage.TempUserDetails.LoginID,
                    "userprofile": {

                    },
                     "depositorydetails":{
                         "DepositoryDetails_ID": $scope.UserDetailInfo.DepositoryDetailsData.DepositoryDetails_ID,
                         "ClientType": $scope.UserDetailInfo.DepositoryDetailsData.ClientType,
                         "DepositoryName": $scope.UserDetailInfo.DepositoryDetailsData.DepositoryName,
                         "NSDLDP_ID": $scope.UserDetailInfo.DepositoryDetailsData.NSDLDP_ID,
                         "CDSLBenAcNo": $scope.UserDetailInfo.DepositoryDetailsData.CDSLBenAcNo,
                         "NSDLBenAcNo": $scope.UserDetailInfo.DepositoryDetailsData.NSDLBenAcNo
                    },
                    "bankdetails": {

                    },
                   

                    "listDocumentDetails":[ 
     
                    ],
                    "listNomineeDetails": $scope.UserDetailInfo.NomineeDetailsData

                }
              
                $http.post(API_UserDataUpdate, JSON.stringify(NomineeDetailsUpdate))
             .success(function (data, status) {

                 //$rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
                 if (data.UpdateUserDetailsResult.ResponseCode == 0) {
                     $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
                     $scope.showCustomToast();
                     //$scope.OnLoadProfileData();
                    // alert(data.UpdateUserDetailsResult.ResponseMessage);
                 }

             })
         .catch(function (response) {
             var d = response.data;
             $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
             $scope.showCustomToast();
         });
                    
            }

            $scope.SaveUploadDetails = function (DocumentUpload_ID)
            {

                var Datafiles = document.getElementById("file"+DocumentUpload_ID);
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", Datafiles.files[0]);

                $http.post(API_UserUploadDocuments + "/" + DocumentUpload_ID, fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        })
              .success(function (data, status) {

              

              })
              .catch(function (response) {
                  $rootScope.UploadMessage = "File Uploaded Successfully";
                  $scope.showCustomToast();
                  $scope.loadUserProfile();
              });
            }

            $scope.SaveDepositoryDetails = function () {
                var UploadDetailsUpdate = {};
                var listDocumentDetails = [];
                UploadDetailsUpdate = {
                    "User_ID": $localStorage.TempUserDetails.LoginID,
                    "userprofile": {

                    },
                    "depositorydetails": {
                        "DepositoryDetails_ID": $scope.UserDetailInfo.DepositoryDetailsData.DepositoryDetails_ID,
                        "ClientType": $scope.UserDetailInfo.DepositoryDetailsData.ClientType,
                        "DepositoryName": $scope.UserDetailInfo.DepositoryDetailsData.DepositoryName,
                        "NSDLDP_ID": $scope.UserDetailInfo.DepositoryDetailsData.NSDLDP_ID,
                        "CDSLBenAcNo": $scope.UserDetailInfo.DepositoryDetailsData.CDSLBenAcNo,
                        "NSDLBenAcNo": $scope.UserDetailInfo.DepositoryDetailsData.NSDLBenAcNo
                    },
                    "bankdetails": {

                    },
                    "listNomineeDetails": [

                    ],



                }
                for (var a = 0; a < $scope.UserDetailInfo.UploadDocumentDetailsData.length; a++) {
                    listDocumentDetails.push({


                        "DocumentUpload_ID": $scope.UserDetailInfo.UploadDocumentDetailsData[a].DocumentUpload_ID,
                        "User_ID": $localStorage.TempUserDetails.LoginID,
                        "DocumentType": $scope.UserDetailInfo.UploadDocumentDetailsData[a].DocumentType,
                        "DocumentName": $scope.UserDetailInfo.UploadDocumentDetailsData[a].DocumentName,
                        "DocumentPath": $scope.UserDetailInfo.UploadDocumentDetailsData[a].DocumentPath,
                        "IsMandatory": $scope.UserDetailInfo.UploadDocumentDetailsData[a].IsMandatory,
                    })
                    UploadDetailsUpdate.listDocumentDetails = listDocumentDetails;
                }
                $http.post(API_UserDataUpdate, JSON.stringify(UploadDetailsUpdate))
           .success(function (data, status) {

               // $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
               if (data.UpdateUserDetailsResult.ResponseCode == 0) {
                   $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
                   $scope.showCustomToast();
                   //$scope.OnLoadProfileData();
                   //alert(data.UpdateUserDetailsResult.ResponseMessage);
               }

           })
       .catch(function (response) {
           var d = response.data;
           $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
           $scope.showCustomToast();
       });
            }
            //Registration Process
            function pan_card(textObj) {
                var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                /*C - Company 
                P - Person 
                H - HUF(Hindu Undivided Family) 
                F - Firm 
                A - Association of Persons (AOP) 
                T - AOP (Trust) 
                B - Body of Individuals (BOI) 
                L - Local Authority 
                J - Artificial Juridical Person 
                G - Govt.*/
                var code = /([C,P,H,F,A,T,B,L,J,G])/;
                var code_chk = textObj.substring(3, 4);
                if (textObj !== "") {
                    if (regpan.test(textObj) == false) {
                        return false;
                    }
                    if (code.test(code_chk) == false) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
            $scope.checkPanCardValidation = function () {
                if(pan_card($scope.profilePanCard))
                {
                    $scope.isPanCardValid = true;
                }
                else {
                    $scope.isPanCardValid = false;
                }
                
            }

            $scope.submitProfile = function (param) {
                switch(param)
                {
                    case 'doNotKnow':
                        var postData = {
                            "User_ID": $localStorage.TempUserDetails.LoginID,
                            "RegistrationTypeID": "2",
                            "PanCard": $scope.profilePanCard

                        }
                        $http.post(API_UserRegistrationType, JSON.stringify(postData))
              .success(function (data, status) {


                  if (data.UpdateRegistrationType_IDResult.ResponseCode == 0) {
                      $localStorage.TempUserDetails.RegistrationType = "2";
                      $rootScope.HideNavBarIsCompleteProfile = true;
                      $rootScope.HideNavBarIsCompleteAdharCard = false;
                      $rootScope.HideNavBarIsCompleteKYC = false;
                      ProfileDataView();
                      // alert(data.UpdateUserDetailsResult.ResponseMessage);
                  }

              })
          .catch(function (response) {
              var d = response.data;
              $rootScope.UploadMessage = data.UpdateUserDetailsResult.ResponseMessage;
              $scope.showCustomToast();
          });

                       
                        
                        break;
                }
            }
            $scope.adharCardValidation=function()
            {
                console.log($scope.userAdharCardV);
                $scope.userAdharCard = $scope.userAdharCardV;
                $rootScope.HideNavBarIsCompleteProfile = false;
                $rootScope.HideNavBarIsCompleteAdharCard = true;
                $rootScope.BgColorWhite = true;
                $rootScope.HideNavBarIsCompleteKYC = false;
            }
        }])
    .controller("DownloadCtrl", ["$scope", "CommonSrvc", "$localStorage", "$filter", "$http", "$mdToast", '$rootScope', 'validateSrvc', function ($scope, CommonSrvc, $localStorage, $filter, $http, $mdToast, $rootScope, validateSrvc) {
        localStorage.setItem("TempUserName", $localStorage.TempUserDetails.Name)
        var UserDetailsPromis = CommonSrvc.GetUserDetailsInfo.getPromise($localStorage.TempUserDetails.LoginID);
        UserDetailsPromis.then(
        // OnSuccess function
        function (answer) {

            if (answer.data.GetUserProfileDetailsInfoResult.ResponseCode == 0) {

                
                $scope.UserDetailInfo = answer.data.GetUserProfileDetailsInfoResult.Result;
                if ($scope.UserDetailInfo.UserProfileData.Gender == "Male")
                {
                    $scope.genderPrifix = "Mr";
                }
                else if ($scope.UserDetailInfo.UserProfileData.Gender == "Female")
                {
                    $scope.genderPrifix = "Mrs";
                }
                else if($scope.UserDetailInfo.UserProfileData.Gender == "Other")
                {
                    $scope.genderPrifix = "Oth";
                }
                $scope.UserDetailInfo.UserProfileData.DividentPayMode_ID = "2";
                $scope.UserDetailInfo.UserProfileData.CommunicationMode_ID = "3";
                // $scope.UserDetailInfo.UserProfileData.DateOfBirth = new Date($scope.UserDetailInfo.UserProfileData.DateOfBirth);
                document.getElementById("CartNotificationTotal").innerText = parseInt($scope.UserDetailInfo.UserProfileData.AddedCartCount) + parseInt($scope.UserDetailInfo.UserProfileData.AddedFavCount);
                $rootScope.HideNavBarIsCompleteProfile = true;

            }
            else {
                $scope.ErrorMessage = answer.data.GetUserProfileDetailsInfoResult.ResponseMessage;
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

        $scope.generatePDF=function()
        {
            alert("Print PDF");
            var name = localStorage.getItem("TempUserName");
            //var generatePDF = function () {
                kendo.drawing.drawDOM($("#formConfirmation")).then(function (group) {
                    kendo.drawing.pdf.saveAs(group, $localStorage.TempUserDetails.Name+".pdf");
                });
            //}
        }
    }])
}();

! function () {
    "use strict";
    angular.module("app.table.ctrls", []).controller("ResponsiveTableDemoCtrl", ["$scope", function ($scope) {
        $scope.responsiveData = [{
            post: "My First Blog",
            author: "Johnny",
            categories: "WebDesign",
            tags: ["wordpress", "blog"],
            date: "20-3-2004",
            tagColor: "pink"
        }, {
            post: "How to Design",
            author: "Jenifer",
            categories: "design",
            tags: ["photoshop", "illustrator"],
            date: "2-4-2012",
            tagColor: "primary"
        }, {
            post: "Something is missing",
            author: "Joe",
            categories: "uncategorized",
            tags: ["abc", "def", "ghi"],
            date: "20-5-2013",
            tagColor: "success"
        }, {
            post: "Learn a new language",
            author: "Rinky",
            categories: "language",
            tags: ["C++", "Java", "PHP"],
            date: "10-5-2014",
            tagColor: "danger"
        }, {
            post: "I love singing. Do you?",
            author: "AJ",
            categories: "singing",
            tags: ["music"],
            date: "2-10-2014",
            tagColor: "info"
        }]
    }]).controller("DataTableCtrl", ["$scope", "$filter", function ($scope, $filter) {
        $scope.datas = [{
            engine: "Gecko",
            browser: "Firefox 3.0",
            platform: "Win 98+/OSX.2+",
            version: 1.7,
            grade: "A"
        }, {
            engine: "Gecko",
            browser: "Firefox 5.0",
            platform: "Win 98+/OSX.2+",
            version: 1.8,
            grade: "A"
        }, {
            engine: "KHTML",
            browser: "Konqureror 3.5",
            platform: "KDE 3.5",
            version: 3.5,
            grade: "A"
        }, {
            engine: "Presto",
            browser: "Opera 8.0",
            platform: "Win 95+/OS.2+",
            version: "-",
            grade: "A"
        }, {
            engine: "Misc",
            browser: "IE Mobile",
            platform: "Windows Mobile 6",
            version: "-",
            grade: "C"
        }, {
            engine: "Trident",
            browser: "IE 5.5",
            platform: "Win 95+",
            version: 5,
            grade: "A"
        }, {
            engine: "Trident",
            browser: "IE 6",
            platform: "Win 98+",
            version: 7,
            grade: "A"
        }, {
            engine: "Webkit",
            browser: "Safari 3.0",
            platform: "OSX.4+",
            version: 419.3,
            grade: "A"
        }, {
            engine: "Webkit",
            browser: "iPod Touch / iPhone",
            platform: "OSX.4+",
            version: 420,
            grade: "B"
        }];
        for (var prelength = $scope.datas.length, i = prelength; 100 > i; i++) {
            var rand = Math.floor(Math.random() * prelength);
            $scope.datas.push($scope.datas[rand])
        }
        $scope.searchKeywords = "", $scope.filteredData = [], $scope.row = "", $scope.numPerPageOpts = [5, 7, 10, 25, 50, 100], $scope.numPerPage = $scope.numPerPageOpts[1], $scope.currentPage = 1, $scope.currentPageStores = [], $scope.select = function (page) {
            var start = (page - 1) * $scope.numPerPage,
                end = start + $scope.numPerPage;
            $scope.currentPageStores = $scope.filteredData.slice(start, end)
        }, $scope.onFilterChange = function () {
            $scope.select(1), $scope.currentPage = 1, $scope.row = ""
        }, $scope.onNumPerPageChange = function () {
            $scope.select(1), $scope.currentPage = 1
        }, $scope.onOrderChange = function () {
            $scope.select(1), $scope.currentPage = 1
        }, $scope.search = function () {
            $scope.filteredData = $filter("filter")($scope.datas, $scope.searchKeywords), $scope.onFilterChange()
        }, $scope.order = function (rowName) {
            $scope.row != rowName && ($scope.row = rowName, $scope.filteredData = $filter("orderBy")($scope.datas, rowName), $scope.onOrderChange())
        }, $scope.search(), $scope.select($scope.currentPage)
    }])
}();

! function () {
    "use strict";
    angular.module("app.todo", []).factory("todoStorage", [function () {
        var STORAGE_ID = "_todo-task",
            store = {
                todos: [],
                get: function () {
                    return JSON.parse(localStorage.getItem(STORAGE_ID))
                },
                put: function (todos) {
                    localStorage.setItem(STORAGE_ID, JSON.stringify(todos))
                }
            };
        return store
    }]).controller("TodoCtrl", ["$scope", "todoStorage", "$filter", function ($s, store, $filter) {
        var demoTodos = [{
            title: "Eat healthy, Eat fresh",
            completed: !1
        }, {
            title: "Donate some money",
            completed: !0
        }, {
            title: "Wake up at 5:00 A.M",
            completed: !1
        }, {
            title: "Hangout with friends at 12:00",
            completed: !1
        }, {
            title: "Another todo on the list. Add as many you want.",
            completed: !1
        }, {
            title: "The last but not the least.",
            completed: !0
        }],
            todos = $s.todos = store.get() || demoTodos;
        $s.newTodo = "", $s.remainingCount = $filter("filter")(todos, {
            completed: !1
        }).length, $s.editedTodo = null, $s.edited = !1, $s.todoshow = "all", $s.$watch("remainingCount == 0", function (newVal) {
            $s.allChecked = newVal
        }), $s.filter = function (filter) {
            switch (filter) {
                case "all":
                    $s.statusFilter = "";
                    break;
                case "active":
                    $s.statusFilter = {
                        completed: !1
                    }
            }
        }, $s.addTodo = function () {
            var newTodo = {
                title: $s.newTodo.trim(),
                completed: !1
            };
            0 !== newTodo.length && (todos.push(newTodo), store.put(todos), $s.newTodo = "", $s.remainingCount++)
        }, $s.editTodo = function (todo) {
            $s.editedTodo = todo, $s.edited = !0, $s.originalTodo = angular.extend({}, todo)
        }, $s.removeTodo = function (todo) {
            $s.remainingCount -= todo.completed ? 0 : 1, todos.splice(todos.indexOf(todo), 1), store.put(todos)
        }, $s.doneEditing = function (todo) {
            $s.editedTodo = null, $s.edited = !1, todo.title = todo.title.trim(), todo.title || $s.removeTodo(todo), store.put(todos)
        }, $s.revertEditing = function (todo) {
            todos[todos.indexOf(todo)] = $scope.originalTodo, $s.doneEditing($s.originalTodo)
        }, $s.toggleCompleted = function (todo) {
            $s.remainingCount += todo.completed ? -1 : 1, store.put(todos)
        }, $s.clearCompleted = function () {
            $s.todos = todos = todos.filter(function (val) {
                return !val.completed
            }), store.put(todos)
        }, $s.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = !completed
            }), $s.remainingCount = completed ? todos.length : 0, store.put(todos)
        }
    }])
}();

! function () {
    "use strict";
    angular.module("app.ui.ctrls", []).controller("ToastDemoCtrl", ["$scope", "$interval", function ($scope) {
        $scope.noti = {
            selected: "Success"
        }, $scope.notifications = ["Warning", "Success", "Info", "Danger"], $scope.positionModel = "topRight", $scope.animModel = "scale";
        var MSGS = ["<strong>Error:</strong> Try submitting content again.", "a toast message...", "another toast message...", "<strong>Title:</strong> Toast message with <a href='#na' class='alert-link'>link</a>", "Hye, angry wars happening inside red doors."],
            cntr = 0;
        $scope.toasts = [], $scope.closeAlert = function (index) {
            $scope.toasts.splice(index, 1)
        }, $scope.createToast = function () {
            $scope.toasts.push({
                anim: $scope.animModel,
                type: angular.lowercase($scope.noti.selected),
                msg: MSGS[cntr]
            }), cntr++, cntr > 4 && (cntr = 0)
        }
    }]).controller("AlertDemoCtrl", ["$scope", function ($scope) {
        $scope.alerts = [{
            type: "warning",
            msg: "<strong>Warning:</strong> Backup all your drive."
        }, {
            type: "danger",
            msg: "Oh snap! Change a few things up and try submitting again."
        }, {
            type: "success",
            msg: "Well done! You successfully read this important alert message."
        }, {
            type: "info",
            msg: "<strong>Info:</strong> You have got mail."
        }], $scope.addAlert = function () {
            var randAlertMsg = Math.floor(4 * Math.random()),
                randAlertType = Math.floor(4 * Math.random());
            $scope.alerts.push({
                type: $scope.alerts[randAlertType].type,
                msg: $scope.alerts[randAlertMsg].msg
            })
        }, $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1)
        }
    }]).controller("IconDemoCtrl", ["$scope", "$filter", function ($scope, $filter) {
        $scope.icons = ["ion-ionic", "ion-arrow-up-a", "ion-arrow-right-a", "ion-arrow-down-a", "ion-arrow-left-a", "ion-arrow-up-b", "ion-arrow-right-b", "ion-arrow-down-b", "ion-arrow-left-b", "ion-arrow-up-c", "ion-arrow-right-c", "ion-arrow-down-c", "ion-arrow-left-c", "ion-arrow-return-right", "ion-arrow-return-left", "ion-arrow-swap", "ion-arrow-shrink", "ion-arrow-expand", "ion-arrow-move", "ion-arrow-resize", "ion-chevron-up", "ion-chevron-right", "ion-chevron-down", "ion-chevron-left", "ion-navicon-round", "ion-navicon", "ion-drag", "ion-log-in", "ion-log-out", "ion-checkmark-round", "ion-checkmark", "ion-checkmark-circled", "ion-close-round", "ion-close", "ion-close-circled", "ion-plus-round", "ion-plus", "ion-plus-circled", "ion-minus-round", "ion-minus", "ion-minus-circled", "ion-information", "ion-information-circled", "ion-help", "ion-help-circled", "ion-backspace-outline", "ion-backspace", "ion-help-buoy", "ion-asterisk", "ion-alert", "ion-alert-circled", "ion-refresh", "ion-loop", "ion-shuffle", "ion-home", "ion-search", "ion-flag", "ion-star", "ion-heart", "ion-heart-broken", "ion-gear-a", "ion-gear-b", "ion-toggle-filled", "ion-toggle", "ion-settings", "ion-wrench", "ion-hammer", "ion-edit", "ion-trash-a", "ion-trash-b", "ion-document", "ion-document-text", "ion-clipboard", "ion-scissors", "ion-funnel", "ion-bookmark", "ion-email", "ion-email-unread", "ion-folder", "ion-filing", "ion-archive", "ion-reply", "ion-reply-all", "ion-forward", "ion-share", "ion-paper-airplane", "ion-link", "ion-paperclip", "ion-compose", "ion-briefcase", "ion-medkit", "ion-at", "ion-pound", "ion-quote", "ion-cloud", "ion-upload", "ion-more", "ion-grid", "ion-calendar", "ion-clock", "ion-compass", "ion-pinpoint", "ion-pin", "ion-navigate", "ion-location", "ion-map", "ion-lock-combination", "ion-locked", "ion-unlocked", "ion-key", "ion-arrow-graph-up-right", "ion-arrow-graph-down-right", "ion-arrow-graph-up-left", "ion-arrow-graph-down-left", "ion-stats-bars", "ion-connection-bars", "ion-pie-graph", "ion-chatbubble", "ion-chatbubble-working", "ion-chatbubbles", "ion-chatbox", "ion-chatbox-working", "ion-chatboxes", "ion-person", "ion-person-add", "ion-person-stalker", "ion-woman", "ion-man", "ion-female", "ion-male", "ion-transgender", "ion-fork", "ion-knife", "ion-spoon", "ion-soup-can-outline", "ion-soup-can", "ion-beer", "ion-wineglass", "ion-coffee", "ion-icecream", "ion-pizza", "ion-power", "ion-mouse", "ion-battery-full", "ion-battery-half", "ion-battery-low", "ion-battery-empty", "ion-battery-charging", "ion-wifi", "ion-bluetooth", "ion-calculator", "ion-camera", "ion-eye", "ion-eye-disabled", "ion-flash", "ion-flash-off", "ion-qr-scanner", "ion-image", "ion-images", "ion-wand", "ion-contrast", "ion-aperture", "ion-crop", "ion-easel", "ion-paintbrush", "ion-paintbucket", "ion-monitor", "ion-laptop", "ion-ipad", "ion-iphone", "ion-ipod", "ion-printer", "ion-usb", "ion-outlet", "ion-bug", "ion-code", "ion-code-working", "ion-code-download", "ion-fork-repo", "ion-network", "ion-pull-request", "ion-merge", "ion-xbox", "ion-playstation", "ion-steam", "ion-closed-captioning", "ion-videocamera", "ion-film-marker", "ion-disc", "ion-headphone", "ion-music-note", "ion-radio-waves", "ion-speakerphone", "ion-mic-a", "ion-mic-b", "ion-mic-c", "ion-volume-high", "ion-volume-medium", "ion-volume-low", "ion-volume-mute", "ion-levels", "ion-play", "ion-pause", "ion-stop", "ion-record", "ion-skip-forward", "ion-skip-backward", "ion-eject", "ion-bag", "ion-card", "ion-cash", "ion-pricetag", "ion-pricetags", "ion-thumbsup", "ion-thumbsdown", "ion-happy-outline", "ion-happy", "ion-sad-outline", "ion-sad", "ion-bowtie", "ion-tshirt-outline", "ion-tshirt", "ion-trophy", "ion-podium", "ion-ribbon-a", "ion-ribbon-b", "ion-university", "ion-magnet", "ion-beaker", "ion-erlenmeyer-flask", "ion-egg", "ion-earth", "ion-planet", "ion-lightbulb", "ion-cube", "ion-leaf", "ion-waterdrop", "ion-flame", "ion-fireball", "ion-bonfire", "ion-umbrella", "ion-nuclear", "ion-no-smoking", "ion-thermometer", "ion-speedometer", "ion-model-s", "ion-plane", "ion-jet", "ion-load-a", "ion-load-b", "ion-load-c", "ion-load-d", "ion-ios-ionic-outline", "ion-ios-arrow-back", "ion-ios-arrow-forward", "ion-ios-arrow-up", "ion-ios-arrow-right", "ion-ios-arrow-down", "ion-ios-arrow-left", "ion-ios-arrow-thin-up", "ion-ios-arrow-thin-right", "ion-ios-arrow-thin-down", "ion-ios-arrow-thin-left", "ion-ios-circle-filled", "ion-ios-circle-outline", "ion-ios-checkmark-empty", "ion-ios-checkmark-outline", "ion-ios-checkmark", "ion-ios-plus-empty", "ion-ios-plus-outline", "ion-ios-plus", "ion-ios-close-empty", "ion-ios-close-outline", "ion-ios-close", "ion-ios-minus-empty", "ion-ios-minus-outline", "ion-ios-minus", "ion-ios-information-empty", "ion-ios-information-outline", "ion-ios-information", "ion-ios-help-empty", "ion-ios-help-outline", "ion-ios-help", "ion-ios-search", "ion-ios-search-strong", "ion-ios-star", "ion-ios-star-half", "ion-ios-star-outline", "ion-ios-heart", "ion-ios-heart-outline", "ion-ios-more", "ion-ios-more-outline", "ion-ios-home", "ion-ios-home-outline", "ion-ios-cloud", "ion-ios-cloud-outline", "ion-ios-cloud-upload", "ion-ios-cloud-upload-outline", "ion-ios-cloud-download", "ion-ios-cloud-download-outline", "ion-ios-upload", "ion-ios-upload-outline", "ion-ios-download", "ion-ios-download-outline", "ion-ios-refresh", "ion-ios-refresh-outline", "ion-ios-refresh-empty", "ion-ios-reload", "ion-ios-loop-strong", "ion-ios-loop", "ion-ios-bookmarks", "ion-ios-bookmarks-outline", "ion-ios-book", "ion-ios-book-outline", "ion-ios-flag", "ion-ios-flag-outline", "ion-ios-glasses", "ion-ios-glasses-outline", "ion-ios-browsers", "ion-ios-browsers-outline", "ion-ios-at", "ion-ios-at-outline", "ion-ios-pricetag", "ion-ios-pricetag-outline", "ion-ios-pricetags", "ion-ios-pricetags-outline", "ion-ios-cart", "ion-ios-cart-outline", "ion-ios-chatboxes", "ion-ios-chatboxes-outline", "ion-ios-chatbubble", "ion-ios-chatbubble-outline", "ion-ios-cog", "ion-ios-cog-outline", "ion-ios-gear", "ion-ios-gear-outline", "ion-ios-settings", "ion-ios-settings-strong", "ion-ios-toggle", "ion-ios-toggle-outline", "ion-ios-analytics", "ion-ios-analytics-outline", "ion-ios-pie", "ion-ios-pie-outline", "ion-ios-pulse", "ion-ios-pulse-strong", "ion-ios-filing", "ion-ios-filing-outline", "ion-ios-box", "ion-ios-box-outline", "ion-ios-compose", "ion-ios-compose-outline", "ion-ios-trash", "ion-ios-trash-outline", "ion-ios-copy", "ion-ios-copy-outline", "ion-ios-email", "ion-ios-email-outline", "ion-ios-undo", "ion-ios-undo-outline", "ion-ios-redo", "ion-ios-redo-outline", "ion-ios-paperplane", "ion-ios-paperplane-outline", "ion-ios-folder", "ion-ios-folder-outline", "ion-ios-paper", "ion-ios-paper-outline", "ion-ios-list", "ion-ios-list-outline", "ion-ios-world", "ion-ios-world-outline", "ion-ios-alarm", "ion-ios-alarm-outline", "ion-ios-speedometer", "ion-ios-speedometer-outline", "ion-ios-stopwatch", "ion-ios-stopwatch-outline", "ion-ios-timer", "ion-ios-timer-outline", "ion-ios-clock", "ion-ios-clock-outline", "ion-ios-time", "ion-ios-time-outline", "ion-ios-calendar", "ion-ios-calendar-outline", "ion-ios-photos", "ion-ios-photos-outline", "ion-ios-albums", "ion-ios-albums-outline", "ion-ios-camera", "ion-ios-camera-outline", "ion-ios-reverse-camera", "ion-ios-reverse-camera-outline", "ion-ios-eye", "ion-ios-eye-outline", "ion-ios-bolt", "ion-ios-bolt-outline", "ion-ios-color-wand", "ion-ios-color-wand-outline", "ion-ios-color-filter", "ion-ios-color-filter-outline", "ion-ios-grid-view", "ion-ios-grid-view-outline", "ion-ios-crop-strong", "ion-ios-crop", "ion-ios-barcode", "ion-ios-barcode-outline", "ion-ios-briefcase", "ion-ios-briefcase-outline", "ion-ios-medkit", "ion-ios-medkit-outline", "ion-ios-medical", "ion-ios-medical-outline", "ion-ios-infinite", "ion-ios-infinite-outline", "ion-ios-calculator", "ion-ios-calculator-outline", "ion-ios-keypad", "ion-ios-keypad-outline", "ion-ios-telephone", "ion-ios-telephone-outline", "ion-ios-drag", "ion-ios-location", "ion-ios-location-outline", "ion-ios-navigate", "ion-ios-navigate-outline", "ion-ios-locked", "ion-ios-locked-outline", "ion-ios-unlocked", "ion-ios-unlocked-outline", "ion-ios-monitor", "ion-ios-monitor-outline", "ion-ios-printer", "ion-ios-printer-outline", "ion-ios-game-controller-a", "ion-ios-game-controller-a-outline", "ion-ios-game-controller-b", "ion-ios-game-controller-b-outline", "ion-ios-americanfootball", "ion-ios-americanfootball-outline", "ion-ios-baseball", "ion-ios-baseball-outline", "ion-ios-basketball", "ion-ios-basketball-outline", "ion-ios-tennisball", "ion-ios-tennisball-outline", "ion-ios-football", "ion-ios-football-outline", "ion-ios-body", "ion-ios-body-outline", "ion-ios-person", "ion-ios-person-outline", "ion-ios-personadd", "ion-ios-personadd-outline", "ion-ios-people", "ion-ios-people-outline", "ion-ios-musical-notes", "ion-ios-musical-note", "ion-ios-bell", "ion-ios-bell-outline", "ion-ios-mic", "ion-ios-mic-outline", "ion-ios-mic-off", "ion-ios-volume-high", "ion-ios-volume-low", "ion-ios-play", "ion-ios-play-outline", "ion-ios-pause", "ion-ios-pause-outline", "ion-ios-recording", "ion-ios-recording-outline", "ion-ios-fastforward", "ion-ios-fastforward-outline", "ion-ios-rewind", "ion-ios-rewind-outline", "ion-ios-skipbackward", "ion-ios-skipbackward-outline", "ion-ios-skipforward", "ion-ios-skipforward-outline", "ion-ios-shuffle-strong", "ion-ios-shuffle", "ion-ios-videocam", "ion-ios-videocam-outline", "ion-ios-film", "ion-ios-film-outline", "ion-ios-flask", "ion-ios-flask-outline", "ion-ios-lightbulb", "ion-ios-lightbulb-outline", "ion-ios-wineglass", "ion-ios-wineglass-outline", "ion-ios-pint", "ion-ios-pint-outline", "ion-ios-nutrition", "ion-ios-nutrition-outline", "ion-ios-flower", "ion-ios-flower-outline", "ion-ios-rose", "ion-ios-rose-outline", "ion-ios-paw", "ion-ios-paw-outline", "ion-ios-flame", "ion-ios-flame-outline", "ion-ios-sunny", "ion-ios-sunny-outline", "ion-ios-partlysunny", "ion-ios-partlysunny-outline", "ion-ios-cloudy", "ion-ios-cloudy-outline", "ion-ios-rainy", "ion-ios-rainy-outline", "ion-ios-thunderstorm", "ion-ios-thunderstorm-outline", "ion-ios-snowy", "ion-ios-moon", "ion-ios-moon-outline", "ion-ios-cloudy-night", "ion-ios-cloudy-night-outline", "ion-android-arrow-up", "ion-android-arrow-forward", "ion-android-arrow-down", "ion-android-arrow-back", "ion-android-arrow-dropup", "ion-android-arrow-dropup-circle", "ion-android-arrow-dropright", "ion-android-arrow-dropright-circle", "ion-android-arrow-dropdown", "ion-android-arrow-dropdown-circle", "ion-android-arrow-dropleft", "ion-android-arrow-dropleft-circle", "ion-android-add", "ion-android-add-circle", "ion-android-remove", "ion-android-remove-circle", "ion-android-close", "ion-android-cancel", "ion-android-radio-button-off", "ion-android-radio-button-on", "ion-android-checkmark-circle", "ion-android-checkbox-outline-blank", "ion-android-checkbox-outline", "ion-android-checkbox-blank", "ion-android-checkbox", "ion-android-done", "ion-android-done-all", "ion-android-menu", "ion-android-more-horizontal", "ion-android-more-vertical", "ion-android-refresh", "ion-android-sync", "ion-android-wifi", "ion-android-call", "ion-android-apps", "ion-android-settings", "ion-android-options", "ion-android-funnel", "ion-android-search", "ion-android-home", "ion-android-cloud-outline", "ion-android-cloud", "ion-android-download", "ion-android-upload", "ion-android-cloud-done", "ion-android-cloud-circle", "ion-android-favorite-outline", "ion-android-favorite", "ion-android-star-outline", "ion-android-star-half", "ion-android-star", "ion-android-calendar", "ion-android-alarm-clock", "ion-android-time", "ion-android-stopwatch", "ion-android-watch", "ion-android-locate", "ion-android-navigate", "ion-android-pin", "ion-android-compass", "ion-android-map", "ion-android-walk", "ion-android-bicycle", "ion-android-car", "ion-android-bus", "ion-android-subway", "ion-android-train", "ion-android-boat", "ion-android-plane", "ion-android-restaurant", "ion-android-bar", "ion-android-cart", "ion-android-camera", "ion-android-image", "ion-android-film", "ion-android-color-palette", "ion-android-create", "ion-android-mail", "ion-android-drafts", "ion-android-send", "ion-android-archive", "ion-android-delete", "ion-android-attach", "ion-android-share", "ion-android-share-alt", "ion-android-bookmark", "ion-android-document", "ion-android-clipboard", "ion-android-list", "ion-android-folder-open", "ion-android-folder", "ion-android-print", "ion-android-open", "ion-android-exit", "ion-android-contract", "ion-android-expand", "ion-android-globe", "ion-android-chat", "ion-android-textsms", "ion-android-hangout", "ion-android-happy", "ion-android-sad", "ion-android-person", "ion-android-people", "ion-android-person-add", "ion-android-contact", "ion-android-contacts", "ion-android-playstore", "ion-android-lock", "ion-android-unlock", "ion-android-microphone", "ion-android-microphone-off", "ion-android-notifications-none", "ion-android-notifications", "ion-android-notifications-off", "ion-android-volume-mute", "ion-android-volume-down", "ion-android-volume-up", "ion-android-volume-off", "ion-android-hand", "ion-android-desktop", "ion-android-laptop", "ion-android-phone-portrait", "ion-android-phone-landscape", "ion-android-bulb", "ion-android-sunny", "ion-android-alert", "ion-android-warning", "ion-social-twitter", "ion-social-twitter-outline", "ion-social-facebook", "ion-social-facebook-outline", "ion-social-googleplus", "ion-social-googleplus-outline", "ion-social-google", "ion-social-google-outline", "ion-social-dribbble", "ion-social-dribbble-outline", "ion-social-octocat", "ion-social-github", "ion-social-github-outline", "ion-social-instagram", "ion-social-instagram-outline", "ion-social-whatsapp", "ion-social-whatsapp-outline", "ion-social-snapchat", "ion-social-snapchat-outline", "ion-social-foursquare", "ion-social-foursquare-outline", "ion-social-pinterest", "ion-social-pinterest-outline", "ion-social-rss", "ion-social-rss-outline", "ion-social-tumblr", "ion-social-tumblr-outline", "ion-social-wordpress", "ion-social-wordpress-outline", "ion-social-reddit", "ion-social-reddit-outline", "ion-social-hackernews", "ion-social-hackernews-outline", "ion-social-designernews", "ion-social-designernews-outline", "ion-social-yahoo", "ion-social-yahoo-outline", "ion-social-buffer", "ion-social-buffer-outline", "ion-social-skype", "ion-social-skype-outline", "ion-social-linkedin", "ion-social-linkedin-outline", "ion-social-vimeo", "ion-social-vimeo-outline", "ion-social-twitch", "ion-social-twitch-outline", "ion-social-youtube", "ion-social-youtube-outline", "ion-social-dropbox", "ion-social-dropbox-outline", "ion-social-apple", "ion-social-apple-outline", "ion-social-android", "ion-social-android-outline", "ion-social-windows", "ion-social-windows-outline", "ion-social-html5", "ion-social-html5-outline", "ion-social-css3", "ion-social-css3-outline", "ion-social-javascript", "ion-social-javascript-outline", "ion-social-angular", "ion-social-angular-outline", "ion-social-nodejs", "ion-social-sass", "ion-social-python", "ion-social-chrome", "ion-social-chrome-outline", "ion-social-codepen", "ion-social-codepen-outline", "ion-social-markdown", "ion-social-tux", "ion-social-freebsd-devil", "ion-social-usd", "ion-social-usd-outline", "ion-social-bitcoin", "ion-social-bitcoin-outline", "ion-social-yen", "ion-social-yen-outline", "ion-social-euro", "ion-social-euro-outline"], $scope.iconKeywords = "", $scope.filteredIcons = [], $scope.iconSearch = function () {
            $scope.filteredIcons = $filter("filter")($scope.icons, $scope.iconKeywords)
        }, $scope.iconSearch()
    }]).controller("ModalDemoCtrl", ["$scope", "$modal", function ($scope, $modal) {
        $scope.modalAnim = "default", $scope.modalOpen = function () {
            $modal.open({
                templateUrl: "views/ui/modalContent.html",
                size: "md",
                controller: "ModalDemoCtrl",
                resolve: function () { },
                windowClass: $scope.modalAnim
            })
        }, $scope.modalClose = function () {
            $scope.$close()
        }
    }]).controller("ProgressDemoCtrl", ["$scope", function ($scope) {
        $scope.stacked = [{
            type: "primary",
            value: 20
        }, {
            type: "success",
            value: 15
        }, {
            type: "info",
            value: 20
        }, {
            type: "warning",
            value: 30
        }, {
            type: "danger",
            value: 15
        }]
    }]).controller("TooltipDemoCtrl", ["$scope", function ($scope) {
        $scope.dynamicTooltip = "Hello, World!", $scope.tooltipHtml = "Hey!, I am <b>bold</b>."
    }]).controller("PaginationDemoCtrl", ["$scope", function ($scope) {
        $scope.totalItems = 64, $scope.currentPage = 4, $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo
        }, $scope.maxSize = 5, $scope.bigTotalItems = 175, $scope.bigCurrentPage = 1
    }]).controller("RatingsDemoCtrl", ["$scope", function ($scope) {
        $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function (value) {
            $scope.overStar = value, $scope.percent = 100 * (value / $scope.max)
        }
    }]).controller("TypeaheadDemoCtrl", ["$scope", function ($scope) {
        $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }]).controller("DatepickerDemoCtrl", ["$scope", function ($scope) {
        $scope.open = function ($event) {
            $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0
        }, $scope.dt = Date.now()
    }])
}();

! function () {
    "use strict";
    angular.module("app.ui.directives", [])
}();
