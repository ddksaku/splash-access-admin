'use strict';

app.models.logInViewModel = (function() {
    var provider = app.data.defaultprovider;

    var logIn = function() {
        $('.error').empty();

        if (viewModel.model.username && viewModel.model.password) {
            provider.Users.login(viewModel.model.username, 
                viewModel.model.password,
                function(data) {
                    if (data && data.result) {
                        provider.Users.currentUser(function(data) {
                            app.user = data.result;
                            if (app.user.Role === '77cf6600-f3d2-11e4-80f8-e52d828b9da9') {
                                app.mobileApp.navigate('scripts/views/pushMessagesView.html');
                            } else {
                                $('.error').text('Invalid user name or password.');
                            }
                        });
                    }
                },
                function(error) {
                    $('.error').text('Invalid user name or password.');
                });
        } else {
            $('.error').text('Please input both user name and password.');
        }
    };

    var viewModel = kendo.observable({
        model: {
            username: '',
            password: ''
        },

        logIn: logIn     
    });
    
    return viewModel;
})();