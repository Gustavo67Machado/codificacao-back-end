import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlunoService } from "./aluno.service.js";
import { AlunosController } from "./alunos.controller.js";
import { Aluno,AlunoSchema } from "./schema/aluno.schema.js";


@Module({
    imports:[MongooseModule.forFeature([{
        name: Aluno.name, schema: AlunoSchema
    }])],
controllers:[ AlunosController],
providers: [AlunoService]
})
export class AlunosModule{}