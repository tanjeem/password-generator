const passwordElement =document.getElementById('password');
const copyElement =document.getElementById('copy');
const lengthElement =document.getElementById('length');
const upperElement =document.getElementById('upper');
const lowerElement =document.getElementById('lower');
const numberElement =document.getElementById('number');
const symbolElement =document.getElementById('symbol');
const generateElement =document.getElementById('generate');

const upperLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters='abcdefghijklmnopqrstuvwxyz';
const numbers='1234567890';
const symbol='!@#$%^&*()_+';

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];

}

function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];

}
function getSymbol(){
    return symbol[Math.floor(Math.random() * symbol.length)];

}

function generatePassword(){

    const len= lengthElement.value;

    let password="";

    for(let i=0; i<len;i++){
        const retunPassword= generateRetunPassword();
        password += retunPassword;

    }

    passwordElement.innerText= password;
}

function generateRetunPassword(){

    const xs=[];

    if(upperElement.checked){
        xs.push(getUppercase());
    }

    if(upperElement.checked){
        xs.push(getLowercase());
    }

    if(upperElement.checked){
        xs.push(getNumber());
    }

    if(upperElement.checked){
        xs.push(getSymbol());
    }

    return xs[Math.floor(Math.random() * xs.length)];

}

generateElement.addEventListener('click',generatePassword );
