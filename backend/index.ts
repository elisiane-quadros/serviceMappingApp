import "reflect-metadata";
import express from "express"; 
import { createConnections } from "typeorm";
import * as StoreController from './src/api/StoreController'
import cors from "cors"

const PORT = 3000;

async function startup () {
  await createConnections()
  const app = express()

  app.use(express.json())
  app.use(cors())

  app.post("/store", StoreController.save)
  app.get("/store", StoreController.getAll)

  app.listen(PORT, () => {
    console.log("App running on port " + 3000)
  })
}

startup()