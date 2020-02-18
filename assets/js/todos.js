//Check Off Specific Todos
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todos
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//Type and create todos
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

//
$("#toggle-input").click(function(){
    $("input[type='text']").fadeToggle()
})