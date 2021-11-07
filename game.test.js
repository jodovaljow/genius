const { test, expect } = require("@jest/globals");

const { Game } = require("./game");

describe('Testar game', () => {

    var game = new Game()

    beforeAll(() => {

        game = new Game()

        return game;
    });

    function testReset() {

        expect(game.checadorSequencia.isCheckedTotal()).toBeTruthy()

        expect(game.checadorSequencia.sequencia).toStrictEqual([])

        expect(game.pontuacao).toBe(0)
    }

    describe('Inicializar', () => {

        test('Checar se inicializado', () => {

            expect(game).toBeDefined()
        })

        test('Checar status ao iniciar', () => {

            // game.iniciar()

            expect(game.status).toBe('parado')

            // testReset()
        })
    })

    describe('Ao iniciar', () => {

        test('Checar status ao iniciar', () => {

            game.iniciar()

            expect(game.status).toBe('iniciado')

            testReset()
        })
    })

    describe('Ao exibir', () => {

        test('Checar status ao exibir', () => {

            game.exibirSequencia()

            expect(game.status).toBe('mostrando')

            testReset()
        })
    })

    describe('Ao ler', () => {

        test('Checar status ao ler', () => {

            game.lerSequencia()

            expect(game.status).toBe('lendo')

            testReset()
        })
    })

    describe('Ao parar', () => {

        test('Checar status ao parar', () => {

            game.parar()

            expect(game.status).toBe('parado')

            testReset()
        })
    })

    describe('Testar incrementar sequencia', () => {

        const qtdeSequenciaAntes = game.checadorSequencia.sequencia.length

        game.incrementarSequencia()

        expect(game.checadorSequencia.sequencia).toHaveLength(qtdeSequenciaAntes + 1)
    })

    describe('Testar incrementar pontuacao', () => {

        const pontuacaoAntes = game.pontuacao
        game.incrementarPontuacao()
        expect(game.pontuacao).toBe(pontuacaoAntes + 1)
    })

    describe('Testar randomBotao', () => {

        const botao = game.randomBotao()

        expect(['blue', 'yellow', 'red', 'green']).toContain(botao)
    })

    describe('Testar reset', () => {

        game.reset()

        testReset()
    })
})