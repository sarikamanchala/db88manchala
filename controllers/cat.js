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
// // for a specific Cats.
// exports.cat_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: Cat detail: ' + req.params.id);
// };
exports.cat_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await cat.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
// // Handle Cat update form on PUT.
// exports.cat_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: Cat update PUT' + req.params.id);
// };
//Handle Cat update form on PUT. 
exports.cat_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await cat.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.cat_type)  
               toUpdate.cat_type = req.body.cat_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
   