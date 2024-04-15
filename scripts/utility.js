
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundById(elementId){
    const background = document.getElementById(elementId);
    background.classList.add('bg-orange-400')
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
   

// get random index 0 -25
const randomNumber = Math.random() * 25;
const index= Math.round(randomNumber);

const alphabet = alphabets[index];
return alphabet;

}
