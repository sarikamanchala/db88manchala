var cat = require('../models/cat');
// List of all Cats
exports.cat_list = function(req, res) {
 res.send('NOT IMPLEMENTED: cat list');
};
// for a specific Cats.
exports.cat_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Cat detail: ' + req.params.id);
};
// Handle Cat create on POST.
exports.cat_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Cat create POST');
};
// Handle Cat delete form on DELETE.
exports.cat_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Cat delete DELETE ' + req.params.id);
};
// Handle Cat update form on PUT.
exports.cat_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Cat update PUT' + req.params.id);
};