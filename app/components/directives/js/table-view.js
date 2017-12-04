var tableView = function(CofigService, $timeout, $injector, NotificationService) {
    return {
        restrict: 'EA',
        scope: {
            dataconf: "@",
            viewConfName: "@",
            update: "="

        },
        templateUrl: '/app/components/directives/html/tableViewTemplate.html',
        link: function(scope, elem, attrs) {

            function references() {
                var ref = {};
                ref.setTableData = function(data) {
                    scope.tableData = angular.copy(data);
                    scope.update = angular.copy(data.rows);
                };
                ref.getTableData = function() {
                    return scope.tableData;
                };
                return ref;
            }

            scope.$watch("update", function(val) {
                updateTableData();
            }, true)

            function getConfig(json, name) {
                CofigService.getConfig(json).then(function(data) {
                    scope[name] = data;
                });
            }

            function updateTableData() {
                if (scope.tableData && scope.update) {
                    scope.tableData.rows = angular.copy(scope.update);
                }
            }
            scope.edit = function(row, params) {
                console.log("iam in edit");
            }


            scope.delete = function(row, params) {
                NotificationService.confirmNotification(function() {
                    var service = $injector.get(params.service);
                    service[params.method](row, references());
                })

            }


            function init() {
                getConfig(scope.viewConfName, "view");
                getConfig(scope.dataconf, "tableData");
            }
            init();
        }
    }
}

tableView.$inject = ['CofigService', '$timeout', '$injector', 'NotificationService'];
app.directive('tableView', tableView);