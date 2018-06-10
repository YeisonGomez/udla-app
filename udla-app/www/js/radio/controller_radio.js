app.controller('radioCtrl', function($scope) {
    $scope.radio = false;
    var audio = new Audio('http://radio.udla.edu.co:8000/;steam.mp3');
    $scope.playRadio = function() {
        ($scope.radio == false) ? $scope.radio = true : $scope.radio = false;
        ($scope.radio == true) ? audio.play(): audio.pause();
    }
});
