'use strict';

(function() {
    //create a reference for the data provider to be used throughout the app
    app.data.defaultprovider = new Everlive({
        apiKey: app.settings.everlive.apiKey,
        scheme: app.settings.everlive.scheme
    });
}());