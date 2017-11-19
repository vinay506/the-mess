var QueryService = function(SERVICEURL) {
    var service = {};

    service.prepareUrl = function(url) {
        return SERVICEURL + url
    }

    return service;

}
QueryService.$inject = ['SERVICEURL'];
app.factory('QueryService', QueryService);