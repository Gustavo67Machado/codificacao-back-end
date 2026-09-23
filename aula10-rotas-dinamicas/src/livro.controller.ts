import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { LivrosService } from "./livro.service.js";
@Controller('livros')
export class LivrosController {
    constructor(private readonly livrosService: LivrosService){}

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id:string){
        const numeroId = +id
        return this.livrosService.encontrarPorId(numeroId);
    } 
}