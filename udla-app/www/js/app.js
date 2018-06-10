var app = angular.module('udla', ['ionic'])
//var api_url = "http://2eb89f72.ngrok.io";
var api_url = "http://104.236.225.92:3200";

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('main', {
      abstract: true,
      templateUrl: 'templates/main/view_main.html',
      controller: 'mainCtrl'
    })

    .state('main.news', {
      url: '/news',
      views: {
        'content': {
          templateUrl: 'templates/news/view_news.html',
          controller: 'newsCtrl'
        }
      }
    })

    .state('main.events', {
      url: '/events',
      views: {
        'content': {
          templateUrl: 'templates/events/view_events.html',
          controller: 'eventsCtrl'
        }
      }
    })

    .state('main.radio', {
      url: '/radio',
      views: {
        'content': {
          templateUrl: 'templates/radio/view_radio.html',
          controller: 'radioCtrl'
        }
      }
    })

    .state('main.details', {
      url: '/details',
      views: {
        'content': {
          templateUrl: 'templates/details/view_details.html'
        }
      }
    })

    .state('main.institutional', {
      url: '/institutional',
      views: {
        'content': {
          templateUrl: 'templates/institutional/view_institutional.html',
          controller: 'institutionalCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/news');
});
