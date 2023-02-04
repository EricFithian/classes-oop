// let duke = {
//     name: "Duke",
//     breed: "Havanese",
//     age: 2,
//     hyper: true,
//     bark() {
//         console.log("Yelp! I'm barking")
//     },
//     playWithSister() {
//         console.log("I love playing with Emily")
//     }
// }

// console.log(duke);
// duke.bark();

class Person {
    constructor(name, age, hairColor, height, weight, ethnicity, favNumber, favIceCream, favColor, ssn, arms=2, legs=2) {
        this.name = name,
        this.age = age,
        this.hairColor = hairColor,
        this.height = height,
        this.weight = weight,
        this.ethnicity = ethnicity,
        this.favNumber = favNumber,
        this.favIceCream = favIceCream,
        this.favColor = favColor,
        this.ssn = ssn,
        this.arms = arms,
        this.legs = legs
    }
    addNonsense() {
        this.nonsense = "Why is this a thing"
    }
    greet() {
        console.log("Hello")
    }
    gotOlder() {
        this.age += 12; //this.age = this.age + 1;
    }
    hop() {
        console.log("I'm making a small jump as a puny human")
    }
}

// let eric = new Person("Eric", 37, "black", 78, 200, "White", 25, "Strawberry", "Blue for Duke", 8675309);
// // console.log(eric)
// let sergii = new Person("Sergii", 20, "black");
// // console.log(sergii)
// sergii.gotOlder()


// eric.greet();
// eric.gotOlder();
// eric.hairColor = "Purple";
// // eric.gotOlder();
// // eric.gotOlder();
// // eric.gotOlder();
// // eric.gotOlder();
// // eric.gotOlder();
// // eric.gotOlder();
// // console.log(eric);
// // console.log(sergii);

// eric.addNonsense();
// eric.nonsense = "His posts in partytime";
// console.log(eric)

// class SuperHero extends Person {
//     // constructor(alias) {
//     //     super.age(30),
//     //     this.alias = alias
//     // }
//     fly(){
//         console.log('Up up and away!');
//     }
//     greet(otherPerson){
//         console.log('Greetings ' + otherPerson);
//     }
//     jump(){
//         super.hop();
//         this.fly();
//     }
// };

// const batman = new SuperHero('Bruce Wayne', 30, 'black', 'black');
// const superman = new SuperHero(...)
// superman.hop();


class Account {
    constructor(name, funds) {
        this.name = name
        this.funds = funds
        this.date = new Date
        this.other = 100
    }
    addAmount(num) {
        if(num < 100) console.log("Must have at least $100 to add this")
        else {
            this.amount = num;
            console.log(`Added an amount with ${num}`)
        }
    }
    withdrawl(num) {
        this.amount -= num;
        console.log(`You withdrew $${num} and now only have $${this.amount} left`)
    }
    deposit(money) {
        this.amount += money;
        console.log(`You added $${money} and now have a whopping $${this.amount}`)
    }
}

let ericsAccount = new Account("Eric", 20);
console.log(ericsAccount)
ericsAccount.addAmount(50);
ericsAccount.addAmount(150);
console.log(ericsAccount);
ericsAccount.withdrawl(20);
ericsAccount.deposit(20);