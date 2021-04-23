// Object Destructuring

let StudentRecord = {
    sName : "Shoaib",
    sClass :  1,
    coUrse : "Web and Mobile App",
    home:"Malir"
};
console.log(StudentRecord);

let {sName,sClass,coUrse,home} = StudentRecord;
console.log(sName,sClass,coUrse,home);

// Object Keys
console.log(Object.keys(StudentRecord));

// Object Values
console.log(Object.values(StudentRecord));

// Array Destructuring

let cars = ["Civic","Corolla","Honda","Cultus","Suzuki"];
console.log(cars);

let [car1,car2,car3,car4,car5] = cars;
console.log(car1,car2,car3,car4,car5);

// Nested Array Destructuring

let languages = [["php","java","python"],["Javascript","Html","Css","Android"],["Mysql","No Sql"]];
console.log(languages);

let [[lang1,lang2,lang3],[lang4,lang5,lang6,lang7],[db1,db2]] = languages;

console.log(lang1,db1);