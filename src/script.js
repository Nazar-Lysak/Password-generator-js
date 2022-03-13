const outPass = document.querySelector('.main-out');
const copyPass = document.querySelector('.main-out_copy');
const lengthPass = document.querySelector('.range');
const lengthValue = document.querySelector('.range_value');
const lowerCasePass = document.querySelector('.lowerCase');
const upperCasePass = document.querySelector('.upperCase');
const digitPass = document.querySelector('.digits');
const symbolPass = document.querySelector('.symbols');
const genBtn = document.querySelector('.generate-btn');

const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "1", "2", "3", "4", "5", "6", "7", "8", "9", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "#", "$", "^", "&", "*", "(", ")", ":", ";", "_", "-", "=", "+", "!", "#", "$", "^", "&", "*", "(", ")", ":", ";", "_", "-", "=", "+"];

const optionsArray = [lowerCasePass, upperCasePass, digitPass, symbolPass];

let generatePassArray = [];
lengthValue.innerText = lengthPass.value;

lengthPass.addEventListener('mousemove', () => {
    lengthValue.innerText = lengthPass.value;
})

function generateProcces() {
    const filtredArray = optionsArray.filter(el => el.checked ? el : null);
    const createPass = filtredArray.map(el => {
        if(el.className === "lowerCase") {
           return alphabets.map(el => el.toLowerCase());
        } else if (el.className === "upperCase") {
           return alphabets;
        } else if (el.className === "digits") {
           return digits;
        } else if (el.className === "symbols") {
           return symbols;
        }
    })
    let generatedPass = createPass.flat().sort(() => Math.random() - 0.5).splice(1, lengthPass.value).join('');
    generatedPass.length = lengthPass.value;
    outPass.innerText = generatedPass;
}

genBtn.addEventListener('click', (e) => {
    const filtredArray = optionsArray.filter(el => el.checked ? el : null);
    if(filtredArray.length === 0) {
        outPass.innerText = "select atleast one option";
    } else {
        e.preventDefault();
        outPass.innerText = generatePassArray.join('');
        generateProcces();  
    }  
})

copyPass.addEventListener('click', () => {
    if(outPass.innerText.length <= 10 || outPass.innerText === "select atleast one option" || outPass.innerText === "generate the password before copy") {
        outPass.innerText = "generate the password before copy";
    } else {
        navigator.clipboard.writeText(outPass.innerText);
        outPass.innerText = "Copied";
    }
})

