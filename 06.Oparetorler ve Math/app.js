let value;

const value1 = 10;
const value2 = 4;

// Aritmetik Operatörler

// value = value1 + value2;
// value = value1 - value2;
// value = value1 / value2;
// value = value1 * value2;

value = Math.PI;
value = Math.E;
value = Math.round(3.6); // Tam sayıya yuvarlama
value = Math.round(3.2);

value = Math.ceil(3.2); // Her türlü üst sayıya yuvarlar
value = Math.floor(3.6); // Her türlü alt sayıya yuvarlar

value = Math.sqrt(36);
value = Math.abs(-534);

value = Math.pow(8,3); // Üslü sayı alma

value = Math.max(10,-2,32,100);
value = Math.min(10,-2,32,100);

value = Math.random(); // Sıfırla bir arası değer üretir
value = Math.floor(Math.random() * 20); // Sıfır ile 20 arasında üretir
 
console.log(value);