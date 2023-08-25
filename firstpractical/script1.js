$(document).ready(function(){
   $("input").focus(function()
   {
$(this).css('border','solid 1px black');
});

$("input").keydown(function()
{
    $(this).css('border','solid 2px red');
});
$("input").keydown(function()
{
  $("#box").text('jay wakeup');
  $("#box").css('background-color','yellow');
})
$(".box").delay(1000).slideDown().delay(1000).fadeOut();
});
