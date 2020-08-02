let value; 

const numbers = [3,12,3,4,34,43,34];
//const numbers2 = new Array(1,2,3,4,5,6);

const langs = ["Java", "C++", "C#"];

const a = ["Merhaba",22,null,undefined,3.14];

value = numbers.length;
value = numbers[0];
value = numbers[numbers.length - 1];

// İndex Değiştirme
numbers[2] = 1000;
value = numbers[2];

value = numbers.indexOf(1000);

value = numbers.push(324); // Arrayin sonuna ekler
value = numbers.unshift(3000);  // Arrayin başına ekler

numbers.pop(); // Sonundan değer atma
numbers.shift(); // Başından değer atma

numbers.splice(0,3); // Belli bir bölüm çıkartma

numbers.reverse(); // Dizi sırasını ters çevirir

numbers.sort(); 

value = numbers.sort(function(x,y) { // Küçükten Büyüğe
    return x - y;
}); 

value = numbers.sort(function(x,y) { // Büyükten küçüğe
    return y - x;
}); 

value = numbers;

console.log(value);