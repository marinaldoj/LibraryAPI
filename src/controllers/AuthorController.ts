import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export async function creeteAuthors(req: Request, res: Response) {
    const author = await prisma.authors.create({
         data:{
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
         }
    })

    return res.json(author).status(201)
}

export async function index(req: Request, res: Response) {
    const author = await prisma.authors.findMany({
        select:{
            books: true,
            id: true,
            name: true,
            image: true,
            description: true,
           
        }
    })
    return res.json(author).status(200)
}

export async function show(req: Request, res: Response) {
    const author = await prisma.authors.findFirst({
        select:{
            books: true,
            id: true,
            name: true,
            image: true,
            description: true,
        },
        where:{
            id: parseInt(req.params.id)
        }
    })
    return res.json(author).status(200)
}