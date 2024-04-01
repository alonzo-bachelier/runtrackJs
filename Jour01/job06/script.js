// for number in range(0, 101):

//     fizz = not number % 3
//     buzz = not number % 5

//     if fizz and buzz :
//         print("FizzBuzz")
//     elif fizz:
//         print("Fizz")
//     elif buzz:
//         print("Buzz")
//     else:
//         print(number)
//    EXEMPLE PYTHON ///////////////

function fizzbuzz() {
    for (let number = 1; number <= 151; number++) {
        let message = "";
        if (number % 3 === 0) {
            message += "Fizz";
        }
        if (number % 5 === 0) {
            message += "Buzz";
        }
        if (message === "") {
            message = number;
        }
        console.log(message);
    }
}
fizzbuzz();
