require('dotenv').config();
const PORT = process.env.PORT || 8000;
const Application = require('../lib/application');
const router = require('./routers/index-router');

const jsonParser = require('../lib/middlewares/json-parser');
const urlParser = require('../lib/middlewares/url-parser');
const bodyParser = require('../lib/middlewares/body-parser');

const app = new Application();

app.use(jsonParser);
app.use(bodyParser);
app.use(urlParser(`http://localhost:${PORT}`));

app.addRouter(router);

app.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT}...`),
);
