import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { LivrosService } from "./livros.service.js";

@Controller ('livro')
export class LivrosController {
    constructor(private readonly LiroService: LivrosService){}
        @Get(':id')
        buscarPorId(@Param('id', ParseIntPipe) id:string) {
            const numeroId = +id 
            return this.LiroService.encontrarPorId(numeroId);
        }
    
}