//Создай программу для let str = "zzzzyzz"; используя тернарный оператор и метод includes. Если нашел букву "y",
//то отконсоль "нашел", если не нашел, то"заблудился"

let str = "zzzzyzz";
let message = str.includes("y") ? "нашел" : "заблудился";
console.log(message);
