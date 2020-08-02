let value;

const programmer = {
    name : "Deniz Artun",
    age : 23,
    email : "a@a.com",
    langs : ["C#,JAva, PHP"],

    address : {
        city : "Bursa",
        street : "Ata Bulvarı"
    }, 

    work : function() {
        console.log("Programcı çalışıyor");
    }
}

value = programmer;

value = programmer.email; 
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;


const yazılımcı = [
    {name : "Deniz Artun Aydın", age : 23},
    {name : "Emircan Bayar", age : 23},
    {name : "Kaan Işgın", age : 24}
];

value = yazılımcı[0].name;

console.log(value);