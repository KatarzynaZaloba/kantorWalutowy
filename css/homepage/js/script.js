
let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.body;
let nextColorName = document.querySelector(".js-nextColorName");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--grey");
    nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
});
