let checkbox = document.getElementById("other");
checkbox.addEventListener("change", () => {
    let textBox = document.getElementById("otherReference")
    textBox.style = checkbox.checked ? "display:block" : "display:none";
})

let prefname = document.getElementById("PrefName");
let firstname = document.getElementById("FirstName")
let lastname = document.getElementById("LastName");
// Code from https://codepen.io/levinunnink-the-bashful/pen/YzxPyoG?editors=0010

const form = document.getElementById('submit-to-google-sheet');
form.addEventListener("submit", function(e) {
  let regBTN = document.getElementById('RegisterBTN');
  regBTN.innerHTML="Upload In Progress"
  e.preventDefault();
  const data = new FormData(form);
  const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      // alert("Successfully Submitted!");
      // location.reload();
      // var answer = confirm ("Successfully Registered!!!");
      regBTN.innerHTML="Register"

      let name = firstname.value;
      if (prefname.value != "")
        name = prefname.value;
      name += " " + lastname.value;

      let school = document.getElementById("schoolSelect").value;

      

      console.log(school);
      console.log(name);
      print_label(0, name, school);

      location.reload();
    })
    .catch((error) => {
      alert("Submission Failed, please try again.\n"+error);
      regBTN.innerHTML="Register"
    })
    // e.currentTarget.reset()
});