/// <reference path="../../../Webform/Common/Popup/MutualFundsDetailPopup.html" />
app.controller("MtualFunds.Ctrl", ['$scope', '$rootScope', '$http', 'fileUpload', '$mdDialog', 'FundsService', '$stateParams', '$state', '$localStorage', '$interval', '$timeout',
function ($scope, $rootScope, $http, fileUpload, $mdDialog, FundsService, $stateParams, $state, $localStorage, $interval, $timeout) {

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
    $scope.ourGrouper = 'MFtype';
    $scope.SIPGoalStructureDate =

       [
                {
                    "Rank": "1",
                    "SchemeName": "SBI Bluechip Fund - Growth",
                    "ISIN": "INF200K01180",
                    "BSESchmecode": "103G",
                    "MinInvst": "500",
                    "MFtype": "EQ large cap",
                    "Minsip": "12",
                    "date": "1,5,10,15,20,25,30",
                    "multiplier": "100"
                },
                  {
                      "Rank": "2",
                      "SchemeName": "Quantum Long-Term Equity Fund - Growth",
                      "ISIN": "INF082J01036",
                      "BSESchmecode": "QMFEF-GP",
                      "MinInvst": "500",
                      "MFtype": "EQ large cap",
                      "Minsip": "12",
                      "date": "5,7,15,21,25,28",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "Tata Equity P/E Fund - Reg - Growth",
                      "ISIN": "INF277K01451",
                      "BSESchmecode": "EPEG",
                      "MinInvst": "500",
                      "MFtype": "EQ large cap",
                      "Minsip": "12",
                      "date": "1-30 all days",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "4",
                      "SchemeName": "Templeton India Growth Fund - Growth",
                      "ISIN": "INF090I01296",
                      "BSESchmecode": "FTIGF-GR",
                      "MinInvst": "500",
                      "MFtype": "EQ large cap",
                      "Minsip": "12",
                      "date": "1,7,10,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "5",
                      "SchemeName": "Birla Sun Life India GenNext Fund - Growth",
                      "ISIN": "INF209K01447",
                      "BSESchmecode": "B291G",
                      "MinInvst": "1000",
                      "MFtype": "EQ large cap",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "6",
                      "SchemeName": "DSP BlackRock Focus 25 Fund - Growth",
                      "ISIN": "INF740K01532",
                      "BSESchmecode": "DSP349-GR",
                      "MinInvst": "500",
                      "MFtype": "EQ large cap",
                      "Minsip": "12",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "ICICI Prudential Value Discovery Fund - Growth",
                      "ISIN": "INF109K01AF8",
                      "BSESchmecode": "DFG",
                      "MinInvst": "1000",
                      "MFtype": "EQ Multicap",
                      "Minsip": "6",
                      "date": "1,7,10,14,15,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "Franklin India High Growth Companies Fund  - Growth",
                      "ISIN": "INF090I01981",
                      "BSESchmecode": "F273-GR",
                      "MinInvst": "500",
                      "MFtype": "EQ Multicap",
                      "Minsip": "12",
                      "date": "1,7,10,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "L&T India Value Fund - Reg - Growth",
                      "ISIN": "INF677K01023",
                      "BSESchmecode": "FIVFG",
                      "MinInvst": "500",
                      "MFtype": "EQ Multicap",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "4",
                      "SchemeName": "SBI Magnum Multi Cap Fund - Growth",
                      "ISIN": "INF200K01222",
                      "BSESchmecode": "099G",
                      "MinInvst": "500",
                      "MFtype": "EQ Multicap",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "5",
                      "SchemeName": "Kotak Select Focus Fund - Reg - Growth",
                      "ISIN": "INF174K01336",
                      "BSESchmecode": "K168SF-GR",
                      "MinInvst": "500",
                      "MFtype": "EQ Multicap",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "6",
                      "SchemeName": "Birla Sun Life Equity Fund - Growth",
                      "ISIN": "INF209K01AJ8",
                      "BSESchmecode": "51",
                      "MinInvst": "1000",
                      "MFtype": "EQ Multicap",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "DSP BlackRock Micro Cap Fund - Reg - Growth",
                      "ISIN": "INF740K01797",
                      "BSESchmecode": "DSP157-GR",
                      "MinInvst": "500",
                      "MFtype": "EQ Mid/small",
                      "Minsip": "12",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "Franklin India Smaller Companies Fund - Growth",
                      "ISIN": "INF090I01569",
                      "BSESchmecode": "F219-GR",
                      "MinInvst": "500",
                      "MFtype": "EQ Mid/small",
                      "Minsip": "12",
                      "date": "1,7,10,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "Kotak Emerging Equity Scheme - Reg - Growth",
                      "ISIN": "INF174K01DS9",
                      "BSESchmecode": "K123-GR",
                      "MinInvst": "1000",
                      "MFtype": "EQ Mid/small",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "4",
                      "SchemeName": "L&T Midcap Fund - Reg - Growth",
                      "ISIN": "INF917K01254",
                      "BSESchmecode": "LT17-GR",
                      "MinInvst": "1000",
                      "MFtype": "EQ Mid/small",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "5",
                      "SchemeName": "Mirae Asset Emerging Bluechip Fund - Growth",
                      "ISIN": "INF769K01101",
                      "BSESchmecode": "MAFEBRG-GR",
                      "MinInvst": "1000",
                      "MFtype": "EQ Mid/small",
                      "Minsip": "6",
                      "date": "1,10,20,25,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "6",
                      "SchemeName": "Principal Emerging Bluechip Fund - Growth",
                      "ISIN": "INF173K01155",
                      "BSESchmecode": "PCEBRGG-GR",
                      "MinInvst": "2000",
                      "MFtype": "EQ Mid/small",
                      "Minsip": "6",
                      "date": "1,5,10,20",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "Baroda Pioneer Liquid Fund - Plan B - Growth",
                      "ISIN": "INF955L01AL0",
                      "BSESchmecode": "BO114-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt liquid",
                      "Minsip": "12",
                      "date": "1,10,15,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "DSP BlackRock Treasury Bill Fund - Direct Plan - Growth",
                      "ISIN": "INF740K01NU2",
                      "BSESchmecode": "DS723-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt liquid",
                      "Minsip": "12",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "DHFL Pramerica Insta Cash Plus Fund - Growth",
                      "ISIN": "INF223J01BP6",
                      "BSESchmecode": "DWSCFSG-GR",
                      "MinInvst": "1000",
                      "MFtype": "Debt liquid",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "100"
                  },
                  {
                      "Rank": "4",
                      "SchemeName": "Principal Cash Mgmt Fund - Growth",
                      "ISIN": "INF173K01DA9",
                      "BSESchmecode": "PCLFPGG-GR",
                      "MinInvst": "2000",
                      "MFtype": "Debt liquid",
                      "Minsip": "6",
                      "date": "1,5,10,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "IDBI ULTRA SHORT TERM FUND REGULAR PLAN - GROWTH",
                      "ISIN": "INF397L01745",
                      "BSESchmecode": "IDBI-USGP-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt/ ultra short",
                      "Minsip": "12",
                      "date": "5,15,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "L&T ULTRA SHORT TERM FUND - GROWTH",
                      "ISIN": "INF917K01AS7",
                      "BSESchmecode": "LT122-GR",
                      "MinInvst": "1000",
                      "MFtype": "Debt/ ultra short",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "ICICI Prudential Ultra Short Term - Growth",
                      "ISIN": "INF109K01CQ1",
                      "BSESchmecode": "ICICI1477-GR",
                      "MinInvst": "1000",
                      "MFtype": "Debt/ ultra short",
                      "Minsip": "6",
                      "date": "1,7,10,15,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "ICICI Prudential Flexible Income - Growth",
                      "ISIN": "INF109K01746",
                      "BSESchmecode": "FLEXI",
                      "MinInvst": "1000",
                      "MFtype": "Debt/Income",
                      "Minsip": "6",
                      "date": "1,7,10,15,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "Birla Sun Life Dynamic Bond Fund - Ret - DAP",
                      "ISIN": "INF209K01793",
                      "BSESchmecode": "B321G",
                      "MinInvst": "1000",
                      "MFtype": "Debt/Income",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "Quantum Dynamic Bond Fund - Growth",
                      "ISIN": "INF082J01176",
                      "BSESchmecode": "QDBGP-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt/Income",
                      "Minsip": "6",
                      "date": "5,7",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "DHFL Pramerica Gilt Fund - Growth",
                      "ISIN": "INF223J01AQ6",
                      "BSESchmecode": "DWGFGP-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt/ GILT",
                      "Minsip": "10",
                      "date": "1,7,10,15,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "BNP Paribas G Sec Fund - Growth",
                      "ISIN": "INF251K01JF9",
                      "BSESchmecode": "BNP614G-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt/ GILT",
                      "Minsip": "10",
                      "date": "1,7,10,15,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "HDFC GILT FUND  - LONG TERM PLAN - GROWTH OPTION",
                      "ISIN": "INF179K01756",
                      "BSESchmecode": "GLG",
                      "MinInvst": "1000",
                      "MFtype": "Debt/ GILT",
                      "Minsip": "10",
                      "date": "1,7,10,21, 25, 28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "HDFC Balanced Fund - Growth",
                      "ISIN": "INF179K01392",
                      "BSESchmecode": "BFG",
                      "MinInvst": "1000",
                      "MFtype": "Balanced",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "100"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "Franklin India Balanced Fund - Growth",
                      "ISIN": "INF090I01817",
                      "BSESchmecode": "F045-GR",
                      "MinInvst": "500",
                      "MFtype": "Balanced",
                      "Minsip": "12",
                      "date": "1,7,10,20,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "HDFC MF MONTHLY INCOME PLAN - LONG TERM PLAN - GROWTH  OPTION",
                      "ISIN": "INF179K01AE4",
                      "BSESchmecode": "MILTG",
                      "MinInvst": "1000",
                      "MFtype": "MIP",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "100"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "Birla Sun Life MIP II - Savings 5 - Reg - Growth",
                      "ISIN": "INF209K01XE1",
                      "BSESchmecode": "BS312GZ-GR",
                      "MinInvst": "1000",
                      "MFtype": "MIP",
                      "Minsip": "6",
                      "date": "1,7,10,15,20,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "SBI Regular Savings Fund - Growth",
                      "ISIN": "INF200K01636",
                      "BSESchmecode": "079B",
                      "MinInvst": "1000",
                      "MFtype": "MIP",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "100"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "HDFC Corporate Debt Opportunities Fund",
                      "ISIN": "INF179KA1GC0",
                      "BSESchmecode": "CDOGR-GR",
                      "MinInvst": "500",
                      "MFtype": "Credit Opportunities",
                      "Minsip": "12",
                      "date": "1,5,15,20,25",
                      "multiplier": "100"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "Kotak Income Opportunities Fund",
                      "ISIN": "INF174K01DY7",
                      "BSESchmecode": "K190-GR",
                      "MinInvst": "1000",
                      "MFtype": "Credit Opportunities",
                      "Minsip": "6",
                      "date": "1,7,14,21,25",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "SBI Corporate Bond Fund",
                      "ISIN": "INF200K01685",
                      "BSESchmecode": "080B",
                      "MinInvst": "500",
                      "MFtype": "Credit Opportunities",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "100"
                  },
                  {
                      "Rank": "4",
                      "SchemeName": "Birla Sun Life Corporate Bond Fund",
                      "ISIN": "INF209KA1K47",
                      "BSESchmecode": "BL380B-GR",
                      "MinInvst": "1000",
                      "MFtype": "Credit Opportunities",
                      "Minsip": "6",
                      "date": "1,7,15,20,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "Franklin India Taxshield - Growth",
                      "ISIN": "INF090I01775",
                      "BSESchmecode": "034-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,10,20,25",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "Axis Long Term Equity Fund - Growth",
                      "ISIN": "INF846K01131",
                      "BSESchmecode": "AXFTSGP-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1-30 all days",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "Birla Sun Life Tax Relief 96 - Growth",
                      "ISIN": "INF209K01108",
                      "BSESchmecode": "02G",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,10,14,15,21,20,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "4",
                      "SchemeName": "ICICI Prudential Long Term Equity Fund (Tax Saving) - Reg - Growth",
                      "ISIN": "INF109K01464",
                      "BSESchmecode": "1",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,15,20,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "5",
                      "SchemeName": "HDFC TAXSAVER - GROWTH OPTION",
                      "ISIN": "INF179K01BB8",
                      "BSESchmecode": "32",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "6",
                      "SchemeName": "LIC MF Tax Plan - Growth",
                      "ISIN": "INF767K01956",
                      "BSESchmecode": "LCTPGP-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "12",
                      "date": "1,7,10,15,25",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "7",
                      "SchemeName": "KOTAK TAX SAVER-GROWTH",
                      "ISIN": "INF174K01369",
                      "BSESchmecode": "K144TS-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21,25,28",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "1",
                      "SchemeName": "Canara Robeco Gold Savings FundDirect GrowthGrowth",
                      "ISIN": "INF174K01369",
                      "BSESchmecode": "CAGSDG-GR",
                      "MinInvst": "500",
                      "MFtype": "Gold",
                      "Minsip": "6",
                      "date": "1,5,15,20,25",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "2",
                      "SchemeName": "DSP BLACKROCK WORLD GOLD FUND - REGULAR PLAN - GROWTH",
                      "ISIN": "INF740K01250",
                      "BSESchmecode": "DSP179-GR",
                      "MinInvst": "500",
                      "MFtype": "Gold",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21,25,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "Birla Sun Life Gold Fund Growth",
                      "ISIN": "INF209K01PF4",
                      "BSESchmecode": "BSL916G-GR",
                      "MinInvst": "1000",
                      "MFtype": "Gold",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21,25,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "4",
                      "SchemeName": "ICICI Prudential Regular Gold Savings Fund Growth",
                      "ISIN": "INF109K01TK8",
                      "BSESchmecode": "ICICI1815-GR",
                      "MinInvst": "1000",
                      "MFtype": "Gold",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "1"
                  }
       ]

    $scope.groups = _.groupBy($scope.SIPGoalStructureDate, "MFtype");
    console.log($scope.groups);
    $scope.ElssList = [{
        "Rank": "1",
        "SchemeName": "Franklin India Taxshield - Growth",
        "ISIN": "INF090I01775",
        "BSESchmecode": "034-GR",
        "MinInvst": "500",
        "MFtype": "ELSS",
        "Minsip": "6",
        "date": "1,7,10,20,25",
        "multiplier": "500"
    },
                  {
                      "Rank": "2",
                      "SchemeName": "Axis Long Term Equity Fund - Growth",
                      "ISIN": "INF846K01131",
                      "BSESchmecode": "AXFTSGP-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1-30 all days",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "3",
                      "SchemeName": "Birla Sun Life Tax Relief 96 - Growth",
                      "ISIN": "INF209K01108",
                      "BSESchmecode": "02G",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,10,14,15,21,20,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "4",
                      "SchemeName": "ICICI Prudential Long Term Equity Fund (Tax Saving) - Reg - Growth",
                      "ISIN": "INF109K01464",
                      "BSESchmecode": "1",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,15,20,28",
                      "multiplier": "1"
                  },
                  {
                      "Rank": "5",
                      "SchemeName": "HDFC TAXSAVER - GROWTH OPTION",
                      "ISIN": "INF179K01BB8",
                      "BSESchmecode": "32",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "6",
                      "SchemeName": "LIC MF Tax Plan - Growth",
                      "ISIN": "INF767K01956",
                      "BSESchmecode": "LCTPGP-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "12",
                      "date": "1,7,10,15,25",
                      "multiplier": "500"
                  },
                  {
                      "Rank": "7",
                      "SchemeName": "KOTAK TAX SAVER-GROWTH",
                      "ISIN": "INF174K01369",
                      "BSESchmecode": "K144TS-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21,25,28",
                      "multiplier": "500"
                  }];
    $localStorage.POstJson =
        {

            "User_ID": "",
            "userPlan":
            {
                "Plan_ID": "",
                "MasterPlan_ID": "1",
                "User_ID": "",
                "GoalName": "",
                "PresentAge": "",
                "GoalTimeToStart": "",
                "GoalDuration": "",
                "GoalPerYearCost": "",
                "GoalPerYearLivingCost": "",
                "GoalLumpsum": "",
                "GoalInflationRate": "",
                "GoalTotalCost": "",
                "GoalLivingTotalCost": "",
                "GoalTotalAmount": "",
                "GoalTotalLumpsumAmount": "",
                "EstimatedInflationRate": "",
                "GoalDateOfSip": "",
                "GoalRetirementYear": "",
                "GoalRetirementExpense": "",
                "GoalRetirementMonthlyExpenditure": "",
                "GoalHousePlanYear": "",
                "GoalHouseCurrentCost": "",
                "GoalHouseDownPayment": "",
                "GoalHouseLoanYear": "",
                "GoalChildMerrageBudgetAmount": "",
                "Risk": ""
            },
            "userPortfolio":
            {
                "Portfolio_ID": "",
                "Plan_ID": "",
                "User_ID": "",
                "Equity": "",
                "Debt": "",
                "Gold": "",
                "EstimatedTotalSIPAmt": "",
                "Scheme_IDs": ""
            },
            "InvestmentList": $scope.InvestmentList
        };


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
        if ($state.current.name == 'MutualFundsList' || $state.current.name == 'compare') {
            //OnLoad Calss
            $scope.GetFundList('-', '-', 'Growth');

            var getDetailsFundsHouse = FundsService.FundsHouse.getPromise();
            getDetailsFundsHouse.then(
            // OnSuccess function
            function (response) {
                HideLoader();
                $localStorage.LSFundsHouse = response.data.response.data.Schemelist.Scheme;
                $scope.FundsHouse = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {

                HideLoader();
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundCategoryEQUITY = FundsService.FundCategoryEQUITY.getPromise();
            FundCategoryEQUITY.then(
            // OnSuccess function
            function (response) {
                HideLoader();
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
                HideLoader();
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
                HideLoader();
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
        else if ($state.current.name == 'MutualFunds') {
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
    $rootScope.InsertPlanForMutuals = function () {
        //alert($localStorage.CurrentSchemeCode)
        ShowLoader();
        $scope.InvestmentList.push({
            "ISIN": $localStorage.CurrentScheme.ISIN,
            "BSESchemeCode": "",
            "SchemeName": $localStorage.CurrentScheme.SchemeName,
            "Amount": $localStorage.SchemeAmount,
            "DateString": "",
            "Scheme_ID": $localStorage.CurrentScheme.mf_cocode,
            "InvestmentType": $localStorage.CurrentStatusOfPage,
            "DueDate": "1/March/2017"

        });
        $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

        var CreateUserList = FundsService.CreatePlan.PostPromise($localStorage.POstJson);
        CreateUserList.then(
        // OnSuccess function
        function (answer) {
            HideLoader();
            $localStorage.CurrentStatusOfPage = "";
            $localStorage.CurrentSchemeCode = "";
            $localStorage.CurrentScheme = [];
            $localStorage.SchemeAmount = "";
            $scope.InvestmentList = {};
            $localStorage.MutualFundsState = false;
            //window.location = "../../../Webform/User/dist/index.html"
            if (answer.CreateUsersPlanResult.ResponseCode == "0") {
                alert("Plan Created Succesfully")
                // window.location = answer.CreateUsersPlanResult.ResponseMessage;
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
    if ($localStorage.LoginStatus) {
        if ($localStorage.CurrentStatusOfPage === "LUMPSUM" || $localStorage.CurrentStatusOfPage === "SIP") {
            if ($localStorage.LSStatus) {

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

        $scope.ClickToProcedNextStep = function () {
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

    $scope.CheckFundsListExists = function () {
        if ($('tr').find('td').length == 1) {
            $scope.FundsListShowMore = true;
        }
        else {
            $scope.FundsListShowMore = false;
        }
    }

    $scope.ShowMore = function () {
        $scope.SchemeLimitTo = $scope.SchemeLimitTo + 15;
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


        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.GoForMFDetails = function (Scheme_ID) {
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
        data: [
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

    $scope.ApplyFilterOnFundsList = function () {
        var FinalOutPutList = {};
        if (ArrayList[0].FundsHouseList.length > 0) {
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



        if ((ArrayList[0].FundsHouseList.length > 0) || (ArrayList[1].FundsEquityList.length > 0)) {
        }
        else {
            $scope.FundsList = ListEx;
        }
        HideLoader();
    }
    $scope.SortFundsList = function (FilterType, Code) {
        ShowLoader();
        var SelectedList = {};
        var SelectionExists = false;
        if (FilterType == 'FundsHouse') {
            SelectedList = {
                "mf_cocode": Code
            }
            SelectionExists = _.some(ArrayList[0].FundsHouseList, function (obj) {
                return obj.mf_cocode == Code
            })

            if (SelectionExists) {
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

    $scope.InvestLumpsum = function (index, Page, Type) {
        var tesmp = "";
        if (Page != undefined) {
            tesmp = document.getElementById(index + "Amount").value;
        }
        else {
            tesmp = "";
        }
        if (tesmp != "" || ($localStorage.SchemeAmount != undefined && $localStorage.SchemeAmount != "")) {
            if (Page != undefined) {
                $localStorage.CurrentScheme = $scope.FundsList[index];
                $localStorage.IndexCurrentCode = index;
                $localStorage.SchemeAmount = document.getElementById(index + "Amount").value;
            }
            else {
                //document.getElementById($localStorage.IndexCurrentCode + "Amount").value = $localStorage.SchemeAmount;

            }

            if ($localStorage.MutualFundsState) {
                if (Type === undefined || Type === "") {
                    Type = $localStorage.CurrentStatusOfPage;
                }
                if (Type === "LUMPSUM") {
                    $localStorage.POstJson.userPlan.MasterPlan_ID = "6";
                }
                else if (Type === "SIP") {
                    $localStorage.POstJson.userPlan.MasterPlan_ID = "8";
                }
                //if ($localStorage.CurrentScheme !== undefined)
                //{
                //    $localStorage.CurrentScheme = $scope.FundsList[index];
                //}
                $scope.InvestorFundaConfMessage("Confirmation of Proceed", "Do you realy want to proceed for Scheme");
            }
            else {
                if (index !== undefined) {
                    $localStorage.CurrentScheme = $scope.FundsList[index];
                    $localStorage.IndexCurrentCode = index;
                    $localStorage.CurrentStatusOfPage = Type;
                    if (Type === "LUMPSUM") {
                        $localStorage.POstJson.userPlan.MasterPlan_ID = "6";
                    }
                    else if (Type === "SIP") {
                        $localStorage.POstJson.userPlan.MasterPlan_ID = "8";
                    }
                    $state.go('Authentication', { From: 'Mutualfunds' });
                }

            }
        }
        else {
            alert("Please insert value")
        }


    };

    $scope.ChangeAmount = function (ID) {
        alert(ID)
    }

    //Confirmation Popup
    if ($localStorage.CurrentStatusOfPage === "SIP" || $localStorage.CurrentStatusOfPage === "LUMPSUM") {
        if ($localStorage.CurrentScheme !== undefined) {
            if ($localStorage.CurrentScheme.mf_cocode != "") {
                $scope.InvestLumpsum($localStorage.CurrentScheme.mf_cocode);
            }
        }

        else {
            $scope.OnloadFunction();
        }

    }



    //Compare Profile
    $scope.compreListView = true;
    $scope.compreTableView = false;
    $scope.CompareJson = [
       {
           ColumnName: "Scheme Name",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Latest NAV",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "3 months",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "1 year",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "3 year",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "5 year",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Investment objecvtive",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Asset allocation",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Category",
           Data1: "",
           Data2: "",
           Data3: ""
       }
       ,
       {
           ColumnName: "Invest plan",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Benchmark",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Asset size",
           Data1: "",
           Data2: "",
           Data3: ""
       }
       ,
       {
           ColumnName: "Min Investment",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Last dividend",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Bonus",
           Data1: "",
           Data2: "",
           Data3: ""
       },
       {
           ColumnName: "Exit Load",
           Data1: "",
           Data2: "",
           Data3: ""
       }
       
    ]
    $scope.compareIndex = [];
    $scope.SelectCompare=function(Index)
    {
        if ($scope.compareIndex.length <= 3)
        {
            
                if ($scope.compareIndex.indexOf($scope.FundsList[Index].SchemeID) == -1)
                    $scope.compareIndex.push($scope.FundsList[Index].SchemeID);
           
        }
        else
        {
            alert("You can not select more than 3 Scheme")
        }
        
    }

    $scope.compareFunds = function () {
        var countTemp = 0;
        for(var a=0;a<$scope.compareIndex.length;a++)
        {
            var getDetailsOfMutualFunds = FundsService.FundsDetails.getPromise($scope.compareIndex[a]);
            getDetailsOfMutualFunds.then(
            // OnSuccess function
            function (response) {
                // $localStorage.LSFundsDetailsData = response.data.response.data;
                $rootScope.FundsDetailsData = response.data.response.data;
                switch (countTemp)
                {
                    case 0:
                       
                        $scope.CompareJson[0].Data1 =  $scope.FundsDetailsData.Schemelist.Scheme.SchemeName;
                        $scope.CompareJson[1].Data1 = $scope.FundsDetailsData.Schemelist.Scheme.NAV;
                        $scope.CompareJson[2].Data1 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_3Mon)).toFixed(2);
                        $scope.CompareJson[3].Data1 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_1Yr)).toFixed(2);
                        $scope.CompareJson[4].Data1 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_3Yr)).toFixed(2);
                        $scope.CompareJson[5].Data1 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_5Yr)).toFixed(2);
                        $scope.CompareJson[6].Data1 = $scope.FundsDetailsData.Schemelist.Scheme.objective;
                        $scope.CompareJson[7].Data1 = "";
                        $scope.CompareJson[8].Data1 = $scope.FundsDetailsData.Schemelist.Scheme.CategoryName;
                        $scope.CompareJson[9].Data1 = "";
                        $scope.CompareJson[10].Data1 = $scope.FundsDetailsData.Schemelist.Scheme.BenchmarkName;
                        $scope.CompareJson[11].Data1 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.AssetSize)).toFixed(2) + "Cr";
                        $scope.CompareJson[12].Data1 = $scope.FundsDetailsData.Schemelist.Scheme.MinimumInvestment;
                        $scope.CompareJson[13].Data1 = $scope.FundsDetailsData.Schemelist.Scheme.DividendPercentage_Latest;
                        $scope.CompareJson[14].Data1 = $scope.FundsDetailsData.Schemelist.Scheme.Bonus_Latest;
                        $scope.CompareJson[15].Data1 = $scope.FundsDetailsData.Schemelist.Scheme.ExitLoad;
                        countTemp++;
                        break;

                    case 1:
                        $scope.CompareJson[0].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.SchemeName;
                        $scope.CompareJson[1].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.NAV;
                        $scope.CompareJson[2].Data2 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_3Mon)).toFixed(2);
                        $scope.CompareJson[3].Data2 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_1Yr)).toFixed(2);
                        $scope.CompareJson[4].Data2 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_3Yr)).toFixed(2);
                        $scope.CompareJson[5].Data2 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_5Yr)).toFixed(2);
                        $scope.CompareJson[6].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.objective;
                        $scope.CompareJson[7].Data2 = "";
                        $scope.CompareJson[8].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.CategoryName;
                        $scope.CompareJson[9].Data2 = "";
                        $scope.CompareJson[10].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.BenchmarkName;
                        $scope.CompareJson[11].Data2 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.AssetSize)).toFixed(2) + "Cr";
                        $scope.CompareJson[12].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.MinimumInvestment;
                        $scope.CompareJson[13].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.DividendPercentage_Latest;
                        $scope.CompareJson[14].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.Bonus_Latest;
                        $scope.CompareJson[15].Data2 = $scope.FundsDetailsData.Schemelist.Scheme.ExitLoad;
                        countTemp++;
                        break;
                    case 2:
                        $scope.CompareJson[0].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.SchemeName;
                        $scope.CompareJson[1].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.NAV;
                        $scope.CompareJson[2].Data3 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_3Mon)).toFixed(2);
                        $scope.CompareJson[3].Data3 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_1Yr)).toFixed(2);
                        $scope.CompareJson[4].Data3 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_3Yr)).toFixed(2);
                        $scope.CompareJson[5].Data3 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.Return_5Yr)).toFixed(2);
                        $scope.CompareJson[6].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.objective;
                        $scope.CompareJson[7].Data3 = "";
                        $scope.CompareJson[8].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.CategoryName;
                        $scope.CompareJson[9].Data3 = "";
                        $scope.CompareJson[10].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.BenchmarkName;
                        $scope.CompareJson[11].Data3 = (parseFloat($scope.FundsDetailsData.Schemelist.Scheme.AssetSize)).toFixed(2) + "Cr";
                        $scope.CompareJson[12].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.MinimumInvestment;
                        $scope.CompareJson[13].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.DividendPercentage_Latest;
                        $scope.CompareJson[14].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.Bonus_Latest;
                        $scope.CompareJson[15].Data3 = $scope.FundsDetailsData.Schemelist.Scheme.ExitLoad;
                        $scope.compreListView = false;
                        $scope.compreTableView = true;
                        countTemp++
                        break;
                }
               
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

    $scope.gobackFundsCompare = function () {
        $scope.compreListView = true;
        $scope.compreTableView = false;
        $scope.compareIndex = [];
    }


    //Our Top Mutual Funds
    $scope.FilterTempValue = "EQ large cap";
    $scope.filterTopFunds = function (param) {
        $scope.FilterTempValue = param;
    }
}]);

