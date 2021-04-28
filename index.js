let img = document.querySelector('.shoes')
const colors = document.querySelectorAll('.color')
const sizes = document.querySelectorAll('.size')

const body = document.querySelector('body')
const checkbox = document.querySelector('.toogle-color-mode')
const actionsContainer = document.querySelector('.actions-container')

colors.forEach(color => {
  color.addEventListener('change', changeColor)
})

sizes.forEach(size => {
  size.addEventListener('change', changeSize)
})

checkbox.addEventListener('click', changeBackground)

function changeColor (element, color) {
  colors.forEach(color => {
    color.classList.remove('selected')
  })

  const id = element.getAttribute('id')
  img.src = `/assets/Tenis-${id}.svg`
  img.style.animation = 'none'

  setTimeout(() => {
    img.style.animation = ''
  }, 100)
  element.classList.add('selected')

  const root = document.querySelector(':root')
  document.documentElement.style.setProperty('--selected-color', color)
}

function changeSize (element) {
  sizes.forEach(size => {
    size.classList.remove('selected')
  })
  element.classList.add('selected')
}

function changeBackground () {
  if (checkbox.checked) {
    body.classList.add('dark')
    actionsContainer.classList.add('dark')
  } else {
    body.classList.remove('dark')
    actionsContainer.classList.remove('dark')
  }
}
