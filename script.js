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

function checkInputCondition() {
  // return startCondition;
}
// appointment email send setup end

// dynamic year start
setInterval(() => {
  document.getElementById("dynamicyear").innerHTML =
    "© " + moment().format("YYYY");
}, 1000);
// dynamic year end

// input condintion
const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const phonenumber = document.getElementById("phonenumber").value;
// const howmanypeople = document.getElementById("howmanypeople").value;
// const picniclocation = document.getElementById("picniclocation").value;
// const customlocation = document.getElementById("customlocation").value;
// const dateinfo = document.getElementById("dateinfo").value;
// const preferredtime = document.getElementById("preferredtime").value;
// const picniccolortheme = document.getElementById("picniccolortheme").value;
console.log("name", name);

// const startCondition =
//   name === "" &&
//   email === "" &&
//   phonenumber === "" &&
//   howmanypeople === "" &&
//   picniclocation === "" &&
//   customlocation === "" &&
//   dateinfo === "" &&
//   preferredtime === "" &&
//   picniccolortheme === ""
//     ? document.getElementById("mailSubmitBtn").setAttribute("disabled", "true")
//     : "";
// input condintion
