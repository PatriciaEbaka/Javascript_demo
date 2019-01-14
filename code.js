let button = document.querySelector('button')

button.addEventlistener('click', myfunction)

function myfuction() {
    let myTest = document.querySelector('h1')
    button.innerHTML = "You clicked Me!"
}