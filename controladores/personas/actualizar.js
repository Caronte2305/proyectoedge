const models = require('../../models')

module.exports = (req, res) => {
  models.persona.update( req.body, { where: { id: req.params.id }})
    .then( ( persona ) => res.json( { persona, status: "exito" } ) )
    .catch( ( error ) => res.json( { status: "error", error: error.message }))
}
