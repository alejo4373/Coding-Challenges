document.addEventListener('DOMContentLoaded', () => {
  let h = document.body.firstElementChild.firstElementChild

  let button = document.createElement('button')
  button.innerText = 'Unsubscribe from All'
  button.addEventListener('click', () => {
    document.querySelectorAll('input[type=checkbox]').forEach((checkbox => checkbox.checked = false))
  })

  document.body.firstElementChild.insertBefore(button, h.nextSibling)
}
