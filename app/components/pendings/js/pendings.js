app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('pendingsCtrls', pendingsCtrls);

function pendingsCtrls(CofigService, $scope, $uibModal, QueryService, ApiService) {
    /* function getConfig(json, obj) {
        CofigService.getConfig(json).then(function(data) {
            $scope[obj] = data;
        });
    }
*/
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

    function getUsers() {
        var query = QueryService.prepareBaseUrl('getUsers');
        ApiService.get(query).then(function(response) {
            if (response && response.data) {
                $scope.usersList = response.data;
            }
        });
    }

    function init() {
        $scope.usersList = [];
        $scope.pendingDetails = [];
        // getConfig("users-list", "users");
        initTableType();
        getUsers()
    }
    init();

};