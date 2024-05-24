const student = {
    fillName: "mahendra", //state or property
    marks: 90.4,

    printMarks: function() {
        console.log("marks =",this.marks); //method type 1
    }
}

const employee = {
    calcTax1() {
        console.log("tax rate is 10%"); //type 1 method
    },
    calcTax2: function() {
        console.log("tax rate is 20%");  //type 2 method
    }
}

const karanArjun = {
    salary: 5000,
    calcTax1() {
        console.log("tax rate is 30%");
    }
}

karanArjun.__proto__ = employee;  //calling one object into another as a prototype we use this

class ToyotaCar {
     constructor(brand, mileage) {
         console.log("creating new object");
         this.brand = brand;
         this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand (brand) {
        this.brandName = brand;
    }
}


let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus");
lexus.setBrand("lexus");
console.log(lexus);
lexus.setBrand("lexus");


//inheritance
class person {
    constructor(name) {
        console.log("enter in person");
        this.species = "homo sapiens";
        this.name= name;
    }

    eat() {
        console.log("eat");
    }

    hello() {
        console.log("hello");
    }
}

class engineer extends person {
    constructor(name) {
        console.log("enter into enginner");
        super(name);
        console.log("exit into enginner");
    }

    work() {
        console.log("problem solving");
    }
}

let engObj = new engineer("mahendra");


//Error Handling

let a = 5;
let b = 8;
console.log("a =",a);
console.log("b =",b);
console.log("a + b =",a+b);
try {
    console.log("a + b =",a+c);
    console.log("a + b =",a+d);
    console.log("a + b =",a+b);
    console.log("a + b =",a-c);
    console.log("a + b =",a/c);
} catch (err) {
    console.log(err);
}
console.log("a + b =",a+b);
console.log("a + b =",a+b);
console.log("a + b =",a+b);