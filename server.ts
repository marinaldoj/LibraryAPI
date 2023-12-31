import express from "express"
import cors from "cors"

import AuthorRoutes from "./src/routes/author.routes"
import BooksRoutes from "./src/routes/books.routes"


const port = 3333

const app = express()
app.use(express.json())
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))
app.use(cors())

app.use(BooksRoutes)
app.use(AuthorRoutes)

app.listen(port, () => {
    console.log("Application Running!")
})