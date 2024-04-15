function continueGame(){
 const alphabet = getRandomAlphabet();
 console.log('your random alphabets',alphabet);

 const currentElement = document.getElementById('current-element');
 currentElement.innerText = alphabet;
 setBackgroundById(alphabet);
}

function play(){
 hideElementById('home-screen');
 showElementById('play-ground');
 continueGame()


}