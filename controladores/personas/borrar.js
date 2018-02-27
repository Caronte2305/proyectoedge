const models = require('../../models')

module.exports = (req, res) => {
  models.persona.destroy({
    where:{
      id:req.params.id
    }
  })
  .then( ( result ) => res.json( { status: "exito", result } ) )
  .catch( ( error ) => res.json( { status: "error", error:error.message } ) )
}
