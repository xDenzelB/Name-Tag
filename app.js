const NameEl = document.getElementById ("change")
console.log(NameEl)
const buttonEl= document.getElementById ("button")
console.log(buttonEl)
const changeNameEl= document.getElementById ("changeName")
console.log(changeNameEl)
buttonEl.addEventListener('click', () => {


    NameEl.textContent = changeNameEl.value
    });