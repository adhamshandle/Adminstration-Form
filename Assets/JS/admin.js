

$(".fa-plus").click(function(){
//$("input[type='text']").toggle();
$("table").add("<tr> <td><span><i class='fa fa-trash'></i></span><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td> </tr>").appendTo(".tb");
//$(this).toggleClass('fa fa-minus fa fa-plus');

});

$("table").on("click","span",function(){
	$(this).closest('tr').remove();

});

$("#save").click(function(){
	//here where you should put the code that will send the data to database
});

//