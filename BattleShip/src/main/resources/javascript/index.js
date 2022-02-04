function checkUsername(){
    var username = document.getElementById("username");
    /*
    starts with a letter (uppercase or lowercase)
    continues with other letters and symbols where in the case of symbols we have:
    A symbol obligatorily followed immediately after by a letter
    has length between 4 and 9
    */
    var regex = new RegExp("^[a-zA-Z]+([!_.]?[a-zA-Z0-9]){4,9}$");
    var checkRegex = regex.test(username.value);
    setStyle("username", checkRegex);
}

function setStyle(id, check){
    var element = document.getElementById(check);
    if(check){
        element.style.borderColor = "green";
        element.style.borderStyle = "solid";
        element.style.borderWidth = "thick";
    }else{
        element.style.borderColor = "red";
        element.style.borderStyle = "solid";
        element.style.borderWidth = "thick";
    }
}

//Password check that contains uppercase, lowercase, numbers and has a length of at least 8
function checkPassword(id){
    var string = document.getElementById(id);
    var patternOk = true;

    var lowerCaseLetters = /[a-z]/g;
    if(!string.value.match(lowerCaseLetters)){
        patternOk = false;
    }

    var upperCaseLetters = /[A-Z]/g;
    if(!string.value.match(upperCaseLetters)){
        patternOk = false;
    }

    var numbers = /[0-9]/g;
    if(!string.value.match(numbers)){
        patternOk = false;
    }

    if(!(string.value.length >= 8)){
        patternOk = false;
    }

    setStyle(id, patternOk);
}

function checkPasswordEquality(id1, id2){
    var password = document.getElementById(id1);
    var repeatPassword = document.getElementById(id2);
    if(password.value != '' && repeatPassword.value != ''){
        if(password.value === repeatPassword.value){
            setStyle(id1, true);
            setStyle(id2, true);
        } else{
            setStyle(id1, false);
            setStyle(id2, false);
        }
    }
}

function highlightsFieldsOrGo(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var repeat_password = document.getElementById("repeat_password");

    if(username.style.borderColor == "green" && password.style.borderColor == "green"
        && repeat_password.style.borderColor == "green"){

        document.getElementsByClassName("register")[0].disabled = false;
    }
    else{
        if(username.value == "")
            setStyle('username', false);
        if(password.value == "")
            setStyle('password', false);
        if(repeat_password.value == "")
            setStyle('repeat_password', false);
    }
}
