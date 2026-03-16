const sumAll = function (a, b) {

    if (a < 0 || b < 0 || typeof (a) != "number" || typeof (b) != "number" || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

    minLimit = Math.min(a, b);
    maxLimit = Math.max(a, b);

    sum = 0;
    for (let i = minLimit; i <= maxLimit; i++) {
        sum = sum + i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
