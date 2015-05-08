inputField.focus();
inputField.select();

//********** this passes the inputField value into createListItem **********
function addItem () {
	
	var addThis = document.getElementById('inputField').value;

    //********** this prevents the addButton from adding a blank entry, single space, or a double space ********** 
    if (addThis == '' || addThis == ' ' || addThis == '  ') {
        return false;
    }

	createListItem(addThis);  
    
    inputField.focus();
    inputField.select();
}

//********** listTotal is used to give spans and checkboxes unique ids, it is incremented in the createListItem function **********
var listTotal = 0;

//********** createListItem creates a checkbox and span for the text content **********
function createListItem (addThis) {
    listTotal++;
        
    var item = document.createElement('li');
    item.id = 'item_' + listTotal;
    
var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'chkbx_' + listTotal;
    checkbox.onclick = changeItem;
    
    var span = document.createElement('span');
    span.innerText = addThis;
    span.id = 'span_' + listTotal;

    item.appendChild(checkbox);
    item.appendChild(span);    
    toDoList.appendChild(item);    
}

var checkedItem;

//********** changeItem saves the list item whose checkbox was ticked as variable checkedItem, "this" refers to the ticked checkbox **********
function changeItem () {
    if (this.checked) {
    var chkbxId = this.id.replace('chkbx_', '');
    checkedItem = document.getElementById('span_' + chkbxId);
    console.log(checkedItem);
    }
}

//********** these buttons need a checkbox to be ticked to pass checkedItem in **********
function editItem () {      
    var replacedText = prompt('Edit the item below:');
    checkedItem.innerHTML = replacedText;
    console.log(checkedItem.innerHTML);      
}

function markDone () {
    checkedItem.style.textDecoration = 'line-through';
}

function removeItem () {
    checkedItem.parentNode.style.display = 'none';
}

        
//********** Button event listeners **********
document.getElementById('addButton').addEventListener('click', addItem);

document.getElementById('editItemButton').addEventListener('click', editItem);

document.getElementById('markDoneButton').addEventListener('click', markDone);

document.getElementById('removeItemButton').addEventListener('click', removeItem);


