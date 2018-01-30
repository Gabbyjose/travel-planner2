const router = require('express').Router();
const {db, Place, Hotel, Activity, Restaurant} = require('./models.js');


router.get('/attractions', (req,res,next)=>{
  const promiseArray = [Hotel.findAll({ include: [{ all: true }] }), Activity.findAll({ include: [{ all: true }] }), Restaurant.findAll({ include: [{ all: true }] })]
  Promise.all(promiseArray)
  .then((foundPages) => {
    res.json(foundPages);
  })
  .catch(next);
})

module.exports = router;
