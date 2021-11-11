var cat = require('../models/cat');
// // List of all Cats
// exports.cat_list = function(req, res) {
//  res.send('NOT IMPLEMENTED: cat list');
// };
// List of all Costumes
exports.cat_list = async function(req, res) {
    try{
    theCat = await cat.find();
    res.send(theCat);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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