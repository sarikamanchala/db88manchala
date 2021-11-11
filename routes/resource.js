var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cat_controller = require('../controllers/cat');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
router.get('/', cat_controller.cat_view_all_Page );
//cat ROUTES ///
// POST request for creating a Cat.
router.post('/cat', cat_controller.cat_create_post);
// DELETE request to delete Cat.
router.delete('/cat/:id', cat_controller.cat_delete);
// PUT request to update Cat.
router.put('/cat/:id',
cat_controller.cat_update_put);
// GET request for one Cat.
router.get('/cat/:id', cat_controller.cat_detail);
// GET request for list of all Cat items.
router.get('/cat', cat_controller.cat_list);
module.exports = router;