const person1={
    name:'Samir',
    age:29
};

// Object.assign

const person2={hobby:'coding'};

const person3=Object.assign(person2,person1);

console.log("Person2", person2);

console.log("Person3", person3);


//Object.create


const newPerson=Object.create(person1);

console.log("newPerson", newPerson);
