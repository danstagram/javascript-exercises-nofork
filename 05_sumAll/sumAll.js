const sumAll = function(start,end) {

    let variableStart = start;
    let variableEnd = end;

    //get numbers in correct order
    if (start > end) {
        variableStart = end;
        variableEnd = start;
    }

    if (start < 0 | end < 0 | typeof start !== "number" | typeof end !== "number" | !Number.isInteger(start) | !Number.isInteger(end)){
        return "ERROR";
    }

    let mySum = variableStart;

    for (i = variableStart+1; i <= variableEnd; i++) {
        mySum = mySum+i;
    }
    return mySum;
};

// Do not edit below this line
module.exports = sumAll;
