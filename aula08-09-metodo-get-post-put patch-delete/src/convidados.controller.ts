import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode  } from "@nestjs/common";
import { ConvidadosService } from "./convidados.service.js";
import { CriarConvidadoDto } from "./dto/criar-convidados.dto.js";
@Controller('convidados')
export class ConvidadosController {
    constructor (private readonly convidadosService: ConvidadosService){}
    @Get()
    listarConvidados(){
        return this.convidadosService.findAll();
    }
    @Post()
    criar(@Body() CriarConvidadoDto: CriarConvidadoDto){
        console.log(`[OPERADOR]: Novo convidado recebido: ${CriarConvidadoDto.nome}`);

        return {
            mensagem: `Convidado ${CriarConvidadoDto.nome} adicionado com sucesso`,
            dados: CriarConvidadoDto,
        }
    }

    @Patch(':id')
    atualizarIdade(@Param('id') id: string, @Body('idade') idade: number){
        console.log(`[ADMINISTRADOR]: Atualizando a idade do ID ${id}`);
        return this.convidadosService.atualizarIdade(+id, idade);
    }

    @Delete(':id')
    @HttpCode(204)
    remover(@Param('id') id:number){
        console.log(`[ADMINISTRADOR]: Removendo Convidado ID: ${id}`);
        this.convidadosService.removerConvidado(+id);
    }
}