/***********************************************************************************************************************
 * SIZE GUIDE TABLE
 * ********************************************************************************************************************/
var sgt_sizeGuideSpec = { };
var sgt_sizeGuideList = [];

function sgt_initSizeGuideTable(mode)
{
    var startTempId = -10;
    sgt_sizeGuideList = [ ];
    /*for(var a=0; a<sgt_sizeGuideSpec.cols.length; a++){
        for(var b=0; b<sgt_sizeGuideSpec.rows.length; b++){
            startTempId--;
            if(typeof sgt_sizeGuideList[sgt_sizeGuideSpec.cols[a].id] == 'undefined'){
                sgt_sizeGuideList[sgt_sizeGuideSpec.cols[a].id] = {};
            }
            sgt_sizeGuideList[sgt_sizeGuideSpec.cols[a].id][sgt_sizeGuideSpec.rows[b].id] = {id:startTempId--, cm:'', inc:''};
        }
    }*/

    if(mode === 'create') {
        sgt_sizeGuideSpec = {
            cols: [{id:1, val:''}, {id:2, val:''}, {id:3, val:''}],
            rows:[{id:1, val:''}, {id:2, val:''}]
        }

        sgt_sizeGuideList = [ ];
        sgt_sizeGuideList[1] = [];
        sgt_sizeGuideList[1][1] = {id: startTempId--, cm: '', inc: ''};
        sgt_sizeGuideList[1][2] = {id: startTempId--, cm: '', inc: ''};
        sgt_sizeGuideList[2] = [];
        sgt_sizeGuideList[2][1] = {id: startTempId--, cm: '', inc: ''};
        sgt_sizeGuideList[2][2] = {id: startTempId--, cm: '', inc: ''};
        sgt_sizeGuideList[3] = [];
        sgt_sizeGuideList[3][1] = {id: startTempId--, cm: '', inc: ''};
        sgt_sizeGuideList[3][2] = {id: startTempId--, cm: '', inc: ''};
    }
    else{
        sgt_sizeGuideSpec = {
            cols: [{id:1, val:'CHEST'}, {id:2, val:'LENGTH'}, {id:3, val:'SLEEVE'}],
            rows:[{id:1, val:'S'}, {id:2, val:'M'}, {id:3, val:'L'}, {id:4, val:'XL'}]
        }

        sgt_sizeGuideList = [ ];

        sgt_sizeGuideList[1] = [];
        sgt_sizeGuideList[1][1] = {id: startTempId--, cm: '49.5', inc: '19.5'};
        sgt_sizeGuideList[1][2] = {id: startTempId--, cm: '54.6', inc: '21.5'};
        sgt_sizeGuideList[1][3] = {id: startTempId--, cm: '54.6', inc: '21.5'};
        sgt_sizeGuideList[1][4] = {id: startTempId--, cm: '64.8', inc: '25.5'};

        sgt_sizeGuideList[2] = [];
        sgt_sizeGuideList[2][1] = {id: startTempId--, cm: '71.1', inc: '28'};
        sgt_sizeGuideList[2][2] = {id: startTempId--, cm: '73.7', inc: '29'};
        sgt_sizeGuideList[2][3] = {id: startTempId--, cm: '73.7', inc: '30'};
        sgt_sizeGuideList[2][4] = {id: startTempId--, cm: '78.7', inc: '33'};

        sgt_sizeGuideList[3] = [];
        sgt_sizeGuideList[3][1] = {id: startTempId--, cm: '22.9', inc: '9'};
        sgt_sizeGuideList[3][2] = {id: startTempId--, cm: '23.1', inc: '9.5'};
        sgt_sizeGuideList[3][3] = {id: startTempId--, cm: '24.1', inc: '10'};
        sgt_sizeGuideList[3][4] = {id: startTempId--, cm: '26.7', inc: '10.5'};
    }

    renderTable();
}


function sgt_removeCol()
{
    collectDataToModel();
    console.log('remove column');
    if(sgt_sizeGuideSpec.cols.length<=1){
        alert('Not allowed to remove first column!');
        return;
    }
    else{
        var removedCol = sgt_sizeGuideSpec.cols[sgt_sizeGuideSpec.cols.length-1];
        sgt_sizeGuideSpec.cols = sgt_sizeGuideSpec.cols.slice(0, -1);

        //remove data
        for(var b=0; b<sgt_sizeGuideSpec.rows.length; b++){
            delete sgt_sizeGuideList[removedCol.id][sgt_sizeGuideSpec.rows[b].id];
        }
        renderTable();
    }
}

function sgt_addCol()
{
    collectDataToModel();
    console.log('add column');
    var d = new Date();
    var time = d.getTime() * -1;
    var startTempId = d.getTime() * -1;
    var col = {id:time, val:''};
    sgt_sizeGuideSpec.cols.push(col);
    sgt_sizeGuideList[col.id] = new Array();
    for(var b=0; b<sgt_sizeGuideSpec.rows.length; b++){
        startTempId--;
        sgt_sizeGuideList[col.id][sgt_sizeGuideSpec.rows[b].id] = {id:startTempId--, cm:'', inc:''};
    }

    console.log(sgt_sizeGuideList);
    renderTable();
}

function sgt_removeRow()
{
    collectDataToModel();
    console.log('remove row');
    if(sgt_sizeGuideSpec.rows.length<=1){
        alert('Not allowed to remove first row!');
        return;
    }
    else{
        var removedRow = sgt_sizeGuideSpec.rows[sgt_sizeGuideSpec.rows.length-1];
        sgt_sizeGuideSpec.rows = sgt_sizeGuideSpec.rows.slice(0, -1);

        //remove data
        for(var a=0; a<sgt_sizeGuideSpec.cols.length; a++){
            delete sgt_sizeGuideList[sgt_sizeGuideSpec.cols[a].id][removedRow.id];
        }
        renderTable();
    }

}

function sgt_addRow()
{
    collectDataToModel();
    console.log('add row');
    var d = new Date();
    var time = d.getTime() * -1;
    var startTempId = d.getTime() * -1;
    var row = {id:time, val:''};
    sgt_sizeGuideSpec.rows.push(row);

    for(var a=0; a<sgt_sizeGuideSpec.cols.length; a++){
        startTempId--;
        sgt_sizeGuideList[sgt_sizeGuideSpec.cols[a].id][row.id] = {id:startTempId--, cm:'', inc:''};
    }
    console.log(sgt_sizeGuideList);
    renderTable();
}

function collectDataToModel()
{
    for(var a=0; a<sgt_sizeGuideSpec.cols.length; a++){
        var col = sgt_sizeGuideSpec.cols[a];
        col.val = $('#sgt_head_input'+col.id).val();
    }

    for(var b=0; b<sgt_sizeGuideSpec.rows.length; b++){
        var row = sgt_sizeGuideSpec.rows[b];
        row.val = $('#sgt_row_intput_'+row.id).val();
    }

    for(var a=0; a<sgt_sizeGuideSpec.cols.length; a++){
        for(var b=0; b<sgt_sizeGuideSpec.rows.length; b++){
            var col = sgt_sizeGuideSpec.cols[a];
            var row = sgt_sizeGuideSpec.rows[b];
            var data = sgt_sizeGuideList[col.id][row.id];

            data.cm = $('#sgt_input_cm_'+data.id).val();
            data.inc = $('#sgt_input_inc_'+data.id).val();
        }
    }
}

function renderTable()
{
    //TODO render column
    var colBox = $('#sizeGuideCols');
    colBox.empty();
    for(var i=0;i<sgt_sizeGuideSpec.cols.length;i++){
        colBox.append('<col width="400px" />');
    }

    //TODO render table header
    var headBox = $('#sizeGuideHT');
    headBox.empty();
    headBox.append('<th></th>');
    for(var i=0;i<sgt_sizeGuideSpec.cols.length;i++){
        var col = sgt_sizeGuideSpec.cols[i];
        headBox.append('<th><input id="sgt_head_input'+col.id+'" value="'+col.val+'" type="text" class="form-control" placeholder="Enter Column Name"></th>');
    }

    //TODO render table body
    var tbody = $('#sizeGuideHB');
    tbody.empty();
    for(var b=0; b<sgt_sizeGuideSpec.rows.length; b++){
        var row = sgt_sizeGuideSpec.rows[b];
        var content = '';
        for(var a=0; a<sgt_sizeGuideSpec.cols.length; a++){
            var data = sgt_sizeGuideList[sgt_sizeGuideSpec.cols[a].id][row.id];
            content += `
                <td>
                  <div class="row gx-2">
                     <div class="col-6">
                        <div class="position-relative inner-size">
                           <input id="sgt_input_cm_`+data.id+`" value="`+data.cm+`" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');" placeholder="Enter Number">
                           <div class="thb">CM</div>
                        </div>
                     </div>
                     <div class="col-6">
                        <div class="position-relative inner-size">
                           <input id="sgt_input_inc_`+data.id+`" value="`+data.inc+`" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');" placeholder="Enter Number">
                           <div class="thb">INCHES</div>
                        </div>
                     </div>
                  </div>
               </td>`;
        }


        tbody.append(`
            <tr>
               <th><input id="sgt_row_intput_`+row.id+`" value="`+row.val+`" type="text" class="form-control" placeholder="Enter Row Name"></th>
               `+content+`
           </tr>
        `);
    }
}


/***********************************************************************************************************************
 * SIZE GUIDE MODAL
 * ********************************************************************************************************************/
function sgt_onCheckAll(el, itemClass)
{
    var cb = $(el);
    if( cb.is(':checked') ){
        $('.'+itemClass).prop( 'checked', true );
        $('#btn_selected_count').html('Add ('+$('.'+itemClass).length+')');
    }
    else{
        $('.'+itemClass).prop( 'checked', false);
        $('#btn_selected_count').html('Add (0)');
    }
}

function sgt_onCheckOne(checkALlId, itemClass)
{
    var total = $('.'+itemClass).length;
    var checked = 0;
    $('.'+itemClass).each(function() {
        if($(this).is(':checked') ){
            checked += 1;
        }
    });

    if(total==checked){
        $('#'+checkALlId).prop( 'checked', true );
    }
    else{
        $('#'+checkALlId).prop( 'checked', false );
    }
    $('#btn_selected_count').html('Add ('+checked+')');
}

