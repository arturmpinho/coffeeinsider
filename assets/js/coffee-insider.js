$(document).ready(function() {

    //Floating action button//
    
    $("#main-btn-lock").click(function(e) {
        e.preventDefault();
        $(this).hide();
        $("#click-note").hide();
        $("#main-btn-unlock").show();
        $(".sub-btns").show();
    })

        $("#main-btn-unlock").click(function(e) {
        e.preventDefault();
        $(this).hide();
        $("#click-note").show();
        $("#main-btn-lock").show();
        $(".sub-btns").hide();
    })

})