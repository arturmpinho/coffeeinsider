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

let dropdownCoffee = $('.dropdownCoffee');

dropdownCoffee.empty();
dropdownCoffee.append('<option selected="true">Select your Coffee</option>');
dropdownCoffee.prop('selectedIndex', 0);

const dropdownCoffeeUrl = 'assets/js/coffees.json';

$.getJSON(dropdownCoffeeUrl, function (data) {
  $.each(data, function (key, entry) {
    dropdownCoffee.append($('<option></option>').text(`${entry.country} - ${entry.coffees}`));
  })
});

/* Coffees Select List */

let dropdownMetrics = $('.dropdownMetrics');
let netWeight = "";
let unit = "";

dropdownMetrics.empty();
dropdownMetrics.append('<option selected="true">Kg/Lbs/Bags</option>');
dropdownMetrics.prop('selectedIndex', 0);

const dropdownMetricsUrl = 'assets/js/metrics.json';

$.getJSON(dropdownMetricsUrl, function (data) {
  $.each(data, function (key, entry) {
    if(typeof(entry.netWeight || entry.unit) === 'object') {
        netWeight = "";
        unit = "";
    } else {
        netWeight = entry.netWeight;
        unit = entry.unit;
    }
    
    dropdownMetrics.append($('<option></option>').text(`${netWeight} ${entry.metric} ${unit}`));
  })
});
