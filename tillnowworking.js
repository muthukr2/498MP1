function addListItem()
{
		 var text = $("#new-text").val();
		 if(text!="")
		 {
		  		  localStorage.setItem( "task-"+i, text);
				  $("#todolist").append('<li class="deletelist" id=task-'+i+'><div id="contain"><div id="left"><input type="checkbox" width="50" class="markasdone" /></div><div id="center">'+localStorage.getItem('task-'+i)+'</div><div id="right"><Button class="delete">Delete</button></div></div></li>');
				  $("#new-text").val('');
				  i++;
		 }
}
function DeleteAllDoneTasks()
{
	  var findchkitems=document.getElementsByClassName("deletelist");
     	  $("#todolist").append(findchkitems.length);
        for (var i=0;i<findchkitems.length;i++){
		  $("#todolist").append(findchkitems.child);
		
               if (findchkitems[i].child(contain).child(left).child(markasdone).checked)
               {

			   	  $("#todolist").append(i);
			   
				  $(this).parent().parent().parent().remove();
				
			   }
                
            }
}
function deleteItem()
{
		 $(this).parent().parent().parent().remove();
}
function deleteallselected()
{
 for( i = 0; i < localStorage.length; i++)
 if(localStorage.length!=0)
{ 
    if (localStorage.getItem(i).checked) 
    { 
		$(this).parent().parent().parent().remove();
	 }
  });  
  
}

function markasDone()
{
		 if($(this).parent().parent().css('textDecoration')=='line-through'){
		 	$(this).parent().parent().css('textDecoration','none');
		 }
		 else{
		    $(this).parent().parent().css('textDecoration','line-through');
		 }
}
function clearStorage()
{
 localStorage.clear();		 
}
function sortUnorderedList(ul) {
 
  ul = document.getElementById(ul);

  var listing = ul.getElementsByTagName("LI");
  var values = [];

  for(var i = 0, l = listing.length; i < l; i++)
    values.push(listing[i].innerHTML);

  values.sort();


  for(var i = 0, l = listing.length; i < l; i++)
    listing[i].innerHTML = values[i];
}
$(function()
{

 			 i = 0;
			    for( i = 0; i < localStorage.length; i++)
					 if(localStorage.length!=0)
				  $("#todolist").append('<li class="deletelist" id=task-'+i+'><div id="contain"><div id="left"><input type="checkbox" width="50" class="markasdone" /></div><div id="center">'+localStorage.getItem('task-'+i)+'</div><div id="right"><Button class="delete">Delete</button></div></div></li>');

			 $("#add").on('click',addListItem);
			 $("#DeleteAll").on('click',deleteallselected);
	 		 $("#clear").on('click',clearStorage);
			 $("#sort").on('click',sortUnorderedList("todolist"));
			 $(document).on('click','.delete',deleteItem);
			 $(document).on('click','.markasdone',markasDone);
			 $("#addNewList").on('click',addNewList);
});








