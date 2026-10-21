import { ApiProperty } from "@nestjs/swagger";

export class CriarProdutoDto {
    @ApiProperty({
        example: 'pasta de dente Sorriso',
        description: 'Nome comercial do produto cadastrado',
    })
    nome: string;
    @ApiProperty({
        example: 5.99,
        description: 'Preço unitario de venda'
    })
    preco: number;
    @ApiProperty({
        example:'higênico',
        description:'Categoria a  qual o produto pertence',
    })
    categoria: string;
}