import { LivrosService } from "./livros.service.js";
export declare class LivrosController {
    private readonly LiroService;
    constructor(LiroService: LivrosService);
    buscarPorId(id: string): {
        id: number;
        titulo: string;
        autor: string;
    };
}
