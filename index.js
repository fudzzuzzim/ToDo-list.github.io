const input = document.querySelector('input');
const enterButton = document.querySelector('.content__button');
const ul = document.querySelector('ul');
const item = document.getElementsByTagName("li");
const cursorRounded = document.querySelector('.rounded');
const lamp1 = document.querySelector('.l1');
const lamp2 = document.querySelector('.l2');
const lamp3 = document.querySelector('.l3');
const lamp4 = document.querySelector('.l4');


// RETURN INPUT LENGTH
function getInputLength() {
	return input.value.length;
}

//RETURN LIST_ITEM LENGTH
function getListItemLength() {
	return item.value.length;
}

// CREATE LIST ELEMENT
function createListElement() {
	const li = document.createElement('li'); //create list element
	li.appendChild(document.createTextNode(input.value)); //add input values to list element
	ul.appendChild(li) //add list element to list 
	input.value = ""; //rebut our input 
		//CREATE DONE FUNCTION
	function DoneFunction() {
		li.classList.toggle("done")
	}

	li.addEventListener("click",DoneFunction);

	//CREATE DELETE FUNCTION
	const DBTN = document.createElement("button");
	DBTN.appendChild(document.createTextNode("X"));
	li.appendChild(DBTN);
	DBTN.addEventListener("click",deleteListItem);

	function deleteListItem(){
		li.classList.add("delete");
	}
}

function addListAfterKeypress(event) {
	if (getInputLength() > 0 && event.which === 13) { 
		//this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}

//CREATE LIST AFTER CLICK 
function addListAfterClick(){
	if(getInputLength() > 0){ 
		createListElement();
	}
}

input.addEventListener("keypress", addListAfterKeypress);

enterButton.addEventListener("click", addListAfterClick);

//CUSTOM CURSOR
window.addEventListener('mousemove', e => {
	cursorRounded.setAttribute("style","top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;");
});
/** 
	.'`~~~~~~~~~~~`'.
	(  .'11 12 1'.  )
	|  :10 \|   2:  |
	|  :9   @   3:  |
	|  :8       4;  |
	'. '..7 6 5..' .'
	 ~-------------~ 
*/

