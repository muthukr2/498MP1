
function addListItem()
{
  	 var text = $("#new-text").val();
		 if(text!="")
		 {
		  		  localStorage.setItem( "task-"+i, text);
				  $("#todolist").append('<li class="deletelist" id=task-'+i+'><input type="checkbox" class="markasdone" />'+localStorage.getItem('task-'+i)+'<Button class="delete">Delete</button></li>');
				  $("#new-text").val('');
				  i++;
		 }
}
function DeleteAllDoneTasks()
{
	  var findchkitems=document.getElementsByClassName("markasdone");
     	  $("#todolist").append(findchkitems.length);
				
        for (var i=0;i<findchkitems.length;i++){
               if (findchkitems[i].checked)
               {
				  $(this).remove();
				
			   }
                
            }
}
function deleteItem()
{
		 $(this).parent().remove();
}
function markasDone()
{
		 if($(this).parent().css('textDecoration')=='line-through'){
		 	$(this).parent().css('textDecoration','none');
		 }
		 else{
		    $(this).parent().css('textDecoration','line-through');
		 }
}
function clearStorage()
{
 localStorage.clear();		 
}

$(function()
{
 			 i = 0;
			    for( i = 0; i < localStorage.length; i++)
					 if(localStorage.length!=0)
					 $("#todolist").append('<li class="deletelist" id=task-'+i+'><input type="checkbox" class="markasdone" />'+localStorage.getItem('task-'+i) +'<Button class="delete">Delete</button></li>');

			 $("#add").on('click',addListItem);
			 $("#DeleteAll").on('click',DeleteAllDoneTasks);
	 		 $("#clear").on('click',clearStorage);
	
			 $(document).on('click','.delete',deleteItem);
			 $(document).on('click','.markasdone',markasDone);
			 $("#addNewList").on('click',addNewList);
});








