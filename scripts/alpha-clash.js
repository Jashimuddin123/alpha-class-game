
// function handaleKeyUpEvent(event){
//    

// console.log('i m jashimj',playerPrssed);

// get the expected to the press

// }

// document.addEventListener('keyup',handaleKeyUpEvent)

function handaleKeyUpBoradEvent(event){
    const playerPrssed = event.key;
  
    // stop the game if presed 'Esc'
    if(playerPrssed === 'Escape'){
        gameOver()
    }

    // get the expected to pres
    const alphabetElement = document.getElementById('current-element');
const currentAlphabet = alphabetElement.innerText;
const expectAlphabet= currentAlphabet.toLowerCase();
console.log(playerPrssed, expectAlphabet);

// chaked match or not
if(playerPrssed === expectAlphabet){
    // console.log('you win the game');
     const curentScore = getTextElementVakueById('curent-score');
     const updateScore = curentScore + 1;
     setTextElementValueById('curent-score', updateScore)


    // ------------------
    // // update score 
    // // 1. get the current score 
    // const currentaScoreElement =document.getElementById('curent-score');
    // const curentScoreText = currentaScoreElement.innerText;
    // const curentScore = parseInt(curentScoreText);

    // const currentScore = getTextElementVakueById('curent-score');
    // // 2.increase the score by 1
    //  const newScore = currentScore + 1;

    // // 3. show the update score
    // currentaScoreElement.innerText = newScore;
    
    removeBackgroundById(expectAlphabet)
    continueGame();
}
else{

    const currentLife = getTextElementVakueById('curent-life');
    const updateLife = currentLife - 1;
    setTextElementValueById('curent-life', updateLife);

if(updateLife === 0 ){
    gameOver()
}

// ---------------------------------------
    // 1. get the current life.
    // const curentLifeElement = document.getElementById('curent-life');
    // const curentLifeText = curentLifeElement.innerText;
    // const curentLife = parseInt(curentLifeText);

    // // 2.decrease or reduse the life count 
    //    const newLife = curentLife - 1;

    // // display the update life count
    
    // curentLifeElement.innerText = newLife;

}

}


document.addEventListener('keyup',handaleKeyUpBoradEvent )


function continueGame(){
 const alphabet = getRandomAlphabet();
 console.log('your random alphabets',alphabet);

 const currentElement = document.getElementById('current-element');
 currentElement.innerText = alphabet;
 setBackgroundById(alphabet);
}

function play(){
    // hide everything show only the playground
 hideElementById('home-screen');
 hideElementById('final-score')
 showElementById('play-ground');
//  reset score and life
setTextElementValueById('curent-life', 5);
setTextElementValueById('curent-score',0)
 continueGame()


}

function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score')

//    update final score
// 1. get the final/last score
const lastScore = getTextElementVakueById('curent-score')
setTextElementValueById('last-score',lastScore)

// clear the backgroundcolor
const curentAlphabet = getElementTextById('current-element');
removeBackgroundById(curentAlphabet);
}