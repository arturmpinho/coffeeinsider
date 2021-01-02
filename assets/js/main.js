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

function genNewId () {
    var uniq = "id" + (new Date()).getTime()
    return uniq
}
const dropDownCoffeeUrl = "assets/js/coffees.json";

$( document ).ready(function () {
    $.getJSON(dropDownCoffeeUrl, function (data) {
        $.each(data, function (key, entry) {
        $("#default-selection").append(`<option id="${key}" value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`);
        // $("#default-units").html(`<span>Bags of ${entry.netWeight} ${entry.unit}</span>`);
        })
    });
});

    const maxCoffees = 10;
    const addButton = $("#add-coffee-btn");
    const coffeeSelection = $(".coffee-selection");
    const addCoffee = `<div class="form-group col-12"><div class="d-flex"><select class="form-control form-control-lg coffees-list" id="${genNewId()}" onChange="addOptions(this)"></select><button onClick="removeDiv(this)"><i class="fas fa-trash-alt"></i></button></div></div>`;
    let x = 1;
    
    $(addButton).click(function(e){
        e.preventDefault();
        if(x < maxCoffees){ 
            x++; 
            $(coffeeSelection).append(addCoffee);
            $(".coffees-list").append(`<option>Select your coffee</option>`)
        }
         $.getJSON(dropDownCoffeeUrl, function (data) {
            $.each(data, function (key, entry) {
            $(".coffees-list").append(`<option id="${key}" value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`)
            })
        });
    });

function removeDiv(e) {
    $(e).parent("div").remove();
}

function addOptions(e) {
    if ($(e).siblings('.metrics').length == 0) {
       if($(e).children("option:selected").val() != "Select your coffee") {
        $(`<div class="d-flex metrics">
           <input type="number" min="0" class="form-control form-control-lg amount" placeholder="Amount of Coffee">
           <div class="form-control form-control-lg units"></div>
           </div>`).insertAfter($(e));
    }
}
       if($(e).children("option:selected").val() != "Select your coffee") {
            $.getJSON(dropDownCoffeeUrl, function (data) {
                $.each(data, function (key, entry) {
                    if (($(e).children("option:selected").attr('id')) == key) {
                        $(e).siblings('.metrics').children('.units').html(`<span>Bags of ${entry.netWeight} ${entry.unit}</span>`)
                    }
                })
            })
       }
};

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

today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let finalDate = new Date(year + 1, month, day)

let displayMonths = getMonths(today,finalDate);
for (let m in displayMonths) {
    $('#shipping-options').append(`<button class="col-4 shipmonths" value="${displayMonths[m].shippingMonth}">${displayMonths[m].shippingMonth}</button>`)
}

// Incoterms

const incotermsUrl = 'assets/js/incoterms.json';

$.getJSON(incotermsUrl, function (data) {
    $.each(data, function (key, entry) {
        $("#incoterms").append($(`<button class="col incoterms">${entry.abbreviation}</button>`));
     })
});

// Price Idea

/* Not functioning load method due to CORS
$("#ice-price").load("https://futures.tradingcharts.com/futures/quotes/kc.html?cbase=kc") */


$("#TypeOfCoffee1").change(function() {
    let dropdownCoffee1 = $("#TypeOfCoffee1 :selected").val();
    $("#selected-coffees1" ).html($(`<p id="coffee1">${dropdownCoffee1} <input type="number" id="differential1" name="differential1" min="0" step="0.05" placeholder="differential" required> USc/Lb</p>`));
    $("#my-overview1").html($(`<div>${dropdownCoffee1}</div>`));

});
$("#TypeOfCoffee2").change(function() {
    let dropdownCoffee2 = $("#TypeOfCoffee2 :selected").val();
    $("#selected-coffees2" ).html($(`<p id="coffee2">${dropdownCoffee2} <input type="number" id="differential2" name="differentia2" min="0" step="0.05" placeholder="differential" required> USc/Lb</p>`));
    $("#my-overview2").html($(`<div>${dropdownCoffee2}</div>`));

});
$("#TypeOfCoffee3").change(function() {
    let dropdownCoffee3 = $("#TypeOfCoffee3 :selected").val();
    $("#selected-coffees3" ).html($(`<p id="coffee3">${dropdownCoffee3} <input type="number" id="differential3" name="differentia3" min="0" step="0.05" placeholder="differential" required> USc/Lb</p>`));
    $("#my-overview3").html($(`<div>${dropdownCoffee3}</div>`));

});
$("#TypeOfCoffee4").change(function() {
    let dropdownCoffee4 = $("#TypeOfCoffee4 :selected").val();
    $("#selected-coffees4" ).html($(`<p id="coffee4">${dropdownCoffee4} <input type="number" id="differential4" name="differentia4" min="0" step="0.05" placeholder="differential" required> USc/Lb</p>`));
    $("#my-overview4").html($(`<div>${dropdownCoffee4}</div>`));

});
$("#TypeOfCoffee5").change(function() {
    let dropdownCoffee5 = $("#TypeOfCoffee5 :selected").val();
    $("#selected-coffees5" ).html($(`<p id="coffee5">${dropdownCoffee5} <input type="number" id="differential5" name="differentia5" min="0" step="0.05" placeholder="differential" required> USc/Lb</p>`));
    $("#my-overview5").html($(`<div>${dropdownCoffee5}</div>`));
});


    
    let selectedMonth = [];
    $('.shipmonths').click(function(){
    while(selectedMonth.length>0){
        selectedMonth.pop();
    };
    selectedMonth.push($(this).val())
    });

 
// Overview

let selectedCoffees = [];
let coffeeAmount = [];
$("#btn-overview").click(function(e) {
    e.preventDefault();
    while(selectedCoffees.length>0){
        selectedCoffees.pop();
        };
    $(".coffees-list").each(function() {
        selectedCoffees.push($(this).children("option:selected").val());
        coffeeAmount.push($(this).siblings('.metrics').children('.amount').val());
    });

   
    $("#my-overview").html($(`<div >${selectedCoffees} ${coffeeAmount}</div>`));
    $("#my-overview").html($(`<div >${selectedMonth}</div>`));


    // while(coffeeAmount.length>0){
    //         coffeeAmount.pop();
    //     };
    // $('.coffees-list').siblings('.metrics').each(function() {
    //     coffeeAmount.push($(this).children(".amount").val()); 
    // })
    // let selectedcoffees = $("select.coffees-list").children("option:selected").val()

 

    $("#overview-modal").modal("show");

}); 
