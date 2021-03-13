module.exports = function toReadable (number) {
    const firstNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    },
    secondOrderNumbers  = {
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety"
          };
    
    let str = '',
        n = String(number);
    if (n.length == 0) {
        str += firstNumbers[n[0]];
    }

    if (n.length > 2 && n.length < 4) {
        str += firstNumbers[n[0]] + ' hundred';
        if (n.slice(1) >= 20) {
            str += ' ' + secondOrderNumbers[n[1]] + ' ' + firstNumbers[n[n.length - 1]];
        } else {
            str += ' ' + firstNumbers[n.slice(1)];
        }
    } else {
        if (number >= 20) {
            str += secondOrderNumbers[n[0]] + ' ' + firstNumbers[n[1]];
        } else {
            str += firstNumbers[n];
        }
    }
    if (str.length > 4 && str.indexOf('zero') > 0) {
        return str.slice(0, str.indexOf('zero') - 1);
    }
    return str;
};
