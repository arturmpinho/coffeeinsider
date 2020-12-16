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

let dropdownMetrics = $(".dropdownMetrics");
let netWeight = "";
let unit = "";

dropdownMetrics.empty();
dropdownMetrics.append(`<option selected="true">Kg/Lbs/Bags</option>`);
dropdownMetrics.prop("selectedIndex", 0);

const dropdownMetricsUrl = "assets/js/metrics.json";

$.getJSON(dropdownMetricsUrl, function (data) {
  $.each(data, function (key, entry) {
    if(typeof(entry.netWeight || entry.unit) === "object") {
        netWeight = "";
        unit = "";
    } else {
        netWeight = entry.netWeight;
        unit = entry.unit;
    }
    
    dropdownMetrics.append($("<option></option>").text(`${netWeight} ${entry.metric} ${unit}`));
  })
});

/* Datepicker */

// Based and adapted from: https://www.codeply.com/go/fVMtEP6yNw/javascript-loop-date-months

const getMonths = function(startDate, endDate){
    var monthsOutput = [];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    while (startDate <= endDate) {
        let shippingMonth = `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
        monthsOutput.push({
            shippingMonth:shippingMonth,
        });
        startDate.setMonth(startDate.getMonth() + 1);
    }
    return monthsOutput;
};

today = new Date()
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let finalDate = new Date(year + 1, month, day)

let displayMonths = getMonths(today,finalDate);
for (let m in displayMonths) {
    $('#shipping-options').append(`<button type="button" class="col-4 shipmonths"> ${displayMonths[m].shippingMonth} </button>`)
}

// Incoterms

const incotermsUrl = 'assets/js/incoterms.json';

$.getJSON(incotermsUrl, function (data) {
    $.each(data, function (key, entry) {
        $("#incoterms").append($(`<button type="button" class="col incoterms"> ${entry.abbreviation}</button>`));
     })
});