module.exports = {
  esVacio: ( a ) => !a || Object.keys(a).length === 0,
  tieneComa: ( a ) => a.indexOf(',') !== -1
}
