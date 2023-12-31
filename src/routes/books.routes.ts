import { Router } from "express";

import { index, show, creeteBooks } from "../controllers/BookController";

const routes = Router()

routes.get("/books/:id", show);
routes.get("/books", index);
routes.post("/books", creeteBooks);

export default routes