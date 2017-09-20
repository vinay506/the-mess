app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('homeController', homeController);

function homeController($scope, $cookies, CofigService) {
    $scope.addCartDetails = function() {
        getTotal();
        $scope.cartDetails.push($scope.cart);

        $scope.cart = {};
    }

    $scope.checkFieldType = function(field) {
        if (field.type == "Aggregated" || field.type == "actions") {
            return false;
        }
        return true;
    }

    function getTotal() {
        $scope.cart.Total = $scope.cart.Quantity * $scope.cart.Price;
    }

    function getConfig(json) {
        CofigService.getConfig(json).then(function(data) {
            $scope.cartView = data
        });
    }

    function init() {
        $scope.cartDetails = [];
        $scope.cart = {}
        $scope.message = "your seeing this message because your In homeController";
        console.log("iamin homeController::", $scope.message);
        getConfig("home-view");
    }
    init()

};