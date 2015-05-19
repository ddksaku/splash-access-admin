'use strict';

app.models.ibeaconsViewModel = (function() {
    var init = function() {
        var editor = new $.fn.dataTable.Editor( {
            "ajax": "/libs/dataTables/php/ibeacons.php",
            "table": "#ibeacons-table",
            "fields": [
                {
                    "label": "Identifier",
                    "name": "Identifier"
                },
                {
                    "label": "Uuid",
                    "name": "Uuid"
                },
                {
                    "label": "Minor",
                    "name": "Minor"
                },
                {
                    "label": "Major",
                    "name": "Major"
                },
                {
                    "label": "Enter Title",
                    "name": "EnterTitle"
                },
                {
                    "label": "Enter Message",
                    "name": "EnterMessage"
                }
            ]
        } );

        $('#ibeacons-table').DataTable( {
            "dom": "Tfrtip",
            "ajax": "/libs/dataTables/php/ibeacons.php",
            "columns": [
                {
                    "data": "Identifier"
                },
                {
                    "data": "Uuid"
                },
                {
                    "data": "Minor"
                },
                {
                    "data": "Major"
                },
                {
                    "data": "EnterTitle"
                },
                {
                    "data": "EnterMessage"
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