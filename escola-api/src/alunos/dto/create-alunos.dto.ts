import { IsString, IsInt, IsNotEmpty, IsArray,Min,ArrayMinSize, } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    @ApiProperty({
        example:'João da silva',
        description: 'Nome completo do aluno',
    })
    @IsString()
    @IsNotEmpty({
        message:'O nome é obrigatorio e não pode ser vazio.'
    })
    nome: string;

    @ApiProperty({
        example:'25',
        description: 'idade so aluno',
    })
    @IsInt({
        message:'A idade deve ser um numero inteiro'
    })
    @Min(0,{
        message: 'A idade não pode ser negativa'
    })
    idade: number;

    @ApiProperty({
        example:'1234',
        description: 'matricula do aluno',
    })
    @IsString()
    @IsNotEmpty({
        message:'A matricula é obreigatoria e não pode ser vazia'
    })
    matricula: string;

    @ApiProperty({
        example:['ciencias da computação', 'recursos humanos'],
        description: 'cursos em que o aluno esta matriculado',
    })
    @IsArray()
    @IsString({
        each:true,
        message:'cada curso deve estar matriculado em pelo menos um curso.'
    })
    cursos: string[];

}