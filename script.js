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

var modal = document.getElementById("simpleModal");
///
var modalTrigger = document.getElementById("dishes0");
///
var closeBtn = document.getElementsByClassName("closeBtn")[0];
///
modalTrigger.addEventListener("click", openModal);
///
closeBtn.addEventListener("click", closeModal);
///
window.addEventListener("click", outsideClick);
///
function openModal(){
modal.style.display = "block";
}
///
function closeModal(){
modal.style.display = "none";
}
///
function outsideClick(e){
if(e.target == modal){
    modal.style.display = "none";
}
}




