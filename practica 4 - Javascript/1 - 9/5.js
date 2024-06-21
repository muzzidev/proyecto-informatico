/* Escribir una función convertToRoman(n) que convierta un número entero 𝑛 en decimal a números romanos */

const argv = process.argv.slice(2);

function convertToRoman(n) {
    while(n > 999 && n % 1000 >= 0){
        console.log("M");
        n -= 1000;
    }
    while(n > 499 && n % 500 >= 0){
        console.log("D");
        n -= 500;
    }
    while(n > 99 && n % 100 >= 0){
        console.log("D");
        n -= 100;
    }
    while(n > 49 && n % 50 >= 0){
        console.log("L");
        n -= 50;
    }
    while(n > 9 && n % 10 >= 0){
        console.log("X");
        n -= 10;
    }
    while(n > 4 && n % 5 >= 0){
        console.log("V");
        n -= 5;
    }
    while(n > 0 && n % 1 == 0){
        console.log("I");
        n--;
    }
}
convertToRoman(argv[0]);