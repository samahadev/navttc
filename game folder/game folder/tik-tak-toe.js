// user || computer
let currPlayer = "user";

// 0 || 1
let currAttempt = Math.floor(Math.random() * 1.99);

// Game Matrix (3 x 3) => null || 0 || 1
const gameMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Dome reface
const BoxHTML = document.querySelectorAll(".box"); //  9 boxes
const BoxHTMLMatrix = [
  [BoxHTML[0], BoxHTML[1], BoxHTML[2]],
  [BoxHTML[3], BoxHTML[4], BoxHTML[5]],
  [BoxHTML[6], BoxHTML[7], BoxHTML[8]],
];

// player =>  user || computer
const togglePlayer = () => {
  const playerEle = document.querySelector(".current-player");
  if (currPlayer == "user") {
    currPlayer = "computer";
  } else {
    currPlayer = "user";
  }
  playerEle.innerHTML = currPlayer;
};

const toggleAttempt = () => {
  if (currAttempt == 1) {
    currAttempt = 0;
  } else {
    currAttempt = 1;
  }
};

const updateMatrix = (row, col) => {
  gameMatrix[row][col] = currAttempt;
};

const findRowAndColWithIndex = (index) => {
  if (index == 0) return { row: 0, col: 0 };
  if (index == 1) return { row: 0, col: 1 };
  if (index == 2) return { row: 0, col: 2 };

  if (index == 3) return { row: 1, col: 0 };
  if (index == 4) return { row: 1, col: 1 };
  if (index == 5) return { row: 1, col: 2 };

  if (index == 6) return { row: 2, col: 0 };
  if (index == 7) return { row: 2, col: 1 };
  if (index == 8) return { row: 2, col: 2 };
};

const checkForDiagonalMatch = () => {
  //  Check For All same Values in Rows

  // Row 1
  if (gameMatrix[0][0] == 1 && gameMatrix[0][1] == 1 && gameMatrix[0][2] == 1)
    return true;
  if (gameMatrix[0][0] == 0 && gameMatrix[0][1] == 0 && gameMatrix[0][2] == 0)
    return true;
  // Row 2
  if (gameMatrix[1][0] == 1 && gameMatrix[1][1] == 1 && gameMatrix[1][2] == 1)
    return true;
  if (gameMatrix[1][0] == 0 && gameMatrix[1][1] == 0 && gameMatrix[1][2] == 0)
    return true;
  // Row 3
  if (gameMatrix[2][0] == 1 && gameMatrix[2][1] == 1 && gameMatrix[2][2] == 1)
    return true;
  if (gameMatrix[2][0] == 0 && gameMatrix[2][1] == 0 && gameMatrix[2][2] == 0)
    return true;

  // Check For All same Values in Columns

  // Col 1
  if (gameMatrix[0][0] == 1 && gameMatrix[1][0] == 1 && gameMatrix[2][0] == 1)
    return true;
  if (gameMatrix[0][0] == 0 && gameMatrix[1][0] == 0 && gameMatrix[2][0] == 0)
    return true;
  // Col 2
  if (gameMatrix[0][1] == 1 && gameMatrix[1][1] == 1 && gameMatrix[2][1] == 1)
    return true;
  if (gameMatrix[0][1] == 0 && gameMatrix[1][1] == 0 && gameMatrix[2][1] == 0)
    return true;
  // Col 3
  if (gameMatrix[0][2] == 1 && gameMatrix[1][2] == 1 && gameMatrix[2][2] == 1)
    return true;
  if (gameMatrix[0][2] == 0 && gameMatrix[1][2] == 0 && gameMatrix[2][2] == 0)
    return true;

  // Check For Diagonal Match
  //  \
  if (gameMatrix[0][0] == 1 && gameMatrix[1][1] == 1 && gameMatrix[2][2] == 1)
    return true;
  if (gameMatrix[0][0] == 0 && gameMatrix[1][1] == 0 && gameMatrix[2][2] == 0)
    return true;
  // /
  if (gameMatrix[0][2] == 1 && gameMatrix[1][1] == 1 && gameMatrix[2][0] == 1)
    return true;
  if (gameMatrix[0][2] == 0 && gameMatrix[1][1] == 0 && gameMatrix[2][0] == 0)
    return true;

  return false;
};

const checkDrawStatus = () => {
  let isDraw = true;
  gameMatrix.forEach((row) => {
    row.forEach((ele) => {
      if (ele == null) {
        isDraw = false;
      }
    });
  });
  return isDraw;
};

const onPlayerMove = (index) => {
  const currEle = BoxHTML[index];
  // Frontend is updated
  if (currAttempt == 1) {
    currEle.classList.add("true");
  } else {
    currEle.classList.add("false");
  }
  // Update Matrix
  const rowAndCol = findRowAndColWithIndex(index);
  updateMatrix(rowAndCol.row, rowAndCol.col);

  // Check for win diagonal
  const isWin = checkForDiagonalMatch();
  if (isWin) {
    document.body.classList.add("win");
    document.body.classList.add(`win-${currPlayer}`);
    gifImgvisibility(true);
    diableAllBoxes();
    return;
  }

  // If win then show alert

  // If All is selected and no one wins then show alert
  const isDraw = checkDrawStatus();
  if (isDraw) {
    document.body.classList.add("draw");
    diableAllBoxes();
    return;
  }

  // Update Attempt and user
  togglePlayer();
  toggleAttempt();

  // If computer is currentPlayer then make a move
  if (currPlayer == "computer") {
    makeComputerMove();
  }
};

const diableAllBoxes = () => {
  BoxHTML.forEach((ele) => {
    ele.style.pointerEvents = "none";
  });
};

const selectRandomIndexWhichIsNotSelected = () => {
  const index = Math.floor(Math.random() * 8);
  const rowAndCol = findRowAndColWithIndex(index);

  if (gameMatrix[rowAndCol.row][rowAndCol.col] == 1) {
    return selectRandomIndexWhichIsNotSelected();
  }
  if (gameMatrix[rowAndCol.row][rowAndCol.col] == 0) {
    return selectRandomIndexWhichIsNotSelected();
  }

  return index;
};

const makeComputerMove = () => {
  const index = selectRandomIndexWhichIsNotSelected();
  const bodyEle = document.querySelector("body");

  bodyEle.classList.add("computer");

  setTimeout(() => {
    onPlayerMove(index);
    bodyEle.classList.remove("computer");
  }, 1500);
};

for (let index = 0; index < BoxHTML.length; index++) {
  BoxHTML[index].addEventListener("click", () => onPlayerMove(index));
}

document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload();
});

function gifImgvisibility(visibility) {
  const imgEle = document.querySelector("img");
  if (visibility) {
    imgEle.style.width = "200px";
  } else {
    imgEle.style.width = "0vw";
  }
}
