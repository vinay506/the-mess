app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('pendingsCtrls', pendingsCtrls);

function pendingsCtrls(CofigService, $scope) {
    function getConfig(json, obj) {
        CofigService.getConfig(json).then(function(data) {
            $scope[obj] = data;
        });
    }
    $scope.onChanges = function() {

    }


    function init() {
        $scope.message = "your seeing this message because your In pendingsCtrls";
        console.log("iam in pendingsCtrls::", $scope.message);
        getConfig("users-list", "users")

    }
    init();

};