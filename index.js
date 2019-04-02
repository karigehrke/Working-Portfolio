// function validation() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
//     var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
//     console.log(name + email + message);
//     if (name === '' || email === '' || message === '') {
//         alert("Please fill all fields...!!!!!!");
//         return false;
//     } else if (!(email).match(emailReg)) {
//         alert("Invalid Email...!!!!!!");
//         return false;
//     } else {
//         return true;
//     }
// }
// $(document).ready(function() {
// function sendemail() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
//     if (validation()) // Calling validation function
//     {
//         var completeSubmit = document.getElementsByClassName("submit-form");
//         completeSubmit[0].submit(); //form submission
//         alert(" Name : " + name + " n Email : " + email + " n Form Class : " + message + document.getElementById(
//             "form_id").getAttribute("class") + "nn Form Submitted Successfully......");
//     }
// }

// $(document).ready(function() {
//     $(document).on('click', '.submit', newEmail);

//     function newEmail(event) {
//         event.preventDefault();
        // console.log(`you clicked submit`)
    //     var newContact = {
    //       name: $('#name').val().trim(),
    //       email: $('#email').val().trim(),
    //       message: $('#message').val().trim()
    //     };
    // }

    // CLEAR ALL INPUT FIELDS AFTER SUBMISSION
//     $('#name').val('')
//     $('#email').val('')
//     $('#message').val('')

// });

// function sendemail() {
//     var name = document.getElementById("name").value.trim();
//     var email = document.getElementById("email").value.trim();
//     var message = document.getElementById("message").value.trim();
//     document.write(name + email + message);
//         }
