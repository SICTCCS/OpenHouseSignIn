const scriptURL = 'https://script.google.com/macros/s/AKfycby6Qktc7J3uxIPCdzJ5nTdcdITaFF2XVpcc3Gtaq1ZEb6BiZHNnvLtY6aFeHRctyO1I/exec';
const form = document.getElementById('submit-to-google-sheet');
const statusMessage = document.getElementById("statusMessage")


// form.addEventListener('submit', e => {
//   e.preventDefault()
//   const data = new FormData(form);
//   const action = e.target.action;
//   statusMessage.innerText = "Please Wait...";
//   statusMessage.style.color = "black";
//   statusMessage.style.display = "block";

//   fetch(action, { method: 'POST', body: data ,})
//     .then(response => {
//         statusMessage.innerText = "Success!";
//         statusMessage.style.color = "#45a049";
//     })
//     .catch(error => {
//         statusMessage.innerText = "Error, try again.";
//         statusMessage.style.color = "#a04545";
//     })
//     .finally(() => {
//         setTimeout(() => statusMessage.style.display = "none", 3000);
//     })
//   e.currentTarget.reset()
// })


form.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(form);
  const action = e.target.action;

    fetch(action, {
      method: 'POST',
      body: data,
      
    })
    .then(() => {
      form.reset();
      regBTN.disabled=false;
	    otherReference.style = "display:none";
      statusMessage.innerText = "Success!";
      statusMessage.style.color = "#45a049";
    })
    .catch((error) => {
      alert("Submission Failed, please try again.\n"+error);
      statusMessage.innerText = "Error, try again.";
        statusMessage.style.color = "#a04545";
	    otherReference.style = "display:none";
    })

    let name = firstname.value;
    name += " " + lastname.value;

    let school = document.getElementById("schoolSelect").value;

	// userIDCounter++;
	// if (userIDCounter > 255) {
		// userIDCounter = 0;
		// kioskID = (parseInt(kioskID, 16) + 3).toString(16).toUpperCase();
	// }

  // let id = kioskID + userIDCounter.toString(16).padStart(2, "0").toUpperCase();

	// userID.value = "'" + id;
	// console.log(userID.value);

  // print_label(id, name, school);

});
document.getElementById('RegisterBTN').disabled=false;
