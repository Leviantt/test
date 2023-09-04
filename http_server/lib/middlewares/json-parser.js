module.exports = (req, res) => {
  res.json = (data) => {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(JSON.stringify(data));
  };
};
