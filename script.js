let checkbox = document.getElementById("other");
checkbox.addEventListener("change", () => {
    let textBox = document.getElementById("otherReference")
    textBox.style = checkbox.checked ? "display:block" : "display:none";
})


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
      var answer = confirm ("Successfully Registered!!!");
      regBTN.innerHTML="Register"
      if (answer) location.reload();
    })
    .catch((error) => {
      alert("Submission Failed, please try again.\n"+error);
      regBTN.innerHTML="Register"
    })
    // e.currentTarget.reset()
});