var datePicker = function() {
    return {
        restrict: 'EA',
        scope: {
            ngModel: "=",
            label: "@"
        },
        templateUrl: '/app/components/directives/html/datepickerTemplate.html',
        link: function(scope, elem, attrs) {
            console.log("::datePicker ::");

            function disabled(data) {
                var date = data.date,
                    mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            }
            scope.openPopup = function() {
                scope.popup.opened = true;
            };
            scope.$watch('ngModel', function() {
                console.log("ngModel:::", scope.ngModel);
            })

            function init() {
                scope.format = 'dd-MMMM-yyyy';
                scope.popup = {
                    opened: false
                };
                console.log(":::lable::", scope.label);
                scope.dateOptions = {
                    dateDisabled: disabled,
                    formatYear: 'yy',
                    maxDate: new Date(2020, 5, 22),
                    minDate: new Date(),
                    startingDay: 1
                };


            }
            init();
        }
    }
}

datePicker.$inject = [];
app.directive('datePicker', datePicker);
/*app.directive("datePicker", ['$state', '$filter', function($state, $filter) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/views/common/table.html',
        scope: {
            schema: '=',
            records: '=',
            updateFn: '&',
            deleteFn: '&',
            view: '&',
            formatter: '&'
        },
        link: function(scope, elem, attrs) {

        }
    }
}])*/