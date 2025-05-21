// Task 18: create a form and validate it: email, contact, name, age,designation,select multiple files, DOB and submit form
function submitForm() {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let DOB = document.getElementById("DOB");
    let contact = document.getElementById("contact").value.trim();
    let email = document.getElementById("email").value.trim();
    let designation = document.getElementById("designation").value.trim();
    let files = document.getElementById("files");
    const MAX_SIZE = 1 * 1024 * 1024;

    if (name == "" || age == "" || DOB == "" || contact == "" || email == "" || designation == "" || files == "") {
        alert("ALL FIELDS ARE MANDATORY");
    }

    else if (contact.length < 10 || contact.length > 10) {
        alert("Number should be of 10 digits! Please Enter Valid Number");
    }

    else if (isNaN(contact)) {
        alert("Only numbers are allowed! Please Enter Valid Number");
    }

    else if (/[^a-zA-Z]/.test(designation)) ///[^a-zA-Z]/ is a regular expression 
    // that checks if there are any characters that are not (the ^ negates the character set)
    //  from a to z or A to Z (i.e., alphabetic characters).
    {
        alert("Only letters are allowed! Please enter a valid designation.");

    }

    else if (files.length > 0 && files[0].size > MAX_SIZE) {
        alert("File size exceeds the 2MB limit. Please upload a smaller file.");

    }

    else {
        document.querySelector('form').reset();
        alert("Form Submitted Successfully");
    }
}

