app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('homeController', homeController);

function homeController($scope, $cookies, CofigService, $uibModal) {

    $scope.openAddCartModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: '/app/components/modal/modal.html',
            controller: 'modalCtrl',
            resolve: {
                tableDetails: function() {
                    return $scope.cartDetails
                },
                json: function() {
                    return "add-cart"
                }
            }
        });

    }



    function getConfig(json) {
        CofigService.getConfig(json).then(function(data) {
            $scope.cartView = data
        });
    }

    function init() {
        $scope.cartDetails = [];
        $scope.message = "your seeing this message because your In homeController";
        console.log("iamin homeController::", $scope.message);
        getConfig("home-view");
    }
    init()

};