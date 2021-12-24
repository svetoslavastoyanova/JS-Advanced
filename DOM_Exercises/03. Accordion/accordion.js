function toggle() {
    let button = document.querySelector(".button");
    let extra = document.getElementById("extra");

    button.textContent = button.textContent == "More" ? "Less" : "More";
    extra.style.display = extra.style.display == "none" || extra.style.display == "" ? extra.style.display = "block" : extra.style.display = "none";
}