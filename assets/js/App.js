function addPerson(btn) {
    var fname = document.getElementById('txtFName').value;
    var lname = document.getElementById('txtLName').value;

    var person = document.createElement('tr');
    person.onmouseover = function(){this.style.backgroundColor='rgba(233, 233, 233,60)'}
    person.onmouseout = function(){this.style.backgroundColor='white'}
    person.style.borderBottom = ".5px solid lightgray";

    var chkCell = document.createElement('td');
    chkCell.innerHTML = "<input type='checkbox' class='form-check-input' onclick='chkClick(this)' title='select the row'>";
    var fnCell = document.createElement('td');
    fnCell.appendChild(document.createTextNode(fname));
    var lnCell = document.createElement('td');
    lnCell.appendChild(document.createTextNode(lname));
    var opCell = document.createElement('td');

    var editLink = document.createElement('a');
    editLink.className = "btn btn-sm btn-outline-secondary lh-xs";
    editLink.href="#";
    editLink.innerHTML="Edit";
    var delLink = document.createElement('a');
    delLink.className = "btn btn-sm btn-outline-secondary lh-xs ms-1";
    delLink.href="#";
    delLink.innerHTML="Delete";
    opCell.appendChild(editLink);
    opCell.appendChild(delLink);

    delLink.onclick = function(){
        person.parentNode.removeChild(person);
        document.getElementById('doneBtn').parentNode.removeChild(doneBtn);
    }
    
    //editLink.onclick = editPerson(person);
    editLink.onclick = function(){
        person.className = "bg-edit";
        document.getElementById('txtFName').value = fname;
        document.getElementById('txtFName').focus();
        document.getElementById('txtLName').value = lname;
        var doneBtn = document.createElement('button');
        doneBtn.id = 'doneBtn';
        doneBtn.innerHTML = "Done";
        doneBtn.className = "btn btn-primary ms-3 mt-2";
        document.getElementById('inputDiv').appendChild(doneBtn);

        doneBtn.onclick = function() {
            person.className = "";
            fname = document.getElementById('txtFName').value;
            lname = document.getElementById('txtLName').value;
            fnCell.innerHTML = fname;
            lnCell.innerHTML = lname;
            document.getElementById('txtFName').value = "";
            document.getElementById('txtLName').value = "";
            doneBtn.parentNode.removeChild(doneBtn);
        }
    }
    person.appendChild(chkCell);
    person.appendChild(fnCell);
    person.appendChild(lnCell);
    person.appendChild(opCell);

    document.getElementById('tblPerson').appendChild(person);
}
function pressEnter1(e){
    if(e.keyCode==13)
        document.getElementById('txtLName').focus();            
}
function pressEnter2(e){
    if(e.keyCode==13 && document.getElementById('doneBtn'))
        document.getElementById('doneBtn').focus();
    else if(e.keyCode==13)
        document.getElementById('addBtn').focus();
}
function selectAll_1(t){
    t.select();
}
function selectAll_2(t){
    t.select();
}
function chkAll_click(chkAll){
    var tbl = document.getElementById('tblPerson');
    if(chkAll.checked){
        for(var i=1;i<tbl.childNodes.length;i++){
            tbl.childNodes[i].childNodes[0].childNodes[0].checked = "checked";
        }
    }
    else{
        for(var i=1;i<tbl.childNodes.length;i++){
            tbl.childNodes[i].childNodes[0].childNodes[0].checked = "";
        }
    }
}
function chkClick(chk){
    var table = document.getElementById('tblPerson');
    if(!chk.checked)
        document.getElementById('checkAll').checked = "";
    else
        for(var i=1;i<table.childNodes.length;i++){
            if(table.childNodes[i].childNodes[0].childNodes[0].checked)
                continue;
            else
                break;
        }
        if(i==table.childNodes.length){
            document.getElementById('checkAll').checked="checked";
        }
}
function deleteAll() {
    var table = document.getElementById("tblPerson");
    var boxes = table.getElementsByTagName('input');
    for(var i=1; i<boxes.length;){
        if(boxes[i].checked)
            table.removeChild(boxes[i].parentNode.parentNode);
        else
            i++;
    }
}
function showTitle(btn){
    btn.title = "Delete all the selected checks";
}