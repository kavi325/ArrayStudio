// =========================
// Array Studio UI
// =========================

const input = document.getElementById("valueInput");
const addButton = document.getElementById("addBtn");
const clearButton = document.getElementById("clearBtn");

function addNewElement(){

    const value=input.value.trim();

    if(value===""){

        input.focus();
        return;

    }

    addElement(value);

    renderAll();

    input.value="";

    input.focus();

}

addButton.addEventListener("click",addNewElement);

input.addEventListener("keydown",function(event){

    if(event.key==="Enter"){

        addNewElement();

    }

});

clearButton.addEventListener("click",function(){

    clearArray();

    renderAll();

    input.focus();

});

function deleteChip(index){

    removeElement(index);

    renderAll();

}

function editChip(index){

    const current=getArray()[index].value;

    const newValue=prompt("Edit value:",current);

    if(newValue===null) return;

    if(newValue.trim()==="") return;

    editElement(index,newValue);

    renderAll();

}

renderAll();