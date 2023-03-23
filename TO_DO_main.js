/** TO DO MAIN JS :: to do list :: */

/* The Buttons */
const btnADD  = document.querySelector('#btnADD');
const btnREMOVE = document.querySelector('#btnREMOVE');
const btnCLEAR = document.querySelector('#clearALL');
/* The List */
const list = document.querySelector('#list001');
const inptContent = document.querySelector('#newTASK');


/*TO DO LISTE main Functions */
btnADD.addEventListener('click', ()=>{

/* create the new list element */
let newListItem = document.createElement('li');
newListItem.classList.add('newListItem');

/* take out the value from the input field */
let textInpt = inptContent.value; 

/* write the input text in to the list */
newListItem.innerText = textInpt; 
list.prepend(newListItem);

   /*stroke the text with click event */
    newListItem.addEventListener('click', ()=>{
    newListItem.classList.add('checked');})
    
   /*kills the text with doubleclick event */
    newListItem.addEventListener('dblclick', ()=>{
    newListItem.remove(newListItem);})

/* clear the input value after input */
if(inptContent.value = " "){   
inptContent.value = " ";
}
else{
inptContent.value = inptContent.value;
}
});

/* :: again the same for the Enter key - keyCode = 13 :: */
inptContent.addEventListener('keypress', (event)=>{
    const enterKey = 13;
    if(event.keyCode === enterKey){
    
    let newListItem = document.createElement('li');
        newListItem.classList.add('newListItem');

    let textInpt = inptContent.value;
        newListItem.innerText = textInpt;
        list.prepend(newListItem);
    
    newListItem.addEventListener('click', ()=>{
    newListItem.classList.add('checked');})
    
    newListItem.addEventListener('dblclick', ()=>{
    newListItem.remove(newListItem);})

    if(inptContent.value = " "){  
       inptContent.value = " ";}
        else{ inptContent.value = inptContent.value;}}
});

/* remove task 'minus' button: */
btnREMOVE.addEventListener('click', ()=>{
    let removeItem = list.firstChild;
    list.removeChild(removeItem);
});

/* clear all button */
btnCLEAR.addEventListener('click', ()=>{
    const clearItem = list.querySelector('li');
    list.remove(clearItem) 
    location.reload(true); 
});
