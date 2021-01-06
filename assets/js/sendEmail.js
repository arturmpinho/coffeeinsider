function sendMail (offerRequest) {
    emailjs.send("service_2xj7twi","template_xrx5tns", {
        // "company_name": offerRequest.cname.value,
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
            console.log(offerRequest.selectedCoffees)
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        }
    )
    return false;
}
