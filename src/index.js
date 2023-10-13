const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
]

const memoryGame = new MemoryGame(cards)

window.addEventListener("load", (event) => {
  let html = ""
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `
  })

  document.querySelector("#memory-board").innerHTML = html

  const flippedCards = []

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped")
      if (card.classList.contains("flipped")) {
        card.classList.remove("back")
      }

      flippedCards.push(card)
      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards

        const card1Name = card1.getAttribute("data-card-name")
        const card2Name = card2.getAttribute("data-card-name")

        if (card1Name === card2Name) {
          card1.classList.add("blocked")
          card2.classList.add("blocked")
        } else {
          setTimeout(() => {
            card1.classList.toggle("flipped")
            card2.classList.toggle("flipped")
          }, 2000)
        }

        flippedCards.length = 0
      }

      if (memoryGame.checkIfFinished()) {
        console.log("GAME OVER")
      }
    })
  })
})
