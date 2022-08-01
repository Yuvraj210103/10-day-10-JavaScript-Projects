
const items = document.getElementById('items');
let itemId = 0;
function getItem() {
    itemId++;
    const item = document.getElementById('input').value;
    let itemObj ={
        text:item,
        id:itemId-1
    }
    if(item.length>0){
        document.getElementById('heading').innerHTML =`<h1>Item In The List below</h1>
        <button class="btn" onclick=clearAll();>Clear All</button>`;
        storeInArray(itemObj);
    }
    else{
        alert("Please Enter Some Values");
    }
    
    items.innerHTML = itemArray;
   
}  
let itemArray =[];

function storeInArray(itemObj){
    itemArray[itemId-1] = ` 
    <div class="item">
    <i class='bx bxs-trash' onclick="deleteItem(${itemObj.id})"></i>
    <p>${itemObj.text}</p>
    </div>
    <hr>`; 
    
}
function deleteItem(id){
   itemArray.splice(id,1)?itemId-- :itemId = id+1;
    
   items.innerHTML = itemArray; 
  
}

function clearAll(){
    itemArray =[];
    items.innerHTML =`<h3>All Item Cleared from the list</h3>`
}










