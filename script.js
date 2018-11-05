$('#keyboard-upper-container').hide();

$(document).keydown(function(e) {
    if (e.which === 16) 
      $('#keyboard-upper-container').toggle();
   })

   $(document).keypress(function (e) {
    //highlight pressed key
    let $key = $("#" + e.which);
    $($key).css("background-color", "yellow");
    //read for keyup
    $(document).keyup(function (e) {
        //unhighlight released key
        $($key).css("background-color", "#f5f5f5");
    });
});

