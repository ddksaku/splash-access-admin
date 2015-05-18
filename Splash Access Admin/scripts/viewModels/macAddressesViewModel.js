'use strict';

app.models.macAddressesViewModel = (function() {
    var init = function() {
        var editor = new $.fn.dataTable.Editor( {
            "ajax": "/libs/dataTables/php/macAddresses.php",
            "table": "#macAddresses-table",
            "fields": [
                {
                    "label": "Identifier",
                    "name": "Identifier"
                },
                {
                    "label": "Mac Address",
                    "name": "MacAddress"
                }
            ]
        } );

        $('#macAddresses-table').DataTable( {
            "dom": "Tfrtip",
            "ajax": "/libs/dataTables/php/macAddresses.php",
            "columns": [
                {
                    "data": "Identifier"
                },
                {
                    "data": "MacAddress"
                }
            ],
            "tableTools": {
                "sRowSelect": "os",
                "aButtons": [
                    { "sExtends": "editor_create", "editor": editor },
                    { "sExtends": "editor_edit",   "editor": editor },
                    { "sExtends": "editor_remove", "editor": editor }
                ]
            }
        } );
    };

    var viewModel = kendo.observable({
        init: init
    });
    
    return viewModel;
})();