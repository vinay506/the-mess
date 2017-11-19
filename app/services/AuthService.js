var AuthService = function(NavigationService, cookiesService) {
    var service = {};

    service.createSession = function(data, ref) {
        if (data && data.length > 0) {
            NavigationService.navigateTo('/home');
            cookiesService.setCookies(data[0]);
        } else {
            NavigationService.navigateTo('/login');
            ref.setInvalidNotification()
        }
    }

    return service;

}
AuthService.$inject = ['NavigationService', 'cookiesService'];
app.factory('AuthService', AuthService);