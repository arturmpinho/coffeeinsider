$(document).ready(function() {

    //Floating action button//
    
    $("#main-btn-lock").click(function(e) {
        e.preventDefault();
        $(this).hide();
        $("#click-note").hide();
        $("#main-btn-unlock").show();
    })
})

/* <i class="fas fa-calculator sub-btn"></i>
<i class="fas fa-ship sub-btn"></i>
<i class="fas fa-chart-line sub-btn"></i>
<i class="far fa-newspaper sub-btn"></i> */
