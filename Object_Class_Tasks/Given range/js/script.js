
let num = Number(prompt("Enter a number: "))


function isInRange(num, min, max) {
    if (num>min && num<max) {
        return true;
    }
    else{
        return false;
    }
}

console.log(isInRange(num, -5, 10))