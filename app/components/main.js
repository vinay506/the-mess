app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('mainController', mainController);

function mainController($rootScope, $scope, NavigationService, $localStorage) {

    function init() {
        $scope.message = "your seeing this message because your In mainController";
        console.log("iamin mainController::", $scope.message);
        console.log("iamin mainController::", $localStorage.userName);
        // $state.go('login')
        $rootScope.currentUser = angular.copy($localStorage.userName);
        if ($rootScope.currentUser) {
            NavigationService.navigateTo('/home');
        } else {
            NavigationService.navigateTo('/login');
        }
    }
    init()

};