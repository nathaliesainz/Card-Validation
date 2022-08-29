import validator from './validator.js';


const btValidate = document.getElementById("btValidate")

const stringCreditNumber = document.getElementById("creditCard")
// constante que guardará todo lo que se encuentre dentro del ID


btValidate.addEventListener("click", function(){
    let creditCardNumbers = stringCreditNumber.value;
    if (validator.isValid(creditCardNumbers)==true){
        document.getElementById('validMessage').innerText= 'Tarjeta válida';
    }else{
        document.getElementById('validMessage').innerText= 'Tarjeta inválida';
    }
    stringCreditNumber.value=validator.maskify(creditCardNumbers);
});