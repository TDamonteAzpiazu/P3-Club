"use strict";
var person = {
    name: "Tobias",
    age: 21
};
function saludar(person) {
    console.log("Hola ".concat(person.name));
}
saludar(person);
