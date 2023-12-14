import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { LivrosService } from "./livros.service";
import { CreateLivroDTO } from "./dto/create-livro.dto";

@Controller('/livros')
export class LivrosController{

    constructor( private livroService: LivrosService){}

    @Get()
    findAll(){
        return this.livroService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number){
        return this.livroService.findOne(Number(id))
    }

    @Post()
    async create(@Body() body: CreateLivroDTO){
        return this.livroService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() body){
        return this.livroService.update(Number(id), body)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.livroService.delete(Number(id))
    }
}