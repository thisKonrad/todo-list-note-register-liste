/** checklist MAIN JS */

/* The Buttons */
const btnADD  = document.querySelector('#btnADD');
const btnREMOVE = document.querySelector('#btnREMOVE');
const btnCLEAR = document.querySelector('#clearALL');
/* The List */
const list = document.querySelector('#list001');
const inptContent = document.querySelector('#newTASK');


/*TO DO LISTE main Functions */
btnADD.addEventListener('click', ()=>{
    
let newListItem = document.createElement('li');
newListItem.classList.add('newListItem');

/* takes out the value from the input field */
let textInpt = inptContent.value; 

/*writes the input text in to the list */
newListItem.innerText = textInpt; 
    list.prepend(newListItem);

/*stroke the text on click event */
newListItem.addEventListener('click', ()=>{
newListItem.classList.add('checked');})
    
/*kills the text on doubleclick event */
newListItem.addEventListener('dblclick', ()=>{
newListItem.remove(newListItem);})

/* clear input value after input */
if(inptContent.value = " "){

inptContent.value = " ";

}
else{

inptContent.value = inptContent.value;

}
});

/* again the same for the Enter key _ keyCode = 13 */
inptContent.addEventListener('keypress', (event)=>{

    const enterKey = 13;

    if(event.keyCode === enterKey){
    
    let newListItem = document.createElement('li');
        newListItem.classList.add('newListItem');

    let textInpt = inptContent.value;
        newListItem.innerText = textInpt;
        list.prepend(newListItem);
    
    /*stroke the text on click event */

    newListItem.addEventListener('click', ()=>{

    newListItem.classList.add('checked');})
    

    /*kills the text on doubleclick event */

    newListItem.addEventListener('dblclick', ()=>{

    newListItem.remove(newListItem);})


    /* clear the input after writing */
    if(inptContent.value = " "){ 

       inptContent.value = " ";
    }
        else{ 
            inptContent.value = inptContent.value;
        }
    }
});

  
/* remove one task button: */
btnREMOVE.addEventListener('click', ()=>{

    let removeItem = list.firstChild;

    list.removeChild(removeItem);

})


/* reload after clear all */
btnCLEAR.addEventListener('click', ()=>{

    const clearItem = list.querySelector('li');

    list.remove(clearItem) 

    location.reload(true); 

});
