var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from "@nestjs/common";
let LivrosService = class LivrosService {
    livros = [
        { id: 1, titulo: 'O senhor dos Aneis', autor: 'J.R.R Tolkien' },
        { id: 2, titulo: '1984', autor: 'George Orwell' },
        { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
        { id: 4, titulo: 'Memórias Póstumas de Brás cuba', autor: 'Machado de assis' },
        { id: 5, titulo: 'Capitão da Areia', autor: 'Jorge Amado' },
    ];
    encontrarPorId(id) {
        const livro = this.livros.find((livro) => livro.id === id);
        if (!livro) {
            throw new NotFoundException(`Livro com ID ${id} não localizado em nosso acervo`);
        }
        return livro;
    }
};
LivrosService = __decorate([
    Injectable()
], LivrosService);
export { LivrosService };
//# sourceMappingURL=livros.service.js.map