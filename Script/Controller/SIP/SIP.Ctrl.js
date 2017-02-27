app.controller("SIP.Ctrl", ['$scope', '$rootScope', '$mdDialog', '$mdMedia', '$localStorage', '$state', 'FundsService', 'GetCommonData',
function ($scope, $rootScope, $mdDialog, $mdMedia, $localStorage, $state, FundsService, GetCommonData) {
    $scope.val = "";
    var BseSchemeIDs = "";
    //Show Hide ***************
    $scope.SIP_GOAL_SHOW = true;
    var currentState = "";
    $scope.InvestmentList = [];

    if ($state.current.name == "ChildGoal") {
        currentState = $state.current.name;
        $scope.showDataStep2 = GetCommonData.getChildCommonData;
    }
    else if ($state.current.name == "Retirement") {
        currentState = $state.current.name;
        $scope.showDataStep2 = GetCommonData.getRetirementCommonData;
    }
    else if ($state.current.name == "HousePlan") {
        currentState = $state.current.name;
        $scope.showDataStep2 = GetCommonData.getBuyHouseCommonData;
    }
    else if ($state.current.name == "CarPlan") {
        currentState = $state.current.name;
        $scope.showDataStep2 = GetCommonData.getBuyCarCommonData;
    }
    else if ($state.current.name == "ChildMerrage") {
        currentState = $state.current.name;
        $scope.showDataStep2 = GetCommonData.getChildMarrigeCommonData;
    }
    else if ($state.current.name == "Tour") {
        currentState = $state.current.name;
        $scope.showDataStep2 = GetCommonData.getChildTourCommonData;
    }
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


    //$scope.SIP_GOAL_SHOW = false;
    //$scope.SIP_GOAL_Setting_SHOW = false;
    //$scope.SIP_GOAL_Final_SHOW = true;
    //Show Hide End *****************
    //CLCULTOR PART START FROM HERE

    function calculator(LumpSumMoney, ChildNeedMoneyYear, ChildCurrentAge) {

        //How much i have saved for our child till now

        var saveMoney = parseInt(LumpSumMoney);
        var currentCost = $scope.Portfolio_Parameter.TotalCourseFee;

        //When Student Need Money

        var course_yr = parseInt(ChildNeedMoneyYear);

        var exp_irate = $scope.Portfolio_Parameter.Portfolio_InflationRate;



        //Current Child Age

        var txtIncomeSlider = course_yr - parseInt(ChildCurrentAge);
        var graphTwo = Number(currentCost) * Math.pow((1 + Number(exp_irate) / 100), Number(txtIncomeSlider));
        var multiplier = 1;
        future_cost = graphTwo.toFixed(0);
        var mInvst = future_cost * Number(rog / 100) / ((Math.pow((1 + Number(rog) / 100), (Number(txtIncomeSlider))) - 1) * (1 + Number(rog) / 100));

        mInvst = mInvst * multiplier;

        var oInvst = future_cost - saveMoney;
        mInvst = mInvst.toFixed(0);
        var Temp1 = parseInt(mInvst) % 1000;
        var Temp2 = 1000 - Temp1;
        mInvst = parseInt(mInvst) + Temp2;
        //Monthly Investment
        mInvst = Math.round(mInvst / 12);
        var Temp11 = parseInt(mInvst) % 1000;
        var Temp21 = 1000 - Temp11;
        mInvst = parseInt(mInvst) + Temp21;
        if (mInvst >= 4000) {
            $scope.Portfolio_Parameter.TotalMonthlyInvestment = mInvst;
        }
        else {
            $scope.Portfolio_Parameter.TotalMonthlyInvestment = 4000;
        }

        oInvst = oInvst.toFixed(0);

        $scope.Portfolio_Parameter.EstematedYear = txtIncomeSlider;
        var Temp1 = parseInt(oInvst) % 1000;
        var Temp2 = 1000 - Temp1;
        oInvst = parseInt(oInvst) + Temp2;
        $scope.Portfolio_Parameter.CalculatedTotalMoney = oInvst;
        //document.getElementById("idlExpLifeCover").innerHTML = oInvst + '<sup style="font-size:12px;position:relative;top:-10px;"> #</sup>';

        //document.getElementById("idlExpLifeCover").value = oInvst;

        //future_cost = addCommas(future_cost);

        //document.getElementById("saving").innerHTML = future_cost;

        //document.getElementById("saving").value = future_cost;
        //if (saveMoney > Number(removeCommas(document.getElementById('saving').value))) {

        //    $('.alredysave').css({ "display": "none" });

        //    $('.savePaisa').css({ "display": "block" });

        //}

        //else {

        //    $('.alredysave').css({ "display": "block" });

        //    $('.savePaisa').css({ "display": "none" });

        //}

        //document.getElementById('needyrs').innerHTML = course_yr;
    };

    $scope.CalculateMoneyAssignToExDebt = function (CalculatedPercentage, MoneyMonthwise) {
        var CalculatedEquityDebtMoney = CalculateMoneyEquityDebt(CalculatedPercentage, MoneyMonthwise);
        $scope.Portfolio_Parameter.Equity = CalculatedEquityDebtMoney[0].Equity;
        $scope.Portfolio_Parameter.Debt = CalculatedEquityDebtMoney[0].Debt;
        $scope.Portfolio_Parameter.Gold = CalculatedEquityDebtMoney[0].Gold;
        $scope.ChartFunctionForPortFolio();
    }
    $scope.Portfolio_Parameter =
        {
            Portfolio_ID: "1",
            Portfolio_Name: "",
            Portfolio_Year: "",
            Portfolio_Duration: "",
            Portfolio_FeesPerYear: "",
            Portfolio_LivingPerYear: "0",
            Portfolio_LumpSumAmount: "",
            Portfolio_InflationRate: "6",
            Portfolio_ChildCurrentAge: "",
            TotalCourseFee: "",
            TotalLivingExpensesFee: "",
            TotalMonthlyInvestment: "",
            EstematedYear: "",
            CalculatedTotalMoney: "",
            Portfolio_MonthlyExpenditure: "",
            Portfolio_CurrentAge: ""

        };


    $scope.ShowDiv = function (Number) {


        $scope.sampleStructure = [];
        var EquityLargeCpIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "EQ large cap") {
                return index;
            }
        });
        var EquityMulticapIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "EQ Multicap") {
                return index;
            }
        });
        var EquityMidSmallIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "EQ Mid/small") {
                return index;
            }
        });
        var EquityUltraSortIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Debt/ ultra short") {
                return index;
            }
        });

        var EquityBondIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Debt/ GILT") {
                return index;
            }
        });
        var EquityLiquidIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Debt liquid") {
                return index;
            }
        });
        var CreditOpportunitiesIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Credit Opportunities") {
                return index;
            }
        });

        var GoldIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Gold") {
                return index;
            }
        });
        var Fund_LargeCap_result = "";
        var Fund_LargeCap_result_Temp = "";
        var Fund_MultiCap_result = "";
        var Fund_MultiCap_result_Temp = "";
        var Fund_BondCap_result = "";
        var Fund_BondCap_result_Temp = "";
        var Fund_UltraCap_result = "";
        var Fund_UltraCap_result_Temp = "";
        var Fund_MidCap_result = "";
        var Fund_MidCap_result_Temp = "";
        var Fund_CreditOpportunity_result = "";
        var Fund_CreditOpportunity_result_Temp = "";
        var Fund_DebtLiquid_result = "";
        var Fund_DebtLiquid_result_Temp = "";
        var Fund_Gold_result = "";
        var Fund_Gold_result_Temp = "";
        var Result_Temp = [];
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap != undefined) {
            Fund_LargeCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_LargeCap_result_Temp = Fund_LargeCap_result % 100;
            Result_Temp.push({ "SchemeType": "Large", "ModResult": Fund_LargeCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap != undefined) {
            Fund_MultiCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_MultiCap_result_Temp = Fund_MultiCap_result % 100;
            Result_Temp.push({ "SchemeType": "Multi", "ModResult": Fund_MultiCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds != undefined) {
            Fund_BondCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_BondCap_result_Temp = Fund_BondCap_result % 100;
            Result_Temp.push({ "SchemeType": "Bond", "ModResult": Fund_BondCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund != undefined) {
            Fund_UltraCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_UltraCap_result_Temp = Fund_UltraCap_result % 100;
            Result_Temp.push({ "SchemeType": "Ultra", "ModResult": Fund_UltraCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap != undefined) {
            Fund_MidCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_MidCap_result_Temp = Fund_MidCap_result % 100;
            Result_Temp.push({ "SchemeType": "Mid", "ModResult": Fund_MidCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity != undefined) {
            Fund_CreditOpportunity_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_CreditOpportunity_result_Temp = Fund_CreditOpportunity_result % 100;
            Result_Temp.push({ "SchemeType": "Credit", "ModResult": Fund_CreditOpportunity_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap != undefined) {
            Fund_DebtLiquid_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_DebtLiquid_result_Temp = Fund_DebtLiquid_result % 100;
            Result_Temp.push({ "SchemeType": "Liquid", "ModResult": Fund_DebtLiquid_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold != undefined) {
            Fund_Gold_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_Gold_result_Temp = Fund_Gold_result % 100;
            Result_Temp.push({ "SchemeType": "Gold", "ModResult": Fund_Gold_result_Temp });
        }
        for (var a = 0; a < Result_Temp.length; a++) {
            if (Result_Temp[a].SchemeType == "Large") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Large") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };
            if (Result_Temp[a].SchemeType == "Multi") {
                if (Result_Temp[a].ModResult != "0") {
                    if (Result_Temp[a].ModResult != "0") {
                        for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                            if (Result_Temp[a1].SchemeType != "Multi") {
                                if (Result_Temp[a1].ModResult != "0") {
                                    if (Result_Temp[a1].SchemeType == "Large") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Bond") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Ultra") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Mid") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Credit") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Liquid") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Gold") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                }
                            }
                        }
                    }
                }

            };
            if (Result_Temp[a].SchemeType == "Bond") {

                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Bond") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }


            };
            if (Result_Temp[a].SchemeType == "Ultra") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Ultra") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };
            if (Result_Temp[a].SchemeType == "Mid") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Mid") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };
            if (Result_Temp[a].SchemeType == "Credit") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Credit") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };

            if (Result_Temp[a].SchemeType == "Liquid") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Liquid") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };

            if (Result_Temp[a].SchemeType == "Gold") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Gold") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };
        }

        var ValueMinAmountTemp = [];
        //Equity Large Cap
        var TempAmount = "";
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var d = new Date();
        let tempmonth = month[d.getMonth()];
        let tempYear = d.getFullYear();

        let tempCount = 0;
        let tempMinTotalInvst = [];
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap != undefined) {
            //Fund_LargeCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityLargeCpIndex.length; a++) {
                if (Fund_LargeCap_result > $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].MinInvst) {

                    if ((Fund_LargeCap_result % $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].multiplier) == 0) {
                        tempCount++;

                        let tempDate = ('0' + $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].date.split(',')[parseInt(Number) - 1]).slice(-2);
                        let tempCompletedate = tempDate + "/" + tempmonth + "/" + tempYear;

                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].SchemeName,
                            "BSESchemeCode": $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].ISIN,
                            "DueDate": tempCompletedate,
                            "Amount": Fund_LargeCap_result,
                            "DateString": "",
                            "Scheme_ID": "",
                            "InvestmentType": "SIP"

                        });
                        BseSchemeIDs = BseSchemeIDs != "" ? BseSchemeIDs : "" + "," + $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].BSESchmecode;
                        break;
                    }



                }
            }

            if (tempCount > 0) {
                tempMinTotalInvst.push({
                    Fund_LargeCap: $scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap
                })
            }


        }

        //Equity Mid Cap
        tempCount = 0;
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap != undefined) {
            //Fund_MultiCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityMulticapIndex.length; a++) {
                if (Fund_MultiCap_result > $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].MinInvst) {

                    if ((Fund_MultiCap_result % $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].multiplier) == 0) {
                        tempCount++;
                        let tempDate = ('0' + $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].date.split(',')[parseInt(Number) - 1]).slice(-2);
                        let tempCompletedate = tempDate + "/" + tempmonth + "/" + tempYear;
                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].SchemeName,
                            "BSESchemeCode": $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].ISIN,
                            "DueDate": tempCompletedate,
                            "Amount": Fund_MultiCap_result,
                            "DateString": "",
                            "Scheme_ID": "",
                            "InvestmentType": "SIP"

                        });
                        BseSchemeIDs = BseSchemeIDs != "" ? BseSchemeIDs : "" + "," + $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].BSESchmecode;
                        break;
                    }



                }
            }
            if (tempCount > 0) {
                tempMinTotalInvst.push({
                    Fund_MultiCap: $scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap
                })
            }
        }

        //Bonds Fund
        tempCount = 0;
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds != undefined) {
            //Fund_BondCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityBondIndex.length; a++) {
                if (Fund_BondCap_result > $scope.SIPGoalStructureDate[EquityBondIndex[a]].MinInvst) {

                    if ((Fund_BondCap_result % $scope.SIPGoalStructureDate[EquityBondIndex[a]].multiplier) == 0) {
                        tempCount++;
                        let tempDate = ('0' + $scope.SIPGoalStructureDate[EquityBondIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityBondIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityBondIndex[a]].date.split(',')[parseInt(Number) - 1]).slice(-2);
                        let tempCompletedate = tempDate + "/" + tempmonth + "/" + tempYear;
                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityBondIndex[a]].SchemeName,
                            "BSESchemeCode": $scope.SIPGoalStructureDate[EquityBondIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityBondIndex[a]].ISIN,
                            "DueDate": tempCompletedate,
                            "Amount": Fund_BondCap_result,
                            "DateString": "",
                            "Scheme_ID": "",
                            "InvestmentType": "SIP"

                        });
                        BseSchemeIDs = BseSchemeIDs != "" ? BseSchemeIDs : "" + "," + $scope.SIPGoalStructureDate[EquityBondIndex[a]].BSESchmecode;
                        break;
                    }



                }
            }
            if (tempCount > 0) {
                tempMinTotalInvst.push({
                    Fund_BondFunds: $scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds
                })
            }
        }
        //Ultry Sort Fund
        tempCount = 0;
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund != undefined) {
            //Fund_UltraCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityUltraSortIndex.length; a++) {
                if (Fund_UltraCap_result > $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].MinInvst) {

                    if ((Fund_UltraCap_result % $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].multiplier) == 0) {
                        tempCount++;
                        let tempDate = ('0' + $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1]).slice(-2);
                        let tempCompletedate = tempDate + "/" + tempmonth + "/" + tempYear;
                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].SchemeName,
                            "BSESchemeCode": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].ISIN,
                            "DueDate": tempCompletedate,
                            "Amount": Fund_UltraCap_result,
                            "DateString": "",
                            "Scheme_ID": "",
                            "InvestmentType": "SIP"

                        });
                        BseSchemeIDs = BseSchemeIDs != "" ? BseSchemeIDs : "" + "," + $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].BSESchmecode;
                        break;
                    }



                }
            }
            if (tempCount > 0) {
                tempMinTotalInvst.push({
                    Fund_UltraSortFund: $scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund
                })
            }
        }

        //Mid Fund
        tempCount = 0;
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap != undefined) {
            //Fund_MidCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityMidSmallIndex.length; a++) {
                if (Fund_MidCap_result > $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].MinInvst) {

                    if ((Fund_MidCap_result % $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].multiplier) == 0) {
                        tempCount++;
                        let tempDate = ('0' + $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].date.split(',')[parseInt(Number) - 1]).slice(-2);
                        let tempCompletedate = tempDate + "/" + tempmonth + "/" + tempYear;
                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].SchemeName,
                            "BSESchemeCode": $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].ISIN,
                            "DueDate": tempCompletedate,
                            "Amount": Fund_MidCap_result,
                            "DateString": "",
                            "Scheme_ID": "",
                            "InvestmentType": "SIP"

                        });
                        BseSchemeIDs = BseSchemeIDs != "" ? BseSchemeIDs : "" + "," + $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].BSESchmecode;
                        break;
                    }



                }
            }
            if (tempCount > 0) {
                tempMinTotalInvst.push({
                    Fund_MidCap: $scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap
                })
            }
        }


        //Credit Opportunity
        tempCount = 0;
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity != undefined) {
            //Fund_CreditOpportunity_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity / 100) * $scope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < CreditOpportunitiesIndex.length; a++) {
                if (Fund_CreditOpportunity_result > $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].MinInvst) {

                    if ((Fund_CreditOpportunity_result % $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].multiplier) == 0) {
                        tempCount++;
                        let tempDate = ('0' + $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].date.split(',')[parseInt(Number) - 1]).slice(-2);
                        let tempCompletedate = tempDate + "/" + tempmonth + "/" + tempYear;
                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].SchemeName,
                            "BSESchemeCode": $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].ISIN,
                            "DueDate": tempCompletedate,
                            "Amount": Fund_CreditOpportunity_result,
                            "DateString": "",
                            "Scheme_ID": "",
                            "InvestmentType": "SIP"

                        });
                        BseSchemeIDs = BseSchemeIDs != "" ? BseSchemeIDs : "" + "," + $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].BSESchmecode;
                        break;
                    }



                }
            }
            if (tempCount > 0) {
                tempMinTotalInvst.push({
                    Fund_CreditOpportunity: $scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity
                })
            }
        }

        //Liquid Fund
        tempCount = 0;
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap != undefined) {


            for (var a = 0; a < EquityLiquidIndex.length; a++) {
                if (Fund_DebtLiquid_result > $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].MinInvst) {

                    if ((Fund_DebtLiquid_result % $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].multiplier) == 0) {
                        tempCount++;
                        let tempDate = ('0' + $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1]).slice(-2);
                        let tempCompletedate = tempDate + "/" + tempmonth + "/" + tempYear;
                        $scope.sampleStructure.push({
                            //"SchemeName": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].SchemeName,
                            //"SchemeCode": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].BSESchmecode,
                            //"ISIN": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].ISIN,
                            //"Date": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1],
                            //"Amount": Fund_DebtLiquid_result
                            "SchemeName": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].SchemeName,
                            "BSESchemeCode": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].ISIN,
                            "DueDate": tempCompletedate,
                            "Amount": Fund_DebtLiquid_result,
                            "DateString": "",
                            "Scheme_ID": "",
                            "InvestmentType": "SIP"

                        });
                        BseSchemeIDs = BseSchemeIDs != "" ? BseSchemeIDs : "" + "," + $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].BSESchmecode;
                        break;
                    }



                }
            }
            if (tempCount > 0) {
                tempMinTotalInvst.push({
                    Fund_LiquidCap: $scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap
                })
            }
        }

        //Gold Fund
        tempCount = 0;
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold != undefined) {


            for (var a = 0; a < GoldIndex.length; a++) {
                if (Fund_Gold_result > $scope.SIPGoalStructureDate[GoldIndex[a]].MinInvst) {

                    if ((Fund_Gold_result % $scope.SIPGoalStructureDate[GoldIndex[a]].multiplier) == 0) {
                        tempCount++;
                        let tempDate = ('0' + $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1]).slice(-2);
                        let tempCompletedate = tempDate + "/" + tempmonth + "/" + tempYear;
                        $scope.sampleStructure.push({
                            //"SchemeName": $scope.SIPGoalStructureDate[GoldIndex[a]].SchemeName,
                            //"SchemeCode": $scope.SIPGoalStructureDate[GoldIndex[a]].BSESchmecode,
                            //"ISIN": $scope.SIPGoalStructureDate[GoldIndex[a]].ISIN,
                            //"Date": $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1],
                            //"Amount": Fund_Gold_result

                            "SchemeName": $scope.SIPGoalStructureDate[GoldIndex[a]].SchemeName,
                            "BSESchemeCode": $scope.SIPGoalStructureDate[GoldIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[GoldIndex[a]].ISIN,
                            "DueDate": tempCompletedate,
                            "Amount": Fund_Gold_result,
                            "DateString": "",
                            "Scheme_ID": "",
                            "InvestmentType": "SIP"

                        });
                        BseSchemeIDs = BseSchemeIDs != "" ? BseSchemeIDs : "" + "," + $scope.SIPGoalStructureDate[GoldIndex[a]].BSESchmecode;
                        break;
                    }



                }
            }
            if (tempCount > 0) {
                tempMinTotalInvst.push({
                    Fund_Gold: $scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold
                })
            }
        }

        //let TempTotal = 0;
        //for (var a = 0; a < $scope.sampleStructure.length; a++)
        //{
        //    TempTotal = TempTotal + $scope.sampleStructure[]
        //}

        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap != undefined) {

        }


        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap != undefined) {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds != undefined) {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund != undefined) {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap != undefined) {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity != undefined) {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap != undefined) {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold != undefined) {

        }
        var tesmpArray = [];
        for (var a = 0; a < $scope.sampleStructure.length; a++) {
            if (parseInt($scope.sampleStructure[a].Amount) % 500 != 0) {
                tesmpArray.push(
                               {
                                   "RemainingAmount": parseInt($scope.sampleStructure[a].Amount) % 500,
                                   "ISIN": $scope.sampleStructure[a].ISIN
                               }
                );
            }
            //var Temp2 = 500 - Temp1;
            //mInvst = parseInt(mInvst) + Temp2;
        }


        tesmpArray.sort(function (a, b) {
            return a.RemainingAmount;
        })
        //let TempTotal = 0;
        //$scope.CalculatedPercentage.Data[0].Fund[0].sort(function (a, b) {
        //    return a - b;
        //});
        //for (let a = 0; a < $scope.sampleStructure.length; a++)
        //{
        //    TempAmount =TempAmount+ $scope.sampleStructure[a].Amount;
        //}
        //if (TempAmount != $scope.Portfolio_Parameter.TotalMonthlyInvestment)
        //{
        //    if(tempMinTotalInvst.length>0)
        //    {
        //        var errKey = _.invert(tempMinTotalInvst)[3];
        //    }
        // }

        // $scope.sampleStructure.sort();


        //console.log(EquityLargeCpIndex)
        $scope.weekNo = "Week " + Number;
        if (Number == "1") {

            $scope.WeekClass = "offer offer-warning";

        }
        else if (Number == "2") {
            $scope.WeekClass = "offer offer-radius offer-danger";
        }
        else if (Number == "3") {
            $scope.WeekClass = "offer offer-radius offer-primary";
        }
        else {
            $scope.WeekClass = "offer offer-info";
        }
    };






    $scope.Child_NoGoalYear = {
        "ChildYear": [{
            "Year": "15"
        },
        {
            "Year": "16"
        },
        {
            "Year": "17"
        },
        {
            "Year": "18"
        },
        {
            "Year": "19"
        },
        {
            "Year": "20"
        },
        {
            "Year": "21"
        },
        {
            "Year": "22"
        },
        {
            "Year": "23"
        },
        {
            "Year": "24"
        },
        {
            "Year": "25"
        }
        ]
    }
    $scope.PortFolio_InflationRate = {
        "Inflation": [{
            "Inflation_Percentage": "3"
        },
        {
            "Inflation_Percentage": "4"
        },
        {
            "Inflation_Percentage": "5"
        },
        {
            "Inflation_Percentage": "6"
        },
        {
            "Inflation_Percentage": "7"
        },
        {
            "Inflation_Percentage": "8"
        },
        {
            "Inflation_Percentage": "9"
        },
        {
            "Inflation_Percentage": "10"
        },
        {
            "Inflation_Percentage": "11"
        },
        {
            "Inflation_Percentage": "12"
        },
        {
            "Inflation_Percentage": "13"
        },
        {
            "Inflation_Percentage": "14"
        },
        {
            "Inflation_Percentage": "15"
        }
        ]
    }
    $scope.PortfolioChild_Calculate = function (Type) {
        $scope.Global_Message = "";
        if (Type == undefined) {
            $scope.Portfolio_Parameter.TotalCourseFee = (parseInt($scope.Portfolio_Parameter.Portfolio_LivingPerYear) + parseInt($scope.Portfolio_Parameter.Portfolio_FeesPerYear)) * ($scope.Portfolio_Parameter.Portfolio_Duration);

            calculator($scope.Portfolio_Parameter.Portfolio_LumpSumAmount, $scope.Portfolio_Parameter.Portfolio_Year, $scope.Portfolio_Parameter.Portfolio_ChildCurrentAge);

            $scope.Portfolio_Parameter.TotalLivingExpensesFee = parseInt($scope.Portfolio_Parameter.Portfolio_LivingPerYear) * ($scope.Portfolio_Parameter.Portfolio_Duration);

            $scope.SIP_GOAL_SHOW = false;
            $scope.SIP_GOAL_Setting_SHOW = true;
        }
        else {
            calculator($scope.Portfolio_Parameter.Portfolio_LumpSumAmount, $scope.Portfolio_Parameter.Portfolio_Year, $scope.Portfolio_Parameter.Portfolio_ChildCurrentAge);
        }

    };
    $scope.Portfolio_Final = function () {
        switch (currentState) {
            case "ChildGoal":
                $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, undefined, "ChildGoal");
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                //if ($scope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
                //{
                $scope.SIP_GOAL_SHOW = false;
                $scope.SIP_GOAL_Setting_SHOW = false;
                $scope.SIP_GOAL_Final_SHOW = true;
                break;
            case "Retirement":
                $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.InvestedTillYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, undefined, "Retirement");
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                //if ($scope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
                //{
                $scope.SIP_GOAL_SHOW = false;
                $scope.Retirement_StepMain = false;
                $scope.SIP_GOAL_Final_SHOW = true;

                break;
            case "HousePlan":
                $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, undefined, "HousePlan");
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                //if ($scope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
                //{
                $scope.BuyHouse_Step1 = false;
                $scope.BuyHouse_Step2 = false;
                $scope.SIP_GOAL_Final_SHOW = true;

                break;
            case "ChildMerrage":
                $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, undefined, "ChildMerrage");
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                //if ($scope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
                //{
                $scope.BuyChild_Step1 = false;
                $scope.BuyChild_Step2 = false;
                $scope.SIP_GOAL_Final_SHOW = true;

                break;
            case "CarPlan":
                $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, undefined, "CarPlan");
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                //if ($scope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
                //{
                $scope.BuyCar_Step1 = false;
                $scope.BuyCar_Step2 = false;
                $scope.SIP_GOAL_Final_SHOW = true;

                break;
            case "Tour":
                $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, undefined, "CarPlan");
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                //if ($scope.Portfolio_Parameter.TotalM onthlyInvestment >= 2500)
                //{
                $scope.BuyTour_Step1 = false;
                $scope.BuyTour_Step2 = false;
                $scope.SIP_GOAL_Final_SHOW = true;

                break;
        }

        $scope.ShowDiv("1");
        //}
        //else {
        //    $scope.Global_Message = "Amount Should be greate than 2500 your SIP amount is " + $scope.Portfolio_Parameter.TotalMonthlyInvestment +". Please select heigher amount";
        //    $scope.SIP_GOAL_SHOW = true;
        //    $scope.SIP_GOAL_Setting_SHOW = false;
        //    $scope.SIP_GOAL_Final_SHOW = false;
        //}

    };
    $scope.InvestAndGo = function (From) {
        if ($localStorage.ChildState) {

            $localStorage.POstJson = {

                "User_ID": "",
                "userPlan":
                {
                    "Plan_ID": "",
                    "MasterPlan_ID": $scope.Portfolio_Parameter.Portfolio_ID,
                    "User_ID": "",
                    "GoalName": $scope.Portfolio_Parameter.Portfolio_Name,
                    "PresentAge": $scope.Portfolio_Parameter.Portfolio_ChildCurrentAge,
                    "GoalTimeToStart": $scope.Portfolio_Parameter.Portfolio_Year,
                    "GoalDuration": $scope.Portfolio_Parameter.Portfolio_Duration,
                    "GoalPerYearCost": $scope.Portfolio_Parameter.Portfolio_FeesPerYear,
                    "GoalPerYearLivingCost": $scope.Portfolio_Parameter.Portfolio_LivingPerYear,
                    "GoalLumpsum": $scope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                    "GoalInflationRate": $scope.Portfolio_Parameter.Portfolio_InflationRate,
                    "GoalTotalCost": $scope.Portfolio_Parameter.TotalCourseFee,
                    "GoalLivingTotalCost": $scope.Portfolio_Parameter.TotalLivingExpensesFee,
                    "GoalTotalAmount": $scope.Portfolio_Parameter.CalculatedTotalMoney,
                    "GoalTotalLumpsumAmount": $scope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                    "EstimatedInflationRate": "",
                    "GoalDateOfSip": "",
                    "GoalRetirementYear": "",
                    "GoalRetirementExpense": "",
                    "GoalRetirementMonthlyExpenditure": "",
                    "GoalHousePlanYear": "",
                    "GoalHouseCurrentCost": "",
                    "GoalHouseDownPayment": "",
                    "GoalHouseLoanYear": "",
                    "GoalChildMerrageBudgetAmount": ""
                },
                "userPortfolio":
                {
                    "Portfolio_ID": "",
                    "Plan_ID": "",
                    "User_ID": "",
                    "Equity": $scope.Portfolio_Parameter.Equity,
                    "Debt": $scope.Portfolio_Parameter.Debt,
                    "Gold": $scope.Portfolio_Parameter.Gold,
                    "EstimatedTotalSIPAmt": $scope.Portfolio_Parameter.TotalMonthlyInvestment,
                    "Scheme_IDs": ""
                },
                "InvestmentList": $scope.sampleStructure
            }

            if ($localStorage.LoginStatus) {
                $scope.SIP_GOAL_SHOW = false;
                $scope.SIP_GOAL_Setting_SHOW = false;
                $scope.SIP_GOAL_Final_SHOW = true;

                $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

                var CreateUserList = FundsService.CreatePlan.PostPromise($localStorage.POstJson);
                CreateUserList.then(
                // OnSuccess function
                function (answer) {
                    HideLoader();
                    //window.location = "../../../Webform/User/dist/index.html"
                    if (answer.UserRegistrationResult.ResponseCode == "0") {

                    }

                    $scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;


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
            else {
               
                $localStorage.CurrentStatusOfPage = "ChildPlan";
                $state.go('Authentication', { From: 'ChildPlan' });
            }

           
        }
        else if (From != undefined) {
            $localStorage.POstJson = {

                "User_ID": "",
                "userPlan":
                {
                    "Plan_ID": "",
                    "MasterPlan_ID": $scope.Portfolio_Parameter.Portfolio_ID,
                    "User_ID": "",
                    "GoalName": $scope.Portfolio_Parameter.Portfolio_Name,
                    "PresentAge": $scope.Portfolio_Parameter.Portfolio_ChildCurrentAge,
                    "GoalTimeToStart": $scope.Portfolio_Parameter.Portfolio_Year,
                    "GoalDuration": $scope.Portfolio_Parameter.Portfolio_Duration,
                    "GoalPerYearCost": $scope.Portfolio_Parameter.Portfolio_FeesPerYear,
                    "GoalPerYearLivingCost": $scope.Portfolio_Parameter.Portfolio_LivingPerYear,
                    "GoalLumpsum": $scope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                    "GoalInflationRate": $scope.Portfolio_Parameter.Portfolio_InflationRate,
                    "GoalTotalCost": $scope.Portfolio_Parameter.TotalCourseFee,
                    "GoalLivingTotalCost": $scope.Portfolio_Parameter.TotalLivingExpensesFee,
                    "GoalTotalAmount": $scope.Portfolio_Parameter.CalculatedTotalMoney,
                    "GoalTotalLumpsumAmount": $scope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                    "EstimatedInflationRate": "",
                    "GoalDateOfSip": "",
                    "GoalRetirementYear": "",
                    "GoalRetirementExpense": "",
                    "GoalRetirementMonthlyExpenditure": "",
                    "GoalHousePlanYear": "",
                    "GoalHouseCurrentCost": "",
                    "GoalHouseDownPayment": "",
                    "GoalHouseLoanYear": "",
                    "GoalChildMerrageBudgetAmount": ""
                },
                "userPortfolio":
                {
                    "Portfolio_ID": "",
                    "Plan_ID": "",
                    "User_ID": "",
                    "Equity": $scope.Portfolio_Parameter.Equity,
                    "Debt": $scope.Portfolio_Parameter.Debt,
                    "Gold": $scope.Portfolio_Parameter.Gold,
                    "EstimatedTotalSIPAmt": $scope.Portfolio_Parameter.TotalMonthlyInvestment,
                    "Scheme_IDs": ""
                },
                "InvestmentList": $scope.sampleStructure
            }

            if ($localStorage.LoginStatus) {
                $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;
                $localStorage.CurrentStatusOfPage = "ChildPlan";
                $state.go('Authentication', { From: 'ChildPlan' });

            }
            else {
            
                $localStorage.CurrentStatusOfPage = "ChildPlan";
                $state.go('Authentication', { From: 'ChildPlan' });
            }
        }
    }
    $scope.CreatePlanFunction = function () {
        var CreateUserList = FundsService.CreatePlan.PostPromise($localStorage.POstJson);
        CreateUserList.then(
        // OnSuccess function
        function (answer) {
            HideLoader();
            alert("Plan Created Succesfully");
            $localStorage.ChildState = false;
            $state.go('SIP');
            //window.location = "../../../Webform/User/dist/index.html"
            //if (answer.UserRegistrationResult.ResponseCode == "0") {

            //}

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
    }
    $rootScope.InvestNow = function (Page) {
        if ($localStorage.setCounterStatus || Page !=undefined)
        {
            $localStorage.setCounterStatus = false;
            switch (currentState) {
                case "ChildGoal":
                    $localStorage.POstJson = {

                        "User_ID": "",
                        "userPlan":
                        {
                            "Plan_ID": "",
                            "MasterPlan_ID": "1",
                            "User_ID": "",
                            "GoalName": $scope.Portfolio_Parameter.Portfolio_Name,
                            "PresentAge": $scope.Portfolio_Parameter.Portfolio_ChildCurrentAge,
                            "GoalTimeToStart": $scope.Portfolio_Parameter.Portfolio_Year,
                            "GoalDuration": $scope.Portfolio_Parameter.Portfolio_Duration,
                            "GoalPerYearCost": $scope.Portfolio_Parameter.Portfolio_FeesPerYear,
                            "GoalPerYearLivingCost": $scope.Portfolio_Parameter.Portfolio_LivingPerYear,
                            "GoalLumpsum": $scope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                            "GoalInflationRate": $scope.Portfolio_Parameter.Portfolio_InflationRate,
                            "GoalTotalCost": $scope.Portfolio_Parameter.TotalCourseFee,
                            "GoalLivingTotalCost": $scope.Portfolio_Parameter.TotalLivingExpensesFee,
                            "GoalTotalAmount": $scope.Portfolio_Parameter.CalculatedTotalMoney,
                            "GoalTotalLumpsumAmount": $scope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                            "EstimatedInflationRate": "",
                            "GoalDateOfSip": "",
                            "GoalRetirementYear": "",
                            "GoalRetirementExpense": "",
                            "GoalRetirementMonthlyExpenditure": "",
                            "GoalHousePlanYear": "",
                            "GoalHouseCurrentCost": "",
                            "GoalHouseDownPayment": "",
                            "GoalHouseLoanYear": "",
                            "GoalChildMerrageBudgetAmount": ""
                        },
                        "userPortfolio":
                        {
                            "Portfolio_ID": "",
                            "Plan_ID": "",
                            "User_ID": "",
                            "Equity": $scope.Portfolio_Parameter.Equity,
                            "Debt": $scope.Portfolio_Parameter.Debt,
                            "Gold": $scope.Portfolio_Parameter.Gold,
                            "EstimatedTotalSIPAmt": $scope.Portfolio_Parameter.TotalMonthlyInvestment,
                            "Scheme_IDs": ""
                        },
                        "InvestmentList": $scope.sampleStructure
                    }
                    if ($localStorage.LoginStatus) {
                        $scope.SIP_GOAL_SHOW = false;
                        $scope.SIP_GOAL_Setting_SHOW = false;
                        $scope.SIP_GOAL_Final_SHOW = true;

                        $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

                        $scope.CreatePlanFunction();

                    }
                    else {
                        

                        $localStorage.CurrentStatusOfPage = "ChildPlan";
                        $state.go('Authentication', { From: 'ChildPlan' });
                    }
                    break;

                case "Retirement":
                    $localStorage.POstJson = {

                        "User_ID": "",
                        "userPlan":
                        {
                            "Plan_ID": "",
                            "MasterPlan_ID": "2",
                            "User_ID": "",
                            "GoalName": $scope.Portfolio_Parameter.Portfolio_Name,
                            "PresentAge": $scope.Portfolio_Parameter.Portfolio_ChildCurrentAge,
                            "GoalTimeToStart": "",
                            "GoalDuration": $scope.Portfolio_Parameter.Portfolio_Duration,
                            "GoalPerYearCost": parseInt($scope.SIP_AmountInvestment.value) * 1000,
                            "GoalPerYearLivingCost": "",
                            "GoalLumpsum": $scope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                            "GoalInflationRate": $scope.Portfolio_Parameter.Portfolio_InflationRate,
                            "GoalTotalCost": "",
                            "GoalLivingTotalCost": "",
                            "GoalTotalAmount": $scope.Portfolio_Parameter.CalculatedTotalMoney,
                            "GoalTotalLumpsumAmount": "",
                            "EstimatedInflationRate": "",
                            "GoalDateOfSip": "",
                            "GoalRetirementYear": $scope.SIP_RetireAge.value,
                            "GoalRetirementExpense": $scope.SIP_Percet_bar.value,
                            "GoalRetirementMonthlyExpenditure": $scope.Portfolio_Parameter.Portfolio_MonthlyExpenditure,
                            "GoalHousePlanYear": "",
                            "GoalHouseCurrentCost": "",
                            "GoalHouseDownPayment": "",
                            "GoalHouseLoanYear": "",
                            "GoalChildMerrageBudgetAmount": ""
                        },
                        "userPortfolio":
                        {
                            "Portfolio_ID": "",
                            "Plan_ID": "",
                            "User_ID": "",
                            "Equity": $scope.Portfolio_Parameter.Equity,
                            "Debt": $scope.Portfolio_Parameter.Debt,
                            "Gold": $scope.Portfolio_Parameter.Gold,
                            "EstimatedTotalSIPAmt": $scope.Portfolio_Parameter.TotalMonthlyInvestment,
                            "Scheme_IDs": ""
                        },
                        "InvestmentList": $scope.sampleStructure
                    }
                    if ($localStorage.LoginStatus) {
                        $scope.SIP_GOAL_SHOW = false;
                        $scope.SIP_GOAL_Setting_SHOW = false;
                        $scope.SIP_GOAL_Final_SHOW = true;

                        $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

                        $scope.CreatePlanFunction();

                    }
                    else {
                       
                        $localStorage.CurrentStatusOfPage = "Retirement";
                        $state.go('Authentication', { From: 'Retirement' });
                    }
                    break;

                case "HousePlan":
                    $localStorage.POstJson = {

                        "User_ID": "",
                        "userPlan":
                        {
                            "Plan_ID": "",
                            "MasterPlan_ID": "3",
                            "User_ID": "",
                            "GoalName": $scope.Portfolio_Parameter.Portfolio_Name,
                            "PresentAge": $scope.Portfolio_Parameter.Portfolio_ChildCurrentAge,
                            "GoalTimeToStart": "",
                            "GoalDuration": "",
                            "GoalPerYearCost":"",
                            "GoalPerYearLivingCost": "",
                            "GoalLumpsum": $scope.Portfolio_Parameter.amountWantToInvestNow,
                            "GoalInflationRate": $scope.Portfolio_Parameter.Portfolio_InflationRate,
                            "GoalTotalCost": "",
                            "GoalLivingTotalCost": "",
                            "GoalTotalAmount": $scope.Portfolio_Parameter.CalculatedTotalMoney,
                            "GoalTotalLumpsumAmount": "",
                            "EstimatedInflationRate": "",
                            "GoalDateOfSip": "",
                            "GoalRetirementYear": "",
                            "GoalRetirementExpense": "",
                            "GoalRetirementMonthlyExpenditure": "",
                            "GoalHousePlanYear": $scope.Portfolio_Parameter.planBoughtYear,
                            "GoalHouseCurrentCost": parseInt( $scope.Portfolio_Parameter.currentCostOfHouse) * 100000,
                            "GoalHouseDownPayment": $scope.Portfolio_Parameter.downPaymentPercentage,
                            "GoalHouseLoanYear": $scope.Portfolio_Parameter.loanPeriodYear,
                            "GoalChildMerrageBudgetAmount": ""
                        },
                        "userPortfolio":
                        {
                            "Portfolio_ID": "",
                            "Plan_ID": "",
                            "User_ID": "",
                            "Equity": $scope.Portfolio_Parameter.Equity,
                            "Debt": $scope.Portfolio_Parameter.Debt,
                            "Gold": $scope.Portfolio_Parameter.Gold,
                            "EstimatedTotalSIPAmt": $scope.Portfolio_Parameter.TotalMonthlyInvestment,
                            "Scheme_IDs": ""
                        },
                        "InvestmentList": $scope.sampleStructure
                    }
                    if ($localStorage.LoginStatus) {
                        $scope.SIP_GOAL_SHOW = false;
                        $scope.SIP_GOAL_Setting_SHOW = false;
                        $scope.SIP_GOAL_Final_SHOW = true;

                        $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

                        $scope.CreatePlanFunction();

                    }
                    else {

                        $localStorage.CurrentStatusOfPage = "Retirement";
                        $state.go('Authentication', { From: 'Retirement' });
                    }
                    break;

                case "ChildMerrage":
                    $localStorage.POstJson = {

                        "User_ID": "",
                        "userPlan":
                        {
                            "Plan_ID": "",
                            "MasterPlan_ID": "5",
                            "User_ID": "",
                            "GoalName": $scope.Portfolio_Parameter.Portfolio_Name,
                            "PresentAge": $scope.Portfolio_Parameter.yourCurrentAge,
                            "GoalTimeToStart": $scope.Portfolio_Parameter.PlanWeddingAge,
                            "GoalDuration": "",
                            "GoalPerYearCost": "",
                            "GoalPerYearLivingCost": "",
                            "GoalLumpsum": $scope.Portfolio_Parameter.amountWantToInvestNow,
                            "GoalInflationRate": $scope.Portfolio_Parameter.Portfolio_InflationRate,
                            "GoalTotalCost": "",
                            "GoalLivingTotalCost": "",
                            "GoalTotalAmount": $scope.Portfolio_Parameter.CalculatedTotalMoney,
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
                            "GoalChildMerrageBudgetAmount": $scope.Portfolio_Parameter.weddingBudget
                        },
                        "userPortfolio":
                        {
                            "Portfolio_ID": "",
                            "Plan_ID": "",
                            "User_ID": "",
                            "Equity": $scope.Portfolio_Parameter.Equity,
                            "Debt": $scope.Portfolio_Parameter.Debt,
                            "Gold": $scope.Portfolio_Parameter.Gold,
                            "EstimatedTotalSIPAmt": $scope.Portfolio_Parameter.TotalMonthlyInvestment,
                            "Scheme_IDs": ""
                        },
                        "InvestmentList": $scope.sampleStructure
                    }
                    if ($localStorage.LoginStatus) {
                        $scope.SIP_GOAL_SHOW = false;
                        $scope.SIP_GOAL_Setting_SHOW = false;
                        $scope.SIP_GOAL_Final_SHOW = true;

                        $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

                        $scope.CreatePlanFunction();

                    }
                    else {

                        $localStorage.CurrentStatusOfPage = "ChildMerrage";
                        $state.go('Authentication', { From: 'ChildMerrage' });
                    }
                    break;

                case "Tour":
                    $localStorage.POstJson = {

                        "User_ID": "",
                        "userPlan":
                        {
                            "Plan_ID": "",
                            "MasterPlan_ID": "7",
                            "User_ID": "",
                            "GoalName": $scope.Portfolio_Parameter.Portfolio_Name,
                            "PresentAge": $scope.Portfolio_Parameter.yourCurrentAge,
                            "GoalTimeToStart": $scope.Portfolio_Parameter.Portfolio_Year,
                            "GoalDuration": "",
                            "GoalPerYearCost": "",
                            "GoalPerYearLivingCost": "",
                            "GoalLumpsum": $scope.Portfolio_Parameter.amountWantToInvestNow,
                            "GoalInflationRate": $scope.Portfolio_Parameter.Portfolio_InflationRate,
                            "GoalTotalCost": "",
                            "GoalLivingTotalCost": "",
                            "GoalTotalAmount": $scope.Portfolio_Parameter.Portfolio_GoalAmount,
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
                            "GoalChildMerrageBudgetAmount": ""
                        },
                        "userPortfolio":
                        {
                            "Portfolio_ID": "",
                            "Plan_ID": "",
                            "User_ID": "",
                            "Equity": $scope.Portfolio_Parameter.Equity,
                            "Debt": $scope.Portfolio_Parameter.Debt,
                            "Gold": $scope.Portfolio_Parameter.Gold,
                            "EstimatedTotalSIPAmt": $scope.Portfolio_Parameter.TotalMonthlyInvestment,
                            "Scheme_IDs": ""
                        },
                        "InvestmentList": $scope.sampleStructure
                    }
                    if ($localStorage.LoginStatus) {
                        $scope.SIP_GOAL_SHOW = false;
                        $scope.SIP_GOAL_Setting_SHOW = false;
                        $scope.SIP_GOAL_Final_SHOW = true;

                        $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

                        $scope.CreatePlanFunction();

                    }
                    else {

                        $localStorage.CurrentStatusOfPage = "Tour";
                        $state.go('Authentication', { From: 'Tour' });
                    }
                    break;
            }
        }
     

    };

    $scope.selectRow = function (index) {
        $scope.selected = index;
    };
    $scope.rowClass = function (index) {
        return ($scope.selected === index) ? "selected" : "";
    };
    $scope.chartTitle = "Lead Sources";
    $scope.chartWidth = 500;
    $scope.chartHeight = 320;
    $scope.chartData = [
        ['Equity', 63],
        ['Bonds', 12],
        ['Cash', 13],
        ['Others', 12]
    ];

    $scope.ListOfInvestmentPortfolio = [{
        "SchemeName": "IDFB Debt",
        "Amount": "2000"
    },
    {
        "SchemeName": "SBI Bluechip Fund - Growth",
        "Amount": "1000"
    }, {
        "SchemeName": "ICICI Prudential Value Discovery Fund - Growth",
        "Amount": "2000"
    }, {
        "SchemeName": "IDFB Debt",
        "Amount": "2000"
    }]
    $scope.InvestNowPortFolio = {
        chart: {
            caption: "Investment Plan For You",
            subcaption: "According this",
            startingangle: "310",
            showlabels: "0",
            showlegend: "1",
            enablemultislicing: "0",
            slicingdistance: "15",
            showpercentvalues: "1",
            animateClockwise: "1",
            showpercentintooltip: "0",
            defaultCenterLabel: "Plan Of Investment",
            //centerLabel: "Revenue from $label: $value",
            //plottooltext: "Investment of : $label will be : $datavalue%",
            theme: "fint"
        },
        data: [
            {
                label: "Equity",
                value: $scope.EquityPercentage
            },
            {
                label: "Debt",
                value: $scope.DebtPercentage
            }
        ]
    }

    $scope.ChangePortfolioAmount = function (From, Page) {
        let TempMonthlyInvestment = 0;
        if (currentState == "ChildGoal") {76543

            if (From == 'M') {
                TempMonthlyInvestment = parseInt($scope.Portfolio_Parameter.TotalMonthlyInvestment) - 1000;
                if (parseInt(TempMonthlyInvestment) >= 4000) {
                    $scope.Portfolio_Parameter.TotalMonthlyInvestment = TempMonthlyInvestment;
                    //$scope.Portfolio_Calculate("ChnageAmount");
                    $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, $scope.Portfolio_Parameter.Risk, "ChildGoal");
                    $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                    //$scope.Portfolio_Parameter.TotalMonthlyInvestment = $scope.Portfolio_Parameter.TotalMonthlyInvestment - 1000;
                    $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                    $scope.ShowDiv("1");
                }
                else {
                    alert("You can not have less than 4000 Rupees");
                }
            }

            else {
                $scope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt($scope.Portfolio_Parameter.TotalMonthlyInvestment) + 1000;
                //$scope.Portfolio_Calculate("ChnageAmount");
                $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, $scope.Portfolio_Parameter.Risk, "ChildGoal");
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                //$scope.Portfolio_Parameter.TotalMonthlyInvestment = $scope.Portfolio_Parameter.TotalMonthlyInvestment + 1000;
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
                $scope.ShowDiv("1");
            }
        }
        else if (Page == "SIP") {

            if (From == 'M') {
                TempMonthlyInvestment = parseInt($scope.Portfolio_Parameter.TotalMonthlyInvestment) - parseInt(1000);
                if (parseInt(TempMonthlyInvestment) >= 4000) {
                    $scope.Portfolio_Parameter.TotalMonthlyInvestment = TempMonthlyInvestment;
                    $scope.SIPClick();
                }
                else {
                    alert("You can not have less than 4000 Rupees");
                }

            }

            else {
                $scope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt($scope.Portfolio_Parameter.TotalMonthlyInvestment) + parseInt(1000);
                $scope.SIPClick();
            }
        }

        else {
            if (From == 'M') {
                TempMonthlyInvestment = parseInt($scope.Portfolio_Parameter.TotalMonthlyInvestment) - parseInt(1000);
                if (parseInt(TempMonthlyInvestment) >= 4000) {
                    $scope.Portfolio_Parameter.TotalMonthlyInvestment = TempMonthlyInvestment;

                    $scope.Portfolio_Final();
                    // $scope.Portfolio_InvestNow('Increment');
                    $scope.ShowDiv("1");
                }
                else {
                    alert("You can not have less than 4000 Rupees");
                }

            }

            else {
                $scope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt($scope.Portfolio_Parameter.TotalMonthlyInvestment) + parseInt(1000);
                $scope.Portfolio_Final();
                //$scope.Portfolio_InvestNow('Increment');
                $scope.ShowDiv("1");
            }
        }


    }

    $scope.ChartFunctionForPortFolio = function () {

        $scope.InvestNowPortFolio = {
            chart: {
                caption: "Investment Plan For You",
                subcaption: "According this",
                startingangle: "310",
                showlabels: "0",
                showlegend: "1",
                enablemultislicing: "0",
                slicingdistance: "15",
                showpercentvalues: "1",
                animateClockwise: "1",
                showpercentintooltip: "0",
                defaultCenterLabel: "Plan Of Investment",
                //centerLabel: "Revenue from $label: $value",
                //plottooltext: "Investment of : $label will be : $datavalue%",
                theme: "fint"
            },
            data: [
                {
                    label: "Equity",
                    value: $scope.Portfolio_Parameter.Equity
                },
                {
                    label: "Debt",
                    value: $scope.Portfolio_Parameter.Debt
                }
            ]
        }
    }



    $scope.InvestNow();
    HideLoader();

    //****************************Buy a House Plan********************************
    $scope.BuyHouse_Step1 = true;

    //function CalculateBuyHouseAmount(AchieveGoal, exp_irate, TimePeriod) {
    //    var graphTwo = Number(AchieveGoal) * Math.pow((1 + Number(exp_irate) / 100), Number(TimePeriod));
    //    var multiplier = 1;
    //    var rog = 9;
    //    var future_cost = graphTwo.toFixed(0);
    //    var mInvst = future_cost * Number(rog / 100) / ((Math.pow((1 + Number(rog) / 100), (Number(TimePeriod))) - 1) * (1 + Number(rog) / 100));
    //    $scope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt(mInvst / 12);
    //    $scope.Portfolio_Parameter.CalculatedTotalMoney = parseInt(mInvst);
    //}

    function CalculateHouseAmount(planBoughtYear, InflationRate, downPaymentPercentage, loanPeriodYear) {
        let houseCost = $scope.Portfolio_Parameter.currentCostOfHouse;
        global_houseloanrepaymentdurationVal = loanPeriodYear;
        if (planBoughtYear == "") {
            planBoughtYear = parseInt(presentyear) + 3;
        }


        var YearToBuy = planBoughtYear - presentyear;
        $scope.Portfolio_Parameter.EstematedYear = YearToBuy;
        //var HouseFutureValue = GetFutureValue(houseCost * 100000, YearToBuy, inflationRate);
        if (InflationRate == "") { alert("Please enter Inflation Rate"); return false; }
        if (!isFinite(InflationRate)) { alert("Please enter valid rate"); return false; }
        var HouseFutureValue = GetFutureValue(houseCost * 100000, YearToBuy, InflationRate);
        //document.getElementById("housecurrentcostVal").innerHTML = GetRoundingFigure(houseCost * 100000)
        //document.getElementById("housefuturecostVal").innerHTML = GetRoundingFigure(HouseFutureValue)[0] + " <span class='fwNormal'>" + GetRoundingFigure(HouseFutureValue)[2];
        var HouseDownPayment = HouseFutureValue * parseInt(downPaymentPercentage) / 100;
        var HouseAmount = parseInt(rounding(GetPrincipalValue(HouseDownPayment, YearToBuy, InflationRate), GoalRounding));

        //$("#houseTargetAmount").val(HouseAmount);


        $scope.Portfolio_Parameter.currentHouseCost = houseCost * 100000;
        $scope.Portfolio_Parameter.HouseDownPayment = GetFutureValue(HouseAmount, YearToBuy, InflationRate);
        $scope.Portfolio_Parameter.CalculatedTotalMoney = $scope.Portfolio_Parameter.HouseDownPayment;
        //HomeInflatedAmt = CommaRound(HouseDownPayment);
        //var HouseInflatedAmount = new Number(HouseDownPayment);
        $scope.Portfolio_Parameter.HouseLoanAmount = HouseFutureValue - $scope.Portfolio_Parameter.HouseDownPayment;
        $scope.Portfolio_Parameter.HouseLoanEMIAmount = parseInt(GetEMIAmount($scope.Portfolio_Parameter.HouseLoanAmount, global_houseloanrepaymentdurationVal, global_homeloanrate));
        let tempFirstAmount = $scope.Portfolio_Parameter.HouseLoanEMIAmount % 1000;
        let tempSecondAmount = 1000 - tempFirstAmount;
        $scope.Portfolio_Parameter.HouseLoanEMIAmount = $scope.Portfolio_Parameter.HouseLoanEMIAmount + parseInt(tempSecondAmount);
        $scope.Portfolio_Parameter.TotalMonthlyInvestment = $scope.Portfolio_Parameter.HouseLoanEMIAmount
        //G('spnLoanAmt').innerHTML = '<span class="Rs mR2">`</span>' + CommaRound(HouseLoanAmount);
        //G('spnMonthlyEMI').innerHTML = '<span class="Rs mR2">`</span>' + CommaRound(HouseLoanEMIAmount);
        //G('dvHouseRequiredInflatedAmount').innerHTML = '<span class="Rs45">`</span>' + CommaRound(HouseDownPayment);

    }


    $scope.PortFolio_InflationRate = {
        "Inflation": [{
            "Inflation_Percentage": "3"
        },
        {
            "Inflation_Percentage": "4"
        },
        {
            "Inflation_Percentage": "5"
        },
        {
            "Inflation_Percentage": "6"
        },
        {
            "Inflation_Percentage": "7"
        },
        {
            "Inflation_Percentage": "8"
        },
        {
            "Inflation_Percentage": "9"
        },
        {
            "Inflation_Percentage": "10"
        },
        {
            "Inflation_Percentage": "11"
        },
        {
            "Inflation_Percentage": "12"
        },
        {
            "Inflation_Percentage": "13"
        },
        {
            "Inflation_Percentage": "14"
        },
        {
            "Inflation_Percentage": "15"
        }
        ]
    }

    $scope.BuyHouse_NoGoalYear = {
        "BuyHouse": [{
            "Year": "1"
        },
        {
            "Year": "2"
        },
        {
            "Year": "3"
        },
        {
            "Year": "4"
        },
        {
            "Year": "5"
        },
        {
            "Year": "6"
        },
        {
            "Year": "7"
        },
        {
            "Year": "8"
        },
        {
            "Year": "9"
        },
        {
            "Year": "10"
        },
        {
            "Year": "11"
        },
        {
            "Year": "12"
        },
        {
            "Year": "13"
        },
        {
            "Year": "14"
        }
        , {
            "Year": "15"
        },
        {
            "Year": "16"
        },
        {
            "Year": "17"
        },
        {
            "Year": "18"
        },
        {
            "Year": "19"
        },
        {
            "Year": "20"
        },
        {
            "Year": "21"
        },
        {
            "Year": "22"
        },
        {
            "Year": "23"
        },
        {
            "Year": "24"
        },
        {
            "Year": "25"
        }
        ]
    }
    $scope.BuyHouse_NoGoalMonth = {
        "BuyHouse": [{
            "Month": "1"
        },
        {
            "Month": "2"
        },
        {
            "Month": "3"
        },
        {
            "Month": "4"
        },
        {
            "Month": "5"
        },
        {
            "Month": "6"
        },
        {
            "Month": "7"
        },
        {
            "Month": "8"
        },
        {
            "Month": "9"
        },
        {
            "Month": "10"
        },
        {
            "Month": "11"
        },
        {
            "Month": "12"
        }
        ]
    }

    $scope.Portfolio_HouseCalculate = function () {
        $scope.BuyHouse_Step1 = false;
        $scope.BuyHouse_Step2 = true;
        //$scope.Portfolio_Parameter.EstematedYear = $scope.Portfolio_Parameter.Portfolio_Year;
        //$scope.Portfolio_Parameter.EstematedMonth = $scope.Portfolio_Parameter.Portfolio_Month;
        //var Year = ((Number($scope.Portfolio_Parameter.Portfolio_Year) * 12) + (Number($scope.Portfolio_Parameter.Portfolio_Month))) / 12;
        CalculateHouseAmount($scope.Portfolio_Parameter.planBoughtYear, $scope.Portfolio_Parameter.Portfolio_InflationRate, $scope.Portfolio_Parameter.downPaymentPercentage, $scope.Portfolio_Parameter.loanPeriodYear);

    };
    //****************************Buy a Car********************************

    $scope.BuyCar_Step1 = true;

    function CalculateCarAmount(AchieveGoal, exp_irate, TimePeriod) {
        var graphTwo = Number(AchieveGoal) * Math.pow((1 + Number(exp_irate) / 100), Number(TimePeriod));
        var multiplier = 1;
        var rog = 9;
        var future_cost = graphTwo.toFixed(0);
        var mInvst = future_cost * Number(rog / 100) / ((Math.pow((1 + Number(rog) / 100), (Number(TimePeriod))) - 1) * (1 + Number(rog) / 100));
        $scope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt(mInvst / 12);
        $scope.Portfolio_Parameter.CalculatedTotalMoney = parseInt(mInvst);
    }
    $scope.PortFolio_InflationRate = {
        "Inflation": [{
            "Inflation_Percentage": "3"
        },
        {
            "Inflation_Percentage": "4"
        },
        {
            "Inflation_Percentage": "5"
        },
        {
            "Inflation_Percentage": "6"
        },
        {
            "Inflation_Percentage": "7"
        },
        {
            "Inflation_Percentage": "8"
        },
        {
            "Inflation_Percentage": "9"
        },
        {
            "Inflation_Percentage": "10"
        },
        {
            "Inflation_Percentage": "11"
        },
        {
            "Inflation_Percentage": "12"
        },
        {
            "Inflation_Percentage": "13"
        },
        {
            "Inflation_Percentage": "14"
        },
        {
            "Inflation_Percentage": "15"
        }
        ]
    }

    $scope.BuyCar_NoGoalYear = {
        "BuyCar": [{
            "Year": "1"
        },
        {
            "Year": "2"
        },
        {
            "Year": "3"
        },
        {
            "Year": "4"
        },
        {
            "Year": "5"
        },
        {
            "Year": "6"
        },
        {
            "Year": "7"
        },
        {
            "Year": "8"
        },
        {
            "Year": "9"
        },
        {
            "Year": "10"
        },
        {
            "Year": "11"
        },
        {
            "Year": "12"
        },
        {
            "Year": "13"
        },
        {
            "Year": "14"
        }
        , {
            "Year": "15"
        },
        {
            "Year": "16"
        },
        {
            "Year": "17"
        },
        {
            "Year": "18"
        },
        {
            "Year": "19"
        },
        {
            "Year": "20"
        },
        {
            "Year": "21"
        },
        {
            "Year": "22"
        },
        {
            "Year": "23"
        },
        {
            "Year": "24"
        },
        {
            "Year": "25"
        }
        ]
    }
    $scope.BuyCar_NoGoalMonth = {
        "BuyCar": [{
            "Month": "1"
        },
        {
            "Month": "2"
        },
        {
            "Month": "3"
        },
        {
            "Month": "4"
        },
        {
            "Month": "5"
        },
        {
            "Month": "6"
        },
        {
            "Month": "7"
        },
        {
            "Month": "8"
        },
        {
            "Month": "9"
        },
        {
            "Month": "10"
        },
        {
            "Month": "11"
        },
        {
            "Month": "12"
        }
        ]
    }

    $scope.PortfolioCar_Calculate = function () {
        $scope.BuyCar_Step1 = false;
        $scope.BuyCar_Step2 = true;
        $scope.Portfolio_Parameter.EstematedYear = $scope.Portfolio_Parameter.Portfolio_Year;
        $scope.Portfolio_Parameter.EstematedMonth = $scope.Portfolio_Parameter.Portfolio_Month;
        var Year = ((Number($scope.Portfolio_Parameter.Portfolio_Year) * 12) + (Number($scope.Portfolio_Parameter.Portfolio_Month))) / 12;
        CalculateCarAmount($scope.Portfolio_Parameter.Portfolio_GoalAmount, $scope.Portfolio_Parameter.Portfolio_ROInflation, parseInt(Year));
    };


    //****************************Buy Child Merrige Plan*************************

    $scope.BuyChild_Step1 = true;
    function CalculateMarriageAmount() {

        //document.getElementById("WeddingAmtVal").innerHTML =
        //GetRoundingFigure(weddingCost * 100000)[0] +
        //" <span class='fwNormal'>" + GetRoundingFigure(weddingCost * 100000)[2] + "</span>";
        var marriageyeargap = $scope.Portfolio_Parameter.PlanWeddingAge - $scope.Portfolio_Parameter.childCurrentAge;
        $scope.Portfolio_Parameter.EstematedYear = marriageyeargap;
        let marrigeYearWillbe = parseInt(presentyear) + parseInt(marriageyeargap);
        $scope.weddingYear = marrigeYearWillbe;
        //var MarriageInflatedAmount = GetFutureValue(weddingCost * 100000, marriageyeargap, inflationRate);
        if ($scope.Portfolio_Parameter.Portfolio_InflationRate == "") { alert("Please enter Inflation Rate"); return false; }
        if (!isFinite($scope.Portfolio_Parameter.Portfolio_InflationRate)) { alert("Please enter valid rate"); return false; }
        var MarriageInflatedAmount = GetFutureValue(parseInt($scope.Portfolio_Parameter.weddingBudget) * 100000, marriageyeargap, $scope.Portfolio_Parameter.Portfolio_InflationRate);
        $scope.Portfolio_Parameter.CalculatedTotalMoney = MarriageInflatedAmount;
        var mInvst = MarriageInflatedAmount * parseInt(rog / 100) / ((Math.pow((1 + parseInt(rog) / 100), (parseInt(marriageyeargap))) - 1) * (1 + parseInt(rog) / 100));

        $scope.weddingBudget = GetRoundingFigure(parseInt($scope.Portfolio_Parameter.weddingBudget) * 100000)[0] + " " + GetRoundingFigure(parseInt($scope.Portfolio_Parameter.weddingBudget) * 100000)[2];
        mInvst = Math.round(mInvst / 12);
        var Temp11 = parseInt(mInvst) % 1000;
        var Temp21 = 1000 - Temp11;
        mInvst = parseInt(mInvst) + Temp21;
        if (mInvst >= 4000) {
            $scope.Portfolio_Parameter.TotalMonthlyInvestment = mInvst;
        }
        else {
            $scope.Portfolio_Parameter.TotalMonthlyInvestment = 4000;
        }

        //G('spnWeddingEstimatedAmt').innerHTML = '<span class="Rs45">`</span>' + CommaRound(MarriageInflatedAmount);

        //document.getElementById("dvPlanChildWedding").style.display = "none";
        ////document.getElementById("aSRChildMarriage").style.display = "none";
        //$(".invPlanChildWedding").eq(0).hide();
        //document.getElementById("fbChildMarriage").style.display = "none";
        //$("#dvReplan" + selectedSectionName).hide();
        //$(".showRP" + selectedSectionName).show();
        //$("#replanGoal" + selectedSectionName).parent("ul.dropdown-menu").hide();
        //$('.btn-danger').removeClass("active");

    }

    $scope.Portfolio_childMerrageCalculate = function () {

        CalculateMarriageAmount();
        $scope.BuyChild_Step1 = false;
        $scope.BuyChild_Step2 = true;
    }

    //***************************Buy Tour Plan***********************************
    $scope.BuyTour_Step1 = true;
    function CalculateWorldTourAmount() {
        var WorldTourTenure = parseInt($scope.Portfolio_Parameter.Portfolio_Year) - presentyear;
        $scope.Portfolio_Parameter.EstematedYear = WorldTourTenure;
        $scope.PlanBudget = $scope.Portfolio_Parameter.Portfolio_GoalAmount * 100000;
        $scope.planForTour = $scope.Portfolio_Parameter.Portfolio_Year;
        //var WorldTourInflatedAmount = GetFutureValue(worldTourBudgetAmt * 100000, WorldTourTenure, inflationRate);

        var WorldTourInflatedAmount = GetFutureValue($scope.Portfolio_Parameter.Portfolio_GoalAmount * 100000, WorldTourTenure, $scope.Portfolio_Parameter.Portfolio_InflationRate);
        WTInfAmt = WorldTourInflatedAmount;
        var mInvst = WorldTourInflatedAmount * parseInt(rog / 100) / ((Math.pow((1 + parseInt(rog) / 100), (parseInt(WorldTourTenure))) - 1) * (1 + parseInt(rog) / 100));
        mInvst = Math.round(mInvst / 12);
        var Temp11 = parseInt(mInvst) % 1000;
        var Temp21 = 1000 - Temp11;
        mInvst = parseInt(mInvst) + Temp21;
        if (mInvst >= 4000) {
            $scope.Portfolio_Parameter.TotalMonthlyInvestment = mInvst;
        }
        else {
            $scope.Portfolio_Parameter.TotalMonthlyInvestment = 4000;
        }
    }

    $scope.PortfolioBuyTour_Calculate = function () {
        $scope.BuyTour_Step1 = false;
        $scope.BuyTour_Step2 = true;
        CalculateWorldTourAmount();
    }

    //****************************Start SIP**************************************
    $scope.StartSIP_Step1 = true;
    $scope.StartSIP_Step2 = false;
    $scope.StartSIPArray = [];

    $rootScope.SIPClick = function () {



        $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, $scope.Portfolio_Parameter.Risk, 'ChildGoal');
        $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
        //if ($scope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
        //{
        $scope.StartSIP_Step1 = false;
        $scope.StartSIP_Step2 = true;
        $scope.EasySIP_Step1 = false;
        $scope.EasySIP_Step2 = true;
        $scope.ShowDiv("1");
    };


    $scope.show_next = function (id, nextid, bar, typeValue) {
        $scope.StartSIPArray.push({
            "Key": id,
            "Value": typeValue
        });
        if (id == "InvestedYear") {
            $scope.Portfolio_Parameter.EstematedYear = typeValue;
        }
        if (id == "Risk") {
            $scope.Portfolio_Parameter.Risk = typeValue;
        }
        if (id == "Money") {
            $scope.Portfolio_Parameter.TotalMonthlyInvestment = typeValue;
        }
        document.getElementById("Year").style.display = "none";
        document.getElementById("Money").style.display = "none";
        document.getElementById("Risk").style.display = "none";
        //document.getElementById("Investment").style.display = "none";
        document.getElementById("InvestedYear").style.display = "none";
        $("#" + nextid).fadeIn();
        document.getElementById(bar).style.backgroundColor = "rgba(102,0,51,1)";
        if (id == "InvestedYear") {
            $scope.StartSipInvestNowBtn = true;
            $scope.StartSIPClick();
        }
    };

    $scope.show_prev = function (previd, bar) {
        document.getElementById("account_details").style.display = "none";
        document.getElementById("user_details").style.display = "none";
        document.getElementById("qualification").style.display = "none";
        $("#" + previd).fadeIn();
        document.getElementById(bar).style.backgroundColor = "#D8D8D8";
    }


    //****************************Easy SIP**************************************
    $scope.EasySIP_Step1 = true;
    $scope.EasySIP_Step2 = false;
    $scope.StartSipPopup = function () {
        $rootScope.InvestmtntValue = $scope.Investment;
        $mdDialog.show({
            controller: StartSipDetailsCtrl,
            templateUrl: '../../../Webform/Common/Popup/StartSipPopup.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };
    function StartSipDetailsCtrl($scope, $mdDialog) {
        $scope.StartSipPopupLlDb = $rootScope.InvestmtntValue;
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
        $scope.EasySIPClick = function () {
            $scope.Portfolio_Parameter.EstematedYear = $scope.StartSipPopupLlDb.horizone;
            $scope.Portfolio_Parameter.TotalMonthlyInvestment = $scope.StartSipPopupLlDb.MonthllyInvestment;
            $scope.Portfolio_Parameter.Risk = $scope.StartSipPopupLlDb.risk;
            $mdDialog.cancel();
            $rootScope.SIPClick();
        }
    }


    //****************************Retirement Plan**************************************
    $scope.val = "";
    $scope.Retirement_StepMain = true;
    //Show Hide ***************
    $scope.Retirement_Step1 = true;


    //Calculator

    function CalculateRetirementAmount(retirementmonthexp, Retirement_EstmMonthlyExpensePerChgVal, retirementAgeVal, age) {

        //document.getElementById("Retirement_MonthlyExpenseVal").innerHTML = GetRoundingFigure(retirementmonthexp * 1000)[0] + " <span class='fwNormal'>" + GetRoundingFigure(retirementmonthexp * 1000)[2] + "</span>";
        $scope.Portfolio_Parameter.InvestedTillYear = retirementAgeVal - age;
        //var age = document.getElementById("retirement_PresentAgeVal").innerHTML;
        var amt = RequiredRetirementAmount(parseInt(retirementmonthexp) * 1000, parseInt($scope.SIP_Percet_bar.value), parseInt(retirementAgeVal), new Number(age), Retirement_EstmMonthlyExpensePerChgVal);
        //var goalamt = new Number(rounding(GetPrincipalValue(amt, document.getElementById("retirementAgeVal").innerHTML - age, inflationRate), GoalRounding));
        if (Retirement_EstmMonthlyExpensePerChgVal == "") { alert("Please enter Inflation Rate"); return false; }
        if (!isFinite(Retirement_EstmMonthlyExpensePerChgVal)) { alert("Please enter valid rate"); return false; }
        var goalamt = parseInt(rounding(GetPrincipalValue(amt, retirementAgeVal - age, Retirement_EstmMonthlyExpensePerChgVal), GoalRounding));
        RetirementAmount = goalamt;
        $scope.Portfolio_Parameter.Portfolio_RetirementCurrentValue = RetirementAmount;
        //RetirementInflatedAmount = GetFutureValue(goalamt, document.getElementById("retirementAgeVal").innerHTML - age, inflationRate);
        RetirementInflatedAmount = GetFutureValue(goalamt, retirementAgeVal - age, Retirement_EstmMonthlyExpensePerChgVal);
        RetInfAmt = parseInt(RetirementInflatedAmount);
        return addCommas(RetirementInflatedAmount);

    }





    function RequiredRetirementAmount(curamt, chngper, retyear, curage, inflRateRetirement) {
        var riskfreerate = parseFloat('10');
        var lifeExpectancyValue = parseInt('80');
        var amt = parseInt(curamt * 12 * (1 + chngper / 100));
        //var amt = new Number(curamt * 12 * (1 + chngper / 100));
        var YearsToRetire = retyear - curage;
        $scope.Portfolio_Parameter.EstematedYear = YearsToRetire;
        //var infval = (1 + inflationRate / 100);
        var infval = (1 + inflRateRetirement / 100);
        //document.getElementById("inflRateRetirement").value
        var rfrval = (1 + riskfreerate / 100);
        amt = amt * Math.pow(infval, YearsToRetire);
        if (infval != rfrval)
            amt = amt * ((1 - Math.pow(infval / rfrval, (lifeExpectancyValue - retyear))) / (1 - (infval / rfrval)));
        else
            amt = amt * (lifeExpectancyValue - retyear);
        return amt;
    }

    //$scope.InvestNow = function () {

    //};


    //$scope.Portfolio_Parameter = {
    //    Portfolio_Name: "",
    //    Portfolio_CurrentAge: "25",
    //    Portfolio_InflationRate: "7",
    //    Portfolio_RetirementCurrentValue: "",
    //    RetirementTotalMoney: "",
    //    InvestedTillYear: "",
    //    TotalInvestedMoneyByUser: ""

    //};

    $scope.myJson = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",

        legend: {
            layout: "x5",
            position: "50%",
            borderColor: "transparent",
            marker: {
                borderRadius: 10,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v Amount"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "15px",
                textAlpha: 1,
            }
        },
        series: [{
            text: "Total Amount Invested ",
            values: [$scope.total_amount_invested],
            backgroundColor: "#e75410 #e75410",
        }, {
            text: "Expected Amount on Maturity",
            values: [$scope.calulated_Money_SIP],
            backgroundColor: "#007acc #007acc"
        }]
    };
    var checkSliderVal = function () {
        if ($scope.SIP_Money_bar != undefined) {
            $scope.calculate_SIP();

            var elem = document.getElementById("myBar_Home");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }

            $scope.calulated_Money = "Rs. " + $scope.calulated_Money_SIP;
            $scope.myJson.series[0].values[0] = $scope.total_amount_invested;
            $scope.myJson.series[1].values[1] = $scope.calulated_Money_SIP;

        }


    }

    $scope.Portfolio_CalculateRetirement = function () {
        $scope.Retirement_Step1 = false;
        $scope.Retirement_Step2 = true;

        $scope.Portfolio_Parameter.CalculatedTotalMoney = CalculateRetirementAmount($scope.Portfolio_Parameter.Portfolio_MonthlyExpenditure, $scope.Portfolio_Parameter.Portfolio_InflationRate, $scope.SIP_RetireAge.value, $scope.Portfolio_Parameter.Portfolio_CurrentAge);
        $scope.Portfolio_Parameter.TotalInvestedMoneyByUser = (parseInt($scope.SIP_AmountInvestment.value) * parseInt($scope.Portfolio_Parameter.InvestedTillYear)) + "000";

        $scope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt($scope.SIP_AmountInvestment.value) * 1000 / 12;
        let Amount1 = $scope.Portfolio_Parameter.TotalMonthlyInvestment % 1000;
        let Amount2 = 1000 - Amount1;
        $scope.Portfolio_Parameter.TotalMonthlyInvestment = $scope.Portfolio_Parameter.TotalMonthlyInvestment + Amount2;
    };
    $scope.Retirement_Back = function () {

        $scope.Retirement_Step1 = true;
        $scope.Retirement_Step2 = false;
    };
    $scope.SIP_AmountInvestment = {
        value: 5,
        options:
            {
                showSelectionBar: true,
                getSelectionBarColor: function (value) {
                    if (value <= 10)
                        return 'red';
                    if (value <= 25)
                        return 'orange';
                    if (value <= 35)
                        return 'yellow';
                    return '#2AE02A';

                },
                ceil: 100,
                floor: 0,
                showTicks: 5,
                onChange: function () { checkSliderVal() }

            }
    };
    $scope.SIP_RetireAge = {
        value: 45,
        options:
            {
                showSelectionBar: true,
                getSelectionBarColor: function () {
                    return '#2AE02A';
                },
                ceil: 70,
                floor: 0,
                showTicks: 5,
                onChange: function () { checkSliderVal() }

            }
    };
    $scope.SIP_CurrentMonthlyExpndtr = {
        value: 5,
        options:
            {
                showSelectionBar: true,
                getSelectionBarColor: function () {
                    return '#2AE02A';
                },
                ceil: 100,
                floor: 0,
                showTicks: 5,
                onChange: function () { checkSliderVal() }

            }
    };
    $scope.SIP_Percet_bar = {
        value: 7,
        options:
            {
                showSelectionBar: true,
                getSelectionBarColor: function () {
                    return '#2AE02A';
                },
                ceil: 50,
                floor: 0,
                showTicks: 5,
                onChange: function () { checkSliderVal() }

            }
    };


    $scope.selectRow = function (index) {
        $scope.selected = index;
    };
    $scope.rowClass = function (index) {
        return ($scope.selected === index) ? "selected" : "";
    };
    $scope.chartTitle = "Lead Sources";
    $scope.chartWidth = 500;
    $scope.chartHeight = 320;
    $scope.chartData = [
        ['Equity', 63],
        ['Bonds', 12],
        ['Cash', 13],
        ['Others', 12]
    ];

    $scope.Portfolio_InvestNow = function (IncrementFrom) {

        $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.InvestedTillYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, undefined, "Retirement");
        $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
        //if ($scope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
        //{
        $scope.SIP_GOAL_SHOW = false;
        $scope.Retirement_StepMain = false;
        $scope.SIP_GOAL_Final_SHOW = true;
        $scope.ShowDiv("1");




        //        if (IncrementFrom == undefined)
        //        {
        //            var multiplier = 1;
        //            var rog = 10;
        //            var mInvst = parseInt($scope.Portfolio_Parameter.CalculatedTotalMoney) * Number(rog / 100) / ((Math.pow((1 + Number(rog) / 100), (Number($scope.Portfolio_Parameter.EstematedYear))) - 1) * (1 + Number(rog) / 100));

        //            mInvst = mInvst * multiplier;

        //            var oInvst = $scope.Portfolio_Parameter.CalculatedTotalMoney - 0;
        //            mInvst = mInvst.toFixed(0);
        //            var Temp1 = parseInt(mInvst) % 1000;
        //            var Temp2 = 1000 - Temp1;
        //            mInvst = parseInt(mInvst) + Temp2;
        //            //Monthly Investment
        //            mInvst = Math.round(mInvst / 12);
        //            var Temp11 = parseInt(mInvst) % 1000;
        //            var Temp21 = 1000 - Temp11;
        //            mInvst = parseInt(mInvst) + Temp21;
        //            //if (mInvst >= 5000)
        //            //{CalculateMoneyEquityDebt
        //            $scope.Portfolio_Parameter.TotalMonthlyInvestment = mInvst;
        //        }
        //        else
        //        {

        //}

        //        $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($scope.Portfolio_Parameter.EstematedYear, $scope.Portfolio_Parameter.TotalMonthlyInvestment, $scope.Portfolio_Parameter.Risk, 'Retirement');
        //        $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $scope.Portfolio_Parameter.TotalMonthlyInvestment);
        //        //if ($scope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
        //        //{Retirement_Step1
        //        $scope.Retirement_Step1 = false;
        //        $scope.SIP_GOAL_Final_SHOW = true;
        //        $scope.Retirement_Step2 = false;
        //        $scope.Retirement_StepMain = false;
        //        $scope.ShowDiv("1");

    };

}]);