// Criando variáveis com propriedade readonly e private

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly[K in keyof Cachorro]: Cachorro[K];
}

class MeuCachorro implements Cachorro {
    // private nome;
    // private idade;
   nome;
   idade;

    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);

cao.idade = 8;

// console.log(cao);

/*
const meuCachorro = {
    nome: 'Apolo',
    idade: 14,
}
*/