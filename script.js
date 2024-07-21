function getdata() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("inputemail").value;
    let phone = document.getElementById("inputnumber").value;
    let select = document.getElementById("position").value;
    let message = document.getElementById("address").value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(select);
    console.log(message);

    document.getElementById("nameInput").value = "";
    document.getElementById("inputemail").value = "";
    document.getElementById("inputnumber").value = "";
    document.getElementById("position").value = "";
    document.getElementById("address").value = "";

}



