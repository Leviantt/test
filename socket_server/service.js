function getArray(a, b) {
  const left = Math.ceil(a);
  const right = Math.floor(b);
  const array = [];
  for (let i = left; i <= right; i++) {
    array.push(i);
  }
  return array;
}

function modThreeOrFive(num) {
  if (num % 15 === 0) return 'МаркоПолло';
  if (num % 3 === 0) return 'Марко';
  if (num % 5 === 0) return 'Полло';

  return num;
}

module.exports = {
  getArray,
  modThreeOrFive,
};
