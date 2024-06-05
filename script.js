function toggleMode() {
  const html = document.documentElement

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-ygor-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-ygor.png")
  }

  // set se tiver sem light mode, manter a imagem normal
  //teste //teste
}
