const scriptURL = 'https://script.google.com/macros/s/AKfycbyRwUdArPA4sfAadwxFrfNXoo9VVObT-PYj_R78Vdy4CMtb8qteDV2QAx6ozqIntUMn/exec';

const form = document.getElementById("submit-to-google-sheet");
const formName = form.getAttribute("name");


// function submitForm(formElement, formType) {
//   var formData = {
//     formType: formType,
//     id:formElement.id ? formElement.id.value : ''
//   }
// }







  form.addEventListener('submit', e => {
    const Info = document.getElementById('Success')
    Info.style.display = 'inline'
    Info.style.color = 'red'
    Info.textContent = "One moment..."
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      console.log('Success!', response)
      Info.style.color = 'green'
      Info.textContent = "Successfully Submitted!"
        setTimeout(() => {
          Info.style.display = 'none'
        }, 500)
    })
    .catch(error => console.error('Error!', error.message))
  
  e.currentTarget.reset()
})