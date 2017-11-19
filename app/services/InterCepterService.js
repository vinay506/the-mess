var Interceptor = function() {
    var Interceptor = {

        request: function(config) {
            if (config) {
                // console.log("config::", config);
            }
            return config;
        },

        response: function(config) {
            return config;
        }

    }
    return Interceptor;

}
Interceptor.$inject = [];
app.factory('Interceptor', Interceptor);


app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('Interceptor');
}]);