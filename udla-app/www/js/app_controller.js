app.controller('appCtrl', function($scope, $rootScope, $interval, $timeout) {
    $rootScope.notifyText = "";
    $rootScope.loadingState = false;

    $rootScope.loading = function(time) {
        var varnew;
        var acum = 0;
        $rootScope.loadingState = true;
        varnew = $interval(function() {
            acum++;
            if (acum == time || !$rootScope.loadingState) {
                $interval.cancel(varnew);
                acum = 0;
                $rootScope.loadingState = false;
            } else if ($rootScope.loadingState !== false) {
                    $rootScope.loadingState = true;
            }
        }, 1000);
    };

    $rootScope.doRefresh = function(init, time) {
        var refresh;
        var acum = 0;
        refresh = $interval(function() {
            if(acum == 0){
                init(function(){
                    $interval.cancel(refresh);
                    $scope.$broadcast('scroll.refreshComplete');
                }, $rootScope.module_now.key);
            }else if(acum == 5){ //Tiempo limite
                $rootScope.notifyText = "La conexión a internet fallo.";
                $scope.$broadcast('scroll.refreshComplete');
            }else if(acum == 7){
                $interval.cancel(refresh);
                $rootScope.notifyText = "";
                $scope.$broadcast('scroll.refreshComplete');
            }
            acum++;
            
        }, 1000);
    };
});
