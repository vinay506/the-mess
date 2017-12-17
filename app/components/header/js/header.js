app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('headerCtrL', headerCtrL);

function headerCtrL($scope, cookiesService, CofigService, NavigationService, $timeout) {
    $scope.activatePage = function(item) {
        _.each($scope.menu.Pages, function(page) {
            if (page.name == item.name) {
                page.isActive = true;
                NavigationService.navigateTo(page.url);
            } else {
                page.isActive = false
            }
        })
    }
    $scope.navigateTo = function(item) {
        NavigationService.navigateTo(item.url);
    }
    $scope.logOut = function() {
        cookiesService.deleteCookie();
    }
    $scope.getUserName = function() {
        return cookiesService.getUserName();
    }
    $timeout(function function_name(argument) {
        $(".dropdown-toggle").dropdown();
    }, 30);

    function init() {
        CofigService.getConfig('menu').then(function(data) {
            $scope.menu = angular.copy(data);
        });
    }
    init()

};