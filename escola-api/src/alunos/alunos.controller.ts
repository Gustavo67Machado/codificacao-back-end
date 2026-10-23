import { Controller, Get,Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AlunoService } from "./aluno.service.js";
import { CreateAlunoDto } from "./dto/create-alunos.dto.js";
import { UpdateAlunoDto } from "./dto/update-alunos.dto.js";

@Controller('alunos')
export class AlunosController{
    constructor(private readonly alunoService: AlunoService){}
    @Post()
    create(@Body() CreateAlunoDto:CreateAlunoDto){
    return this.alunoService.create(CreateAlunoDto)
}
@Get()
findAll(){
    return this.alunoService.findAll();
}
@Get(':id')
findOne(@Param('id') id: string){
    return this.alunoService.findOne(id);
}
@Patch(':id')
update(@Param('id') id: string, @Body() UpdateAlunoDto: UpdateAlunoDto){
    return this.alunoService.update(id, UpdateAlunoDto);
}
@Delete(':id')
remove(@Param('id') id: string){
    return this.alunoService.remove(id);
}
}