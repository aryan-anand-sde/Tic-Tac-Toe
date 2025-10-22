const ting = new Audio("./Assets/Ting.mp3");
const music = new Audio("./Assets/Music.mp3");
const gameOver = new Audio("./Assets/Game Over.mp3");

music.play();
console.log("Welcome to Tic Tac Toe");

let turn = "X";
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};
let over = false;

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".box-text");
  box.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if (!over) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

const checkWin = () => {
  let boxTexts = document.getElementsByClassName("box-text");
  const wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Won";
      gameOver.play();
      over = true;
      document
        .querySelector(".image-box")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate((${e[5]}deg)`;
    }
  });
};

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  window.location.reload();
});
