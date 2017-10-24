app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('modalCtrl', modalCtrl);

function modalCtrl($scope, tableDetails, json, CofigService, $uibModalInstance, FormValidateService) {

    function getConfig(json) {
        CofigService.getConfig(json).then(function(data) {
            $scope.modalObj = data
        });
    }
    $scope.addPendingDetails = function() {
        pushTableData();
    }

    $scope.addCartDetails = function() {
        getTotal();
        pushTableData();
    }

    function pushTableData() {
        tableDetails.push($scope.fieldObj);
        $scope.fieldObj = {};
        $scope.close();
    }

    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }

    function getTotal() {
        $scope.fieldObj.Quantity = ($scope.fieldObj.Quantity) ? $scope.fieldObj.Quantity : 1;
        $scope.fieldObj.Total = $scope.fieldObj.Quantity * $scope.fieldObj.Price;
    }


    function init() {
        $scope.fieldObj = {}
        getConfig(json);
    };
    init()

};