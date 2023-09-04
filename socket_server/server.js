const WebSocket = require('ws');
const { getWorker } = require('./workers-init');
const { modThreeOrFive, getArray } = require('./service');

const ws = new WebSocket.Server({ port: 8080 });

const handlers = {
  number: (number, ws) => {
    ws.send(modThreeOrFive(number).toString());
  },
  array: (array, ws) => {
    const worker = getWorker();
    worker.postMessage(array);

    worker.on('message', (array) => {
      ws.send(JSON.stringify(array));
    });
  },
  range: (range, ws) => {
    const worker = getWorker();
    const [a, b] = range;
    const array = getArray(a, b);
    worker.postMessage(array);

    worker.on('message', (array) => {
      ws.send(JSON.stringify(array));
    });
  },
};

ws.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const { command, data } = JSON.parse(message.toString());
    console.log('Client requets:', { command, data });
    const handler = handlers[command];

    if (!handler) {
      ws.send('Unknown command.');
      return;
    }
    handler(data, ws);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
