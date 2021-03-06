﻿/// <reference path="../../../Webform/Common/Popup/MutualFundsDetailPopup.html" />
app.controller("MtualFunds.Ctrl", ['$scope', '$rootScope', '$http', 'fileUpload', '$mdDialog', 'FundsService', '$stateParams', '$state', '$localStorage', '$interval', '$timeout',
function ($scope, $rootScope, $http, fileUpload, $mdDialog, FundsService, $stateParams, $state, $localStorage, $interval, $timeout) {
    $rootScope.showFooterView = false;
    $rootScope.Logout = function () {
        $localStorage.LoginStatus = false;
        $rootScope.LoginStatus = false;
        $localStorage.CurrentStatusOfPage = "";
        $localStorage.TempUserDetails = {};
        $rootScope.UserDetails = {};
        $localStorage.LoginStatus = false;
        $localStorage.MutualFundsState = false;
        $localStorage.ChildState = false;
        $state.go('Index');
    };
    var ListEx = {};

    $scope.paragraf = [

        {
            "Equity Large Cap": [
                
                    "Equity Large Cap funds are among the top rated and recommended Mutual Funds in Equity sector. ",
                    "The funds are invested in funds of companies that are well-established and have a good reputation in the market. These companies usually remain immune from short-term market volatility and have sustained revenues from their business operations. ",
                    "These funds are best suited for investors with low-risk appetite and are eyeing for long-term growth oriented investment.  "  
            ],

            "Equity Mid/Small Cap": [
                "Equity Mid/Small Cap companies have relatively low capital from Large cap firms.  ",
                    "Investors with moderately high to aggressive risk prefer to invest in such funds. ",
                    "With risk factor comes the high returns and so we recommend these funds to individuals with adequate risk appetite.  "
            ],
            "Equity Multi Cap": [
                "Equity Multi Cap funds are diversified funds as the funds are divided across market capitalization (Large, Mid, Small Cap). ",
                    "Investors with medium-long time horizon with nominal to moderate risk can invest in such funds. "
            ],
            "Debt Liquid Funds": [
               "Debt liquid (withdraw anytime) funds are Mutual Funds that are least risky in the universe. ",
                   "These funds are invested in safe and secure financial instruments like treasury bills, government securities and bonds with maturities of upto 91 days. ",
                   "The investors get higher returns from Bank savings account and the amount invested also remains liquid without any exit load."
            ],
            "Debt Ultra-Short Funds": [
               "Debt Ultra-Short term funds are simple debt funds that are comparatively a bit more risky than Debt Liquid Funds. ",
                   "The funds in Ultra-Short funds are invested in financial instruments that have the maturity period exceeding 91 days but under one year. ",
                   "They are often traded in the market and hence their rates keep fluctuating.",
                   "Ultra-Short funds are also liquid funds but some funds might charge a nominal exit load if the investor withdraws investment within a stipulated time.",
                   "Investors who want low risk and also liquidity can opt for such funds"
            ],
            "Gilt Funds": [
               "Gilt Funds are invested in financial securities issued by Central and State governments. ",
                   "These are generally high credit rated securities and have lowest risk factor involved. ",
                   "Mostly, the interest rates of these funds remain stable and Investors with ‘No Risk’ choose this category."
            ],
            "Debt Income Funds": [
              "Income funds invest in corporate bonds, government bonds and money market instruments. ",
                  "However,they are highly vulnerable to the changes in interest rates and are suitable for investors who have a long term investment horizon and higher risk taking ability."
                  
            ],
            "Balanced Funds": [
              "Balanced Mutual Funds are invested in both Equity and Debt funds, so that the investments remain safe and there is also capital appreciation.",
                  "Investors with low-moderate risk, eyeing long-term horizon can invest in such funds"

            ],
            "MIP Mutual Funds": [
              "MIP or Monthly Income Plans are debt oriented funds that are invested in both debt and equity markets. ",
                  "These funds shell out regular dividends on monthly, quarterly or yearly basis. However, the dividends are not fixed as the funds are invested in equity markets the returns fluctuate overtime. ",
                  "Investors with conservative mindset can opt for such funds as they shell out regular incomes and are low-risk funds."

            ],
            "Credit Opportunities Mutual Funds": [
              "Credit Opportunities are debt mutual funds that are invested in corporate bonds and securities that have a lower credit rating than AAA ratings. Credit ratings reveal the risk involved in particular securities.",
                  "Lower than AAA rated securities come with some risk, however they give more interest than Government securities. The returns may fluctuate on these funds.",
                  "Investors with a moderate risk appetite may opt for such funds. "

            ],
            "ELSS Mutual Funds ": [
              "ELSS Funds are diversified equity funds which qualify for tax exemption up to a limited amount. You can invest upto 1.5 lakhs and save taxes up to 46350*.",
                  "However, the invested amount remains locked in for the period of three years. Individuals eyeing some tax benefit and have extra corpus to invest may opt for these funds. "

            ],
        }
    ];


    $scope.InvestmentList = [];
    $scope.ourGrouper = 'MFtype';
    $scope.SIPGoalStructureDate =

       [
                {
                    "Rank": "1",
                    Scheme_ID: "2852",
                    "SchemeName": "SBI Bluechip Fund - Growth",
                    "ISIN": "INF200K01180",
                    "BSESchmecode": "103G",
                    "MinInvst": "500",
                    "MFtype": "EQ large cap",
                    "Minsip": "12",
                    "date": "1,5,10,15,20,25,30",
                    "multiplier": "100",
                    "Discription": [

                           "Equity Large Cap funds are among the top rated and recommended Mutual Funds in Equity sector. "

                  ,

                     "The funds are invested in funds of companies that are well-established and have a good reputation in the market. These companies usually remain immune from short-term market volatility and have sustained revenues from their business operations."

                  ,

                   "These funds are best suited for investors with low-risk appetite and are eyeing for long-term growth oriented investment.  "

                    ]
                },
                  {
                      "Rank": "2",
                      Scheme_ID: "34489",
                      "SchemeName": "Quantum Long-Term Equity Fund - Growth",
                      "ISIN": "INF082J01036",
                      "BSESchmecode": "QMFEF-GP",
                      "MinInvst": "500",
                      "MFtype": "EQ large cap",
                      "Minsip": "12",
                      "date": "5,7,15,21,25,28",
                      "multiplier": "500",
                      "Discription": [

                            "Equity Large Cap funds are among the top rated and recommended Mutual Funds in Equity sector. "

                   ,

                      "The funds are invested in funds of companies that are well-established and have a good reputation in the market. These companies usually remain immune from short-term market volatility and have sustained revenues from their business operations."

                   ,

                    "These funds are best suited for investors with low-risk appetite and are eyeing for long-term growth oriented investment.  "

                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "1961",
                      "SchemeName": "Tata Equity P/E Fund - Reg - Growth",
                      "ISIN": "INF277K01451",
                      "BSESchmecode": "EPEG",
                      "MinInvst": "500",
                      "MFtype": "EQ large cap",
                      "Minsip": "12",
                      "date": "1-30 all days",
                      "multiplier": "1",
                      "Discription": [

                           "Equity Large Cap funds are among the top rated and recommended Mutual Funds in Equity sector. "

                  ,

                     "The funds are invested in funds of companies that are well-established and have a good reputation in the market. These companies usually remain immune from short-term market volatility and have sustained revenues from their business operations."

                  ,

                   "These funds are best suited for investors with low-risk appetite and are eyeing for long-term growth oriented investment.  "

                      ]
                  },
                  {
                      "Rank": "4",
                      Scheme_ID: "1509",
                      "SchemeName": "Templeton India Growth Fund - Growth",
                      "ISIN": "INF090I01296",
                      "BSESchmecode": "FTIGF-GR",
                      "MinInvst": "500",
                      "MFtype": "EQ large cap",
                      "Minsip": "12",
                      "date": "1,7,10,20,25",
                      "multiplier": "1",
                      "Discription": [

                           "Equity Large Cap funds are among the top rated and recommended Mutual Funds in Equity sector. "

                  ,

                     "The funds are invested in funds of companies that are well-established and have a good reputation in the market. These companies usually remain immune from short-term market volatility and have sustained revenues from their business operations."

                  ,

                   "These funds are best suited for investors with low-risk appetite and are eyeing for long-term growth oriented investment.  "

                      ]
                  },
                  {
                      "Rank": "5",
                      Scheme_ID: "2559",
                      "SchemeName": "Birla Sun Life India GenNext Fund - Growth",
                      "ISIN": "INF209K01447",
                      "BSESchmecode": "B291G",
                      "MinInvst": "1000",
                      "MFtype": "EQ large cap",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [

                             "Equity Large Cap funds are among the top rated and recommended Mutual Funds in Equity sector. "

                    ,

                       "The funds are invested in funds of companies that are well-established and have a good reputation in the market. These companies usually remain immune from short-term market volatility and have sustained revenues from their business operations."

                    ,

                     "These funds are best suited for investors with low-risk appetite and are eyeing for long-term growth oriented investment.  "

                      ]
                  },
                  {
                      "Rank": "6",
                      Scheme_ID: "11260",
                      "SchemeName": "DSP BlackRock Focus 25 Fund - Growth",
                      "ISIN": "INF740K01532",
                      "BSESchmecode": "DSP349-GR",
                      "MinInvst": "500",
                      "MFtype": "EQ large cap",
                      "Minsip": "12",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [

                           "Equity Large Cap funds are among the top rated and recommended Mutual Funds in Equity sector. "

                  ,

                     "The funds are invested in funds of companies that are well-established and have a good reputation in the market. These companies usually remain immune from short-term market volatility and have sustained revenues from their business operations."

                  ,

                   "These funds are best suited for investors with low-risk appetite and are eyeing for long-term growth oriented investment.  "

                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "2045",
                      "SchemeName": "ICICI Prudential Value Discovery Fund - Growth",
                      "ISIN": "INF109K01AF8",
                      "BSESchmecode": "DFG",
                      "MinInvst": "1000",
                      "MFtype": "Equity Multi Cap",
                      "Minsip": "6",
                      "date": "1,7,10,14,15,20,25",
                      "multiplier": "1",
                      "Discription": [
                                 "Equity Multi Cap funds are diversified funds as the funds are divided across market capitalization (Large, Mid, Small Cap). ",
                    "Investors with medium-long time horizon with nominal to moderate risk can invest in such funds. "
                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "5120",
                      "SchemeName": "Franklin India High Growth Companies Fund  - Growth",
                      "ISIN": "INF090I01981",
                      "BSESchmecode": "F273-GR",
                      "MinInvst": "500",
                      "MFtype": "Equity Multi Cap",
                      "Minsip": "12",
                      "date": "1,7,10,20,25",
                      "multiplier": "1",
                      "Discription": [
                                 "Equity Multi Cap funds are diversified funds as the funds are divided across market capitalization (Large, Mid, Small Cap). ",
                    "Investors with medium-long time horizon with nominal to moderate risk can invest in such funds. "
                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "10876",
                      "SchemeName": "L&T India Value Fund - Reg - Growth",
                      "ISIN": "INF677K01023",
                      "BSESchmecode": "FIVFG",
                      "MinInvst": "500",
                      "MFtype": "Equity Multi Cap",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "1",
                      "Discription": [
                                 "Equity Multi Cap funds are diversified funds as the funds are divided across market capitalization (Large, Mid, Small Cap). ",
                    "Investors with medium-long time horizon with nominal to moderate risk can invest in such funds. "
                      ]
                  },
                  {
                      "Rank": "4",
                      Scheme_ID: "2655",
                      "SchemeName": "SBI Magnum Multi Cap Fund - Growth",
                      "ISIN": "INF200K01222",
                      "BSESchmecode": "099G",
                      "MinInvst": "500",
                      "MFtype": "Equity Multi Cap",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "1",
                      "Discription": [
                                 "Equity Multi Cap funds are diversified funds as the funds are divided across market capitalization (Large, Mid, Small Cap). ",
                    "Investors with medium-long time horizon with nominal to moderate risk can invest in such funds. "
                      ]
                  },
                  {
                      "Rank": "5",
                      Scheme_ID: "10659",
                      "SchemeName": "Kotak Select Focus Fund - Reg - Growth",
                      "ISIN": "INF174K01336",
                      "BSESchmecode": "K168SF-GR",
                      "MinInvst": "500",
                      "MFtype": "Equity Multi Cap",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [
                                 "Equity Multi Cap funds are diversified funds as the funds are divided across market capitalization (Large, Mid, Small Cap). ",
                    "Investors with medium-long time horizon with nominal to moderate risk can invest in such funds. "
                      ]
                  },
                  {
                      "Rank": "6",
                      Scheme_ID: "9",
                      "SchemeName": "Birla Sun Life Equity Fund - Growth",
                      "ISIN": "INF209K01AJ8",
                      "BSESchmecode": "51",
                      "MinInvst": "1000",
                      "MFtype": "Equity Multi Cap",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [
                                 "Equity Multi Cap funds are diversified funds as the funds are divided across market capitalization (Large, Mid, Small Cap). ",
                    "Investors with medium-long time horizon with nominal to moderate risk can invest in such funds. "
                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "4929",
                      "SchemeName": "DSP BlackRock Micro Cap Fund - Reg - Growth",
                      "ISIN": "INF740K01797",
                      "BSESchmecode": "DSP157-GR",
                      "MinInvst": "500",
                      "MFtype": "Equity Mid/Small Cap",
                      "Minsip": "12",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [
                "Equity Mid/Small Cap companies have relatively low capital from Large cap firms.  ",
                    "Investors with moderately high to aggressive risk prefer to invest in such funds. ",
                    "With risk factor comes the high returns and so we recommend these funds to individuals with adequate risk appetite.  "
                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "2772",
                      "SchemeName": "Franklin India Smaller Companies Fund - Growth",
                      "ISIN": "INF090I01569",
                      "BSESchmecode": "F219-GR",
                      "MinInvst": "500",
                      "MFtype": "Equity Mid/Small Cap",
                      "Minsip": "12",
                      "date": "1,7,10,20,25",
                      "multiplier": "1",
                      "Discription": [
                "Equity Mid/Small Cap companies have relatively low capital from Large cap firms.  ",
                    "Investors with moderately high to aggressive risk prefer to invest in such funds. ",
                    "With risk factor comes the high returns and so we recommend these funds to individuals with adequate risk appetite.  "
                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "4160",
                      "SchemeName": "Kotak Emerging Equity Scheme - Reg - Growth",
                      "ISIN": "INF174K01DS9",
                      "BSESchmecode": "K123-GR",
                      "MinInvst": "1000",
                      "MFtype": "Equity Mid/Small Cap",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [
                "Equity Mid/Small Cap companies have relatively low capital from Large cap firms.  ",
                    "Investors with moderately high to aggressive risk prefer to invest in such funds. ",
                    "With risk factor comes the high returns and so we recommend these funds to individuals with adequate risk appetite.  "
                      ]
                  },
                  {
                      "Rank": "4",
                      Scheme_ID: "2019",
                      "SchemeName": "L&T Midcap Fund - Reg - Growth",
                      "ISIN": "INF917K01254",
                      "BSESchmecode": "LT17-GR",
                      "MinInvst": "1000",
                      "MFtype": "Equity Mid/Small Cap",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "1",
                      "Discription": [
                "Equity Mid/Small Cap companies have relatively low capital from Large cap firms.  ",
                    "Investors with moderately high to aggressive risk prefer to invest in such funds. ",
                    "With risk factor comes the high returns and so we recommend these funds to individuals with adequate risk appetite.  "
                      ]
                  },
                  {
                      "Rank": "5",
                      Scheme_ID: "11293",
                      "SchemeName": "Mirae Asset Emerging Bluechip Fund - Growth",
                      "ISIN": "INF769K01101",
                      "BSESchmecode": "MAFEBRG-GR",
                      "MinInvst": "1000",
                      "MFtype": "Equity Mid/Small Cap",
                      "Minsip": "6",
                      "date": "1,10,20,25,28",
                      "multiplier": "1",
                      "Discription": [
                "Equity Mid/Small Cap companies have relatively low capital from Large cap firms.  ",
                    "Investors with moderately high to aggressive risk prefer to invest in such funds. ",
                    "With risk factor comes the high returns and so we recommend these funds to individuals with adequate risk appetite.  "
                      ]
                  },
                  {
                      "Rank": "6",
                      Scheme_ID: "9490",
                      "SchemeName": "Principal Emerging Bluechip Fund - Growth",
                      "ISIN": "INF173K01155",
                      "BSESchmecode": "PCEBRGG-GR",
                      "MinInvst": "2000",
                      "MFtype": "Equity Mid/Small Cap",
                      "Minsip": "6",
                      "date": "1,5,10,20",
                      "multiplier": "1",
                      "Discription": [
                "Equity Mid/Small Cap companies have relatively low capital from Large cap firms.  ",
                    "Investors with moderately high to aggressive risk prefer to invest in such funds. ",
                    "With risk factor comes the high returns and so we recommend these funds to individuals with adequate risk appetite.  "
                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "956",
                      "SchemeName": "Baroda Pioneer Liquid Fund - Plan B - Growth",
                      "ISIN": "INF955L01575",
                      "BSESchmecode": "BO114-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt Liquid Funds",
                      "Minsip": "12",
                      "date": "1,10,15,25",
                      "multiplier": "1",
                      "Discription": [
               "Debt liquid (withdraw anytime) funds are Mutual Funds that are least risky in the universe. ",
                   "These funds are invested in safe and secure financial instruments like treasury bills, government securities and bonds with maturities of upto 91 days. ",
                   "The investors get higher returns from Bank savings account and the amount invested also remains liquid without any exit load."
                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "238",
                      "SchemeName": "DSP BlackRock Treasury Bill Fund - Direct Plan - Growth",
                      "ISIN": "INF740K01714",
                      "BSESchmecode": "DS723-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt Liquid Funds",
                      "Minsip": "12",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [
               "Debt liquid (withdraw anytime) funds are Mutual Funds that are least risky in the universe. ",
                   "These funds are invested in safe and secure financial instruments like treasury bills, government securities and bonds with maturities of upto 91 days. ",
                   "The investors get higher returns from Bank savings account and the amount invested also remains liquid without any exit load."
                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "5863",
                      "SchemeName": "DHFL Pramerica Insta Cash Plus Fund - Growth",
                      "ISIN": "INF223J01BP6",
                      "BSESchmecode": "DWSCFSG-GR",
                      "MinInvst": "1000",
                      "MFtype": "Debt Liquid Funds",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "100",
                      "Discription": [
               "Debt liquid (withdraw anytime) funds are Mutual Funds that are least risky in the universe. ",
                   "These funds are invested in safe and secure financial instruments like treasury bills, government securities and bonds with maturities of upto 91 days. ",
                   "The investors get higher returns from Bank savings account and the amount invested also remains liquid without any exit load."
                      ]
                  },
                  {
                      "Rank": "4",
                      Scheme_ID: "2161",
                      "SchemeName": "Principal Cash Mgmt Fund - Growth",
                      "ISIN": "INF173K01DA9",
                      "BSESchmecode": "PCLFPGG-GR",
                      "MinInvst": "2000",
                      "MFtype": "Debt Liquid Funds",
                      "Minsip": "6",
                      "date": "1,5,10,20,25",
                      "multiplier": "1",
                      "Discription": [
               "Debt liquid (withdraw anytime) funds are Mutual Funds that are least risky in the universe. ",
                   "These funds are invested in safe and secure financial instruments like treasury bills, government securities and bonds with maturities of upto 91 days. ",
                   "The investors get higher returns from Bank savings account and the amount invested also remains liquid without any exit load."
                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "11563",
                      "SchemeName": "IDBI ULTRA SHORT TERM FUND REGULAR PLAN - GROWTH",
                      "ISIN": "INF397L01745",
                      "BSESchmecode": "IDBI-USGP-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt/ ultra short",
                      "Minsip": "12",
                      "date": "5,15,25",
                      "multiplier": "1",
                      "Discription": [
               "Debt Ultra-Short term funds are simple debt funds that are comparatively a bit more risky than Debt Liquid Funds. ",
                   "The funds in Ultra-Short funds are invested in financial instruments that have the maturity period exceeding 91 days but under one year. ",
                   "They are often traded in the market and hence their rates keep fluctuating.",
                   "Ultra-Short funds are also liquid funds but some funds might charge a nominal exit load if the investor withdraws investment within a stipulated time.",
                   "Investors who want low risk and also liquidity can opt for such funds"
                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "1388",
                      "SchemeName": "L&T ULTRA SHORT TERM FUND - GROWTH",
                      "ISIN": "INF917K01AS7",
                      "BSESchmecode": "LT122-GR",
                      "MinInvst": "1000",
                      "MFtype": "Debt/ ultra short",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "1",
                      "Discription": [
               "Debt Ultra-Short term funds are simple debt funds that are comparatively a bit more risky than Debt Liquid Funds. ",
                   "The funds in Ultra-Short funds are invested in financial instruments that have the maturity period exceeding 91 days but under one year. ",
                   "They are often traded in the market and hence their rates keep fluctuating.",
                   "Ultra-Short funds are also liquid funds but some funds might charge a nominal exit load if the investor withdraws investment within a stipulated time.",
                   "Investors who want low risk and also liquidity can opt for such funds"
                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "10586",
                      "SchemeName": "ICICI Prudential Ultra Short Term - Growth",
                      "ISIN": "INF109K01CQ1",
                      "BSESchmecode": "ICICI1477-GR",
                      "MinInvst": "1000",
                      "MFtype": "Debt/ ultra short",
                      "Minsip": "6",
                      "date": "1,7,10,15,20,25",
                      "multiplier": "1",
                      "Discription": [
               "Debt Ultra-Short term funds are simple debt funds that are comparatively a bit more risky than Debt Liquid Funds. ",
                   "The funds in Ultra-Short funds are invested in financial instruments that have the maturity period exceeding 91 days but under one year. ",
                   "They are often traded in the market and hence their rates keep fluctuating.",
                   "Ultra-Short funds are also liquid funds but some funds might charge a nominal exit load if the investor withdraws investment within a stipulated time.",
                   "Investors who want low risk and also liquidity can opt for such funds"
                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "1149",
                      "SchemeName": "ICICI Prudential Flexible Income - Growth",
                      "ISIN": "INF109K01746",
                      "BSESchmecode": "FLEXI",
                      "MinInvst": "1000",
                      "MFtype": "Debt/Income",
                      "Minsip": "6",
                      "date": "1,7,10,15,20,25",
                      "multiplier": "1",
                      "Discription": [
              "Income funds invest in corporate bonds, government bonds and money market instruments. ",
                  "However,they are highly vulnerable to the changes in interest rates and are suitable for investors who have a long term investment horizon and higher risk taking ability."

                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "2180",
                      "SchemeName": "Birla Sun Life Dynamic Bond Fund - Ret - DAP",
                      "ISIN": "INF209K01793",
                      "BSESchmecode": "B321G",
                      "MinInvst": "1000",
                      "MFtype": "Debt/Income",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [
              "Income funds invest in corporate bonds, government bonds and money market instruments. ",
                  "However,they are highly vulnerable to the changes in interest rates and are suitable for investors who have a long term investment horizon and higher risk taking ability."

                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "0",
                      "SchemeName": "Quantum Dynamic Bond Fund - Growth",
                      "ISIN": "INF082J01176",
                      "BSESchmecode": "QDBGP-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt/Income",
                      "Minsip": "6",
                      "date": "5,7",
                      "multiplier": "1",
                      "Discription": [
              "Income funds invest in corporate bonds, government bonds and money market instruments. ",
                  "However,they are highly vulnerable to the changes in interest rates and are suitable for investors who have a long term investment horizon and higher risk taking ability."

                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "9667",
                      "SchemeName": "DHFL Pramerica Gilt Fund - Growth",
                      "ISIN": "INF223J01AQ6",
                      "BSESchmecode": "DWGFGP-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt/ GILT",
                      "Minsip": "10",
                      "date": "1,7,10,15,25",
                      "multiplier": "1",
                      "Discription": [
               "Gilt Funds are invested in financial securities issued by Central and State governments. ",
                   "These are generally high credit rated securities and have lowest risk factor involved. ",
                   "Mostly, the interest rates of these funds remain stable and Investors with ‘No Risk’ choose this category."
                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "19146",
                      "SchemeName": "BNP Paribas G Sec Fund - Growth",
                      "ISIN": "INF251K01JF9",
                      "BSESchmecode": "BNP614G-GR",
                      "MinInvst": "500",
                      "MFtype": "Debt/ GILT",
                      "Minsip": "10",
                      "date": "1,7,10,15,25",
                      "multiplier": "1",
                      "Discription": [
               "Gilt Funds are invested in financial securities issued by Central and State governments. ",
                   "These are generally high credit rated securities and have lowest risk factor involved. ",
                   "Mostly, the interest rates of these funds remain stable and Investors with ‘No Risk’ choose this category."
                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "788",
                      "SchemeName": "HDFC GILT FUND  - LONG TERM PLAN - GROWTH OPTION",
                      "ISIN": "INF179K01756",
                      "BSESchmecode": "GLG",
                      "MinInvst": "1000",
                      "MFtype": "Debt/ GILT",
                      "Minsip": "10",
                      "date": "1,7,10,21, 25, 28",
                      "multiplier": "1",
                      "Discription": [
               "Gilt Funds are invested in financial securities issued by Central and State governments. ",
                   "These are generally high credit rated securities and have lowest risk factor involved. ",
                   "Mostly, the interest rates of these funds remain stable and Investors with ‘No Risk’ choose this category."
                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "599",
                      "SchemeName": "HDFC Balanced Fund - Growth",
                      "ISIN": "INF179K01392",
                      "BSESchmecode": "BFG",
                      "MinInvst": "1000",
                      "MFtype": "Balanced",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "100",
                      "Discription": [
              "Balanced Mutual Funds are invested in both Equity and Debt funds, so that the investments remain safe and there is also capital appreciation.",
                  "Investors with low-moderate risk, eyeing long-term horizon can invest in such funds"

                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "76",
                      "SchemeName": "Franklin India Balanced Fund - Growth",
                      "ISIN": "INF090I01817",
                      "BSESchmecode": "F045-GR",
                      "MinInvst": "500",
                      "MFtype": "Balanced",
                      "Minsip": "12",
                      "date": "1,7,10,20,25",
                      "multiplier": "1",
                      "Discription": [
              "Balanced Mutual Funds are invested in both Equity and Debt funds, so that the investments remain safe and there is also capital appreciation.",
                  "Investors with low-moderate risk, eyeing long-term horizon can invest in such funds"

                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "1599",
                      "SchemeName": "HDFC MF MONTHLY INCOME PLAN - LONG TERM PLAN - GROWTH  OPTION",
                      "ISIN": "INF179K01AE4",
                      "BSESchmecode": "MILTG",
                      "MinInvst": "1000",
                      "MFtype": "MIP",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "100",
                      "Discription": [
              "MIP or Monthly Income Plans are debt oriented funds that are invested in both debt and equity markets. ",
                  "These funds shell out regular dividends on monthly, quarterly or yearly basis. However, the dividends are not fixed as the funds are invested in equity markets the returns fluctuate overtime. ",
                  "Investors with conservative mindset can opt for such funds as they shell out regular incomes and are low-risk funds."

                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "0",
                      "SchemeName": "Birla Sun Life MIP II - Savings 5 - Reg - Growth",
                      "ISIN": "INF209K01XE1",
                      "BSESchmecode": "BS312GZ-GR",
                      "MinInvst": "1000",
                      "MFtype": "MIP",
                      "Minsip": "6",
                      "date": "1,7,10,15,20,28",
                      "multiplier": "1",
                      "Discription": [
              "MIP or Monthly Income Plans are debt oriented funds that are invested in both debt and equity markets. ",
                  "These funds shell out regular dividends on monthly, quarterly or yearly basis. However, the dividends are not fixed as the funds are invested in equity markets the returns fluctuate overtime. ",
                  "Investors with conservative mindset can opt for such funds as they shell out regular incomes and are low-risk funds."

                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "2030",
                      "SchemeName": "SBI Regular Savings Fund - Growth",
                      "ISIN": "INF200K01636",
                      "BSESchmecode": "079B",
                      "MinInvst": "1000",
                      "MFtype": "MIP",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "100",
                      "Discription": [
              "MIP or Monthly Income Plans are debt oriented funds that are invested in both debt and equity markets. ",
                  "These funds shell out regular dividends on monthly, quarterly or yearly basis. However, the dividends are not fixed as the funds are invested in equity markets the returns fluctuate overtime. ",
                  "Investors with conservative mindset can opt for such funds as they shell out regular incomes and are low-risk funds."

                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "25439",
                      "SchemeName": "HDFC Corporate Debt Opportunities Fund",
                      "ISIN": "INF179KA1GC0",
                      "BSESchmecode": "CDOGR-GR",
                      "MinInvst": "500",
                      "MFtype": "Credit Opportunities",
                      "Minsip": "12",
                      "date": "1,5,15,20,25",
                      "multiplier": "100",
                      "Discription": [
              "Credit Opportunities are debt mutual funds that are invested in corporate bonds and securities that have a lower credit rating than AAA ratings. Credit ratings reveal the risk involved in particular securities.",
                  "Lower than AAA rated securities come with some risk, however they give more interest than Government securities. The returns may fluctuate on these funds.",
                  "Investors with a moderate risk appetite may opt for such funds. "

                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "11238",
                      "SchemeName": "Kotak Income Opportunities Fund",
                      "ISIN": "INF174K01DY7",
                      "BSESchmecode": "K190-GR",
                      "MinInvst": "1000",
                      "MFtype": "Credit Opportunities",
                      "Minsip": "6",
                      "date": "1,7,14,21,25",
                      "multiplier": "1",
                      "Discription": [
              "Credit Opportunities are debt mutual funds that are invested in corporate bonds and securities that have a lower credit rating than AAA ratings. Credit ratings reveal the risk involved in particular securities.",
                  "Lower than AAA rated securities come with some risk, however they give more interest than Government securities. The returns may fluctuate on these funds.",
                  "Investors with a moderate risk appetite may opt for such funds. "

                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "2032",
                      "SchemeName": "SBI Corporate Bond Fund",
                      "ISIN": "INF200K01685",
                      "BSESchmecode": "080B",
                      "MinInvst": "500",
                      "MFtype": "Credit Opportunities",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25,30",
                      "multiplier": "100",
                      "Discription": [
              "Credit Opportunities are debt mutual funds that are invested in corporate bonds and securities that have a lower credit rating than AAA ratings. Credit ratings reveal the risk involved in particular securities.",
                  "Lower than AAA rated securities come with some risk, however they give more interest than Government securities. The returns may fluctuate on these funds.",
                  "Investors with a moderate risk appetite may opt for such funds. "

                      ]
                  },
                  {
                      "Rank": "4",
                      Scheme_ID: "30193",
                      "SchemeName": "Birla Sun Life Corporate Bond Fund",
                      "ISIN": "INF209KA1K47",
                      "BSESchmecode": "BL380B-GR",
                      "MinInvst": "1000",
                      "MFtype": "Credit Opportunities",
                      "Minsip": "6",
                      "date": "1,7,15,20,28",
                      "multiplier": "1",
                      "Discription": [
              "Credit Opportunities are debt mutual funds that are invested in corporate bonds and securities that have a lower credit rating than AAA ratings. Credit ratings reveal the risk involved in particular securities.",
                  "Lower than AAA rated securities come with some risk, however they give more interest than Government securities. The returns may fluctuate on these funds.",
                  "Investors with a moderate risk appetite may opt for such funds. "

                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "561",
                      "SchemeName": "Franklin India Taxshield - Growth",
                      "ISIN": "INF090I01775",
                      "BSESchmecode": "034-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,10,20,25",
                      "multiplier": "500",
                      "Discription": [
              "ELSS Funds are diversified equity funds which qualify for tax exemption up to a limited amount. You can invest upto 1.5 lakhs and save taxes up to 46350*.",
                  "However, the invested amount remains locked in for the period of three years. Individuals eyeing some tax benefit and have extra corpus to invest may opt for these funds. "

                      ]
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "10915",
                      "SchemeName": "Axis Long Term Equity Fund - Growth",
                      "ISIN": "INF846K01131",
                      "BSESchmecode": "AXFTSGP-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1-30 all days",
                      "multiplier": "500",
                      "Discription": [
              "ELSS Funds are diversified equity funds which qualify for tax exemption up to a limited amount. You can invest upto 1.5 lakhs and save taxes up to 46350*.",
                  "However, the invested amount remains locked in for the period of three years. Individuals eyeing some tax benefit and have extra corpus to invest may opt for these funds. "

                      ]
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "7324",
                      "SchemeName": "Birla Sun Life Tax Relief 96 - Growth",
                      "ISIN": "INF209K01108",
                      "BSESchmecode": "02G",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,10,14,15,21,20,28",
                      "multiplier": "1",
                      "Discription": [
              "ELSS Funds are diversified equity funds which qualify for tax exemption up to a limited amount. You can invest upto 1.5 lakhs and save taxes up to 46350*.",
                  "However, the invested amount remains locked in for the period of three years. Individuals eyeing some tax benefit and have extra corpus to invest may opt for these funds. "

                      ]
                  },
                  {
                      "Rank": "4",
                      Scheme_ID: "119",
                      "SchemeName": "ICICI Prudential Long Term Equity Fund (Tax Saving) - Reg - Growth",
                      "ISIN": "INF109K01464",
                      "BSESchmecode": "1",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,15,20,28",
                      "multiplier": "1",
                      "Discription": [
              "ELSS Funds are diversified equity funds which qualify for tax exemption up to a limited amount. You can invest upto 1.5 lakhs and save taxes up to 46350*.",
                  "However, the invested amount remains locked in for the period of three years. Individuals eyeing some tax benefit and have extra corpus to invest may opt for these funds. "

                      ]
                  },
                  {
                      "Rank": "5",
                      Scheme_ID: "639",
                      "SchemeName": "HDFC TAXSAVER - GROWTH OPTION",
                      "ISIN": "INF179K01BB8",
                      "BSESchmecode": "32",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "12",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "500",
                      "Discription": [
              "ELSS Funds are diversified equity funds which qualify for tax exemption up to a limited amount. You can invest upto 1.5 lakhs and save taxes up to 46350*.",
                  "However, the invested amount remains locked in for the period of three years. Individuals eyeing some tax benefit and have extra corpus to invest may opt for these funds. "

                      ]
                  },
                  {
                      "Rank": "6",
                      Scheme_ID: "449",
                      "SchemeName": "LIC MF Tax Plan - Growth",
                      "ISIN": "INF767K01956",
                      "BSESchmecode": "LCTPGP-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "12",
                      "date": "1,7,10,15,25",
                      "multiplier": "500",
                      "Discription": [
              "ELSS Funds are diversified equity funds which qualify for tax exemption up to a limited amount. You can invest upto 1.5 lakhs and save taxes up to 46350*.",
                  "However, the invested amount remains locked in for the period of three years. Individuals eyeing some tax benefit and have extra corpus to invest may opt for these funds. "

                      ]
                  },
                  {
                      "Rank": "7",
                      Scheme_ID: "2707",
                      "SchemeName": "KOTAK TAX SAVER-GROWTH",
                      "ISIN": "INF174K01369",
                      "BSESchmecode": "K144TS-GR",
                      "MinInvst": "500",
                      "MFtype": "ELSS",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21,25,28",
                      "multiplier": "500",
                      "Discription": [
              "ELSS Funds are diversified equity funds which qualify for tax exemption up to a limited amount. You can invest upto 1.5 lakhs and save taxes up to 46350*.",
                  "However, the invested amount remains locked in for the period of three years. Individuals eyeing some tax benefit and have extra corpus to invest may opt for these funds. "

                      ]
                  },
                  {
                      "Rank": "1",
                      Scheme_ID: "14964",
                      "SchemeName": "Canara Robeco Gold Savings FundDirect GrowthGrowth",
                      "ISIN": "INF760K01BW1",
                      "BSESchmecode": "CAGSDG-GR",
                      "MinInvst": "500",
                      "MFtype": "Gold",
                      "Minsip": "6",
                      "date": "1,5,15,20,25",
                      "multiplier": "500",
                      "Discription": []
                  },
                  {
                      "Rank": "2",
                      Scheme_ID: "5467",
                      "SchemeName": "DSP BLACKROCK WORLD GOLD FUND - REGULAR PLAN - GROWTH",
                      "ISIN": "INF740K01250",
                      "BSESchmecode": "DSP179-GR",
                      "MinInvst": "500",
                      "MFtype": "Gold",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21,25,28",
                      "multiplier": "1",
                      "Discription": []
                  },
                  {
                      "Rank": "3",
                      Scheme_ID: "14246",
                      "SchemeName": "Birla Sun Life Gold Fund Growth",
                      "ISIN": "INF209K01PF4",
                      "BSESchmecode": "BSL916G-GR",
                      "MinInvst": "1000",
                      "MFtype": "Gold",
                      "Minsip": "6",
                      "date": "1,7,10,14,20,21,25,28",
                      "multiplier": "1",
                      "Discription": []
                  },
                  {
                      "Rank": "4",
                      Scheme_ID: "13300",
                      "SchemeName": "ICICI Prudential Regular Gold Savings Fund Growth",
                      "ISIN": "INF109K01TK8",
                      "BSESchmecode": "ICICI1815-GR",
                      "MinInvst": "1000",
                      "MFtype": "Gold",
                      "Minsip": "6",
                      "date": "1,5,10,15,20,25",
                      "multiplier": "1",
                      "Discription": []
                  }
       ]

    $scope.groups = _.groupBy($scope.SIPGoalStructureDate, "MFtype");
    console.log($scope.groups);

    $scope.ElssList = [{
        "Rank": "1",
        Scheme_ID: "561",
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
                      Scheme_ID: "10915",
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
                      Scheme_ID: "7324",
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
                      Scheme_ID: "119",
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
                      Scheme_ID: "639",
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
                      Scheme_ID: "449",
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
                      Scheme_ID: "2707",
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
        $scope.InvestmentList = [];
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
        $localStorage.POstJson.InvestmentList = $scope.InvestmentList;
        $localStorage.POstJson.User_ID = $localStorage.TempUserDetails.LoginID;
        $localStorage.POstJson.userPortfolio.EstimatedTotalSIPAmt = $localStorage.SchemeAmount;
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
        $rootScope.UserDetails = $localStorage.TempUserDetails;
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

    function InvestorfundaMessageDetails($scope, $mdDialog, $localStorage,$rootScope) {
        $scope.InvestorFundaMsg = {
            MessageContent: "",
            Header: ""
        };
        $scope.showSchemeListStatus = true;
        $scope.FinalSchemelists = [
            {
                "SchemeName": $localStorage.CurrentScheme.SchemeName,
                "Amount": $localStorage.SchemeAmount
            }
        ]
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
            if ($scope.showSchemeListStatus)
            {
                $scope.showSchemeListStatus = false;
            }
            else {
                $rootScope.InsertPlanForMutuals();
            }
            
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
        if (Scheme_ID != "0")
        {
            $localStorage.Scheme_ID = Scheme_ID;
            $state.go('MutualFunds');
        }
        else
        {
            alert("! Do not have details for this scheme");
        }
        
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
    function findWithAttr(array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }
    $scope.InvestLumpsum = function (index, Page, Type, Amount, From, BseCode) {
       

        if (index != undefined)
        {
            if (!$localStorage.FromLogin)
            {
                $localStorage.CurrentScheme = {
                    ISIN: "",
                    SchemeName: "",
                    mf_cocode: ""
                };
            }

            $localStorage.FromLogin = false;

            
            
        }
      
        var tesmp = "";
        if (Page != undefined) {
            if (From == "Compare")
            {
                tesmp = Amount;
            }
            else {
                tesmp = document.getElementById(index+"Amount").value;
            }
            
        }
        else {
            tesmp = "";
        }
        if (tesmp != "" || ($localStorage.SchemeAmount != undefined && $localStorage.SchemeAmount != "")) {
            var indexOfIsin = $scope.FundsList.map(function (obj, indx) {
                if (obj.ISIN == index) {
                    return indx;
                }
            });
            indexOfIsin = indexOfIsin.filter(function (element) {
                return element !== undefined;
            });
            if (Page != undefined) {
              
                if (BseCode != undefined) 
                {
                    if ($state.current.name == "recommonded")
                    {

                        
                        var indexVal = findWithAttr($scope.SIPGoalStructureDate,'BSESchmecode', BseCode);
                        $localStorage.CurrentScheme.mf_cocode = $scope.SIPGoalStructureDate[indexVal].BSESchmecode;
                        $localStorage.CurrentScheme.ISIN = $scope.SIPGoalStructureDate[indexVal].ISIN;
                        $localStorage.CurrentScheme.SchemeName = $scope.SIPGoalStructureDate[indexVal].SchemeName;
                       
                    }
                    else {
                        $localStorage.CurrentScheme.mf_cocode = BseCode;
                    }
                    
                   
                }
                else {
                    
                    $localStorage.CurrentScheme.mf_cocode = $scope.FundsList[indexOfIsin[0]].mf_cocode;
                    $localStorage.CurrentScheme.ISIN = $scope.FundsList[indexOfIsin[0]].ISIN;
                    $localStorage.CurrentScheme.SchemeName = $scope.FundsList[indexOfIsin[0]].SchemeName;
                 
                }
               
                $localStorage.IndexCurrentCode = index;
                if (From == "Compare") {
                    $localStorage.SchemeAmount = Amount;
                }
                else {
                    $localStorage.SchemeAmount = document.getElementById(index + "Amount").value;
                }
                
            }
            else {
                //document.getElementById($localStorage.IndexCurrentCode + "Amount").value = $localStorage.SchemeAmount;

            }

            
                if ($localStorage.LoginStatus)
                {
                    if (Type === undefined || Type === "") {
                        Type = $localStorage.CurrentStatusOfPage;
                    }
                    if (Type === "LUMPSUM") {
                        $localStorage.POstJson.userPlan.MasterPlan_ID = "6";
                    }
                    else if (Type === "SIP") {
                        $localStorage.POstJson.userPlan.MasterPlan_ID = "8";
                    }
                    $localStorage.CurrentStatusOfPage = Type;
                  
                    $scope.InvestorFundaConfMessage("Confirmation of Proceed", "Do you realy want to proceed for Scheme");
                }
          
                else {
                    
                if (index !== undefined) {
                    if (BseCode != undefined) {
                        if ($state.current.name == "recommonded") {
                           
                            $localStorage.CurrentScheme.mf_cocode = $scope.SIPGoalStructureDate[indexOfIsin[0]].BSESchmecode;
                            $localStorage.CurrentScheme.ISIN = $scope.SIPGoalStructureDate[indexOfIsin[0]].ISIN;
                            $localStorage.CurrentScheme.SchemeName = $scope.SIPGoalStructureDate[indexOfIsin[0]].SchemeName;

                        }
                        else {
                            $localStorage.CurrentScheme.mf_cocode = BseCode;
                        }
                    }
                    else {
                        $localStorage.CurrentScheme.mf_cocode = $scope.FundsList[indexOfIsin[0]].mf_cocode;
                        $localStorage.CurrentScheme.ISIN = $scope.FundsList[indexOfIsin[0]].ISIN;
                        $localStorage.CurrentScheme.SchemeName = $scope.FundsList[indexOfIsin].SchemeName;
                    }
                    $localStorage.IndexCurrentCode = index;
                    $localStorage.CurrentStatusOfPage = Type;
                    if (Type === "LUMPSUM") {
                        $localStorage.POstJson.userPlan.MasterPlan_ID = "6";
                    }
                    else if (Type === "SIP") {
                        $localStorage.POstJson.userPlan.MasterPlan_ID = "8";
                    }
                    $localStorage.CurrentStatusOfPage = Type;
                    $localStorage.CurrentStateOfPage = $state.current.name;
                    $state.go('Authentication', { From: $state.current.name });
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
                $localStorage.FromLogin = true;
                $scope.InvestLumpsum($localStorage.CurrentScheme.ISIN);
            }
        }

        else {
            $scope.OnloadFunction();
        }

    };
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
    $scope.compareTempIndexes = [];
    $scope.compareVal = {
        compareSelectInvestmentModeVal: "",
        compareAmountVal: ""
    };
    $scope.SelectCompare=function(Index)
    {
        if ($scope.compareIndex.length <= 3)
        {
            
            if ($scope.compareIndex.indexOf($scope.FundsList[Index].SchemeID) == -1)
            {
                $scope.compareTempIndexes.push(Index);
                $scope.compareIndex.push($scope.FundsList[Index].SchemeID);
            }
                    
           
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
                        $scope.compreListView = false;
                        $scope.compreTableView = true;
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

    $scope.clickCompareVal = function (Index) {
        $scope.showCompareInvestmentDiv = true;
        $scope.TempIndexScope = Index;
    };
    $scope.investCompare = function () {
        console.log($scope.compareVal.compareSelectInvestmentModeVal);
        $scope.InvestLumpsum($scope.TempIndexScope, 'Page', $scope.compareVal.compareSelectInvestmentModeVal, $scope.compareVal.compareAmountVal, 'Compare')
    }
    //Our Top Mutual Funds
    $scope.FilterTempValue = "EQ large cap";
    $scope.filterTopFunds = function (param) {
        $scope.FilterTempValue = param;
    }
}]);

