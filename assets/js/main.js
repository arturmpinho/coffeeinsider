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

let selectedMonth = [];
$('.shipmonths').click(function(){
    while(selectedMonth.length>0){
        selectedMonth.pop();
    };
    selectedMonth.push($(this).val())
});

// Incoterms

const incotermsUrl = 'assets/js/incoterms.json';
let selectedIncoterm = [];

$.getJSON(incotermsUrl, function (data) {
    $.each(data, function (key, entry) {
        $('#incoterm-options').append(`<button class="col incoterms" value="${entry.abbreviation}">${entry.abbreviation}</button>`)
     })

        $('.incoterms').click(function(){
            while(selectedIncoterm.length>0){
                selectedIncoterm.pop();
            };
        selectedIncoterm.push($(this).val())
    });
});

// Base Contract

let selectedContract = [];
$('.contract-options').click(function(){
    while(selectedContract.length>0){
        selectedContract.pop();
    };
    selectedContract.push($(this).val())
});

// Price Idea

/* Not functioning load method due to CORS
$("#ice-price").load("https://futures.tradingcharts.com/futures/quotes/kc.html?cbase=kc") */

 
// Overview
let selectedCountries = []
let selectedCoffees = [];
let coffeeAmount = [];
$("#btn-overview").click(function(e) {
    
    e.preventDefault();
    $("#overview-modal").modal("show");
    
    while(selectedCoffees.length > 0){
        selectedCoffees.pop();
    };
    while(coffeeAmount.length > 0){
        coffeeAmount.pop();
    };
    
    $(".coffees-list").each(function() {
        selectedCoffees.push($(this).children("option:selected").val());
        coffeeAmount.push($(this).siblings('.metrics').children('.amount').val());
    });
   
    let mergedOverviewList = [];
    let i = 0;
    while (i < selectedCoffees.length) {
        mergedOverviewList.push(selectedCoffees[i], coffeeAmount[i]);
        i++;
    }
    let j = 0;
    $("#selected-coffees").empty();

    while (j < mergedOverviewList.length) {
        let splittedOverviewList = mergedOverviewList[j].split("-");
        let amount = mergedOverviewList[j + 1];
        let countryString = splittedOverviewList[0].trim();
        let coffeesString = splittedOverviewList[1].trim();


        $.getJSON(dropDownCoffeeUrl, function (data) {
                $.each(data, function (key, entry) {
                    if (countryString == entry.country && coffeesString == entry.coffees) {
                        document.overviewform.selectedCoffeesBulk.value += countryString + " " + coffeesString + ': ' + amount + ' Bags of ' + entry.netWeight + " " + entry.unit + '<br>';
                };
            })            
        })
      j += 2;
    }
    
    $("#selected-shipping").html($(`<div >${selectedMonth}</div>`));
    $("#selected-incoterm").html($(`<div >${selectedIncoterm}</div>`));
    $("#selected-contract").html($(`<div >${selectedContract}</div>`));
    

}); 


function replacen() {
    console.log($('#selected-coffees').val()); 
//     $('#selected-coffees').val().replace(/\n/g, '<br />');
//     console.log($('#selected-coffees').val().replace(/\n/g, '<br>'));
};