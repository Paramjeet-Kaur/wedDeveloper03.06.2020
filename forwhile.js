
function a(startnumber, endnumber, stepnumber) {
    sum = 0;
    currentNumber=startnumber
    for (; currentNumber < endnumber;) {
        currentNumber -= stepnumber;
        sum += currentNumber;
        console.log(sum);
    }
    return sum;
}
console.log(a(100, 1000, 40));
