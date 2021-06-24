function datepickShow() {
    document.querySelector("#chosed_box").style.display = "block";
    document.querySelector(".datepick").style.display = "block";
    document.body.style.overflow = "hidden";/*防止body滚动*/
}
function marrypickShow() {
    document.querySelector("#chosed_box").style.display = "block";
    document.querySelector(".marrypick").style.display = "block";
    document.body.style.overflow = "hidden";
}

function datepickHide() {
    document.querySelector(".datepick").style.display = "none";
    document.querySelector("#chosed_box").style.display = "none";

}
function marrypickHide() {
    document.querySelector(".marrypick").style.display = "none";
    document.querySelector("#chosed_box").style.display = "none";
}
function allHide() {
    document.querySelector(".datepick").style.display = "none";
    document.querySelector(".marrypick").style.display = "none";
    document.querySelector("#chosed_box").style.display = "none";
}