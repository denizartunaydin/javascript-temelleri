let value;

const now = new Date();

const date1 = new Date("9-8-1997");

const date2 = new Date("September 8 1997");

const date3 = new Date("9/8/1997");

value = date1;

value = date1.getMonth(); // Ocak ayı 0 dan başladığı için 8 geliyor
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(7);
date1.setDate(20);
date1.setFullYear(1996);
date1.setHours(6);
date1.setMinutes(15);
date1.setSeconds(20);

value = date1;

console.log(value);