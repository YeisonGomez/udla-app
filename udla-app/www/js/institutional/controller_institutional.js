app.controller('institutionalCtrl', function($scope, $timeout) {

    $scope.quest = false;
    $scope.vision = false;
    $scope.function = false;
    $scope.objective = false;
    $scope.history = false;
    $scope.hymn = false;



    $scope.isQuest = function() {
        $scope.quest = !$scope.quest;
        $scope.vision = false;
        $scope.function = false;
        $scope.objective = false;
        $scope.history = false;
        $scope.hymn = false;
    }

    $scope.isVision = function() {
        $scope.vision = !$scope.vision;
        $scope.quest = false;
        $scope.function = false;
        $scope.objective = false;
        $scope.history = false;
        $scope.hymn = false;
    }

    $scope.isFunctions = function() {
        $scope.function = !$scope.function;
        $scope.quest = false;
        $scope.vision = false;
        $scope.objective = false;
        $scope.history = false;
        $scope.hymn = false;
    }

    $scope.isObjectives = function() {
        $scope.objective = !$scope.objective;
        $scope.quest = false;
        $scope.vision = false;
        $scope.function = false;
        $scope.history = false;
        $scope.hymn = false;
    }

    $scope.isHistory = function() {
        $scope.history = !$scope.history;
        $scope.quest = false;
        $scope.vision = false;
        $scope.function = false;
        $scope.objective = false;
        $scope.hymn = false;
    }

    $scope.isHymn = function() {
        $scope.hymn = !$scope.hymn;
        $scope.quest = false;
        $scope.vision = false;
        $scope.function = false;
        $scope.objective = false;
        $scope.history = false;
    }
});
