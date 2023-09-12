function closeSecondsDiv(string) {
  let divCounter = 0;
  let unknownFour = "";
  let fixedHTML = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "<") {
      for (let j = 1; j < 5; j++) {
        unknownFour += string[i + j];
      }
    }
    if (unknownFour === "div>") {
      divCounter++;
      if (divCounter % 2 === 0) {
        fixedHTML += string[i] + "/";
      }
    }
    fixedHTML += string[i];
    unknownFour = "";
  }

  return fixedHTML;
}

console.log(
  "closeSecondsDiv",
  closeSecondsDiv("<div><p> here is a <div> tag </p>")
);
