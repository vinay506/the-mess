var AuthService = function(CofigService, NavigationService, cookiesService) {
    var service = {};

    service.createSession = function(credentials, ref) {

        CofigService.getConfig('credentials').then(function(data) {
            validateUser(data, credentials, ref);
        });
    }

    function validateUser(config, credentials, ref) {
        var user = _.filter(config, function(item) {
            return (item.username === credentials.username && item.password === credentials.password)
        });

        if (user && user.length > 0) {
            NavigationService.navigateTo('/home');
            cookiesService.setCookies(credentials);

        } else {
            NavigationService.navigateTo('/login');
            ref.setInvalidNotification()
        }

    }



    return service;

}
AuthService.$inject = ['CofigService', 'NavigationService', 'cookiesService'];
app.factory('AuthService', AuthService);