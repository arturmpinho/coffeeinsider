function sendMail (offerRequest) {
    emailjs.send("service_2xj7twi","template_xrx5tns", {
        // "company_name": offerRequest.cname.value,
        "overview": offerRequest.selectedCoffeesBulk.value.replace(/\n/g, "<br>"),
        // "from_name": offerRequest.name.value,
        // "from_email": offerRequest.email.value,
        // "from_phone_number": offerRequest.phone.value
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
