var ul = document.querySelector('nav ul')
var menuBtn = document.querySelector('.menu-btn i')
var w = document.querySelector('body')
var contact = document.querySelector('#acontact')
var product = document.querySelector('#aproduct')
var about = document.querySelector('#aabout')

function onScroll() {
  
  console.log('scrollY')
}

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

function menuClose() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  }
}

function menuShoww() {
  menuShow()
  hidden()
}

function all() {
  onScroll()
}
