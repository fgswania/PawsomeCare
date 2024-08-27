function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function send() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var subj = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (name == "") {
    alert("Please enter your name");
    return;
  }else if (email == "") {
    alert("Please enter your email");
    return;
  }else if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return;
  } else if (subj == "") {
    alert("Please enter a subject");
    return;
  }else if (message == "") {
    alert("Please enter a message");
    return;
  }

  alert("Thank you for reaching out to us, " + name + "! We will get back to you shortly at " + email +
     ". We're looking forward to connecting with you!");

}


  function placeorder() {
    var fname = document.getElementsByName("fname")[0].value;
    var lname = document.getElementsByName("lname")[0].value;
    var country = document.getElementsByName("selection")[0].value;
    var houseadd = document.getElementsByName("houseadd")[0].value;
    var city = document.getElementsByName("city")[0].value;
    var state = document.getElementsByName("city")[1].value;
    var postcode = document.getElementsByName("city")[2].value;
    var phone = document.getElementsByName("city")[3].value;
    var email = document.getElementsByName("city")[4].value;
    var paymentMethod = document.querySelector('input[name="dbt"]:checked').value;

    if (fname && lname && country && houseadd && city && state && postcode && phone && email && paymentMethod) {
      alert("Order placed successfully! \n" +
        "First Name: " + fname + "\n" +
        "Last Name: " + lname + "\n" +
        "Country: " + country + "\n" +
        "House Address: " + houseadd + "\n" +
        "City: " + city + "\n" +
        "State: " + state + "\n" +
        "Postcode: " + postcode + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Payment Method: " + paymentMethod);
    } else {
      alert("Please fill in all the required fields!");
    }
  }
