
/* Javascript functionalities for various events */

// addListItem is a function that adds a new item entered into the list

function addListItem() {
	var text = $( "#new-text" ).val();
	if ( text!="" ){
		var div=$( "#add" );
		div.animate({height:'100px',opacity:'0.4'},"slow");
		div.animate({width:'100px',opacity:'0.8'},"slow");
		div.animate({height:'50px',opacity:'0.4'},"slow");
		div.animate({width:'50px',opacity:'0.8'},"slow");
		localStorage.setItem( "task-"+i, text );
		// Storing them into the local storage
		$("#todolist").append('<li class="deletelist" id=task-'+i+'><table id="table"><div id="contain"><tr><div id="left"><td align="left"><input type="checkbox" width="50" class="markasdone" /></div></td><td><div id="center">'+localStorage.getItem('task-'+i)+'</div></td><td><div id="right"><Button class="delete"><img src="delete.jpg" style="background-color:color;" height=15;width=15/></button></div></td></div></tr></table></li>');
		$( "#new-text" ).val('');
		i++;
	}
}
// deleteItem to delete a particular item from the list for which the delete button is pressed
function deleteItem() {
	 $(this).parent().parent().parent().parent().parent().parent().remove();
}
//deleteAllSelected deletes the items that are marked as done
function deleteallselected() {
// Continuously find the items if they are checked
	var div=$( "#DeleteAll" );
	div.animate({height:'100px',opacity:'0.4'},"slow");
	div.animate({width:'100px',opacity:'0.8'},"slow");
	div.animate({height:'50px',opacity:'0.4'},"slow");
	div.animate({width:'50px',opacity:'0.8'},"slow");
	
	$("input:checkbox:checked").each(function() { 
		if (this.checked) { 
			$(this).parent().parent().parent().parent().parent().remove();
		}
	});  
}
//markasDone will mark items as completed
function markasDone() {
	if($(this).parent().parent().css('textDecoration')=='line-through'){
		$(this).parent().parent().css('textDecoration','none');
	 	$(this).parent().parent().css('color','black');
		$(this).parent().parent().css('font-family','Arial');
	 }
	 else{
	    $(this).parent().parent().css('textDecoration','line-through');
	    $(this).parent().parent().css('color','green');
		$(this).parent().parent().css('font-family','Lucida Console');
		$(this).parent().parent().css('text-transform','uppercase');
	 }
}
//clearStorage clears the local storage
function clearStorage() {
	var div=$( "#clearStorage" );
	div.animate({height:'100px',opacity:'0.4'},"slow");
	div.animate({width:'100px',opacity:'0.8'},"slow");
	div.animate({height:'50px',opacity:'0.4'},"slow");
	div.animate({width:'50px',opacity:'0.8'},"slow");
	localStorage.clear();		 
}
//sortUnorderedList sorts the unordered list
function sortUnorderedList(ul) {
	ul = document.getElementById(ul);
	var listing = ul.getElementsByTagName("LI");
	var values = [];	
	for(var i = 0, l = listing.length; i < l; i++) {
		values.push(listing[i].innerHTML);
	}
	  values.sort();
	  for(var i = 0, l = listing.length; i < l; i++) {
	    listing[i].innerHTML = values[i];
	  }
}
$(function() {
	i = 0;
	for( i = 0; i < localStorage.length; i++) { 
		if(localStorage.length!=0) {
			$("#todolist").append('<li class="deletelist" id=task-'+i+'><table id="table"><div id="contain"><tr><div id="left"><td align="left"><input type="checkbox" width="50" class="markasdone" /></div></td><td><div id="center">'+localStorage.getItem('task-'+i)+'</div></td><td><div id="right"><Button class="delete"><img src="delete.jpg" style="background-color:color;" height=15;width=15/></button></div></td></div></tr></table></li>');
		}
	}
		// add new list item
		$("#add").on('click',addListItem);
		// delete all the selected items
		$("#DeleteAll").on('click',deleteallselected);
		// clear storage function
	 	$("#clear").on('click',clearStorage);
	 	// sort all list items
		$("#sort").on('click',sortUnorderedList("todolist"));
		// delete selected item
		$(document).on('click','.delete',deleteItem);
		// mark a selected item as done
		$(document).on('click','.markasdone',markasDone);
		// add a new list
		$("#addNewList").on('click',addNewList);
		// to toggle between the title images
		$("#toggler1").click(function() {
			$(this).find('img').toggle();
		});
});
