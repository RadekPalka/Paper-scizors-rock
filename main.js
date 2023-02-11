const images = document.querySelectorAll(".container>img")
const computerChoiceImage = document.querySelector(".computer-choice>img")
const resultParagraph = document.querySelector(".result>p")
const winsSpan = document.querySelector(".wins>span")
const losesSpan = document.querySelector(".loses>span")
const drawsSpan = document.querySelector(".draws>span")

const fightWithRock = computerChoice =>{
  if (computerChoice === "rock"){
    resultParagraph.textContent = "It's draw"
    drawsSpan.textContent= +drawsSpan.textContent +1
  }
  else if (computerChoice === "paper"){
    resultParagraph.textContent = "You lose"
    losesSpan.textContent= +losesSpan.textContent +1
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
    resultParagraph.textContent = "You lose"
    losesSpan.textContent= +losesSpan.textContent +1
  }
}
const fightWithScissors = computerChoice =>{
  if (computerChoice === "rock"){
    resultParagraph.textContent = "You lose"
    losesSpan.textContent= +losesSpan.textContent +1
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
  const choices = ["rock", "paper", "scissors"]
  const index = Math.floor(Math.random()*3)
  const computerChoice = choices[index]
  computerChoiceImage.style.display = "block"
  computerChoiceImage.classList.add(computerChoice)
  return computerChoice
}

const removeHover = () =>{

  for (const image of images){
    image.classList.remove("user-images")
    
  }
}

const getChoice = e =>{
  const element = e.target
  const userChoice= element.getAttribute('alt')
  element.classList.add("clicked")
  removeHover()
  const computerChoice= draw()
  showResult(userChoice,computerChoice)
}

for (const image of images){
  image.classList.add("user-images")
  image.addEventListener("click", getChoice)
}