const scriptURL = 'https://script.google.com/macros/s/AKfycbxoltgMQb4eiyi5QHblBzN9sj20j2xLZ6qsHUAgmHsQgW1AxGPza_oD-ADPrSxalIhu/exec';
  const form = document.forms['submit-to-google-sheet']

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