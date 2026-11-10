import { Controller, Get,Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AlunoService } from "./aluno.service.js";
import { CreateAlunoDto } from "./dto/create-alunos.dto.js";
import { UpdateAlunoDto } from "./dto/update-alunos.dto.js";
import { ApiTags, ApiOperation,ApiResponse } from "@nestjs/swagger";

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
    summary: 'retorna a lista cadastrados',
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
findAll(){
    return this.alunoService.findAll();
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
@Delete('id')
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