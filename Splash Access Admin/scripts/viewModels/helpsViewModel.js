'use strict';

app.models.helpsViewModel = (function() {
    var init = function() {
        var editor = new $.fn.dataTable.Editor( {
            "ajax": "/libs/dataTables/php/helps.php",
            "table": "#helps-table",
            "fields": [
                {
                    "label": "Title",
                    "name": "Title"
                },
                {
                    "label": "Description",
                    "name": "Description"
                }
            ]
        } );

        $('#helps-table').DataTable( {
            "dom": "Tfrtip",
            "ajax": "/libs/dataTables/php/helps.php",
            "columns": [
                {
                    "data": "Title"
                },
                {
                    "data": "Description"
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