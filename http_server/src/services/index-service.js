function modThreeOrFive(num) {
  if (num % 15 === 0) return 'МаркоПолло';
  if (num % 3 === 0) return 'Марко';
  if (num % 5 === 0) return 'Полло';

  return num;
}

function getArrayFromRange(a, b) {
  const left = Math.ceil(a);
  const right = Math.floor(b);
  const array = [];

  for (let i = left; i <= right; i++) {
    array.push(i);
  }
  return array;
}

module.exports = {
  modThreeOrFive,
  getArray: getArrayFromRange,
};
