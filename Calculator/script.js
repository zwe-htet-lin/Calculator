const input = document.querySelector("input");

const operators = ["+","-","*","/","."];

const showDisplay = (digit) => {
    const lastDigit = input.value[input.value.length - 1];
    if(input.value === "0"){
        return input.value = digit;
    };
    if(operators.includes(digit) && operators.includes(lastDigit)){
        return input.value = input.value.substring(0,input.value.length - 1) + digit;
    };
    return input.value += digit;
};

const calculate = () => {
    return input.value = eval(input.value);
};

const clearAll = () => {
    return input.value = "";
};

const clearLast = () => {
    return input.value = input.value.substring(0,input.value.length-1);
};

const doubleZero = () => {
    if(input.value ===  "0"){
        return input.value = "0";
    }
    return input.value += "0" + "0";
};