//Retirement Calculator
var d = new Date();

var GoalRounding = -4;
var austDay = new Date('2016-12-15');
var minHouseCost = 25;
var maxHouseCost = 500;
var presentyear = d.getFullYear();
var global_houseloanrepaymentperiod = 3;
var global_homeloanrate = 11;
var GoalRounding = -4;
var rog = 12;
function GetPrincipalValue(FutureValue, Years, Rate) {
    // return Math.round(FutureValue / Math.pow((1 + Rate / 100), Years));
    return rounding(Math.round(FutureValue / Math.pow((1 + Rate / 100), (Years + 1 / 365))), -3); /// changed - prasad. (rounding everything)
}

function GetFutureValue(PrinAmt, Years, Rate) {
    return rounding(Math.round(PrinAmt * Math.pow((1 + Rate / 100), (Years + 1 / 365))), -3);   /// changed - prasad. (rounding everything)
}
function GetEMIAmount(LoanAmount, Years, Rate) {
    return (LoanAmount * Rate / (12 * 100) * Math.pow((1 + Rate / (12 * 100)), Years * 12)) / (Math.pow((1 + Rate / (12 * 100)), 12 * Years) - 1);
}
function GetSIPAmount(LoanAmount, Years, Rate) {
    return (LoanAmount * Rate / (12 * 100) * Math.pow((1 + Rate / (12 * 100)), Years * 12)) / (Math.pow((1 + Rate / (12 * 100)), 12 * Years) - 1);
}

function rounding(a, b) {
    if (b > 0)
        return Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
    else
        return Math.round(Math.round(a * Math.pow(10, b)) / Math.pow(10, b));
}
function addCommas(nStr) {

    nStr += '';

    x = nStr.split('.');

    x1 = x[0];

    x2 = x.length > 1 ? '.' + x[1] : '';

    var rgx = /(\d+)(\d{3})/;

    var z = 0;

    var len = String(x1).length;

    var num = parseInt((len / 2) - 1);



    while (rgx.test(x1)) {

        if (z > 0) {

            x1 = x1.replace(rgx, '$1' + ',' + '$2');

        }

        else {

            x1 = x1.replace(rgx, '$1' + ',' + '$2');

            rgx = /(\d+)(\d{2})/;

        }

        z++;

        num--;

        if (num == 0) {

            break;

        }

    }

    return x1 + x2;

};

function putcomma(a, b) {
    try {
        if (a == "") return a;
        a = new Number(a);
        var c = new Number(b);
        var a = a.toFixed(c);
        var a = a.toString();
        var d = a.split('.');
        var a = d[0];
        var f = a < 0 ? true : false;
        if (f) a = a.substr(1);
        var g = new String();
        g = '';
        if (a.length > 3) {
            a = a.reverse();
            var i = 4;
            g = a.substring(0, 3);
            a = a.substring(3);
            for (i = 0; i < a.length; i++) {
                if (i % 2 == 0) g = g + ",";
                g = g + a.charAt(i);
            }
            //g = g.trim(',');
            g = g.reverse();
        } else {
            g = a;
        }
        if (f) g = "-" + g;
        if (d.length > 1) {
            g = g + '.' + d[1];
        }
        return g;
    } catch (e) { }
}


function GetRoundingFigure(val) {
    var vals = [];
    if (val < 100 || isNaN(val)) {
        vals[0] = val;
        vals[1] = '';
        vals[2] = '';
    }
    else if (val < 100000) {
        vals[0] = rounding(val / 1000, 2);
        vals[1] = 'K';
        //vals[2] = 'Thou';
        vals[2] = 'K';
    }
    else if (val < 10000000) {
        vals[0] = rounding(val / 100000, 2);
        vals[1] = 'L';
        //vals[2] = 'Lac';
        vals[2] = 'Lacs';
    }
    else {
        vals[0] = rounding(val / 10000000, 2);
        //vals[1] = 'C';
        //vals[2] = 'Cr';
        vals[1] = 'Cr.';
        vals[2] = 'Cr';
    }
    return vals;
}

function Chield_CalculatePortfolioAllocation(Year,Amount,Risk,From,Type) {
    var ReturnPer = {};
    var Funds = [];
    if (Risk == undefined)
    {
        if (From == "ChildGoal")
        {
            if (Year <= 5) {
                ReturnPer.Data = [{
                    Return_EquityPer: 70,
                    Returm_DebtPer: 30,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 30,
                        Fund_BondFunds: 20,
                        Fund_UltraSortFund: 10
                    }]

                }]


            }
            else if (Year > 5 && Year <= 10) {
                ReturnPer.Data = [{
                    Return_EquityPer: 75,
                    Returm_DebtPer: 25,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 35,
                        Fund_BondFunds: 25
                    }]
                }]

            }
            else if (Year > 10 && Year <= 20) {
                ReturnPer.Data = [{
                    Return_EquityPer: 80,
                    Returm_DebtPer: 20,
                    Fund: [{
                        Fund_LargeCap: 35,
                        Fund_MultiCap: 30,
                        Fund_BondFunds: 20,
                        Fund_MidCap: 15
                    }]
                }]
            }
        }
        else if(From=="Retirement")
        {
          
            if (Year >= 20 && Year <= 35) {
                ReturnPer.Data = [{
                    Return_EquityPer: 70,
                    Returm_DebtPer: 30,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 30,
                        Fund_MidCap: 10,
                        Fund_UltraSortFund: 10,
                        Fund_CreditOpportunity: 10,
                    }]
                }]

            }
            else if (Year >= 36  && Year <= 45) {
                ReturnPer.Data = [{
                    Return_EquityPer: 60,
                    Returm_DebtPer: 40,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 20,
                        Fund_MidCap: 20,
                        Fund_UltraSortFund: 10,
                        Fund_CreditOpportunity: 10
                    }]
                }]
            }
        }
     
        else if (From == "ChildMerrage") {

            if (Year <= 5) {
                ReturnPer.Data = [{
                    Return_EquityPer: 50,
                    Returm_DebtPer: 30,
                    Returm_GoldPer: 20,
                    Fund: [{
                        Fund_LargeCap: 30,
                        Fund_MultiCap: 20,
                        Fund_BondFunds: 20,
                        Fund_LiquidCap: 10,
                        Fund_Gold: 20
                    }]

                }]


            }
            else if (Year > 5 && Year <= 10) {
                ReturnPer.Data = [{
                    Return_EquityPer: 55,
                    Returm_DebtPer: 25,
                    Returm_GoldPer: 20,
                    Fund: [{
                        Fund_LargeCap: 30,
                        Fund_MidCap: 15,
                        Fund_MultiCap: 10,
                        Fund_BondFunds: 15,
                        Fund_LiquidCap: 10,
                        Fund_Gold: 20
                    }]
                }]

            }
            else if (Year > 10 && Year <= 20) {
                ReturnPer.Data = [{
                    Return_EquityPer: 60,
                    Returm_DebtPer: 20,
                    Returm_GoldPer: 20,
                    Fund: [{
                        Fund_LargeCap: 30,
                        Fund_MidCap: 20,
                        Fund_MultiCap: 10,
                        Fund_BondFunds: 10,
                        Fund_LiquidCap: 10,
                        Fund_Gold: 20
                    }]
                }]
            }
        }

        else if (From == "CarPlan") {

            if (Year <= 5) {
                ReturnPer.Data = [{
                    Return_EquityPer: 50,
                    Returm_DebtPer: 30,
                    Returm_GoldPer: 20,
                    Fund: [{
                        Fund_LargeCap: 30,
                        Fund_MultiCap: 20,
                        Fund_BondFunds: 20,
                        Fund_LiquidCap: 10,
                        Fund_Gold: 20
                    }]

                }]


            }
            else if (Year > 5 && Year <= 10) {
                ReturnPer.Data = [{
                    Return_EquityPer: 55,
                    Returm_DebtPer: 25,
                    Returm_GoldPer: 20,
                    Fund: [{
                        Fund_LargeCap: 30,
                        Fund_MidCap: 15,
                        Fund_MultiCap: 10,
                        Fund_BondFunds: 15,
                        Fund_LiquidCap: 10,
                        Fund_Gold: 20
                    }]
                }]

            }
            else if (Year > 10 && Year <= 20) {
                ReturnPer.Data = [{
                    Return_EquityPer: 60,
                    Returm_DebtPer: 20,
                    Returm_GoldPer: 20,
                    Fund: [{
                        Fund_LargeCap: 30,
                        Fund_MidCap: 20,
                        Fund_MultiCap: 10,
                        Fund_BondFunds: 10,
                        Fund_LiquidCap: 10,
                        Fund_Gold: 20
                    }]
                }]
            }
        }

        else if (From == "HousePlan") {

            if (Year <= 5) {
                ReturnPer.Data = [{
                    Return_EquityPer: 60,
                    Returm_DebtPer: 40,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 20,
                        Fund_CreditOpportunity: 40
                    }]

                }]


            }
            else if (Year > 5 && Year <= 10) {
                ReturnPer.Data = [{
                    Return_EquityPer: 70,
                    Returm_DebtPer: 30,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 30,
                        Fund_CreditOpportunity: 30
                    }]
                }]

            }
            else if (Year > 10 && Year <= 15) {
                ReturnPer.Data = [{
                    Return_EquityPer: 75,
                    Returm_DebtPer: 25,
                    Fund: [{
                        Fund_LargeCap: 45,
                        Fund_MultiCap: 30,
                        Fund_CreditOpportunity: 25
                    }]
                }]
            }
            else if (Year > 15 && Year <= 20) {
                ReturnPer.Data = [{
                    Return_EquityPer: 80,
                    Returm_DebtPer: 20,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 40,
                        Fund_CreditOpportunity: 20
                    }]
                }]
            }
        }
    }
    else if(Type == undefined) {
        //Risk Factor
        if (Risk == "Low")
        {
            if (Year <= 3) {
                if (Amount <= 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 0,
                        Returm_DebtPer: 100,
                        Fund: [{

                            Fund_UltraSortFund: 100
                        }]

                    }]
                }
                else if (Amount > 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 20,
                        Returm_DebtPer: 80,
                        Fund: [{
                            Fund_LargeCap: 20,
                            Fund_LiquidCap: 30,
                            Fund_UltraSortFund: 50
                        }]

                    }]
                }
              

            }
            else if (Year > 5 && Year <= 10) {
                if (Amount <= 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Fund: [{

                            Fund_MultiCap: 100
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 75,
                        Returm_DebtPer: 25,
                        Fund: [{
                            Fund_LargeCap: 40,
                            Fund_MultiCap: 35,
                            Fund_BondFunds: 25
                        }]
                    }]
                }

            }
            else {
                if (Amount <= 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Fund: [{

                            Fund_MidCap: 100
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Fund: [{
                            Fund_LargeCap: 35,
                            Fund_MidCap: 15,
                            Fund_MultiCap: 30,
                            Fund_BondFunds: 20
                        }]
                    }]
                }

            }
        }

        else if (Risk == "Moderate") {
              if (Year <= 3) {
            if (Amount <= 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 100,
                    Returm_DebtPer: 0,
                    Fund: [{

                        Fund_MultiCap: 100
                    }]

                }]
            }
            else if (Amount > 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 70,
                    Returm_DebtPer: 30,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 30,
                        Fund_CreditOpportunity: 20,
                        Fund_UltraSortFund: 10
                    }]

                }]
            }
    

        }
        else if (Year > 3 && Year <= 5) {
            if (Amount <= 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 100,
                    Returm_DebtPer: 0,
                    Fund: [{

                        Fund_MultiCap: 100
                    }]
                }]
            }
            else if (Amount > 3000 ) {
                ReturnPer.Data = [{
                    Return_EquityPer: 70,
                    Returm_DebtPer: 30,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MultiCap: 30,
                        Fund_CreditOpportunity: 20,
                        Fund_UltraSortFund: 10
                    }]
                }]
            }
            //else  {
            //    ReturnPer.Data = [{
            //        Return_EquityPer: 60,
            //        Returm_DebtPer: 30,
            //        Returm_GoldPer: 10,
            //        Fund: Funds[{
            //            Fund_LargeCap: 40,
            //            Fund_MidCap: 20,
            //            Fund_CreditOpportunity: 20,
            //            Fund_LiquidCap: 10,
            //            Fund_Gold: 10
            //        }]
            //    }]
            //}

        }
        else if (Year > 5 && Year <= 10) {
            if (Amount <= 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 100,
                    Returm_DebtPer: 0,
                    Fund: [{

                        Fund_MultiCap: 100
                    }]
                }]
            }
            else if (Amount > 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 65,
                    Returm_DebtPer: 25,
                    Returm_GoldPer: 10,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MidCap: 25,
                        Fund_CreditOpportunity: 20,
                        Fund_LiquidCap: 5,
                        Fund_Gold: 10
                    }]
                }]
            }

        }

        else if (Year > 10 && Year <= 15) {
            if (Amount <= 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 100,
                    Returm_DebtPer: 0,
                    Fund: [{

                        Fund_MultiCap: 100
                    }]
                }]
            }
            else if (Amount > 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 70,
                    Returm_DebtPer: 20,
                    Returm_GoldPer: 10,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MidCap: 30,
                        Fund_CreditOpportunity: 10,
                        Fund_LiquidCap: 10,
                        Fund_Gold: 10
                    }]
                }]
            }

        }

        else if (Year > 15 && Year <= 20) {
            if (Amount <= 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 100,
                    Returm_DebtPer: 0,
                    Fund: [{

                        Fund_MultiCap: 100
                    }]
                }]
            }
            else if (Amount > 3000) {
                ReturnPer.Data = [{
                    Return_EquityPer: 75,
                    Returm_DebtPer: 15,
                    Returm_GoldPer: 10,
                    Fund: [{
                        Fund_LargeCap: 40,
                        Fund_MidCap: 35,
                        Fund_CreditOpportunity: 10,
                        Fund_LiquidCap: 5,
                        Fund_Gold: 10
                    }]
                }]
            }

        }
        }

        else if (Risk == "High") {
            if (Year <= 3) {
                if (Amount <= 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Fund: [{

                            Fund_MidCap: 100
                        }]

                    }]
                }
                else if (Amount > 3000 && Amount >=5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Fund: [{
                            Fund_LargeCap: 60,
                            Fund_MidCap: 40
                        }]

                    }]
                }

                else if (Amount > 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 90,
                        Returm_DebtPer: 10,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 30,
                            Fund_CreditOpportunity:20
                        }]

                    }]
                }
              
            }
            else if (Year > 3 && Year <= 5) {
                if (Amount <= 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Fund: [{

                            Fund_MidCap: 100
                        }]
                    }]
                }
                else if (Amount > 3000 && Amount >= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Fund: [{
                            Fund_LargeCap: 60,
                            Fund_MidCap: 40
                        }]

                    }]
                }
                else if (Amount > 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 90,
                        Returm_DebtPer: 10,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 30,
                            Fund_CreditOpportunity: 10
                        }]
                    }]
                }
             

            }
            else if (Year > 5 && Year <= 10) {
                if (Amount <= 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Fund: [{

                            Fund_MidCap: 100
                        }]
                    }]
                }
                else if (Amount > 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 30,
                            Fund_CreditOpportunity: 20
                        }]

                    }]
                }
               

            }

            else if (Year > 10 ) {
                if (Amount <= 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Fund: [{

                            Fund_MidCap: 100
                        }]
                    }]
                }
                else if (Amount > 3000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 40,
                            Fund_MidCap: 40,
                            Fund_CreditOpportunity: 20
                        }]
                    }]
                }

            }

        }
       
    }
    else {
        if (Risk == "Low") {
            if (Year <= 3) {
                if (Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 0,
                        Returm_DebtPer: 100,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_UltraSortFund: 100
                        }]

                    }]
                }
                else if (Amount > 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 0,
                        Returm_DebtPer: 100,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LiquidCap: 50,
                            Fund_UltraSortFund: 50
                        }]

                    }]
                }


            }
            else if (Year > 3 && Year <= 5) {
                if (Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 0,
                        Returm_DebtPer: 100,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_UltraSortFund: 100
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 10,
                        Returm_DebtPer: 90,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LiquidCap: 40,
                            Fund_MultiCap: 10,
                            Fund_UltraSortFund: 50
                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 20,
                        Returm_DebtPer: 80,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LiquidCap: 30,
                            Fund_MultiCap: 20,
                            Fund_UltraSortFund: 50
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 20,
                        Returm_DebtPer: 80,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LiquidCap: 30,
                            Fund_MultiCap: 20,
                            Fund_UltraSortFund: 30,
                            Fund_CreditOpportunity:20
                        }]
                    }]
                }

            }
            else if (Year > 5 && Year <= 10) {
                if (Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 0,
                        Returm_DebtPer: 100,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_LiquidCap: 100
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 10,
                        Returm_DebtPer: 90,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LiquidCap: 40,
                            Fund_MultiCap: 10,
                            Fund_BondFunds: 50
                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 20,
                        Returm_DebtPer: 80,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LiquidCap: 50,
                            Fund_MultiCap: 20,
                            Fund_BondFunds: 30
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 20,
                        Returm_DebtPer: 80,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LiquidCap: 30,
                            Fund_MultiCap: 20,
                            Fund_CreditOpportunity: 50
                        }]
                    }]
                }

            }

            else if (Year > 10 && Year <= 15) {
                if (Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 0,
                        Returm_DebtPer: 100,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_BondFunds: 100
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 10,
                        Returm_DebtPer: 80,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_LiquidCap: 30,
                            Fund_MultiCap: 10,
                            Fund_BondFunds: 50,
                            Fund_Gold:10
                        }]
                    }]
                }
               
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 20,
                        Returm_DebtPer: 80,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LiquidCap: 10,
                            Fund_BondFunds: 50,
                            Fund_LargeCap:10,
                            Fund_Gold:10,
                            Fund_CreditOpportunity: 20
                        }]
                    }]
                }

            }

            else if (Year > 15) {
                if (Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 0,
                        Returm_DebtPer: 100,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_BondFunds: 100
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 20,
                        Returm_DebtPer: 70,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_LiquidCap: 30,
                            Fund_MultiCap: 10,
                            Fund_BondFunds: 50,
                            Fund_Gold: 10
                        }]
                    }]
                }

                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 20,
                        Returm_DebtPer: 70,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_LiquidCap: 10,
                            Fund_BondFunds: 40,
                            Fund_LargeCap: 20,
                            Fund_Gold: 10,
                            Fund_CreditOpportunity: 20
                        }]
                    }]
                }

            }
        }
        else if (Risk == "Moderate") {
            if (Year <= 3) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_MultiCap: 100
                        }]

                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_LargeCap: 60,
                            Fund_MidCap: 40
                        }]

                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 50
                        }]

                    }]
                }

                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 40,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MultiCap: 60,
                            Fund_BondFunds: 20,
                            Fund_LiquidCap: 20
                        }]

                    }]
                }
                else if (Amount > 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 40,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MultiCap: 60,
                            Fund_CreditOpportunity: 20,
                            Fund_LiquidCap: 20
                        }]

                    }]
                }
            }
            else if (Year > 3 && Year <= 5) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_MultiCap: 100
                        }]
                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 60,
                            Fund_MidCap: 40
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 50
                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 40,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MultiCap: 60,
                            Fund_BondFunds: 20,
                            Fund_LiquidCap: 20
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 40,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MultiCap: 60,
                            Fund_CreditOpportunity: 20,
                            Fund_LiquidCap:20
                        }]
                    }]
                }

            }
            else if (Year > 5 && Year <= 10) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_LargeCap: 100
                        }]
                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 50,
                        Returm_DebtPer: 50,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MidCap: 50,
                            Fund_BondFunds:50
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 70,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 20,
                            Fund_BondFunds:30

                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_LiquidCap: 20,
                            Fund_MultiCap: 60,
                            Fund_BondFunds: 10,
                            Fund_Gold:10
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_LiquidCap: 20,
                            Fund_MultiCap: 60,
                            Fund_CreditOpportunity: 10,
                            Fund_Gold: 10
                        }]
                    }]
                }

            }

            else if (Year > 10 && Year <= 15) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_LargeCap: 100
                        }]
                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 50,
                        Returm_DebtPer:50,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MidCap: 50,
                            Fund_BondFunds: 50
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 70,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 20,
                            Fund_BondFunds: 30
                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_MultiCap: 60,
                            Fund_BondFunds: 10,
                            Fund_LiquidCap: 20,
                            Fund_Gold:10
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_MultiCap: 60,
                            Fund_CreditOpportunity: 10,
                            Fund_LiquidCap: 20,
                            Fund_Gold: 10

                        }]
                    }]
                }

            }

            else if (Year > 15) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_LargeCap: 100
                        }]
                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 50,
                        Returm_DebtPer: 50,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MidCap: 50,
                            Fund_BondFunds: 50
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 70,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 20,
                            Fund_BondFunds: 30
                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_MultiCap: 60,
                            Fund_BondFunds: 10,
                            Fund_LiquidCap: 20,
                            Fund_Gold:10
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_MultiCap: 60,
                            Fund_CreditOpportunity: 10,
                            Fund_LiquidCap: 20,
                            Fund_Gold:10
                        }]
                    }]
                }

            }
        }

        else if (Risk == "High") {
            if (Year <= 3) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_MidCap: 100
                        }]

                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_LargeCap: 40,
                            Fund_MidCap: 60
                        }]

                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 40,
                            Fund_MidCap: 60
                        }]

                    }]
                }

                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 50,
                            Fund_MidCap: 30,
                            Fund_CreditOpportunity: 20
                        }]

                    }]
                }
                else if (Amount > 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_CreditOpportunity: 20
                        }]

                    }]
                }
            }
            else if (Year > 3 && Year <= 5) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_MidCap: 100
                        }]
                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 60,
                            Fund_MidCap: 40
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 90,
                        Returm_DebtPer: 10,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_BondFunds: 10,
                            Fund_MidCap: 90
                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_CreditOpportunity: 20
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_CreditOpportunity: 20
                        }]
                    }]
                }

            }
            else if (Year > 5 && Year <= 10) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_MultiCap: 100
                        }]
                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 40,
                            Fund_MidCap: 60
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 90,
                        Returm_DebtPer: 10,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MidCap: 90,
                            Fund_BondFunds: 10

                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_BondFunds: 20
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_CreditOpportunity: 20
                        }]
                    }]
                }

            }

            else if (Year > 10 && Year <= 15) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_MultiCap: 100
                        }]
                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 50,
                        Returm_DebtPer: 50,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MidCap: 50,
                            Fund_BondFunds: 50
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_BondFunds: 20
                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_BondFunds:20
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 60,
                        Returm_DebtPer: 30,
                        Returm_GoldPer: 10,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_CreditOpportunity:20

                        }]
                    }]
                }

            }

            else if (Year > 15) {
                if (Amount <= 5000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 100,
                        Returm_DebtPer: 0,
                        Returm_GoldPer: 0,
                        Fund: [{

                            Fund_MultiCap: 100
                        }]
                    }]
                }
                else if (Amount > 5000 && Amount <= 10000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 50,
                        Returm_DebtPer: 50,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_MidCap: 50,
                            Fund_BondFunds: 50
                        }]
                    }]
                }
                else if (Amount > 10000 && Amount <= 25000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_BondFunds: 20
                        }]
                    }]
                }
                else if (Amount > 25000 && Amount <= 100000) {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_BondFunds:20
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 80,
                        Returm_DebtPer: 20,
                        Returm_GoldPer: 0,
                        Fund: [{
                            Fund_LargeCap: 30,
                            Fund_MidCap: 50,
                            Fund_CreditOpportunity: 20
                        }]
                    }]
                }

            }
        }
      
    }
    
    return ReturnPer;
};

function CalculateMoneyEquityDebt(Percentage,money)
{
    var DividedMoney = {};

    var EquityMoney = parseInt( (Percentage.Data[0].Return_EquityPer / 100) * money);
    var DebtMoney = parseInt((Percentage.Data[0].Returm_DebtPer / 100) * money);
    if (Percentage.Data[0].Returm_GoldPer != undefined) 
        var GoldMoney = parseInt((Percentage.Data[0].Returm_GoldPer / 100) * money);

    return DividedMoney.FinalMoney=[{
        Equity: EquityMoney,
        Debt: DebtMoney,
        Gold:GoldMoney != undefined ? GoldMoney : "0"
    }]
}





function convert_number(number) {
    number = parseInt(number);
    if ((number < 0) || (number > 999999999)) {
        return "NUMBER OUT OF RANGE!";
    }
    var Gn = Math.floor(number / 10000000); /* Crore */
    number -= Gn * 10000000;
    var kn = Math.floor(number / 100000); /* lakhs */
    number -= kn * 100000;
    var Hn = Math.floor(number / 1000); /* thousand */
    number -= Hn * 1000;
    var Dn = Math.floor(number / 100); /* Tens (deca) */
    number = number % 100; /* Ones */
    var tn = Math.floor(number / 10);
    var one = Math.floor(number % 10);
    var res = "";
    if (Gn > 0) {
        res += (convert_number(Gn) + " Crore");
    }
    if (kn > 0) {
        res += (((res == "") ? "" : " ") +
        convert_number(kn) + " Lakh");
    }
    if (Hn > 0) {
        res += (((res == "") ? "" : " ") +
        convert_number(Hn) + " Thousand");
    }
    if (Dn) {
        res += (((res == "") ? "" : " ") +
        convert_number(Dn) + " Hundred");
    }
    var ones = Array("", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen");
    var tens = Array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety");
    if (tn > 0 || one > 0) {
        if (!(res == "")) {
            res += " And ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        }
        else {
            res += tens[tn];
            if (one > 0) {
                res += (" " + ones[one]);
            }
        }
    }
    if (res == "") {
        res = "zero";
        res = "";
    }
    else {
        res = "<span class='Rs'>`</span> " + res.replace(/<span class=\'Rs\'>`<\/span>/g, "").replace(/Only/g, "") + " Only";
    }
    return res;
}









//if (Year <= 5) {
//    if (Amount <= 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 100,
//            Returm_DebtPer: 0,
//            Fund: [{

//                Fund_MultiCap: 100
//            }]

//        }]
//    }
//    else if (Amount > 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 70,
//            Returm_DebtPer: 30,
//            Fund: [{
//                Fund_LargeCap: 40,
//                Fund_MultiCap: 30,
//                Fund_CreditOpportunity: 20,
//                Fund_UltraSortFund: 10
//            }]

//        }]
//    }


//}
//else if (Year > 3 && Year <= 5) {
//    if (Amount <= 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 100,
//            Returm_DebtPer: 0,
//            Fund: [{

//                Fund_MultiCap: 100
//            }]
//        }]
//    }
//    else if (Amount > 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 70,
//            Returm_DebtPer: 30,
//            Fund: [{
//                Fund_LargeCap: 40,
//                Fund_MultiCap: 30,
//                Fund_CreditOpportunity: 20,
//                Fund_UltraSortFund: 10
//            }]
//        }]
//    }
//    //else  {
//    //    ReturnPer.Data = [{
//    //        Return_EquityPer: 60,
//    //        Returm_DebtPer: 30,
//    //        Returm_GoldPer: 10,
//    //        Fund: [{
//    //            Fund_LargeCap: 40,
//    //            Fund_MidCap: 20,
//    //            Fund_CreditOpportunity: 20,
//    //            Fund_LiquidCap: 10,
//    //            Fund_Gold: 10
//    //        }]
//    //    }]
//    //}

//}
//else if (Year > 5 && Year <= 10) {
//    if (Amount <= 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 100,
//            Returm_DebtPer: 0,
//            Fund: [{

//                Fund_MultiCap: 100
//            }]
//        }]
//    }
//    else if (Amount > 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 65,
//            Returm_DebtPer: 25,
//            Returm_GoldPer: 10,
//            Fund: [{
//                Fund_LargeCap: 40,
//                Fund_MidCap: 25,
//                Fund_CreditOpportunity: 20,
//                Fund_LiquidCap: 5,
//                Fund_Gold: 10
//            }]
//        }]
//    }

//}

//else if (Year > 10 && Year <= 15) {
//    if (Amount <= 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 100,
//            Returm_DebtPer: 0,
//            Fund: [{

//                Fund_MultiCap: 100
//            }]
//        }]
//    }
//    else if (Amount > 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 70,
//            Returm_DebtPer: 20,
//            Returm_GoldPer: 10,
//            Fund: [{
//                Fund_LargeCap: 40,
//                Fund_MidCap: 30,
//                Fund_CreditOpportunity: 10,
//                Fund_LiquidCap: 10,
//                Fund_Gold: 10
//            }]
//        }]
//    }

//}

//else if (Year > 15 && Year <= 20) {
//    if (Amount <= 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 100,
//            Returm_DebtPer: 0,
//            Fund: [{

//                Fund_MultiCap: 100
//            }]
//        }]
//    }
//    else if (Amount > 3000) {
//        ReturnPer.Data = [{
//            Return_EquityPer: 75,
//            Returm_DebtPer: 15,
//            Returm_GoldPer: 10,
//            Fund: [{
//                Fund_LargeCap: 40,
//                Fund_MidCap: 35,
//                Fund_CreditOpportunity: 10,
//                Fund_LiquidCap: 5,
//                Fund_Gold: 10
//            }]
//        }]
//    }

//}