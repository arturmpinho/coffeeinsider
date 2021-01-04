function sendMail (offerRequest) {
    emailjs.send("service_2xj7twi","template_xrx5tns", {
        // "company_name": offerRequest.companyName.value,
        "overview": offerRequest.selectedCoffeesBulk.value,
        // "from_name": offerRequest.name.value,
        // "from_email": offerRequest.emailadress.value,
        // "from_phone_number": offerRequest.phonenumber.value
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
