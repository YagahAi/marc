// sign in
function signIn(si) {
    const signInUsername = document.getElementById('username');
    const signInPassword = document.getElementById('password');
    // Perform validation
    if(signInUsername.value === "") {
        alert("please enter username");
        return false;
    }

    if(signInPassword.value === "") {
        alert("please enter Password");
        return false;
    }

    //Process sign-in logic here// ...
    
    //Redirect to home page or perform other actions
    window.location.href = "index.html";
    si.preventDefault()
}

// Sign-Up
function signUp(u) {
    //Get user input
    const username =document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    //Perform validation
    if(username === ""|| password ===""|| confirmPassword ==="") {
        alert("Please fill in all fields");
        return
    }

    if(password !== confirmPassword)
{
    alert("Passwords do not match");
    return
}

// Process sign-up logic here// ...

    window.location.href = "index.html";
    u.preventDefault()
}

function forgottenPassword(f) {
    const fpassUsername = document.getElementById('username');
    const NewPassword = document.getElementById('new-Password');
    const ConfirmNewPassword = document.getElementById('confirm-new-Password');

    if (fpassUsername.value === '') {
        alert('Please Enter Username');
        return false;
    }
    if (NewPassword.value === '') {
        alert('Please fill this field with your new password');
        return false;
    }
    if (ConfirmNewPassword.value === '') {
        alert('Please type your password again');
        return false;
    }
    if (ConfirmNewPassword.value !== NewPassword.value) {
        alert('Password not Match, Please try again');
        return false;
    }


    alert('Password changed successfully!');
    f.preventDefault()


    return true;


}
