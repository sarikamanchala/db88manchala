var cat = require('../models/cat');
// // List of all Cats
// exports.cat_list = function(req, res) {
//  res.send('NOT IMPLEMENTED: cat list');
// };
// List of all cats
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
// // Handle Cat create on POST.
// exports.cat_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: Cat create POST');
// };
// Handle Cat create on POST.
exports.cat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new cat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.cat_type = req.body.cat_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    console.log(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Cat delete form on DELETE.
exports.cat_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Cat delete DELETE ' + req.params.id);
};
// Handle Cat update form on PUT.
exports.cat_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Cat update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.cat_view_all_Page = async function(req, res) {
    try{
    theCat = await cat.find();
    res.render('cats', { title: 'Cat Search Results', results: theCat });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   