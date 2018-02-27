const models = require('../../models')

module.exports = ( req, res, next ) => {

  models.persona.findOne({
    where: { id: req.params.id },
    raw: true
  })
  .then( ( persona ) => {
    if( !persona ) {
      const error = new Error( "La persona no existe" )
      error.status = 404
      return next( error )
    }
    res.json( { persona, status: "exito" } )
  } )
  .catch( ( error ) => res.json( { status: "error", error: error.message }))
}
