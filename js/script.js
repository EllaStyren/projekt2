
const nav = document.querySelector('.navLinks')
const kt = document.querySelector('.kt')

function toggleMeny() {
    nav.classList.toggle('navActive')
    kt.classList.toggle('toggle')

}

kt.addEventListener('click', toggleMeny)

