app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('loginController', loginController);

function loginController($scope, AuthService, NotificationService, cookiesService, NavigationService, ApiService, QueryService) {

    function references() {
        var ref = {};
        ref.setInvalidNotification = function() {
            setInvalidNotification()
        }
        return ref;
    }
    $scope.togglePsw = function() {
        $scope.showpassword = !$scope.showpassword;
    }

    function setInvalidNotification() {
        NotificationService.errorNotification('Please enter valid credentials', 'top', 'right');
        $scope.reset();
    }

    $scope.submit = function() {
        var query = QueryService.prepareBaseUrl('login')
        ApiService.post(query, $scope.login).then(function(response) {
            if (response) {
                AuthService.createSession(response.data, references());
            }
        });

    }

    $scope.reset = function() {
        $scope.login.username = '';
        $scope.login.password = '';
    }

    function isUserLoggedIn() {
        if (cookiesService.getUserName()) {
            NavigationService.navigateTo('/home');
        }
    }

    function init() {
        $scope.showpassword = false;
        $scope.login = {};
        $scope.message = "your seeing this message because your In loginController";
        console.log("iamin loginController::", $scope.message);
        isUserLoggedIn()
    }
    init()

};