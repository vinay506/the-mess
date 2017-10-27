app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('pendingsCtrls', pendingsCtrls);

function pendingsCtrls(CofigService, $scope, $uibModal) {
    function getConfig(json, obj) {
        CofigService.getConfig(json).then(function(data) {
            $scope[obj] = data;
        });
    }

    function initTableType() {
        $scope.tableTypes = [{ "type": "getDetails", "DisplayLabel": "Show Pendings" }, { "type": "addDetails", "DisplayLabel": "Add Pendings" }]
        $scope.tableType = { "type": "getDetails", "DisplayLabel": "Show Pendings" }
    }
    $scope.openAddPendingsModel = function() {
        var modalInstance = $uibModal.open({
            templateUrl: '/app/components/modal/modal.html',
            controller: 'modalCtrl',
            resolve: {
                tableDetails: function() {
                    return $scope.pendingDetails
                },
                json: function() {
                    return "add-pendings"
                }
            }
        });
    }


    function init() {
        $scope.pendingDetails = [];
        getConfig("users-list", "users");
        initTableType();
    }
    init();

};