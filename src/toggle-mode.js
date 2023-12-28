let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light') /*ele esta adicionando a meu documento a classe ligth porque por padrao esta dark  */

  const mode = darkMode ? 'light' : 'dark'

  event.currentTarget
  .querySelector('span').textContent = `${mode} mode activado ! `

  darkMode = !darkMode /* Estou deixando o dark mode como falso */
})