let value; 

const firstName = "Deniz";
const lastName = "Aydın";

const langs = "Java, C# , C++";

value = firstName + " " + lastName;

value = "Deniz Artun";
value += " Aydın";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", " dsf");

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[3];
value = firstName[firstName.length - 1];

value = firstName.indexOf("D");
value = firstName.indexOf("I"); // Aranan veri yoksa -1 döner

value = firstName.charAt(0); // İndex ile hangi karakter var

value = langs.split(","); // Parçalama işlemi


value = langs.replace("Java", "CSS"); // Veri değiştirme


value = langs.includes("Java"); // Verinin içinde var mıdır true/false

console.log(value);