const images = document.querySelectorAll(".container>img")

const draw = () =>{
  const choices = ["rock", "paper", "scissors"]
  const index = Math.floor(Math.random()*3)
  const randomChoice = choices[index]
  console.log(randomChoice)
}

const removeHover = () =>{

  for (const image of images){
    image.classList.remove("user-images")
    
  }
}

const getChoice = e =>{
  const element = e.target
  console.log(element.getAttribute('alt'))
  element.classList.add("clicked")
  removeHover()
  draw()
}

for (const image of images){
  image.classList.add("user-images")
  image.addEventListener("click", getChoice)
}