'use strict';

app.models.logInViewModel = (function() {
    var provider = app.data.defaultprovider;

    var logIn = function() {
        provider.Users.login(viewModel.model.username, 
            viewModel.model.password,
            function(data) {
                if (data && data.result) {
                    provider.Users.currentUser(function(data) {
                        app.user = data.result;
                        if (app.user.Role === '77cf6600-f3d2-11e4-80f8-e52d828b9da9') {
                            app.mobileApp.navigate('scripts/views/pushMessagesView.html');
                        } else {
                            alert('User does not have admin permission.');
                        }
                    });
                }
            },
            function(error) {
                alert(JSON.stringify(error));
            });
    };

    var viewModel = kendo.observable({
        model: {
            username: 'admin',
            password: 'admin'
        },

        logIn: logIn     
    });
    
    return viewModel;
})();