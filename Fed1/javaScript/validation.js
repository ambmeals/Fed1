function validateForm(event) {

    //Above we pass the user input and other data from the dowm in contact
    //We call this object even so we can use that object in the body of this function

    //Gather the HTML inputs into a collection instead of using document.getElementByIt()


    let controls = document.getElementsByClassName('form-control');
    console.log(controls);

    //Gather the validation elements so we can place our messages when necessary
    let validationMessages = document.getElementsByClassName('text-danger');
    console.log(validationMessages)

    //Create our regular expression that wilol be used for email
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    //Check the length of all the inputs - if any have not been filled out by user, form will not submit
    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 || controls['message'].value.length == 0 || !rxpEmail.test(controls['email'].value)) {
        //stop the form from submitting
        event.preventDefault();

        //Check each individuals input and display and error message if needed
        //--------Name Validation 
        if (controls['name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "**Name is required**";

        }

        //this else will be executed when a user edits the name input and still has validation errors
        else {
            validationMessages['rfvName'].textContent = '';
        }

        //--Email Validation
        //length
        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "**Email is required**";

        }

        ////this else will be executed when a user edits the name input and still has validation errors
        //else {
        //    validationMessages['rfvEmail'].textContent = '';
        //}
        //regexp - if regExp test fails but we have something typed into the email input

        else if (!rxpEmail.test(controls['email'].value) && controls['email'].value.length >= 0) {
            validationMessages['rfvEmail'].textContent = '**Please provide a valid email**';
        }

        else {
            validationMessages['rfvEmail'].textContent = '';
        }


        //--Subject

        if (controls['subject'].value.length == 0) {
            validationMessages['rfvSubject'].textContent = "**Subject is required**";

        }

        //this else will be executed when a user edits the name input and still has validation errors
        else {
            validationMessages['rfvSubject'].textContent = '';
        }

        //--Message
        if (controls['message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "**Message is required**";

        }

        //this else will be executed when a user edits the name input and still has validation errors
        else {
            validationMessages['rfvMessage'].textContent = '';
        }

    }
}
