const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const controladores = require('./controladores')

// solamente para probar que el servidor funciona
app.get('/', (req, res) => res.send('Parece que el servidor funciona!'))


app.get('/personas',
  controladores.personas.filtrar,
  controladores.personas.ordenar,
  controladores.personas.paginar,
  controladores.personas.listar )



// crear una nueva persona
app.post('/personas',
  bodyParser.urlencoded({ extended : true }),
  controladores.personas.validarCampos,
  controladores.personas.crear)


// retornar los datos de una persona dado el id
app.get('/personas/:id', controladores.personas.ver  )
// actualizar los datos de una persona
app.put('/personas/:id',
  bodyParser.urlencoded({ extended : true }),
  controladores.personas.validarCampos,
  controladores.personas.actualizar
)

// elimar una persona
app.delete('/personas/:id',
  controladores.personas.borrar)

app.use( (err, req, res, next ) => {
  if(err.status) res.status(err.status)
  res.json({ status: "error", message: err.message })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
