function countAdultFemales(people) {

    let count = 0;

    for (let person of people) {

        const age = Number(person.age);

        if (person.gender === "female" && age >= 18) {
            count++;
        }
    }

    return count;
}


const people = [
    { name: "Amina", age: "19", gender: "female" },
    { name: "Sara", age: 17, gender: "female" },
    { name: "Omar", age: "22", gender: "male" },
    { name: "Nusaiba", age: "18", gender: "female" },
    { name: "Fatima", age: 16, gender: "female" }
];

console.log(countAdultFemales(people));
