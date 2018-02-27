module.exports = (req, res, next) => {

  if( !req.body.nombre ) return res.json( { status: "error", error: "Se requiere el nombre "})
  if( !req.body.cedula ) return res.json( { status: "error", error: "Se requiere el numero de cedula"})

  next()

}
