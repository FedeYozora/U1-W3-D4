const createBingoCells = () => {
  const bingoE = document.getElementById("Bingo");
  for (let i = 0; i < 76; i++) {
    const bingoCellDiv = document.createElement("div");
    bingoCellDiv.classList.add("bingo-cell");

    const bingoCellContent = document.createElement("h3");
    bingoCellContent.innerText = i + 1;

    bingoCellDiv.appendChild(bingoCellContent);
    bingoE.appendChild(bingoCellDiv);
  }
};

console.log(createBingoCells());

const button = document.createElement("button");
button.innerText = "Roll";

button.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 76) + 1;

  console.log(`Rolled number: ${randomNumber}`);

  const highlightBingoCell = number => {
    const bingoCell = document.querySelector(
      `.bingo-cell:nth-child(${number})`
    );
    if (bingoCell) {
      bingoCell.classList.add("rolled");
    }
  };
  highlightBingoCell(randomNumber);
});

document.body.appendChild(button);

function createBingoCard() {
  const bingoCard = document.createElement("table");
  bingoCard.setAttribute("border", "1");
  const numbers = Array.from({ length: 76 }, (_, i) => i + 1);
  const shuffledNumbers = shuffleArray(numbers);

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("td");
      const number = shuffledNumbers.pop();
      cell.textContent = number;
      cell.addEventListener("click", () => {
        cell.style.backgroundColor = "yellow";
        cell.style.color = "black";
      });
      row.appendChild(cell);
    }

    bingoCard.appendChild(row);
  }

  document.body.appendChild(bingoCard);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

createBingoCard();
