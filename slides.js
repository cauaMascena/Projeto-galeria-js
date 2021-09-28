"use-strict"

const imagens = [
    "./img/demon-slayer.jpg",
    "./img/giyu-tomioka.png",
    "./img/inosuke-hashibira.jpg",
    "./img/luas-superiores.jpg",
    "./img/muzan-kibutsuji.png",
    "./img/nezuko-kamado.jpg",
    "./img/tanjiro-kamado.png",
    "./img/zenitsu-agatsuma.jpg"
]

const limparId = (urlImagem) => urlImagem.split("/")[2].split(".")[0]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)

}

const criarSlide = (urlImagem) => {
    const slideContainer = document.querySelector(".slide-container")

    const novoLink = document.createElement("div")
    novoLink.setAttribute(slide-container)
    novoLink.href = urlImagem
    novoLink.classList.add("slide-container")
    novoLink.innerHTML = `<a href="#" class="fechar">&#10006;</a>
                          <a href="${IDBIndex}" class="navegacao anterior">&#171;</a>
                          <img src="${urlImagem}" alt="">
                          <a href="${IDBIndex}" class="navegacao proximo">&#187;</a>`
    slideContainer.appendChild(novoLink)
}

const carregarSlides = () => imagens.forEach(criarSlide)

carregarSlides()