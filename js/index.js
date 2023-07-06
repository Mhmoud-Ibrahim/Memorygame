const cards = document.querySelectorAll('.card');
let matchedCard = 0;
let cardone, cardTwo;
let disableDeck = false;
let flipSound = document.getElementById('flipSound');
function flipCard(e){
    let clickedCard = e.target;
    if(clickedCard !== cardone && !disableDeck){
        clickedCard.classList.add("flip");
        flipSound.play();
    if(!cardone) {
        return cardone = clickedCard;
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardoneIcon = cardone.querySelector("img").src;
    let  cardTwoIcon = cardTwo.querySelector("img").src;
    matchCards(cardoneIcon,cardTwoIcon);
    }
   
}
 let finish = document.querySelector('.finish');
let flipped =document.getElementById('flipped');
let incorrect =document.getElementById('incorrect');
 function  matchCards(img1,img2){
    
   if(img1 === img2){
    matchedCard++;
    if(matchedCard == 8){
        setTimeout(()=>{
            finished();
            return shuffleCard();
        },1000)
    }
        cardone.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardone  = cardTwo = "";
        flipped.play();
        return  disableDeck = false;
   }else{
    
       setTimeout(() => {
         cardone.classList.add("shake");
         cardTwo.classList.add("shake");
         incorrect.play();
       },400);
       setTimeout(() => {
         cardone.classList.remove("shake","flip");
         cardTwo.classList.remove("shake","flip");
         cardone  = cardTwo = "";
         disableDeck = false;
       },1200);
   }


}
function shuffleCard(){
        matchedCard = 0;
        cardone = cardTwo = "";
        disableDeck = false;
        let arr =[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
        arr.sort(()=>Math.random() > 0.5? 1 : -1);
        cards.forEach((card,index)=> {
            card.classList.remove("flip");
            let imageTag = card.querySelector("img");
            imageTag.src = `img/0 (${arr[index]}).jpg`;
            card.addEventListener('click',flipCard);
        })
}
shuffleCard();

cards.forEach(card=> {
    
    card.addEventListener('click',flipCard);
})
let winsound = document.getElementById('winsound')
function finished(){
    console.log("you are win");
    finish.classList.remove('d-none');
    finish.classList.add('d-flex');
    winsound.play();
}
 let playagainBtn =document.getElementById('playagain');
 playagainBtn.addEventListener('click',function(){
    finish.classList.remove('d-flex');
    finish.classList.add('d-none');
 }) 