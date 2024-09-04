
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twenty = document.querySelector(".twenty");
const twentyfive = document.querySelector(".twentyfive");
const thirthy = document.querySelector(".thirthy");

ten.onclick = function() {
    ten.classList.add("active");
    fifteen.classList.remove("active");
    twenty.classList.remove("active");
    twentyfive.classList.remove("active");
    thirthy.classList.remove("active");
}

fifteen.onclick = function() {
    ten.classList.add("active");
    fifteen.classList.add("active");
    twenty.classList.remove("active");
    twentyfive.classList.remove("active");
    thirthy.classList.remove("active");
}
twenty.onclick = function() {
    ten.classList.add("active");
    fifteen.classList.add("active");
    twenty.classList.add("active");
    twentyfive.classList.remove("active");
    thirthy.classList.remove("active");
}
twentyfive.onclick = function() {
    ten.classList.add("active");
    fifteen.classList.add("active");
    twenty.classList.add("active");
    twentyfive.classList.add("active");
    thirthy.classList.remove("active");
}
thirthy.onclick = function() {
    ten.classList.add("active");
    fifteen.classList.add("active");
    twenty.classList.add("active");
    twentyfive.classList.add("active");
    thirthy.classList.add("active");
}