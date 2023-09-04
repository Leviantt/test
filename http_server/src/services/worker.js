const { parentPort } = require('worker_threads');
const { modThreeOrFive } = require('./index-service');

// Listen for messages from the main thread
parentPort.on('message', (array) => {
  // Send a response back to the main thread
  parentPort.postMessage(array.map((n) => modThreeOrFive(n)));
});
