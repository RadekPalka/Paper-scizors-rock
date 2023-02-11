const images = document.querySelectorAll("img")

const draw = () =>{
  const choices = ["rock", "paper", "scissors"]
  const index = Math.floor(Math.random()*3)
  const randomChoice = choices[index]
  console.log(randomChoice)
}

const getChoice = e =>{
  console.log(e.target.getAttribute('alt'))
  draw()
}

for (const image of images){
  image.addEventListener("click", getChoice)
}