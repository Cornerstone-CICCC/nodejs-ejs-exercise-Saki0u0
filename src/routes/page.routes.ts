import { Router, Request, Response } from 'express'

const pageRouter = Router()

const hobbies: string[] = ["Drawing","Dancing","Skydiving"]

//Home
pageRouter.get('/',(req:Request,res:Response) => {
  res.status(200).render("index",{title: "My Webpage", version: 1.0, showInfo:false})
})

//About 
pageRouter.get('/',(req:Request,res:Response) => {
  res.status(200).render("about",{title:"About Us"})
})

//Contact
pageRouter.get('/',(req:Request,res:Response) => {
  res.status(200).render("contact",{title:"Contact"})
})

export default pageRouter