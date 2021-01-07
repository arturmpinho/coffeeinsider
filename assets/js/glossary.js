let countries = [];
var result = [];
$( document).ready(function () {
    $.getJSON(dropDownCoffeeUrl, function (data) {
        $.each(data, function (key, entry) {
            countries.push(entry.country);
        });
        $.each(countries, function(i, e) {
            if ($.inArray(e, result) == -1) result.push(e);
        });
       // console.log(result)
        $.each( result, function( item, value ) {
            var trimmedValue =  value.replace(/ /g,'');
            $('.coffee-info').append(`
                <div class="row"">
                    <a data-bs-toggle="collapse" href="#${trimmedValue}" data-bs-target="#${trimmedValue}" role="button" aria-expanded="false" aria-controls="${trimmedValue}" class="col-12 country-button p-3 mt-4">
                        ${value} <i class="fas fa-caret-down"></i>
                    </a>
                </div>
                <div class="collapse row" id="${trimmedValue}">
                    
                </div>
            `)
        });
        
        $.each(data, function (key, entry) {
            $.each( result, function( item, value ) {
                if (value == entry.country) {
                    var trimmedVal =  value.replace(/ /g,'');;
                    $('.coffee-info').children(`#${trimmedVal}`).append(`
                        <div class="col-12 col-md-4">
                            <div class="card coffee-cards">
                                <div class="ml-2 mt-3 mb-3" id="${key}">
                                    <h2 class="sub-heading"> ${entry.coffees}</h2>  
                                    <p class="paragraph"><strong>Type of coffee:</strong> ${entry.type}</p>
                                    <p class="paragraph"><strong>Standard Metric:</strong> Bags of ${entry.netWeight}${entry.unit} </p>
                                    <p class="paragraph"><strong>Classification:</strong> ${entry.classification}</p>
                                </div>
                            </div>
                        </div>
                    `)
                    if (entry.screenSize != null) {
                        $(`#${key}`).append(`
                            <p class="paragraph"><strong>Screen size:</strong> ${entry.screenSize}</p>
                        `)
                    }
                }
            })
        })
    });
});
