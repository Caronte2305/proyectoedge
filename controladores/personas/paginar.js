const models = require('../../models')

const { esVacio, tieneComa } = require('../../lib')
/**
 * Crea on objecto de paginación para un query de sequelize
 * el valor por defecto es 15 resultados por pagina, retornando la
 * primera pagina
 * Ejemplo: localhost:3000/personas?pagina=1&resultados=15
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {Object}     req.orden esta cargado con el objeto apropiado para el orden en un query de sequelize
 */
module.exports = (req, res, next ) => {

  const resultados = req.query.resultados || 15
  const pagina  = req.query.pagina || 1

  req.paginador = {
    limit: resultados,
    offset: ( pagina - 1 ) * resultados
  }

  return next()
}
