let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");

option1.addEventListener("change", function() {
    option2.checked = false;
})