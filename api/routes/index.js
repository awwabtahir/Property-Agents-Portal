var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlOptions = require('../controllers/options');
var ctrlAuth = require('../controllers/authentication');
var ctrlLead = require('../controllers/lead');
var ctrlMessage = require('../controllers/message');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/getUsers', auth, ctrlProfile.getUsers);
router.post('/updateUser', ctrlProfile.updateUser);
router.post('/deleteUser', ctrlProfile.deleteUser);

// add options
router.post('/addCity', ctrlOptions.addCity);
router.post('/updateCity', ctrlOptions.updateCity);
router.post('/deleteCity', ctrlOptions.deleteCity);
router.post('/addLoc', ctrlOptions.addLoc);
router.post('/updateLoc', ctrlOptions.updateLoc);
router.post('/deleteLoc', ctrlOptions.deleteLoc);
router.post('/addPropType', ctrlOptions.addPropType);
router.post('/updatePropType', ctrlOptions.updatePropType);
router.post('/deletePropType', ctrlOptions.deletePropType);
router.post('/addStatusType', ctrlOptions.addStatusType);
router.post('/updateStatusType', ctrlOptions.updateStatusType);
router.post('/deleteStatusType', ctrlOptions.deleteStatusType);
router.post('/updateStatus', ctrlOptions.updateStatus);
router.post('/addLead', ctrlLead.addLead);
router.post('/updateLead', ctrlLead.updateLead);
router.post('/sendMessage', ctrlMessage.sendMessage);

// get options
router.get('/getCities', auth, ctrlOptions.getCities);
router.get('/getLocations', auth, ctrlOptions.getLocations);
router.get('/getPropTypes', auth, ctrlOptions.getPropTypes);
router.get('/getStatusTypes', auth, ctrlOptions.getStatusTypes);
router.get('/getSLocations', auth, ctrlOptions.getSLocations);
router.get('/myLocations', auth, ctrlOptions.getSLocations);
router.get('/getLeads', auth, ctrlLead.getLeads);
router.get('/getInventories', ctrlLead.getInventories);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
