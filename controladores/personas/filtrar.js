const models = require('../../models')

const { esVacio, tieneComa } = require('../../lib')

/**
 * Filtra la lista de personas de acuerdo a la siguente convencion
 * requiere que el request tenga un querystring con el campo filtrar
 * y que el mismo contenga una cadena con el siguiente formato
 * [campo,valordelfiltro]
 * Ejemplo: localhost:3000/personas?filtrar=nombre,Hans
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {Object}     req.filtro esta cargado con el objeto apropiado para el filtro en un query de sequelize
 */
module.exports = ( req, res, next ) => {

  req.filtro = false

  if( esVacio(req.query) ) return next()
  if( esVacio(req.query.filtrar) ) return next()

  if( !tieneComa(req.query.filtrar) ){
    const error = new Error("El filtro debe conformar con el formato [campo,valor]")
    error.status = 400
    return next(error)
  }

  const [ nombre, valor ] = req.query.filtrar.split(",")
  req.filtro = {
    [nombre]: valor
  }
  return next()

}
