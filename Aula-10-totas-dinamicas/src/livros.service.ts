import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class LivrosService {
private livros = [
    {id: 1, titulo: 'O senhor dos Aneis', autor:'J.R.R Tolkien'},
    {id: 2, titulo: '1984', autor:'George Orwell'},
    {id: 3, titulo: 'Dom Casmurro', autor:'Machado de Assis'},
    {id: 4, titulo: 'Memórias Póstumas de Brás cuba', autor:'Machado de assis'},
    {id: 5, titulo: 'Capitão da Areia', autor:'Jorge Amado'},
    
];

encontrarPorId(id: number){
    const livro = this.livros.find((livro) => livro.id === id);
    if(!livro) {
        throw new NotFoundException(`Livro com ID ${id} não localizado em nosso acervo`);
    }
    return livro
}

}