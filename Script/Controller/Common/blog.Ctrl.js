app.controller("BlogCtrl", ['$scope', '$rootScope', '$http', 'fileUpload', '$window', 'FundsService', '$state', function ($scope, $rootScope, $http, fileUpload, $window, FundsService, $state) {

   
    var blogID = $state.params.id;
    var getBlogDetailsInfo = FundsService.getBlogDetailsInfo.getPromise(blogID);
    getBlogDetailsInfo.then(
    // OnSuccess function
    function (answer) {
        $scope.blogDetails = answer.data.GetBlogDetailsInfoResult.Result[0];
        var htmltext = $scope.blogDetails.Blog_Content;
        $('#blogContent').html(htmltext);


    },
    // OnFailure function
    function (reason) {
        HideLoader();
        $scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;
        //$scope.somethingWrong = reason;
        //$scope.error = true;
    }
  )



}]);

