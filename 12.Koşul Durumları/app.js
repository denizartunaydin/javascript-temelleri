// Karşılaştırma Oparöterleri 

/*
==
===
!=
!==
<
>
<=
>=
*/

console.log(2 == 2);
console.log("js" == "java");

console.log("2" == 2);
console.log("2" === 2);

// Mantıksal Bağlaçlar

console.log(!(2 == 2)); // NOT Oparetörü

console.log((2 == 2) && ("Artun" == "Artun"));

const number = 120;

console.log(number === 100 ? "Doğru" : "Yanlış"); //Ternary Operator


const process = 2;

switch(process){
    case 1: 
        console.log("İşlem 1");
        break;
    case 2: 
        console.log("İşlem 2");
        break;
    case 3: 
        console.log("İşlem 3");
        break;
    default: 
        console.log("Geçersiz işlem");
}