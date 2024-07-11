let selectedRow = null;
function onSubmitForm(e){
    e.preventDefault();
    if(selectedRow === null){
        addBookmark();
    }
    // else if(!selectedRow){
    //     addBookmark();
    // }
    else{

        updateForm();
    }
    
    resetForm();

};



const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");


function addBookmark(){
    const wrapper = document.getElementById("bookmark-table").querySelector('tbody');
    const inputUrl = document.getElementById("book-url").value;
   
    const tr =document.createElement("tr");
    tr.classList.add("rowDesign");
    tr.innerHTML = `<td>${inputUrl}</td>
    <td onClick="edit(this)"><button>Edit</button></td>
    <td onClick="deleteItem(this)"><button>Delete Bookmark</button></td>`;
    wrapper.appendChild(tr);
    
}

function edit(td){
  selectedRow = td.parentElement;
    document.getElementById("book-url").value = selectedRow.cells[0].innerHTML;
}
function updateForm(){
    selectedRow.cells[0].innerHTML = document.getElementById("book-url").value;
    selectedRow = null;
}
function deleteItem(td){
        if(confirm("Are you sure you want to delete this record?")){
           row = td.parentElement;
           row.remove();
           resetForm();
        } 
    }
    

function resetForm(){
    document.getElementById("book-url").value = "";
}


addBtn.addEventListener("click", onSubmitForm);