const router = require('express').Router();
const {db, Place, Hotel, Activity, Restaurant} = require('../server/models.js');
const fetch = require('node-fetch');

fetch('/api/attractions')
.then(result => result.json())
.then(data => {
  console.log(data);
})
.catch((err) => console.log(err));

router.get('/', (req,res,next)=>{
  const promiseArray = [Hotel.findAll({ include: [{ all: true }] }), Activity.findAll({ include: [{ all: true }] }), Restaurant.findAll({ include: [{ all: true }] })]
  Promise.all(promiseArray)
  .then((foundPages) => {
    res.json(foundPages);
  })
  .catch(next);
})

module.exports = router;
