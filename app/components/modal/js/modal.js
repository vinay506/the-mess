app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('modalCtrl', modalCtrl);

function modalCtrl($scope, tableDetails, json, CofigService, $uibModalInstance) {

    function getConfig(json) {
        CofigService.getConfig(json).then(function(data) {
            $scope.modalObj = data
        });
    }

    $scope.addCartDetails = function() {
        getTotal();
        tableDetails.push($scope.fieldObj);
        $scope.fieldObj = {};
        $scope.close();
    }

    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }

    function getTotal() {
        $scope.fieldObj.Total = $scope.fieldObj.Quantity * $scope.fieldObj.Price;
    }


    function init() {
        $scope.fieldObj = {}
        getConfig(json);
        console.log("tableDetails :::", tableDetails);
    }
    init()

};