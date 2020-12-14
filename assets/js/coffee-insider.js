$(document).ready(function() {

    //Floating action button//
    
    $("#main-btn-lock").click(function(e) {
        e.preventDefault();
        $(this).hide();
        $("#click-note").toggleClass("hide");
        $("#main-btn-unlock").show();
        $(".sub-btns").show();
    })

    $("#main-btn-unlock").click(function(e) {
        e.preventDefault();
        $(this).hide();
        $("#click-note").toggleClass("hide");
        $("#main-btn-lock").show();
        $(".sub-btns").hide();
    })
})

/* Coffees Select List */

let dropdown = $('.dropdownCoffee');

dropdown.empty();
dropdown.append('<option selected="true">Select your Coffee</option>');
dropdown.prop('selectedIndex', 0);

const url = 'assets/js/coffees.json';

$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').text(`${entry.country} - ${entry.coffees}`));
  })
});