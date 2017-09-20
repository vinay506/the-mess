var CofigService = function(ApiService, $q) {
    var service = {};
    service.getConfig = function(config) {
        var deferred = $q.defer();
        ApiService.get('/dist/json/coreConfig.json').then(successCallback, errorCallback);

        function successCallback(response) {
            deferred.resolve(angular.copy(response.data[config]));
        }

        function errorCallback(error) {
            console.log("response::", error)
        }
        return deferred.promise;
    }
    return service;

}
CofigService.$inject = ['ApiService', '$q'];
app.factory('CofigService', CofigService);