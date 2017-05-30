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
var API_GetUploadFile = ServerName + Service_Common + 'UploadFIle'; 
var API_UpdateInvestmentActionStatus = ServerName + Service_Common + 'UpdateInvestmentActionStatus/';
var API_getAllUserAction = ServerName + Service_Common + 'getAllUserAction/'; 
var API_UpdatePassword = ServerName + Service_Common + 'UpdatePassword/'

//Admin Part
var API_GetUserListAdmin = ServerName + Service_Common + 'GetUserListAdmin'; 
var API_GetUserPlanList = ServerName + Service_Common + 'GetUserPlanlist/';
var API_GetUserInvestmentDetails = ServerName + Service_Common + 'GetUserInvestmentDetails/'; 
var API_UpdateMFInvestDetails = ServerName + Service_Common + 'UpdateMFInvestDetails';

//Other API Service
//test
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
var API_UserUploadDocuments = ServerName + Service_Common + 'UserUploadDocuments'; 
var API_InsertBlog = ServerName + Service_Common + 'InsertBlog';
var API_InsertUserInvestment = ServerName + Service_Common + 'InsertUserInvestment';
var API_UpdateBlogDetails = ServerName + Service_Common + 'UpdateBlogDetails'; 
var API_GetBlogDetails = ServerName + Service_Common + 'GetBlogDetails';
var API_DeleteBlog = ServerName + Service_Common + 'DeleteBlog/'; 
var API_UpdateBlogImage = ServerName + Service_Common + 'UpdateBlogImage/'; 
var API_UpdateClientCode = ServerName + Service_Common + 'UpdateClientCode/';
var API_UserRegistrationType = ServerName + Service_Common + 'UpdateUserRegistrationType';
var API_GetDashInvestmentDetails = ServerName + Service_Common + 'GetDashInvestmentDetails/';
