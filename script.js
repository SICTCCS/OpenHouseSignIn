let kioskID = prompt("Enter the Kiosk ID (0-F)", "0")
let userIDCounter = 0;

let checkbox = document.getElementById("other");
checkbox.addEventListener("change", () => {
    let textBox = document.getElementById("otherReference")
    textBox.style = checkbox.checked ? "display:block" : "display:none";
})

let prefname = document.getElementById("PrefName");
let firstname = document.getElementById("FirstName")
let lastname = document.getElementById("LastName");
let userID = document.getElementById("userID");
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
    })
    .catch((error) => {
      alert("Submission Failed, please try again.\n"+error);
      regBTN.innerHTML="Register"
      regBTN.disabled=false;
    })

    let name = firstname.value;
      if (prefname.value != "")
        name = prefname.value;
      name += " " + lastname.value;

    let school = document.getElementById("schoolSelect").value;

    print_label(0, name, school);

	userIDCounter++;
	if (userIDCounter > 255) {
		userIDCounter = 0;
		kioskID = (parseInt(kioskID, 16) + 3).toString(16);
	}
	userID.value = kioskID + userIDCounter.toString(16).padStart(2, "0")

});
