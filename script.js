let kioskID = prompt("Enter the Kiosk ID (0-F)", "0")
let userIDCounter = 0;

let checkbox = document.getElementById("other");
let otherReference = document.getElementById("otherReference")
checkbox.addEventListener("change", () => {
    otherReference.style = checkbox.checked ? "display:block" : "display:none";
})

let prefname = document.getElementById("PrefName");
let firstname = document.getElementById("FirstName")
let lastname = document.getElementById("LastName");
let userID = document.getElementById("userID");
userID.value = "'" + kioskID + userIDCounter.toString(16).padStart(2, "0");
// Code from https://codepen.io/levinunnink-the-bashful/pen/YzxPyoG?editors=0010

const form = document.getElementById('submit-to-google-sheet');

form.addEventListener("submit", function(e) {
  const regBTN = document.getElementById('RegisterBTN');
  regBTN.innerHTML="Upload In Progress"
  e.preventDefault();
  const data = new FormData(form);
  const action = e.target.action;
  regBTN.disabled = true;

    fetch(action, {
      method: 'POST',
      body: data,
      
    })
    .then(() => {
      regBTN.innerHTML="Register"
      form.reset();
      regBTN.disabled=false;
	    otherReference.style = "display:none";
    })
    .catch((error) => {
      alert("Submission Failed, please try again.\n"+error);
      regBTN.innerHTML="Register"
      regBTN.disabled=false;
	    otherReference.style = "display:none";
    })

    let name = firstname.value;
      if (prefname.value != "")
        name = prefname.value;
      name += " " + lastname.value;

    let school = document.getElementById("schoolSelect").value;

	userIDCounter++;
	if (userIDCounter > 255) {
		userIDCounter = 0;
		kioskID = (parseInt(kioskID, 16) + 3).toString(16);
	}

  let id = kioskID + userIDCounter.toString(16).padStart(2, "0");

	userID.value = "'" + id;
	console.log(userID.value);

  print_label(id, name, school);

});
document.getElementById('RegisterBTN').disabled=false;
