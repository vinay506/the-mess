var QueryService = function(SERVICEURL) {
    var service = {};

    service.prepareBaseUrl = function(url) {
        return SERVICEURL + url
    }

    return service;

}
QueryService.$inject = ['SERVICEURL'];
app.factory('QueryService', QueryService);