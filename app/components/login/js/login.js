app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('loginController', loginController);

function loginController($scope, AuthService, NotificationService, cookiesService, NavigationService) {

    function references() {
        var ref = {};
        ref.setInvalidNotification = function() {
            setInvalidNotification()
        }
        return ref;
    }

    function setInvalidNotification() {
        NotificationService.errorNotification('Please enter valid credentials');
        $scope.reset();
    }

    $scope.submit = function() {
        AuthService.createSession($scope.login, references());
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
        $scope.login = {};
        $scope.message = "your seeing this message because your In loginController";
        console.log("iamin loginController::", $scope.message);
        isUserLoggedIn()
    }
    init()

};