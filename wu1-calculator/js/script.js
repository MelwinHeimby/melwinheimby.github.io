let lcd = null; // displayen

let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

function init() {
  lcd = document.getElementById("lcd");
  let keyBoard = document.getElementById("keyBoard");
  keyBoard.onclick = buttonClick;
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
  let btn = e.target.id; //id för den tangent som tryckte ner

  // kollar om siffertangent är nedtryckt
  if (btn.substring(0, 1) === "b") {
    let digit = btn.substring(1, 2); // plockar ut siffran från id:et
  } else {
    // Inte en siffertangent, övriga tangenter.
  }
}

const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): '); 

/**
 * Lägger till decimaltecken
 */
function addComma() {}

/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator) {}

/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {}

/** Rensar display */
function clearLCD() {
  lcd.value = "";
  isComma = false;
}

/** Rensar allt, reset */
function memClear() {
  memory = 0;
  arithmetic = null;
  clearLCD();
}

window.onload = init;
