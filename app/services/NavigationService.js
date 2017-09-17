var NavigationService = function($location) {
    var service = {};
    service.navigateTo = function(path) {
        $location.path(path);
    }

    return service;

}
NavigationService.$inject = ['$location'];
app.factory('NavigationService', NavigationService);