var RegExp = /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var number = "5561984588379";

function phoneMask(number){
    return RegExp.mask(number);
}

console.log(phoneMask(number))