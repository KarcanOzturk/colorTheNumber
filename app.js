const sortButton = document.getElementById("sort")
const randomButton = document.getElementById("randomNumber")
const numsBox = document.getElementById("numsBox")
const removeColors = document.getElementById("removeColors")

function runButton() {
  for (let i = 1; i < 100; i++) {
    numsBox.innerHTML += `<span class='sayi${i}'>${i}</span> `
  }
  sortButton.setAttribute("disabled", true)
  randomButton.removeAttribute("disabled")
}

sortButton.addEventListener("click", runButton)

function randomColor() {
  const randomNumber = Math.floor(Math.random() * 100)
  const element = document.querySelector(`.sayi${randomNumber}`)

  element.style.color = "red"
}

removeColors.addEventListener("click", () => {
  const allNums = document.querySelectorAll("#numsBox span")

  allNums.forEach((element) => (element.style.color = "black"))
})

randomButton.addEventListener("click", randomColor)
