const models = require('../../models')

module.exports =   (req, res) => {
    models.persona.create({
      nombre: req.body.nombre,
      cedula: req.body.cedula
    })
    .then( ( persona ) => res.json( { persona, status: "exito" } ) )
    .catch( ( error ) => res.json( { status: "error", error: error.message }))
}
