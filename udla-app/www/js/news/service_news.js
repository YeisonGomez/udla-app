app.factory('newsService', function($http) {
    return {
        
        getAll: function(module) {
            return $http.get(api_url + '/new/get-all/' + module);
        }
        
    }
});
