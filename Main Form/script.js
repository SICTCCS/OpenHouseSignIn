const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        console.log(item.classList);
        let checked = document.querySelectorAll(".checked")
        let c = document.getElementById("cb1check");
        console.log(c.toggle("checked"))
    
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selected`;
            }else{
                btnText.innerText = "Select Language";
            }

            if(checked){
                console.log(item.classList.toggle("checked"));
                console.log(document.getElementById("cb1TXT").innerHTML)
            }
    });
})