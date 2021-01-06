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

const dropDownCoffeeUrl = "assets/js/coffees.json";

$( document ).ready(function () {
    $.getJSON(dropDownCoffeeUrl, function (data) {
        $.each(data, function (key, entry) {
        $("#default-selection").append(`<option id="${key}" value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`);
        })
    });
});

const maxCoffees = 10;
const addButton = $("#add-coffee-btn");
const coffeeSelection = $(".coffee-selection");
const addCoffee = `<div class="form-group"><div class="row"><select class="form-control form-control-lg coffees-list col-12"" onChange="addOptions(this)"></select></div><button onClick="removeDiv(this)"><i class="fas fa-trash-alt"></i></button></div>`;
let x = 1;
    
    $(addButton).click(function(e){
        e.preventDefault();
        if(x < maxCoffees){ 
            x++; 
            $(coffeeSelection).append(addCoffee);
            $(".coffees-list").last().append(`<option value="default">Select your coffee *</option>`)
        }
        

        $.getJSON(dropDownCoffeeUrl, function (data) {
            $.each(data, function (key, entry) {
                $(".coffees-list").last().append(`<option id="${key}" value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`)
            })
        });     
    });


function removeDiv(e) {
    $(e).parent("div").remove();
    x--
}

function addOptions(e) {
    if ($(e).siblings('.metrics').length == 0) {
       if($(e).children("option:selected").val() != "Select your coffee") {
            $(".coffees-list").addClass("col-md-6"); 
            $(`<div class="metrics col-12 col-md-6">
                    <div class="row">
                        <input type="number" min="1" class="form-control form-control-lg amount col-md-6" placeholder="Amount of Coffee *">
                        <div class="form-control form-control-lg units col-md-6"></div>
                    </div>
                </div>
            `).insertAfter($(e));
        }
}
       if($(e).children("option:selected").val() != "Select your coffee") {
            $.getJSON(dropDownCoffeeUrl, function (data) {
                $.each(data, function (key, entry) {
                    if (($(e).children("option:selected").attr('id')) == key) {
                        $(e).siblings('.metrics').children(".row").children('.units').html(`<span>Bags of ${entry.netWeight} ${entry.unit}</span>`)
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
    $('.shipmonths').removeClass("selected-choice");
    $(this).addClass("selected-choice");
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
        $('.incoterms').removeClass("selected-choice");
        $(this).addClass("selected-choice");
        selectedIncoterm.push($(this).val())
    });
});

// Base Contract

let selectedContract = [];
$('.contract-options').click(function(){
    while(selectedContract.length>0){
        selectedContract.pop();
    };
    $('.contract-options').removeClass("selected-choice");
    $(this).addClass("selected-choice");
    selectedContract.push($(this).val())
});

// Overview
let selectedCountries = []
let selectedCoffees = [];
let insertedAmount = [];
let selectedShippingMonth = [];
let coffeeAmount = [];
$("#contact-form").submit(function(e) {
    e.preventDefault();
    
    while(selectedCoffees.length > 0){
        selectedCoffees.pop();
    };
    while(coffeeAmount.length > 0){
        coffeeAmount.pop();
    };
    
    $(".coffees-list").each(function() {
        selectedCoffees.push($(this).children("option:selected").val());
        coffeeAmount.push($(this).siblings('.metrics').children('.row').children('.amount').val());
    });
    
    var rowsTextArea = selectedCoffees.length;
   $('#selected-coffees').attr('rows', rowsTextArea);


    if ($.inArray('default', selectedCoffees) >= 0 | $.inArray(undefined, coffeeAmount) >= 0 |$.inArray("", coffeeAmount) >= 0 ){
        $("#error-modal").modal("show");
    } else {
        $("#overview-modal").modal("show");

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
                            $('#selected-coffees').append(
                                `${countryString} ${coffeesString}: ${amount} Bags of ${entry.netWeight} ${entry.unit} \n`
                            )
                    };
                })            
            })
        j += 2;
        }
        if (selectedMonth.length != 0) {
            $("#selected-shipping").val(`Preferred shipping month: ${selectedMonth}`);
        }
        if (selectedIncoterm.length != 0) {
            $("#selected-incoterm").val(`Delivery terms: ${selectedIncoterm}`);
        }
         if (selectedContract.length != 0) {
            $("#selected-contract").val(`Terms and conditions based on ${selectedContract}`);
        }
        // Contact info input

        const fullName = $("#fname").val();
        const companyName = $("#cname").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        $("#fullname").val(fullName);
        $("#companyname").val(companyName);
        $("#emailaddress").val(email);
        $("#phonenumber").val(phone);
    }
});