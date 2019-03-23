function displayCards(){
let flipCards = document.getElementsByClassName('card');
for (let i=0;i<flipCards.length;i+=1){
  flipCards[i].style.display = 'block';
   /*  if(flipCards.style.display === "block"){
    flipCards.style.display = "none";
}
    else{
    flipCards.style.display = "block";

}


}
   */
}
    }
function preloader(secs){
    if (secs >= 4) {
      document.getElementById("overlay").style.display = "none";
    } else {
      setTimeout(function(){preloader(secs+1);},1000);
    }
  }
  window.onload = preloader(0);



