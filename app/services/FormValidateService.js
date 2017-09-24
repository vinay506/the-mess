var FormValidateService = function(NotificationService) {
    var service = {};

    service.isValid = function(form, fields, next) {
        var invalidEntries = _.filter(fields, function(field) { return form[field.Label].$invalid });
        if (invalidEntries.length > 0) {
            NotificationService.errorNotification('Please enter valid details', 'top', 'middle');
        } else if (next) {
            next();
        }
    }

    return service;

}
FormValidateService.$inject = ['NotificationService'];
app.factory('FormValidateService', FormValidateService);