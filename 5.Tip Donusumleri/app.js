let value;

// Veri Tiplerini Stringe Çevirme
value = String(3234234234);
value = String(3.14);
value = String(true);
value = String(function() {console.log()});
value = String([1,2,2,3,4]);

value = (10).toString();
value = (3.14);

// Veri Tiplerini Sayılara Çevirme

value = Number("123");
value = Number(null);

value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("324");

// NaN Hatası Alır
value = Number(undefined); 
value = Number("Hello World");
value = Number(function() {console.log()});

console.log(value);
console.log(typeof value);


const a = "34 " + 34;
console.log(a);
console.log(typeof a);

