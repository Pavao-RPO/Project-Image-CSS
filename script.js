const home = document.getElementById ("home");
const b_some = document.getElementById ("some");



function aperta(){
    home.classList.toggle("oculto");
}

b_some.addEventListener("click", aperta);



let person = {name: "", lastName: "", age: "", job:""};
person = {name: "Rodrigo", age:40}
console.log(person)