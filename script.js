function addListItem()
{
  	 var text = $("#new-text").val();
		 $("#todolist").append('<li class="deletelist"><input type="checkbox" id="checkbox" class="markasdone" />'+text+'<Button class="delete">Delete</button></li>');
		 $("#new-text").val('');
}
function DeleteAll()
{
		 if($(".deletelist").parent().css('textDecoration')=='line-through')
		 {
		  		
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
function addNewList()
{
 		 
}

$(function()
{
			 $("#add").on('click',addListItem);
			 $("#DeleteAll").on('click',DeleteAll);
			 $(document).on('click','.delete',deleteItem);
			 $(document).on('click','.markasdone',markasDone);
			 $("#addNewList").on('click',addNewList);
});
