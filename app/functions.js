exports.sub = (num1, num2) => {
    return (num1 - num2).toString();
}

exports.add = (num1, num2) => {
    return (num1 + num2).toString();
}

exports.mul = (num1, num2) => {
    return (num1 * num2).toString();
}

exports.div = (num1, num2) => {
    if(num2 == 0) {
        return "NaN"
    }
    return (num1 / num2).toString();
}

exports.pow = (num1, num2) => {
    return (Math.pow(num1, num2)).toString();
}
