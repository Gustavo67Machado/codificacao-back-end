import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAlunoDto } from "./dto/create-alunos.dto.js";
import { UpdateAlunoDto } from "./dto/update-alunos.dto.js";
import { Aluno,AlunoDocumente } from "./schema/aluno.schema.js";

@Injectable()
export class AlunoService{
    constructor(@InjectModel(Aluno.name) private alunoModel: Model<AlunoDocumente>){}

    async create (createAlunoDto:CreateAlunoDto):Promise<Aluno>{
        const createdAluno = new this.alunoModel(createAlunoDto);
        return createdAluno.save();
    }
    async findAll(): Promise<Aluno[]>{
        return this.alunoModel.find(). exec();
    }//!GET

    async findOne(id:string):Promise <Aluno | null>{
        return this.alunoModel.findById(id).exec();
    }//!GET

    async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno | null>{
        return this.alunoModel.findByIdAndUpdate(id,UpdateAlunoDto,{
            new: true
        }).exec();
    }//!PATCH

    async remove(id: string): Promise<Aluno | null>{
        return this.alunoModel.findByIdAndDelete(id).exec();
    }//!DELETE

    //!CURD
}