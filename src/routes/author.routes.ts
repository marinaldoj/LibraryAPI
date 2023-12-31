import { Router } from "express";

import { index, show, creeteAuthors } from "../controllers/AuthorController";

const routes = Router()

routes.get("/authors/:id", show);
routes.get("/authors", index);
routes.post("/authors", creeteAuthors);

export default routes