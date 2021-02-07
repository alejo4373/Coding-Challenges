document.addEventListener('DOMContentLoaded', () => {
  let h = document.body.firstElementChild.firstElementChild

  let button = document.createElement('button')
  button.innerText = 'Unsubscribe from All'
  button.addEventListener('click', () => {
    document.querySelectorAll('input[type=checkbox]').forEach((checkbox, i) => {
      setTimeout(() => checkbox.checked = false, 100 * i)
    })
  })
  document.body.firstElementChild.insertBefore(button, h.nextSibling)
})

