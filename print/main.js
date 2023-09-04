export function modThreeOrFive(num) {
  if (num % 15 === 0) return "МаркоПолло";
  if (num % 3 === 0) return "Марко";
  if (num % 5 === 0) return "Полло";

  return num;
}

function printNumbersAndWords() {
  for (let i = 1; i <= 1000; i++) {
    console.log(modThreeOrFive(i));
  }
}

printNumbersAndWords();