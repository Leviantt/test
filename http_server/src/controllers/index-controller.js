const { modThreeOrFive, getArray } = require('../services/index-service');
const { getWorker } = require('../services/workers-init');
const fs = require('fs');
function home(req, res) {
  const rs = fs.createReadStream('../client/index.html');
  rs.pipe(res);
}

function onNumber(req, res) {
  console.dir({ 'req.body': req.body });
  const { number } = req.body;
  const result = modThreeOrFive(number);
  res.json(result);
}

function onArray(req, res) {
  const { array } = req.body;

  const worker = getWorker();
  worker.postMessage(array);
  worker.on('message', (array) => {
    res.json(array);
  });
}

function onRange(req, res) {
  const { range } = req.body;
  if (!Array.isArray(range)) {
    return res.json('Range must be an array.');
  }

  const [a, b] = range;
  const array = getArray(a, b);

  const worker = getWorker();
  worker.postMessage(array);
  worker.on('message', (array) => {
    res.json(array);
  });
}

module.exports = {
  onNumber,
  onArray,
  onRange,
  home
};
