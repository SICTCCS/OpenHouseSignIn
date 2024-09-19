let checkbox = document.getElementById("other");
checkbox.addEventListener("change", () => {
    let textBox = document.getElementById("otherReference")
    textBox.style = checkbox.checked ? "display:block" : "display:none";
})


// Code from https://codepen.io/levinunnink-the-bashful/pen/YzxPyoG?editors=0010

// edit the custom notification

window.addEventListener("load", function() {
    const form = document.getElementById('submit-to-google-sheet');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });