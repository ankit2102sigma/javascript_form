
function validateForm() {
    console.log("test")

    let f_name = document.forms["myForm"]["fname"].value;
    // var fname = document.myForm.fname.value;
    console.log(f_name)
    var lname = document.myForm.lname.value;
    console.log(lname)
    var phone = document.myForm.phone.value;
    console.log(phone)
    var password = document.myForm.password.value;
    console.log(password)
    var email = document.myForm.email.value;

    var regName = /^[a-zA-Z]+$/;
    var phonereg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (f_name == null || f_name == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    } else if (!regName.test(f_name)) {
        alert("Invalid name given.");
        return false
    }

    else if (!regName.test(lname)) {
        alert("Invalid name given.");
        return false
    }
    else if (!phonereg.test(phone)) {
        alert("Invalid Conatct Number is  given.");
        return false
    }

    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))) {
        alert("Invalid Email given.");
        return false
    }
    else {

        save()
    }

}

// console.log("test1" , document.myform.fname.value)

function save() {
    console.log("test45");
    localStorage.setItem("fname", document.forms["myForm"]["fname"].value);
    localStorage.setItem("lname", document.myForm.lname.value);
}

