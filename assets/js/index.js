const stringCreditNumber = '4137894711755904'
const cardNumber = stringCreditNumber.split('');
const doubleDigits = [];
let totalAdd = 0;

for (let cardDigit = 0; cardDigit < cardNumber.length; cardDigit += 2) {
    const pairsDigits = cardNumber[cardDigit];
    doubleDigits.push(pairsDigits * 2);
};

const greaterNine = doubleDigits.map((digit) => {
    if (digit > 9) {
        return ((digit - 1) % 9) + 1;
    }
});

const filterUndefined = greaterNine.filter((value) => {
    return value !== undefined;
});

const filterLessNine = doubleDigits.filter((value) => {
    return value <= 9;
});

const arrayResult = filterLessNine.concat(filterUndefined);
const oddFilter = cardNumber.filter((pair, odd) => odd % 2 === 1);
const finalArray = arrayResult.concat(oddFilter);

const toNumber = finalArray.map((element) => {
    return parseInt(element)
});

toNumber.forEach((value) => {
    totalAdd += value;
});

totalAdd % 10 === 0 
    ? console.log(`${totalAdd} :¨Valid credit card`)
    : console.log(`${totalAdd} :¨Invalid credit card`);