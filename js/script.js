
const nav = document.querySelector('.navLinks')
const kt = document.querySelector('.kt')

function toggleMeny() {

    document.querySelector('.navLinks').classList.toggle('navActive')
    document.querySelector('.kt').classList.toggle('toggle')

}

document.querySelector('.kt').addEventListener('click'), toggleMeny)

