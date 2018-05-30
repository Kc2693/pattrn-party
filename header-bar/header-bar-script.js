document.querySelector('.header-bar').addEventListener('click', function() {
    mobileMenu(this);
})

document.querySelector('.header-bar-code-display').addEventListener('click', function() {
  window.location='https://codepen.io/Katastrophie/pen/QxwxQO';
})

function mobileMenu(context) {
  var width = window.innerWidth;

  if (width <= 850) {
    context.classList.toggle('toggle-mobile-menu')

    for (let i=1; i < context.children.length; i++) {
      context.children[i].classList.toggle('menu-active');
      document.querySelector('.input-span').classList.toggle('menu-active')
    }
  }
}
