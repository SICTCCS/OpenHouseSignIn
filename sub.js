const scriptURL = 'https://script.google.com/macros/s/AKfycby6Qktc7J3uxIPCdzJ5nTdcdITaFF2XVpcc3Gtaq1ZEb6BiZHNnvLtY6aFeHRctyO1I/exec';
const form = document.forms['submit-to-google-sheet']
const statusMessage = document.getElementById("statusMessage")


form.addEventListener('submit', e => {
  e.preventDefault()
  const data = new FormData(form);
  const action = e.target.action;
  statusMessage.innerText = "Please Wait...";
  statusMessage.style.color = "black";
  statusMessage.style.display = "block";

  fetch(action, { method: 'POST', body: data ,})
    .then(response => {
        statusMessage.innerText = "Success!";
        statusMessage.style.color = "#45a049";
    })
    .catch(error => {
        statusMessage.innerText = "Error, try again.";
        statusMessage.style.color = "#a04545";
    })
    .finally(() => {
        setTimeout(() => statusMessage.style.display = "none", 3000);
    })
  e.currentTarget.reset()
})