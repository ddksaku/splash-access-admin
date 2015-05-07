(function() {
    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app = {
        models: {},
        data: {},
        settings: {},

        showAlert: function(message, title, callback) {
            if (navigator.notification) {
                navigator.notification.alert(message, callback || function () {}, title, 'OK');
            } else {
                alert(message);
            }
        },

        showError: function(message) {
            this.showAlert(message, 'Error occured');
        }
    };

    var bootstrap = function() {
        $(function() {
            app.mobileApp = new kendo.mobile.Application(document.body, {
                // you can change the default transition (slide, zoom or fade)
                transition: 'slide',

                // comment out the following line to get a UI which matches the look
                // and feel of the operating system
                skin: 'flat',

                // the application needs to know which view to load first
                initial: 'scripts/views/logInView.html'
            });
        });
    };

    bootstrap();

    window.app = app;
}());