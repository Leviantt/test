const WebSocket = require('ws');

const client = new WebSocket('ws://localhost:8080');

client.on('open', () => {
  // Test the "number" command
  const numberData = {
    command: 'number',
    data: 42,
  };

  // Test the "array" command
  const arrayData = {
    command: 'array',
    data: [5, 2, 3, 1, 21, 45, 1],
  };

  // Test the "range" command
  const rangeData = {
    command: 'range',
    data: [0.5, 21.5],
  };

  client.send(JSON.stringify(numberData));
  client.send(JSON.stringify(arrayData));
  client.send(JSON.stringify(rangeData));
});

client.on('message', (message) => {
  console.log(`Server response: ${message}`);
});

client.on('close', () => {
  console.log('Connection closed');
});
