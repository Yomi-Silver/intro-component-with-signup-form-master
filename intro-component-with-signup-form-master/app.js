













const firstName = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');



const firstNameWarning = document.getElementById('warning1');
const lastNameWarning = document.getElementById('warning2');
const emailWarning = document.getElementById('warning3');
const passwordWarning = document.getElementById('warning4');
const warning5 = document.getElementById('warning5');
const claimBtn = document.getElementById('claim');

// document.getElementById('warning1').style.visibility = 'hidden';
firstNameWarning.style.visibility = 'hidden';
lastNameWarning.style.visibility = 'hidden';
emailWarning.style.visibility = 'hidden';
warning5.style.visibility = 'hidden';
passwordWarning.style.visibility = 'hidden';






// document.getElementById('warning2').style.visibility = 'hidden';
// document.getElementById('warning3').style.visibility = 'hidden';
// document.getElementById('warning4').style.visibility = 'hidden';

claimBtn.addEventListener('click', () =>{
    if ( firstName.value == ("")){
        firstNameWarning.style.visibility = 'visible';
    } else {
        firstNameWarning.style.visibility = 'hidden';
    }

    if ( lastName.value == ("")){
        lastNameWarning.style.visibility = 'visible';
    } else {
        lastNameWarning.style.visibility = 'hidden';
    }
    if ( email.value == ("")){
        emailWarning.style.visibility = 'visible';
    } else {
        emailWarning.style.visibility = 'hidden';
    }

    if ( password.value == ("")){
        passwordWarning.style.visibility = 'visible';
    } else {
        passwordWarning.style.visibility = 'hidden';
    }
        if (email.value != ("@", '.com')) {
            warning5.style.visibility = 'visible';
        } else
        {
            warning5.style.visibility = 'hidden';   
        }
    })



    

    //  if (
    //     lastName.value == ("") ){
    //         lastNameWarning.style.visibility = 'visible';
    //     } else if (
    //         email.value == ("")){
    //             emailWarning.style.visibility = 'visible';
    //         } else if (password.value == ("")){
    //             passwordWarning.style.visibility = 'visible';
    //         }

