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
