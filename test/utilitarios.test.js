const Utilitarios = require("../src/utilitarios");

describe('Utilitários', () => {
    let utils;

    beforeEach(() => {
        utils = new Utilitarios();
    });

    test('Deve retornar a ordem das strings corretamente', () => {
        expect(utils.inverterString('gustavo')).toBe('ovatsug');
    });

    test('Deve contar os caracteres da string corretamente', () => {
        expect(utils.contarCaracteres('gustavo')).toBe(7);
    });

    test('Deve transformar o texto em UpperCase', () => {
        expect(utils.paraMaiusculas('gustavo')).toBe('GUSTAVO');
    });

    test('Deve transformar o texto em LowerCase', () => {
        expect(utils.paraMinusculas('GUSTAVO')).toBe('gustavo');
    });

    test('Deve capitalizar a primeira letra da string', () => {
        expect(utils.primeiraLetraMaiuscula('gustavo')).toBe('Gustavo');
    });

    test('Deve somar dois números', () => {
        expect(utils.somar(5, 3)).toBe(8);
    });

    test('Deve subtrair dois números', () => {
        expect(utils.subtrair(10, 4)).toBe(6);
    });

    test('Deve multiplicar dois números', () => {
        expect(utils.multiplicar(5, 5)).toBe(25);
    });

    test('Deve dividir dois números', () => {
        expect(utils.dividir(10, 2)).toBe(5);
    });

    test('Deve retornar erro ao dividir por zero', () => {
        expect(() => utils.dividir(10, 0)).toThrow('Divisão por zero');
    });

    test('Deve verificar se um número é par', () => {
        expect(utils.ehPar(4)).toBe(true);
        expect(utils.ehPar(7)).toBe(false);
    });

    test('Deve retornar o primeiro elemento de um array', () => {
        expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test('Deve retornar o último elemento de um array', () => {
        expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test('Deve retornar o tamanho de um array', () => {
        expect(utils.tamanhoArray([1, 2, 3])).toBe(3);
    });

    test('Deve ordenar um array alfabeticamente', () => {
        expect(utils.ordenarArray(['c', 'a', 'b'])).toStrictEqual(['a', 'b', 'c']);
    });
    
    test('Deve inverter a ordem de um array', () => {
        expect(utils.inverterArray([1, 2, 3])).toStrictEqual([3, 2, 1]);
    });

    test('Deve gerar um número aleatório', () => {
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThan(10);
    });

    test('Deve verificar se o valor é um número', () => {
        expect(utils.ehNumero(123)).toBe(true);
        expect(utils.ehNumero('abc')).toBe(false);
        expect(utils.ehNumero(NaN)).toBe(false);
        expect(utils.ehNumero('10')).toBe(false);
    });

    test('Deve remover espaços em branco no início e fim da string', () => {
        expect(utils.removerEspacos(' gustavo ')).toBe('gustavo');
    });

    test('Deve repetir um texto o número de vezes especificado', () => {
        expect(utils.repetirTexto('gustavo', 3)).toBe('gustavogustavo' + 'gustavo');
    });

    test('Deve juntar os elementos de um array em uma string', () => {
        expect(utils.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
        expect(utils.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });

    test('Deve contar as palavras em uma string', () => {
        expect(utils.contarPalavras('gustavo goulart')).toBe(2);
        expect(utils.contarPalavras('  gustavo goulart  ')).toBe(2);
    });

    test('Deve calcular a média dos números em um array', () => {
        expect(utils.mediaArray([1, 2, 3, 4, 5])).toBe(3);
        expect(utils.mediaArray([])).toBe(0);
    });

    test('Deve remover números duplicados de um array', () => {
        expect(utils.removerDuplicados([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    
    test('Deve verificar se a string é um palíndromo', () => {
        expect(utils.ehPalindromo('A man, a plan, a canal: Panama')).toBe(true);
        expect(utils.ehPalindromo('gustavo')).toBe(false);
    });
    
    test('Deve mesclar dois objetos em um novo objeto', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
});