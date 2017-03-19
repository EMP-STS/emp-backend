module.exports = (router, Users)=>{

  router.put('/', function(req, res, next) {
    Users.update({token: req.body.token}, (err, result)=>{

    })
  })

  return router;
}
