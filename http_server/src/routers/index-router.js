const IndexRouter = require('../../lib/router');
const controller = require('../controllers/index-controller');
const router = new IndexRouter();

router.get('/', controller.home);
router.post('/number', controller.onNumber);
router.post('/array', controller.onArray);
router.post('/range', controller.onRange);

module.exports = router;
