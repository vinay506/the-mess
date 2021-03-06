app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('modalCtrl', modalCtrl);

function modalCtrl($scope, tableDetails, json, CofigService, $uibModalInstance, FormValidateService, $filter) {

    function getConfig(json) {
        CofigService.getConfig(json).then(function(data) {
            $scope.modalObj = data
        });
    }
    $scope.addPendingDetails = function() {
        $scope.fieldObj.Balance = getBalance()
        pushTableData();
    }

    function getBalance() {
        var amount = 4000;
        var balance = 0;
        balance = amount - ($scope.fieldObj.Deposited - $scope.fieldObj.Borrowed);
        return balance;
    }

    $scope.addCartDetails = function() {
        getTotal();
        $scope.fieldObj.date = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');
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