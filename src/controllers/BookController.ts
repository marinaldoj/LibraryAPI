import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { title } from "process";

const prisma = new PrismaClient()

export async function creeteBooks(req: Request, res: Response) {
    const book = await prisma.books.create({
         data:{
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            author_id: req.body.authorid
         }
    })

    return res.json(book).status(201)
}

export async function index(req: Request, res: Response) {
    const books = await prisma.books.findMany({
        select:{
            author: true,
            title: true,
            description: true,
            createdAt: true,
            id: true,
            price: true,
            image: true
        }
    })
    return res.json(books).status(200)
}

export async function show(req: Request, res: Response) {
    const book = await prisma.books.findFirst({
        select:{
            author: true,
            title: true,
            description: true,
            createdAt: true,
            id: true,
            price: true,
            image: true
        },
        where:{
            id: parseInt(req.params.id)
        }
    })
    return res.json(book).status(200)
}