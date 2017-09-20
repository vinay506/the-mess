var ApiService = function($http) {
    var service = {};

    service.get = function(url, params) {
        return $http.get(url, { params: params });
    }

    return service;

}
ApiService.$inject = ['$http'];
app.factory('ApiService', ApiService);