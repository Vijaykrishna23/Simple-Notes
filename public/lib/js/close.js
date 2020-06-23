console.log("log");
$('.close-icon').on('click',function() {
    console.log("clicked");
    
    $(this).closest('.card').fadeOut();
})
