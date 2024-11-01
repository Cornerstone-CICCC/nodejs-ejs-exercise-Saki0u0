// This is your server file :)
//Import packeges
import express,{ Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

//Create server
const app = express()

//Set view engine to EJS
app.set('view engine','EJS')
app.set('views',path.join(__dirname,'../src/views'))

//Midleware
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))//Set public dir
app.use(express.urlencoded({extended:true}))

//Routes
app.get('/',(req:Request, res:Response) => {
 res.status(200).send("Welcom to my server")
})

//Start server
const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
  console.log('Server is running on port 3000...')
})