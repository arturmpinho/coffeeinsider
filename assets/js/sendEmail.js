function sendMail (offerRequest) {
    emailjs.send("service_2xj7twi","template_xrx5tns", {
        "overview": offerRequest.selectedCoffeesBulk.value.replace(/\n/g, "<br>"),
        "selected_shipping": offerRequest.selectedShipping.value,
        "selected_incoterm": offerRequest.selectedIncoterm.value,
        "selected_contract": offerRequest.selectedContract.value,
        "full_name": offerRequest.fullname.value,
        "company_name": offerRequest.companyname.value,
        "email": offerRequest.emailaddress.value,
        "phone": offerRequest.phonenumber.value,
    })
    .then(
        function(response) {
            $("#overview-modal").modal("hide");
            $("#submit").html("Your request has been submitted!")
            $("#feedback").html("Thank you for you request! \n We will get back to you within 1 business day with an offer.")
            $("#submit-modal").modal("show");
            
        },
        function(error) {
            $("#overview-modal").modal("hide");
            $("#submit").html("Oops, something went wrong!")
            $("#feedback").html(`Please try to submit your request again.`)
            $("#submit-modal").modal("show");
        }
    )
    return false;
}
