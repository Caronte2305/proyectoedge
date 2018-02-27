const models = require('../../models')

module.exports = ( req, res ) => {
  const opciones = { raw: true }

  if ( req.filtro ) opciones.where = req.filtro
  if ( req.orden ) opciones.order = req.orden

  const query = Object.assign({}, opciones, req.paginador)

  models.persona.findAll( query ) // raw es un objecto simple de javascript listo para ser enviado como json
    .then( ( personas ) => res.json( { personas, status: "exito" } ) )
    .catch( ( error ) => res.json( { status: "error", error: error.message }))
}
