var app_js_files = [
    'app/app.js',
    'app/services/NavigationService.js',
    'app/components/main.js',
    'app/components/login/js/login.js',
    'app/services/ApiService.js',
    'app/services/ConfigService.js',
    'app/services/cookiesService.js',
    'app/services/AuthService.js',
    'app/components/home/js/home.js',
    'app/components/header/js/header.js',
    'app/services/NotificationService.js',
    'app/components/mess-details/js/messDetails.js',
    'app/components/pendings/js/pendings.js',
    'app/components/directives/js/uib-date-picker.js',
    'app/components/directives/js/table-view.js',
    'app/services/TableService.js'

]

var vendor_js_files = [
    'app/assets/js/jquery.min.js',
    'app/assets/js/bootstrap.min.js',
    'app/assets/js/angular.min.js',
    'app/assets/js/angular-route.min.js',
    'app/assets/js/angular-ui-notification.js',
    'app/assets/js/angular-cookies.min.js',
    'app/assets/js/ngStorage.js',
    'app/assets/js/angular-animate.min.js',
    'app/assets/js/angular-sanitize.min.js',
    'app/assets/js/ui-bootstrap-tpls.js',
    'app/assets/js/sweetalert2.min.js',
    'app/assets/js/nya-bs-select.min.js',
    'app/assets/js/SweetAlert.min.js',
    'app/assets/js/sweet-alert.min.js',
    'app/assets/js/lodash.min.js'

]

var vendor_css_files = [
    'app/assets/css/bootstrap.min.css',
    'app/assets/css/angular-ui-notification.css',
    'app/assets/css/nya-bs-select.min.css',
    'app/assets/css/font-awesome.min.css',
    'app/assets/css/sweet-alert.css'
]


var app_tpl = [
    'app/components/**/*.html'
]

var app_css_files = [
    'app/components/**/*.css'
]

var app_json_files = [
    'app/components/**/*.json'
]


var destinations = {
    js: 'dist/js',
    css: 'dist/css',
    html: 'dist/html',
    image: 'dist/images',
    json: 'dist/json'
};
var app_images = [
    'app/components/**/*.jpg'
]

module.exports = {
    APP_JS: app_js_files,
    VENDOR_JS: vendor_js_files,
    VENDOR_CSS: vendor_css_files,
    APP_CSS: app_css_files,
    APP_TPL: app_tpl,
    APP_IMAGES: app_images,
    APP_JSON: app_json_files,
    DESTINATIONS: destinations
}