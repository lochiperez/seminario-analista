const express = require('express')
const cors = require('cors')
require('dotenv').config()
process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS

const app = express()
app.use(cors())
app.use(express.json())

const userRoutes = require('./src/routes/users')
const repairRoutes = require('./src/routes/repairs')
const solutionsRoutes = require('./src/routes/solutions')

app.use('/api/usuarios', userRoutes)
app.use('/api/repairs', repairRoutes)
app.use('/api/solutions', solutionsRoutes)

const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})