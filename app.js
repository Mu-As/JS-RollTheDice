const rollDiceButton = document.querySelector(".container button");
const targetNumberInput = document.getElementById("targetNumber");
const guessNumberInput = document.getElementById("guessNumber");
const diceRollsResultList = document.getElementById("dice-rolls");
const info = document.querySelector(".info");
const winInfo = document.querySelector(".win");
const drawInfo = document.querySelector(".draw");
const loseInfo = document.querySelector(".lose");
const diceRolls = document.querySelector(".dice-rolls");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function refreshEndInfo() {
  loseInfo.style.display = "none";
  drawInfo.style.display = "none";
  winInfo.style.display = "none";
}

function deriveNumberForDiceRolls() {
  const dice1 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="1.5"/>
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  </svg>`;
  const dice2 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>`;
  const dice3 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>`;
  const dice4 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-4" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>`;
  const dice5 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>`;
  const dice6 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-6" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>`;
  refreshEndInfo();
  const enteredNumber = targetNumberInput.value;
  const guessNumber = guessNumberInput.value;
  if (enteredNumber >= 1 && enteredNumber <= 6 && guessNumber >= 1) {

    diceRollsResultList.innerHTML = "";

    let isRolledNumber_targetNumber = false;

    let totalRolls = 0;
    while (!isRolledNumber_targetNumber) {
      const rolledNumber = rollDice();
      totalRolls++;

      const newRollListItem = document.createElement("li");
      const text = "Atış " + totalRolls + ": ";
      const outputText = text;

      if (rolledNumber == 1) {
        newRollListItem.innerHTML = outputText + " " + dice1;
        newRollListItem.style.backgroundColor = "#E6FBF2";
      } else if (rolledNumber == 2) {
        newRollListItem.innerHTML = outputText + " " + dice2;
        newRollListItem.style.backgroundColor = "#66E4B6";
      } else if (rolledNumber == 3) {
        newRollListItem.innerHTML = outputText + " " + dice3;
        newRollListItem.style.backgroundColor = "#09A66E";
      } else if (rolledNumber == 4) {
        newRollListItem.innerHTML = outputText + " " + dice4;
        newRollListItem.style.backgroundColor = "#E3D1C0";
      } else if (rolledNumber == 5) {
        newRollListItem.innerHTML = outputText + " " + dice5;
        newRollListItem.style.backgroundColor = "#DC9E65";
      } else {
        newRollListItem.innerHTML = outputText + " " + dice6;
        newRollListItem.style.backgroundColor = "#A6A25B";
      }
      
      newRollListItem.style.margin = "0.5rem";
      newRollListItem.style.padding = "0.5rem";
      newRollListItem.style.borderRadius = "5px";
      newRollListItem.style.display = "inline-block";
      diceRollsResultList.append(newRollListItem);

      isRolledNumber_targetNumber = rolledNumber == enteredNumber;
    }

    const lastRoll = diceRollsResultList.lastChild;
    console.log(lastRoll)
    lastRoll.style.border = "5px solid #828C98"
    lastRoll.style.fontWeight = "bold"
    const outputTotalRolls = document.getElementById("output-total-rolls");
    const outputTargetNumber = document.getElementById("output-target-number");

    outputTargetNumber.textContent = enteredNumber;
    outputTotalRolls.textContent = totalRolls;
    diceRolls.style.display = "block";
    info.style.display = "block";
    if (totalRolls > guessNumber) {
      loseInfo.style.display = "block";
    } else if (guessNumber > totalRolls) {
      winInfo.style.display = "block";
    } else {
      drawInfo.style.display = "block";
    }
  } else {
    alert("Sayı 1'den küçük veya 6'dan büyük, tahminin ise 1'den küçük olamaz!");
    window.location.reload();
  }
}

rollDiceButton.addEventListener("click", deriveNumberForDiceRolls);
