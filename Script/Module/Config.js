// Host Name & Urls

//For Locals
//var ServerName = "http://localhost:51176/Service/";

//For Hosting
var ServerName = "http://ifserviceapi.azurewebsites.net/Service/";



//**************************Service Start Fom here****************************//

//Service Name

var Service_Common = "InvestorFundaServices.svc/";


// Service Method Name

var API_Login_All = ServerName +   Service_Common + "Login/";
var API_UserRegistration = ServerName + Service_Common + "UserRegistration";
var API_GetTaxStatus = ServerName + Service_Common + 'GetTaxStatus';
var API_GetCityDetails = ServerName + Service_Common + 'GetCityDetails';
var API_GetCountryDetails = ServerName + Service_Common + 'GetCountryDetails';
var API_GetSourceOfWealth = ServerName + Service_Common + 'GetSourceOfWealth';
var API_GetStateDetails = ServerName + Service_Common + 'GetStateDetails';
var API_HoldingNature = ServerName + Service_Common + 'HoldingNature';
var API_GetUserDetailsInfo = ServerName + Service_Common + 'GetUserProfileDetailsInfo/';
var API_GetAllListDetails = ServerName + Service_Common + 'GetAllListDetails';
var API_Post_CreateUsersPlan = ServerName + Service_Common + 'CreateUsersPlan';
var API_GetAllCartListDetails = ServerName + Service_Common + 'GetInvestmentPlanCart/';
var API_GetUserPaymentStatus = ServerName + Service_Common + 'GetUserPaymentStatus/';
var API_GetUserPaymentString = ServerName + Service_Common + 'GetUserPaymentString/';
var API_GetUploadFile = ServerName + Service_Common + 'UploadFIle'

//Admin Part
var API_GetUserListAdmin = ServerName + Service_Common + 'GetUserListAdmin'; 
var API_GetUserPlanList = ServerName + Service_Common + 'GetUserPlanlist/';
var API_GetUserInvestmentDetails = ServerName + Service_Common + 'GetUserInvestmentDetails/';

//Other API Service

var API_ListingFunds = 'http://cmapis.cmots.com/CrazyAchievers/MutualFund.svc/ListingFunds/';
var API_SchemeDetails = 'http://cmapis.cmots.com/CrazyAchievers/MutualFund.svc/SchemeDetails/';
var API_AssetAllocation = 'http://cmapis.cmots.com/CrazyAchievers/MutualFund.svc/AssetAllocation/';
var API_TopHolding = ' http://cmapis.cmots.com/CrazyAchievers/MutualFund.svc/TopHolding/ ';
var API_Fundhouse = 'http://cmapis.cmots.com/CrazyAchievers/MutualFund.svc/Fundhouse?responsetype=json';
//var API_SchemeDetails = 'http://cmapis.cmots.com/demo/demoservice.svc/SchemeDetails/';
var API_FundCategoryEQUITY = 'http://cmapis.cmots.com/CrazyAchievers/MutualFund.svc/FundCategory/5946/EQUITY?responsetype=json'
var API_FundCategoryHybrid = 'http://cmapis.cmots.com/CrazyAchievers/MutualFund.svc/FundCategory/5946/Hybrid?responsetype=json';
var API_FundCategoryDebt = 'http://cmapis.cmots.com/CrazyAchievers/MutualFund.svc/FundCategory/5946/Debt?responsetype=json';

var API_validateIfsc = "https://ifsc.razorpay.com/";
var API_UserDataUpdate = ServerName + Service_Common + 'UpdateUserDetails';
var API_UserRegistrationType = ServerName + Service_Common + 'UpdateUserRegistrationType';
