const express = require ('express');
const router = express.Router();

router.get( '/',(req,res)=> {
    res.send('get all contacts')
});


router.post( '/',(req,res)=> {
    res.send(' add contatcts')
});

router.put( '/:id',(req,res)=> {
    res.send(' update contatcts')
});


router.delete( '/:id',(req,res)=> {
    res.send(' delete contatcts')
});
module.exports = router;