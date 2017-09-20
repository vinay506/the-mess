app
    // =========================================================================
    // Base controller for common functions
    // =========================================================================
    .controller('messDetailsCtrls', messDetailsCtrls);

function messDetailsCtrls($rootScope, $scope) {

    function init() {
        $scope.message = "your seeing this message because your In messDetailsCtrls";
        console.log("iamin messDetailsCtrls::", $scope.message);
        $scope.startDate = new Date();
        $scope.endDate = new Date();
    }
    init()

};