
// * li completed
$("ul").on("click","li",function(){
     $(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();

});

var inp = $("input[type='text'");

inp.keypress(function(e){
   if(e.which === 13)
   {    
        var newTask = inp.val();
        var x = $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>"+ newTask + " </li>" );
        inp.val("");
   }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});