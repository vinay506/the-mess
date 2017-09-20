var cookiesService = function($cookies, $localStorage, NavigationService) {
    var service = {};

    service.get = function() {
        var user = (localStorage.userName) ? $cookies.get(localStorage.userName) : false;
        if (user) {
            return true
        }
        return false
    }

    service.setCookies = function(credentials) {
        $cookies.put(credentials.username, credentials.password);
        localStorage.userName = credentials.username;
    }

    service.deleteCookie = function() {
        $cookies.remove(localStorage.userName);
        localStorage.clear();
        NavigationService.navigateTo('/login')
    }

    service.getUserName = function() {
        return localStorage.userName;
    }

    return service;

}
cookiesService.$inject = ['$cookies', '$localStorage', 'NavigationService'];
app.factory('cookiesService', cookiesService);