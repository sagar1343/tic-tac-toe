let cross = true;
let X = [];
let O = [];
const winPage = document.querySelector(".winPage");
const restart = document.getElementById("restart");
const winnerName = document.querySelector("#winnerName");
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) =>
  box.addEventListener("click", (event) => marking(event.target), {
    once: true,
  })
);
let matrix = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
};

function marking(box) {
  if (cross) {
    box.innerText = "X";
    X.push(box.id);
    if (horizontalWin(X) || verticalWin(X)) {
      winPage.style.bottom = 0;
      winnerName.innerText = "Player 1";
    }
  } else {
    box.innerText = "O";
    O.push(box.id);
    if (horizontalWin(O) || verticalWin(O)) {
      winPage.style.bottom = 0;
      winnerName.innerText = "Player 1";
    }
  }
  console.log(X, O);
  cross = !cross;
}

function horizontalWin(playerArray) {
  let win = false;
  for (let j = 0; j < 3; j++) {
    let count = 0;
    for (let i = 0; i < playerArray.length; i++) {
      if (matrix[playerArray[i]][0] == j) {
        count++;
      }
    }
    if (count == 3) {
      win = true;
    }
  }
  return win;
}
function verticalWin(playerArray) {
  let win = false;
  for (let j = 0; j < 3; j++) {
    let count = 0;
    for (let i = 0; i < playerArray.length; i++) {
      if (matrix[playerArray[i]][1] == j) {
        count++;
      }
    }
    if (count == 3) {
      win = true;
    }
  }
  return win;
}
