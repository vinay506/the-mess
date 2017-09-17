var NotificationService = function(Notification, SweetAlert) {
    var service = {};

    service.errorNotification = function(message) {
        Notification.error({ message: message, positionY: 'top', positionX: 'right', delay: 1500 });
    }

    service.confirmNotification = function(next) {
        SweetAlert.swal({
                title: "Are you sure?", //Bold text
                text: "Your will not be able to recover this imaginary file!", //light text
                type: "warning", //type -- adds appropiriate icon
                showCancelButton: true, // displays cancel btton
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false, //do not close popup after click on confirm, usefull when you want to display a subsequent popup
                closeOnCancel: false
            },
            function(isConfirm) { //Function that triggers on user action.
                if (isConfirm) {
                    if (next) {
                        next();
                    }
                    SweetAlert.swal("Deleted!");
                } else {
                    SweetAlert.swal("Your file is safe!");
                }
            });
    }

    return service;

}
NotificationService.$inject = ['Notification', 'SweetAlert'];
app.factory('NotificationService', NotificationService);