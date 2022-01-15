$(function(){

    var model={
        "info":"1234"   //Parameter your wise
    };
    $('#DTGrid').DataTable({
 
                "processing": true,
 
                "serverSide": true,
 
                "filter": false,
 
                "searching": false,
 
                "sPaginationType": "full",
 
                "aaSorting": [[2, 'desc']],
 
                "bInfo": true,
 
                "pageLength": 5,
 
                fixedHeader: true,
 
                scrollX: false,
 
                scroller: true,
 
                scrollY: 310,
 
                scrollCollapse: true,
 
                lengthChange: true,
 
                columnDefs: [{ targets: "_all", orderable: false}],
                language: {
 
                    paginate: {
 
                        first: '<i class="glyphicon glyphicon-step-backward">',
 
                        previous: '<i class="glyphicon glyphicon-backward">',
 
                        next: '<i class="glyphicon glyphicon-forward" >',
 
                        last: '<i class="glyphicon glyphicon-step-forward">'
 
                    } 
                },
 
                "ajax": {
 
                    "url": '@Url.Action("GetPaginationDraw","Pagination")',
 
                    "data": function (d) {
 
                        d.PaginationVM = JSON.stringify(model);
 
                    },
 
                    "type": "POST",
 
                    "dataSrc": function (json) {
 
                        if (Layout.DEK != 'true')
 
                            return JSON.parse(json.data).Table
 
                        else
 
                            return JSON.parse(json.data).Table
 
 
 
                    }
 
                },
 
                "data": data,
 
                "drawCallback": function (setting) {
                },
 
                "initComplete": function (settings, json) {
 
                    debugger;
                    if ($.fn.DataTable.isDataTable('#DTGrid')) {
 
                            $('#DTGrid').DataTable().destroy();
 
                        }
 
                        $('#DTGrid').empty();
 
                        var data = JSON.parse('{"Table":[{"":"No Data Available"}]}');
 
                        $('#DTGrid').DataTable({
 
                            data: data.Table,
 
                            columns: getColModel(data.Table, false, false, false),
 
                            lengthChange: false,
 
                            "bDestroy": '',
 
                            "searching": false,
 
                            "paging": false,
 
                            "info": false
 
                        });
 
 
 
                    
 
                },
 
                "bDestroy": true
 
            });
        
});
