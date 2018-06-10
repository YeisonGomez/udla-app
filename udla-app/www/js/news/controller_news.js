app.controller('newsCtrl', function($scope, newsService, $rootScope, $ionicHistory) {
	$scope.news = [];
	$rootScope.loading(3);
	$rootScope.api_urll = api_url;

	$rootScope.init = function(callback, module){
		$scope.news = [];
		$rootScope.loading(20);
		newsService.getAll(module).then(function(data){
			$scope.news = data.data.message;
			$rootScope.loadingState = false;
			if(callback != undefined){
				callback();
			}
		})
		.catch(function(err){
			$rootScope.loadingState = false;
			$rootScope.internet = false;
		});
	}

	$scope.init(function(){}, $rootScope.module_now.key);
});