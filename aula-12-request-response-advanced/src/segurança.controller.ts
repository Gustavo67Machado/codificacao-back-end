import { Controller, Get, Headers, Res } from "@nestjs/common";
import type{ Response } from "express";
import { timestamp } from "rxjs";

@Controller('secreto')
export class segurancaController {
    @Get()
    acessarAreaSecreta(@Headers('x-api-key')apikey: string, @Res() res: Response){
        if(apikey === 'SENAI-2025'){
            res.setHeader('x-auth-status', 'verificado');
            return res.status(200).json({
                mensagem: 'Acesso concedido ao conteudo secreto!',
                timestamp: new Date()
            });
        }
        return res.status(403).json({
            erro: 'Forbidden',
            mensagem: 'Chave de API invalida ou ausente',
        })
    }
}