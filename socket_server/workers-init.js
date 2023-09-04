const { Worker } = require('worker_threads');
const os = require('os');

const cpusLength = os.cpus().length;
const workers = [];

function initializeWorkers() {
  for (let i = 0; i < cpusLength; i++) {
    const worker = new Worker('./worker.js');
    worker.on('error', (error) => {
      console.error('Worker error:', error);
    });
    workers.push(worker);
  }
}

function createGetWorker() {
  let workerIndex = 0;
  return function () {
    workerIndex = (workerIndex + 1) % cpusLength;
    return workers[workerIndex];
  };
}

initializeWorkers();

module.exports = {
  getWorker: createGetWorker(),
};
