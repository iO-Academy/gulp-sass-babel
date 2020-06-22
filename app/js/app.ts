interface Person {
    name: string
    age: number
}

function displayName(person: Person) {
    console.log(person.name)
}

let obj = {name:'Joe', age:21}
displayName(obj);