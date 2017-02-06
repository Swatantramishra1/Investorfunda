//Retirement Calculator
var GoalRounding = -4;
var austDay = new Date('2016-12-15');
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

function Chield_CalculatePortfolioAllocation(Year,Amount,Risk,From) {
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
     
        else if (From == "ChildrenMarriage") {

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
    else {
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
                        Fund: Funds[{

                            Fund_MultiCap: 100
                        }]
                    }]
                }
                else {
                    ReturnPer.Data = [{
                        Return_EquityPer: 75,
                        Returm_DebtPer: 25,
                        Fund: Funds[{
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
                    Fund: Funds[{
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
//            Fund: Funds[{
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
//    //        Fund: Funds[{
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