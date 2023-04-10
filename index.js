const computerInput = document.getElementById("computer");
const UserInput = document.getElementById("user");
const result = document.getElementById("result");

var input;


document.getElementById("alertmsg").style.visibility = "hidden";
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possible) => {
  possible.addEventListener("click", (e) => {
    input = e.target.id;
    UserInput.innerHTML = input;

    generateComputer();

    finalResult();
  });
});

function generateComputer() {
  let number = Math.floor(Math.random() * 3);

  if (number === 0) {
    computerInput.innerHTML = "Rock";
  }
  if (number === 1) {
    computerInput.innerHTML = "Paper";
  }
  if (number === 2) {
    computerInput.innerHTML = "Scissor";
  }
}

function finalResult() {
    document.getElementById("alertmsg").style.visibility = "visible";
  if (computerInput.innerHTML === UserInput.innerHTML) {
    result.innerHTML = "Draw";
  } else if (
    (computerInput.innerHTML === "Rock" && UserInput.innerHTML == "Paper") ||
    (computerInput.innerHTML === "Sciccor" && UserInput.innerHTML == "Rock") ||
    (computerInput.innerHTML === "Paper" && UserInput.innerHTML == "Scissor")
  ) {
    result.innerHTML = "You Won";
  } else {
    result.innerHTML = "You Lose";
  }
}

function reset() {
    window.location.reload();
}
