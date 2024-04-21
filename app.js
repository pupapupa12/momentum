// function에서 데이터 보내고 가져오는 방법
function sayHello(nameOfPerson, age){
    console.log("Hello may name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(a, b){
    console.log(a+b);
}

function divide(a, b){
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);


const player = {
    name: "nico",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you");
    },
};

// object
console.log(player.name);

// function
player.sayHello("lynn");
player.sayHello("nico");

