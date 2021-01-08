$(document).ready(function() {
    /**
     * Function to hide navigation subbuttons and overlay when user clicks outside floating action button container
     */
    $(document).mouseup(function(e) {
        const fabContainer = $('.floating-btn');
        if (!fabContainer.is(e.target)) {
            $('#glossary-container').removeClass('overlay');
            $('#news-container').removeClass('overlay');
            $('#trading-container').removeClass('overlay');
            $('#main-btn-unlock').hide();
            $('#click-note').toggleClass('hide');
            $('#main-btn-lock').show();
            $('.sub-btns').hide();
        }
    });

    /**
     * Function to toggle floating action button and adds overlay when unlocked
     */
    
    $('#main-btn-lock').click(function(e) {
        e.preventDefault();
        $('#glossary-container').addClass('overlay');
        $('#news-container').addClass('overlay');
        $('#trading-container').addClass('overlay');
        $(this).hide();
        $('#click-note').toggleClass('hide');
        $('#main-btn-unlock').show();
        $(".sub-btns").show();
    });

    /**
     * Function to toggle floating action button and hides overlay when locked
     */
    $("#main-btn-unlock").click(function(e) {
        e.preventDefault();
        $('#glossary-container').removeClass('overlay');
        $('#news-container').removeClass('overlay');
        $('#trading-container').removeClass('overlay');
        $(this).hide();
        $("#click-note").toggleClass("hide");
        $("#main-btn-lock").show();
        $(".sub-btns").hide();
    });
});

/**
 * Function to retrieve data from json file and populate select dropdown box with all options
*/
const dropDownCoffeeUrl = "assets/js/coffees.json";

$( document ).ready(function () {
    $.getJSON(dropDownCoffeeUrl, function (data) {
        $.each(data, function (key, entry) {
        $("#default-selection").append(`<option id="${key}" value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`);
        });
    });
});

const maxCoffees = 10;
const addButton = $("#add-coffee-btn");
const coffeeSelection = $(".coffee-selection");
const addCoffee = `<div class="form-group"><div class="row"><select class="form-control form-control-lg coffees-list col-12"" onChange="addOptions(this)"></select></div><button onClick="removeDiv(this)"><i class="fas fa-trash-alt"></i></button></div>`;
let x = 1;
    
/**
 * Function that add news select box on click of add coffee button and appends all options to last added select
*/
    $(addButton).click(function(e){
        e.preventDefault();
        if(x < maxCoffees){ 
            x++; 
            $(coffeeSelection).append(addCoffee);
            $(".coffees-list").last().append(`<option value="default">Select your coffee *</option>`);
        }
        

        $.getJSON(dropDownCoffeeUrl, function (data) {
            $.each(data, function (key, entry) {
                $(".coffees-list").last().append(`<option id="${key}" value="${entry.country} - ${entry.coffees}">${entry.country} - ${entry.coffees}</option>`);
            });
        });     
    });

/**
 * Function to remove the corresponding select box when delete button is clicked
*/

function removeDiv(e) {
    $(e).parent("div").remove();
    x--;
}

/**
 * Function that is triggered on change of select box and displays input fields and corresponding units
*/
function addOptions(e) {
    if ($(e).siblings('.metrics').length == 0) {
       if($(e).children("option:selected").val() != "Select your coffee") {
            $(".coffees-list").addClass("col-md-6"); 
            $(`<div class="metrics col-12 col-md-6">
                    <div class="row">
                        <input type="number" class="form-control form-control-lg amount col-md-6" placeholder="Amount of Coffee *">
                        <div class="form-control form-control-lg units col-md-6"></div>
                    </div>
                </div>
            `).insertAfter($(e));
        }
}
       if($(e).children("option:selected").val() != "default") {
            $.getJSON(dropDownCoffeeUrl, function (data) {
                $.each(data, function (key, entry) {
                    if (($(e).children("option:selected").attr('id')) == key) {
                        $(e).siblings('.metrics').children(".row").children('.units').html(`<span>Bags of ${entry.netWeight} ${entry.unit}</span>`);
                    }
                });
            });
       }
}


/**
 * Function to display all month - year combination for next 12 months
 * Based and adapted from: https://www.codeply.com/go/fVMtEP6yNw/javascript-loop-date-months
*/

const getMonths = function(startDate, endDate){
    let monthsOutput = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
let finalDate = new Date(year + 1, month, day);

let displayMonths = getMonths(today,finalDate);
 
for (let m in displayMonths) {
    $('#shipping-options').append(`<button class="col-4 shipmonths" value="${displayMonths[m].shippingMonth}">${displayMonths[m].shippingMonth}</button>`);
}


/**
 * Function that save selected shipping months and highlights selected option
*/
let selectedMonth = [];
$('.shipmonths').click(function(){
    while(selectedMonth.length>0){
        selectedMonth.pop();
    }
    $('.shipmonths').removeClass("selected-choice");
    $(this).addClass("selected-choice");
    selectedMonth.push($(this).val());
});


/**
 * Function that retrieve data from json file and dislpay all options as buttons on page
*/
const incotermsUrl = 'assets/js/incoterms.json';
let selectedIncoterm = [];

$.getJSON(incotermsUrl, function (data) {
    $.each(data, function (key, entry) {
        $('#incoterm-options').append(`<button class="col incoterms" value="${entry.abbreviation}">${entry.abbreviation}</button>`);
     });
        /**
        * Function that save selected Incoterm and highlights selected option
        */
        $('.incoterms').click(function(){
            while(selectedIncoterm.length>0){
                selectedIncoterm.pop();
            }
        $('.incoterms').removeClass("selected-choice");
        $(this).addClass("selected-choice");
        selectedIncoterm.push($(this).val());
    });
});

/**
 * Function that save selected Base Contract and highlights selected option
*/
let selectedContract = [];
$('.contract-options').click(function(){
    while(selectedContract.length>0){
        selectedContract.pop();
    }
    $('.contract-options').removeClass("selected-choice");
    $(this).addClass("selected-choice");
    selectedContract.push($(this).val());
});

/**
 * Function to validate all input and triggers the correct modal
*/
let selectedCoffees = [];
let coffeeAmount = [];
$("#contact-form").submit(function(e) {
    e.preventDefault();
    
    /**
     * Clears the array, adds the selected coffee and amounts to array
    */
    while(selectedCoffees.length > 0){
        selectedCoffees.pop();
    }
    while(coffeeAmount.length > 0){
        coffeeAmount.pop();
    }
    
    $(".coffees-list").each(function() {
        selectedCoffees.push($(this).children("option:selected").val());
        coffeeAmount.push($(this).siblings('.metrics').children('.row').children('.amount').val());
    });
    
    /**
     * Populates the amount of rows for textarea depending on amount of selected coffees
    */
    const rowsTextArea = selectedCoffees.length;
    $('#selected-coffees').attr('rows', rowsTextArea);

    /**
     * Check whether amount input is a positive Integer or not
    */
    let invalidAmountInput = false;
    for (let i = 0; i < coffeeAmount.length; i++) {
        if (coffeeAmount[i] <= 0 | (Number.isInteger(parseFloat(coffeeAmount[i])) == false )) {
            invalidAmountInput = true;
        }           
    }
    /**
     * Checks whether all the select boxes have a selected option which is not the default
     * Checks whether the amount field is not empty or undefined
     * Checks whether the invalidAmountInput was true
     * If one of conditions not met, triggerws error modal with further explanation
     * Otherwise Overview Modal is triggered
    */
    if ($.inArray('default', selectedCoffees) >= 0 | $.inArray(undefined, coffeeAmount) >= 0 |$.inArray("", coffeeAmount) >= 0 | invalidAmountInput == true){
        $("#error-modal").modal("show");
    } else {
        $("#overview-modal").modal("show");

        /**
         * Merged list of selected coffees and corresponding amount
        */
        let mergedOverviewList = [];
        let i = 0;
        while (i < selectedCoffees.length) {
            mergedOverviewList.push(selectedCoffees[i], coffeeAmount[i]);
            i++;
        }
        let j = 0;
        $("#selected-coffees").empty();
        /**
         * Populates new line in textarea for each 2 items in mergedOverviewlist
        */
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
                    );
                  }
                });            
            });
        j += 2;
        }
        /**
         * Functions to set value on the overview to selected options
        */
        if (selectedMonth.length != 0) {
            $("#selected-shipping").val(`Preferred shipping month: ${selectedMonth}`);
        }
        if (selectedIncoterm.length != 0) {
            $("#selected-incoterm").val(`Delivery terms: ${selectedIncoterm}`);
        }
         if (selectedContract.length != 0) {
            $("#selected-contract").val(`Terms and conditions based on ${selectedContract}`);
        }
        
        /**
         * Retrieve form input from user and displays it on overview
        */

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
  