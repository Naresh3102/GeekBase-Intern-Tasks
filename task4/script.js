const boxs = document.querySelectorAll(".box");
const playerTurn = document.querySelector("h2.player-turn > span");
const statusTxt = document.querySelector("#status");
const btnReset = document.querySelector("#reset");

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let running = true;

boxs.forEach((box) => box.addEventListener("click", boxClick));
btnReset.addEventListener("click", restartGame);
playerTurn.textContent = `${player}`;

function boxClick() {
  const index = this.dataset.index;
  if (options[index] != "" || !running) {
    return;
  }
  updateBox(this, index);
  checkWinner();
}

function updateBox(box, index) {
  options[index] = player;
  box.innerHTML = player;
  box.style.backgroundColor = `${player == "X" ? "#00d900" : "#0037ffb0"}`;
}

function changePlayer() {
  player = player == "X" ? "O" : "X";
  playerTurn.textContent = `${player}`;
  playerTurn.style.color = `${player == "X" ? "#00d900" : "#0037ffb0"}`;
}

function checkWinner() {
  let isWon = false;
  for (let i = 0; i < win.length; i++) {
    const condition = win[i];
    const box1 = options[condition[0]];
    const box2 = options[condition[1]];
    const box3 = options[condition[2]];
    if (box1 == "" || box2 == "" || box3 == "") {
      continue;
    }
    if (box1 == box2 && box2 == box3) {
      isWon = true;
    }
  }

  if (isWon) {
    statusTxt.innerHTML = `Player <span>${player}</span> Won`;
    running = false;
  } else if (!options.includes("")) {
    statusTxt.textContent = `Game Draw..!`;
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  options = ["", "", "", "", "", "", "", "", ""];
  player = "X";
  running = true;
  playerTurn.textContent = `${player}`;
  playerTurn.style.color = "#00d900";
  statusTxt.innerHTML = "";

  boxs.forEach((box) => {
    box.innerHTML = "";
    box.style.backgroundColor = "#fbff00b0";
  });
}
