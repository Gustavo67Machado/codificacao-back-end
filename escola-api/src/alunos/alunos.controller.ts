import { Controller, Get,Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from "@nestjs/common";
import { AlunoService } from "./aluno.service.js";
import { CreateAlunoDto } from "./dto/create-alunos.dto.js";
import { UpdateAlunoDto } from "./dto/update-alunos.dto.js";
import { ApiTags, ApiOperation,ApiResponse, ApiQuery } from "@nestjs/swagger";

@ApiTags('alunos')
@Controller('alunos')
export class AlunosController{
    constructor(private readonly alunoService: AlunoService){}
//!=========================================================
    @Post()
    @ApiOperation({
        summary: 'cria a matricula do aluno.',
    })
    @ApiResponse({
        status:201,
        description: 'matricula do aluno foi criado com sucesso.',
    })
    @ApiResponse({
        status: 400,
        description: 'dados invalidos fornecidos para criar a matricula do aluno.',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor, matricula duplicada ou serviço indisponivel',
    })

    create(@Body() CreateAlunoDto:CreateAlunoDto){
    return this.alunoService.create(CreateAlunoDto)
}
//!============================================================
@Get()
@ApiOperation({
    summary: 'Retorna alunos cadastrados pela paginação ou pelo filtro opcional e cordenação',
})
@ApiResponse({
    status: 200,
    description: 'lista de alunos retornada com sucesso'
})
@ApiResponse({
    status: 404,
    description: 'nenhum aluno encontrado',
})
@ApiResponse({
    status: 500,
    description: 'erro interno do servidor', 
})
//!====================================================
// findAll(){
//     return this.alunoService.findAll();
// }
@Get()
@ApiOperation({
    summary: 'Retorna um aluno especifico pelo _id ou pelo filtro',
})
@ApiResponse({
    status: 200,
    description: 'nenhum aluno encontrado',
})
@ApiResponse({
    status: 500,
    description: 'erro interno do servidor ou serviço indisponivel',
})
@ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Numero da pagina(padrão: 1)'
})
@ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Itens por pagina(padrão: 10)'
})

@ApiQuery({
    name: 'nome',
    required: false,
    type: String,
    description: 'Filtra alunos pelo nome',
})
@ApiQuery({
    name: 'curso',
    required: false,
    type: String,
    description: 'Filtra alunos pelo curso',
})
@ApiQuery({
    name:'orderBy',
    required: false,
    type: String,
    description: 'Ordena os resultados pelos campos especificos(Ex: nome, idade,matricula, cursos)'
})
@ApiQuery({
    name: 'orderDirection',
    required: true,
    enum: [
        'asc',
        'desc',
    ],
    description: 'Define a direção da ordenação (asc para ascendentes, desc para descendentes)'
})
findAllPageFilter(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('nome')nome?: string,
    @Query('curso')curso?: string,
    @Query('ordeBy') ordeBy?: string,
    @Query('orderDirection') orderDirection?: 'asc' | 'desc',

    
){
    return this.alunoService.findAllPageFilter
    (page,
     limit,
     nome, 
     curso, 
     ordeBy, 
     orderDirection);
}
@Get(':id')
@ApiOperation({
    summary: 'retorna um aluno especifico',
})
@ApiResponse({
    status: 200,
    description: 'aluno,'
})
@ApiResponse({
    status: 200,
    description: 'aluno atualizado com sucesso',
})
@ApiResponse({
    status: 500,
    description: 'erro interno do servidor',
})
//!===============================================
findOne(
    @Param('id')
     id: string){
    return this.alunoService.findOne(id);
}
//!=============================================================
@Patch(':id')
@ApiOperation({
    summary: 'atualiza os dados de um aluno especifico pelo _id'
})
@ApiResponse({
    status: 200,
    description: 'aluno atualizado com sucesso',
})
@ApiResponse({
    status: 404,
    description: 'nenhum aluno encontrado',
})
@ApiResponse({
    status: 500,
    description: 'erro interno do servidor',
})
//!============================================
update(@Param('id') 
id: string, @Body() UpdateAlunoDto: UpdateAlunoDto){
    return this.alunoService.update(id, UpdateAlunoDto);
}
//!======================================================
@Delete(':id')
@ApiOperation({
    summary: 'deleta o aluno pelo id',
})
@ApiResponse({
    status: 200,
    description: 'aluno deletado com sucesso',
})
@ApiResponse({
    status: 404,
    description: 'nenhum aluno encontrado',
})
@ApiResponse({
    status: 500,
    description: 'erro interno do servidor', 
})
//!==================================================
remove(
    @Param('id') id: string){
    
    
    return this.alunoService.remove(id);
}
}