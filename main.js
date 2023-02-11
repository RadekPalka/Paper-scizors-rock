const images = document.querySelectorAll(".container>img")
const computerChoiceImage = document.querySelector(".computer-choice>img")
const resultParagraph = document.querySelector(".result>p")
const winsSpan = document.querySelector(".wins>span")
const loosesSpan = document.querySelector(".looses>span")
const drawsSpan = document.querySelector(".draws>span")
const btn = document.querySelector("button")
const messageParagraph = document.querySelector("p.message")

const fightWithRock = computerChoice =>{
  if (computerChoice === "rock"){
    resultParagraph.textContent = "It's draw"
    drawsSpan.textContent= +drawsSpan.textContent +1
  }
  else if (computerChoice === "paper"){
    resultParagraph.textContent = "You loose"
    loosesSpan.textContent= +loosesSpan.textContent +1
  }
  else if (computerChoice === "scissors"){
    resultParagraph.textContent = "You win"
    winsSpan.textContent= +winsSpan.textContent +1
  }
}
const fightWithPaper = computerChoice =>{
  if (computerChoice === "rock"){
    resultParagraph.textContent = "You win"
    winsSpan.textContent= +winsSpan.textContent +1
  }
  else if (computerChoice === "paper"){
    resultParagraph.textContent = "It's a draw"
    drawsSpan.textContent= +drawsSpan.textContent +1
  }
  else if (computerChoice === "scissors"){
    resultParagraph.textContent = "You loose"
    loosesSpan.textContent= +loosesSpan.textContent +1
  }
}
const fightWithScissors = computerChoice =>{
  if (computerChoice === "rock"){
    resultParagraph.textContent = "You loose"
    loosesSpan.textContent= +loosesSpan.textContent +1
  }
  else if (computerChoice === "paper"){
    resultParagraph.textContent = "You win"
    winsSpan.textContent= +winsSpan.textContent +1
  }
  else if (computerChoice === "scissors"){
    resultParagraph.textContent = "It's a draw"
    drawsSpan.textContent= +drawsSpan.textContent +1
  }
}

const showResult= (userChoice, computerChoice) =>{
  if (userChoice === "rock"){
    fightWithRock(computerChoice)
  }
  else if (userChoice === "paper"){
    fightWithPaper(computerChoice)
  }
  else if (userChoice === "scissors"){
    fightWithScissors(computerChoice)
  }
}

const draw = () =>{
  messageParagraph.textContent= "Computer choose"
  const choices = ["rock", "paper", "scissors"]
  const index = Math.floor(Math.random()*3)
  const computerChoice = choices[index]
  computerChoiceImage.style.display = "block"
  computerChoiceImage.classList.add(computerChoice)
  computerChoiceImage.setAttribute("alt", computerChoice)
  return computerChoice
}

const removeHover = () =>{

  for (const image of images){
    image.classList.remove("user-images")
    image.removeEventListener("click", getChoice)
    
  }
}

const getChoice = e =>{
  messageParagraph.textContent= ""
  const element = e.target
  const userChoice= element.getAttribute('alt')
  element.classList.add("clicked")
  removeHover()
  const computerChoice= draw()
  showResult(userChoice,computerChoice)
  btn.style.display= "block"
}
const addClickListeners = ()=>{
  for (const image of images){
    image.classList.remove("clicked")
    image.classList.add("user-images")
    image.addEventListener("click", getChoice)
  }

}
addClickListeners()
const playAgain = () =>{
  addClickListeners()
  computerChoiceImage.style.display= "none"
  computerChoiceImage.classList.remove("rock")
  computerChoiceImage.classList.remove("paper")
  computerChoiceImage.classList.remove("scissors")
  resultParagraph.textContent = ""
  btn.style.display= "none"

}
btn.addEventListener("click", playAgain)