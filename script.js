// appointment email send setup start
function sendMail() {
  const allappointmentdata = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phonenumber: document.getElementById("phonenumber").value,
    howmanypeople: document.getElementById("howmanypeople").value,
    picniclocation: document.getElementById("picniclocation").value,
    customlocation: document.getElementById("customlocation").value,
    dateinfo: document.getElementById("dateinfo").value,
    preferredtime: document.getElementById("preferredtime").value,
    picniccolortheme: document.getElementById("picniccolortheme").value,
  };
  emailjs
    .send("service_def26fe", "template_x1bokze", allappointmentdata)
    .then(alert("Email Send Successfully"));
}

// appointment email send setup end

// dynamic year start
setInterval(() => {
  document.getElementById("dynamicyear").innerHTML =
    "© " + moment().format("YYYY");
}, 1000);
// dynamic year end

// signup email send
function signupSendMail() {
  const signupEmailData = {
    signupemail: document.getElementById("signupemail").value,
  };
  console.log(signupEmailData);
  emailjs
    .send("service_0tmogse", "template_ilqro4a", signupEmailData)
    .then(alert("Sign up Successfully"));
}
// signup email send
