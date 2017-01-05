//Retirement Calculator

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

function Chield_CalculatePortfolioAllocation(Year,Amount) {
    var ReturnPer = {};
    var Funds = [];
    if(Year<=5)
    {
        if (Amount <= 3000)
        {
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
                Return_EquityPer : 70,
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
    else if (Year > 5 && Year <= 10)
    {
        if (Amount <= 3000) {
            ReturnPer.Data = [{
                Return_EquityPer: 100,
                Returm_DebtPer:0,
                Fund: Funds[{
                   
                    Fund_MultiCap:100
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
    else
    {
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
    return ReturnPer;
};

function CalculateMoneyEquityDebt(Percentage,money)
{
    var DividedMoney = {};

    var EquityMoney = parseInt( (Percentage.Data[0].Return_EquityPer / 100) * money);
    var DebtMoney =  parseInt( (Percentage.Data[0].Returm_DebtPer / 100) * money);

    return DividedMoney.FinalMoney=[{
        Equity: EquityMoney,
        Debt: DebtMoney
    }]
}


