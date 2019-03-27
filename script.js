/*     function displayCards(){
let flipCards = document.getElementsByClassName('card');
for (let i=0;i<flipCards.length;i+=1){
  flipCards[i].style.display = 'block';                     */
/*  if(flipCards.style.display === "block"){
    flipCards.style.display = "none";
}
    else{
    flipCards.style.display = "block";

}


}
                    */
/*
}
    }
*/


function preloader(secs) {
    if (secs >= 3) {
        document.getElementById("overlay").style.display = "none";
    } else {
        setTimeout(function () {
            preloader(secs + 1);
        }, 1000);
    }
}
window.onload = preloader(0);


////////////////////////////////////////////////
//basically  the code below says get the overlay which has the modal(overlay is the black thing surrounding the modal)
var modal = document.getElementById("simpleModal");
var modal1 = document.getElementById("simpleModal1");
var modal2 = document.getElementById("simpleModal2");
var modal3 = document.getElementById("simpleModal3");
var modal4 = document.getElementById("simpleModal4");
var modal5 = document.getElementById("simpleModal5");
///
//here im saying to get the  name of the box that has the dish icon
var modalTrigger = document.getElementById("dishes0");
var modalTrigger1 = document.getElementById("dishes1");
var modalTrigger2 = document.getElementById("dishes2");
var modalTrigger3 = document.getElementById("dishes3");
var modalTrigger4 = document.getElementById("dishes4");
var modalTrigger5 = document.getElementById("dishes5");
///
//here i am getting the x closing button
var closeBtn = document.getElementsByClassName("closeBtn")[0];
var closeBtn1 = document.getElementsByClassName("closeBtn1")[0];
var closeBtn2 = document.getElementsByClassName("closeBtn2")[0];
var closeBtn3 = document.getElementsByClassName("closeBtn3")[0];
var closeBtn4 = document.getElementsByClassName("closeBtn4")[0];
var closeBtn5 = document.getElementsByClassName("closeBtn5")[0];
///
//here im telling the box with the dish item to wait for a click and if that click happens to open the modal
modalTrigger.addEventListener("click", openModal);
modalTrigger1.addEventListener("click", openModal1);
modalTrigger2.addEventListener("click", openModal2);
modalTrigger3.addEventListener("click", openModal3);
modalTrigger4.addEventListener("click", openModal4);
modalTrigger5.addEventListener("click", openModal5);
///
// here i am saying to wait for a click a getting and when it happens to close the model thats done by just chaning the style to display:"none";
closeBtn.addEventListener("click", closeModal);
closeBtn1.addEventListener("click", closeModal1);
closeBtn2.addEventListener("click", closeModal2);
closeBtn3.addEventListener("click", closeModal3);
closeBtn4.addEventListener("click", closeModal4);
closeBtn5.addEventListener("click", closeModal5);
///
//here is an event listener again and its waiting for the user to click outside the box to close the modal.
window.addEventListener("click", outsideClick);
///
//here is the function that changes the style from display none to display block;
function openModal() {
    modal.style.display = "block";
}
///
//here is the function that changes the style from display block to display none; allowing the modal to close/hide
function closeModal() {
    modal.style.display = "none";
}
///
//here is the function that closes the modal if the user clicks outside the modal.
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
//////////////////
function openModal1() {
    modal1.style.display = "block";
}
///
function closeModal1() {
    modal1.style.display = "none";
}
//////////////////
//////////////////
function openModal2() {
    modal2.style.display = "block";
}
///
function closeModal2() {
    modal2.style.display = "none";
}
//////////////////
//////////////////
function openModal3() {
    modal3.style.display = "block";
}
///
function closeModal3() {
    modal3.style.display = "none";
}
//////////////////
//////////////////
function openModal4() {
    modal4.style.display = "block";
}
///
function closeModal4() {
    modal4.style.display = "none";
}
//////////////////
//////////////////
function openModal5() {
    modal5.style.display = "block";
}
///
function closeModal5() {
    modal5.style.display = "none";
}
//////////////////
