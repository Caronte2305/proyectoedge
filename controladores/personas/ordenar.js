const models = require('../../models')

const { esVacio, tieneComa } = require('../../lib')

/**
 * Filtra la lista de personas de acuerdo a la siguiente convencion
 * requiere que el request tenga un querystring con el campo orden
 * y que el mismo contenga una cadena con el siguiente formato
 * [campo,[ASC|DESC]]
 * Ejemplo: localhost:3000/personas?ordenar=nombre,ASC
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {Object}     req.orden esta cargado con el objeto apropiado para el orden en un query de sequelize
 */
module.exports = ( req, res, next ) => {

  req.orden = false
  if( esVacio(req.query) ) return next()
  if( esVacio(req.query.orden) ) return next()
  if( !tieneComa(req.query.orden) ){
    const error = new Error("El filtro debe conformar con el formato [campo,valor]")
    error.status = 400
    return next(error)
  }


  const [ nombre, valor ] = req.query.orden.split(",")
  req.orden = [ [ nombre, valor ] ]
  return next()

}
