let checkbox = document.getElementById("other");
checkbox.addEventListener("change", () => {
    let textBox = document.getElementById("otherReference")
    textBox.style = checkbox.checked ? "display:block" : "display:none";
})