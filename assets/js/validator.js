const validator = {

    isValid(creditCardNumbers){
        let cardNumber = creditCardNumbers.split('').map(Number);
        let doubleDigits = [];
        let totalAdd = 0;

        for (let cardDigit = 0; cardDigit < cardNumber.length; cardDigit += 2) {
             const pairsDigits = cardNumber[cardDigit];
             doubleDigits.push(pairsDigits * 2);
        }

        let greaterNine = doubleDigits.map((digit) => {
             if (digit > 9) {
                 return ((digit - 1) % 9) + 1;
             }
         });

         let filterUndefined = greaterNine.filter((value) => {
             return value !== undefined;
         });

         let filterLessNine = doubleDigits.filter((value) => {
             return value <= 9;
         });

         let arrayResult = filterLessNine.concat(filterUndefined);
         let oddFilter = cardNumber.filter((pair, odd) => odd % 2 === 1);
         let finalArray = arrayResult.concat(oddFilter);

         let toNumber = finalArray.map((element) => {
             return parseInt(element)
        });

        toNumber.forEach((value) => {
             totalAdd += value;
         });

        if (totalAdd % 10 === 0){
            return true;
        }else {
            return false;
        }

    },

    maskify(stringCreditNumber){
            return stringCreditNumber.split('').map((n,i ) => i < stringCreditNumber.length-4 ? '#' : n).join('');
    }

};

export default validator;