app.controller('mainCtrl', function($scope, $rootScope, $state, $ionicHistory) {


    $scope.details = function(newd) {
        $scope.newDetail = newd;
        if (typeof newd.content == "string") {
            $scope.newDetail.content = JSON.parse(newd.content);
        } else {
            $scope.newDetail.content = newd.content;
        }
        $scope.style = [];
        $state.go("main.details");
    }

    $scope.url = function(uri) {
        window.open(encodeURI(uri), '_system', 'location=yes');
        return false;
    }

    $scope.modules_total = [
        { key: "news", detail: "Noticias" },
        { key: "education", detail: "Educación continuada" },
        { key: "wellness", detail: "Bienestar universitario" },
        { key: "agreement", detail: "Convenios" },
        { key: "graduate", detail: "Graduados" },
        { key: "youth", detail: "Extensión social" }
    ];

    $rootScope.module_now = $scope.modules_total[0];

    $scope.switchNews = function(module) {
        for (var i = 0; i < $scope.modules_total.length; i++) {
            if ($scope.modules_total[i].key == module) {
                $rootScope.module_now = $scope.modules_total[i];
                $rootScope.init(function() {}, $rootScope.module_now.key);
                break;
            }
        }
    }

    $scope.initQuill = function() {
        $scope.quill = new Quill(document.getElementById('editor-container'), {
            modules: {
                toolbar: [
                    ['bold', 'italic'],
                ]
            },
            readOnly: true,
            theme: 'snow'
        });
        $scope.quill.setContents($scope.newDetail.content.ops);
    }

    var format = function(content, callback) {
        for (var i = 0; i < content.length; i++) {
            if (content[i].attributes != undefined) {
                if (content[i].attributes.align == "center") {
                    $scope.style[i] = "text-center";
                }
                if (content[i].attributes.bold == true) {
                    $scope.style[i] = "bold";
                }
                if (content[i].attributes.italic == true) {
                    $scope.style[i] = "italic";
                }
                if (content[i].attributes.align == "right") {
                    $scope.style[i] = "text-right";
                }
                if (content[i].attributes.list != undefined) {
                    $scope.style[i] = "list";
                }
            }
        };
        callback();
    }

});
