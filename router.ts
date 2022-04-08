import { Request, Response, Router } from "express";
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./src/controllers/movieControllers";
import { validate } from "./src/middleware/handleValidation";
import { movieCreateValidation } from "./src/middleware/movieValidation";


const router = Router()

export default router.get("/test",(req:Request, res:Response) => {
    res.status(200).end("Api funfou!!")
}).post("/movie",movieCreateValidation(),validate,createMovie)
.get("/movie/:id", findMovieById)
.get("/movie", getAllMovies)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id", updateMovie)