let num1 = 50
let num2 = 30
basic.forever(function () {
    if (num2 < num1) {
        basic.showString("TRUE")
    } else if (num2 == num1) {
        basic.showString("EQUAL")
    } else {
        basic.showString("FALSE")
    }
})
