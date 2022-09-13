var ul = document.querySelector('nav ul')
var menuBtn = document.querySelector('.menu-btn i')
var w = document.querySelector('body')

function menuShow() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  } else {
    ul.classList.add('open')
  }
}
function hidden() {
  if (w.classList.contains('hidden')) {
    w.classList.remove('hidden')
  } else {
    w.classList.add('hidden')
  }
}

function menuShoww() {
  menuShow()
  hidden()
}
