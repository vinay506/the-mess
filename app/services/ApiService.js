var ApiService = function($http) {
    var service = {};

    service.post = function(url, params) {
        return $http.post(url, { params: params });
    }

    service.get = function(url) {
        return $http.get(url);
    }

    return service;

}
ApiService.$inject = ['$http'];
app.factory('ApiService', ApiService);