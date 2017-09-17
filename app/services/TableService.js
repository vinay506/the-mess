var TableService = function() {
    var service = {};

    service.deleteCartItems = function(data, ref) {
        var tableData = ref.getTableData();
        tableData.rows = _.reject(tableData.rows, function(row) {
            return angular.equals(row, data)
        });
        ref.setTableData(tableData);
    }

    return service;

}
TableService.$inject = [];
app.factory('TableService', TableService);