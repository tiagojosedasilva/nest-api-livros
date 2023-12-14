import { Injectable } from "@nestjs/common";
import { Livros } from "@prisma/client";
import { PrismaService } from "src/infraestrutura/prisma.service";
import { CreateLivroDTO } from "./dto/create-livro.dto";

@Injectable()
export class LivrosService{
    constructor( private prismaService: PrismaService){}

    findAll(){
        return this.prismaService.livros.findMany()
    }

    findOne(id: number){
        return this.prismaService.livros.findUnique({
            where:{
                id
            }
        })
    }

    create({titulo, autor}: CreateLivroDTO){
        return this.prismaService.livros.create({
            data: {
                titulo,
                autor
            }
        })
    }
    delete(id: number){
        return this.prismaService.livros.delete({
            where: {
                id
            }
        })
    }
    
    update(id: number, data: CreateLivroDTO){
        return this.prismaService.livros.update({
            data,
            where: {
                id
            }
        })
    }
}