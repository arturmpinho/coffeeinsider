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

let dropdownCoffee1 = $('#TypeOfCoffee1');
let dropdownCoffee2 = $('#TypeOfCoffee2');
let dropdownCoffee3 = $('#TypeOfCoffee3');
let dropdownCoffee4 = $('#TypeOfCoffee4');
let dropdownCoffee5 = $('#TypeOfCoffee5');

let dropdownCoffee = $('.dropdownCoffee')
// dropdownCoffee.empty();
dropdownCoffee.append('<option selected>Select your Coffee</option>');
// dropdownCoffee.prop('selectedIndex', 0);

const dropdownCoffeeUrl = 'assets/js/coffees.json';

$.getJSON(dropdownCoffeeUrl, function (data) {
  $.each(data, function (key, entry) {
    dropdownCoffee1.append(`<option value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`)
    dropdownCoffee2.append(`<option value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`)
    dropdownCoffee3.append(`<option value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`)
    dropdownCoffee4.append(`<option value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`)
    dropdownCoffee5.append(`<option value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`)

  })
});


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

/* Shipping months */

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
    $('#shipping-options').append(`<input type="button" class="col-4 shipmonths" value="${displayMonths[m].shippingMonth}">`)
}

// Incoterms

const incotermsUrl = 'assets/js/incoterms.json';

$.getJSON(incotermsUrl, function (data) {
    $.each(data, function (key, entry) {
        $("#incoterms").append($(`<input type="button" class="col incoterms" value="${entry.abbreviation}">`));
     })
});

// Price Idea

/* Not functioning load method due to CORS
$("#ice-price").load("https://futures.tradingcharts.com/futures/quotes/kc.html?cbase=kc") */


$("#TypeOfCoffee1").change(function() {
    let dropdownCoffee1 = $("#TypeOfCoffee1 :selected").val();
    $("#selected-coffees1" ).html($(`<p id="coffee1">${dropdownCoffee1} <input type="number" class="differential" name="differential" min="0" step="0.05"> USc/Lb</p>`));
});
$("#TypeOfCoffee2").change(function() {
    let dropdownCoffee2 = $("#TypeOfCoffee2 :selected").val();
    $("#selected-coffees2" ).html($(`<p id="coffee2">${dropdownCoffee2} <input type="number" class="differential" name="differential" min="0" step="0.05"> USc/Lb</p>`));
});
$("#TypeOfCoffee3").change(function() {
    let dropdownCoffee3 = $("#TypeOfCoffee3 :selected").val();
    $("#selected-coffees3" ).html($(`<p id="coffee3">${dropdownCoffee3} <input type="number" class="differential" name="differential" min="0" step="0.05"> USc/Lb</p>`));
});
$("#TypeOfCoffee4").change(function() {
    let dropdownCoffee4 = $("#TypeOfCoffee4 :selected").val();
    $("#selected-coffees4" ).html($(`<p id="coffee4">${dropdownCoffee4} <input type="number" class="differential" name="differential" min="0" step="0.05"> USc/Lb</p>`));
});
$("#TypeOfCoffee5").change(function() {
    let dropdownCoffee5 = $("#TypeOfCoffee5 :selected").val();
    $("#selected-coffees5" ).html($(`<p id="coffee5">${dropdownCoffee5} <input type="number" class="differential" name="differential" min="0" step="0.05"> USc/Lb</p>`));
});