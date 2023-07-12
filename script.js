function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //ou essa

  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar avatar light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter avatar
    img.setAttribute("src", "./assets/avatar.png")
  }
}
