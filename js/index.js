var a = 1;

$(document).ready (function(){

$("#Addfirst").click(function (){
    $("#box").prepend("<div>"+a+" HI</div>");
    a++;
});


$("#Addlast").click(function (){
    $("#box").append("<div>"+a+"Hello</div>");
    a++;  
    
});

$("#Removefirst").click(function(){

    $("#box div:first").remove();

});



$("#Removelast").click(function(){

$("#box div:last").remove();
});



$("#Removeall").click( function(){

    $("#box").empty();

});





});  