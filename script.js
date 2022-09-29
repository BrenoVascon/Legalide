var ul = document.querySelector('nav ul')
var menuBtn = document.querySelector('.menu-btn i')
var w = document.querySelector('body')
var contact = document.querySelector('#acontact')
var product = document.querySelector('#aproduct')
var about = document.querySelector('#aabout')
var menu = document.querySelector('nav ul li a')
// window.addEventListener('scroll', all())

function onScroll() {
  console.log(scrollY)
}

function HoverMenu() {
  if (scrollY > 0) {
    menu.classList.add('active')
  }
  if (scrollY > 1794) {
    menu.classList.remove('active')
  }
}

function HoverProduct() {
  if (scrollY > 1796) {
    product.classList.add('active')
  }
  if (scrollY > 3755) {
    product.classList.remove('active')
  }
  if (scrollY < 1794) {
    product.classList.remove('active')
  }
}

function HoverAbout() {
  if (scrollY > 3760) {
    about.classList.add('active')
  }
  if (scrollY > 6119) {
    about.classList.remove('active')
  }
  if (scrollY < 37) {
    about.classList.remove('active')
  }
}
function HoverContact() {
  if (scrollY > 6120) {
    contact.classList.add('active')
  }
  if (scrollY < 6119) {
    contact.classList.remove('active')
  }
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
  HoverMenu()
  HoverProduct()
  HoverAbout()
  HoverContact()
}
