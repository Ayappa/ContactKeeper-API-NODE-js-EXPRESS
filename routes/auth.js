const express = require ('express');
const router = express.Router();

router.get( '/',(req,res)=> {
    res.send('get loggined a user')
});


router.post( '/',(req,res)=> {
    res.send(' post loggined a user')
});



module.exports = router;