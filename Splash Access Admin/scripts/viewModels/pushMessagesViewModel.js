'use strict';

app.models.pushMessagesViewModel = (function() {
    var provider = app.data.defaultprovider;
    var $macAddresses;
    var $select;

    var messageModel = new kendo.data.DataSource({
        title: '',
        message: ''
    });

    var init = function() {
        provider.data('MacAddresses').get().then(
            function(data) {
                $select = $("<select multiple='multiple' data-placeholder='Select mac addresses...'/>");
                $.each(data.result, function(index, macAddress) {
                    $select.append("<option value='" + macAddress.Id + "'>" + macAddress.Identifier + " ( " + macAddress.MacAddress + " )</option>");
                });
                $('#mac-addresses').html($select);
                $macAddresses = $select.kendoMultiSelect().data('kendoMultiSelect');
            });
    };

    var send = function() {
        $('.error').empty();
        $('.info').empty();

        var macAddresses = $macAddresses.value().toString().split(',');
        if (messageModel.message && macAddresses.length > 0) {
            var filter = [];
            $.each(macAddresses, function(index, macAddress) {
                filter.push('{\"Parameters.macAddresses\":\"' + macAddress + '\"}');
            });
            filter = filter.join(',');
            var notification = {
                'Filter': "{\"$or\":[" + filter + "]}",
                'Android': {
                    'data': {
                        'title': messageModel.title,
                        'message': messageModel.message
                    }
                },
                'IOS': {
                    'aps': {
                        'alert': messageModel.message,
                        'badge': 1,
                        'sound': 'default'
                    }
                },
                'WindowsPhone': {
                    'Toast': {
                        'Title': messageModel.title,
                        'Message': messageModel.message
                    }
                }
            }

            provider.push.send(notification,
                function(data) {
                    $('.info').text('Successfully sent a push message.');
                },
                function(error) {
                    $('.error').text('Failed to send a push message.');
                });
        } else {
            $('.error').text('Please input both message and mac addresses.');
        }
    };

    var viewModel = kendo.observable({
        messageModel: messageModel,
        init: init,
        send: send
    });
    
    return viewModel;
})();