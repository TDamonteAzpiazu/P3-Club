interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: "Tobias",
    age: 21
}

function saludar(person: IPerson) {
    console.log (`Hola ${person.name}`)
}

saludar(person);