const express = require('express')

const userRoutes = require('./routes/userRoutes')
const companyRoutes = require('./routes/companyRoutes')
const jobRoutes = require('./routes/jobsRoutes')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Routes */
app.use('/api/v1', userRoutes)
app.use('/api/v1', companyRoutes)
app.use('/api/v1', jobRoutes)

/* Levantar el servidor */
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})