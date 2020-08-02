// function merhaba(name = "Deniz", age = 23){
//     // if(typeof name === "undefined") name = "Bilgi yok";
//     // if(typeof age === "undefined") age = "Bilgi yok";

//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Deniz Artun", 24);
// merhaba();
// merhaba("kadir");

// function square(x){
//     return x * x;
// }

// function cube(x){
//     return x*x*x;
// }

// let a = square(12);
// a = cube(a);

// console.log(a);


// function merhaba(){
//     return "Merhaba";
// }

// console.log(merhaba());


// Function Expression
// const merhaba = function(){
//     console.log("Merhaba");
// };

// merhaba();

// Immediately Invoked Function Expression (IIFE)

// (function(name){
//     console.log("Merahaba " + name)
// })("Artun");

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    }, 
    get: function(){
        console.log("Elde edildi");
    }, 
    update: function(id){
        console.log(`Id: ${id} güncelendi`);
    }, 
    delete: function(id){
        console.log(`Id: ${id} silindi`);
    }
}

console.log(database.host);

database.add();
database.delete(2);
database.get();
database.update(10);