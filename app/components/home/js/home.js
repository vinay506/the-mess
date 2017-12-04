app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('homeController', homeController);

function homeController($scope, $cookies, CofigService, $uibModal, QueryService, ApiService) {

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

    $scope.saveDetails = function() {
        var query = QueryService.prepareBaseUrl('addDetails')
        ApiService.post(query, $scope.cartDetails).then(function(response) {
            if (response.error) {
                console.log("Getting error in add details")
            }
            if (response.data) {
                console.log("Saved Successfully");
                $scope.cartDetails = [];
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