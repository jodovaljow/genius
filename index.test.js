const { test, expect } = require("@jest/globals");

const { ChecadorSequencia } = require("./checadorSequencia");

describe('Testar checador de sequencia', () => {

    var checadorSequencia = new ChecadorSequencia()

    beforeAll(() => {

        checadorSequencia = new ChecadorSequencia()

        return checadorSequencia;
    });

    describe('Inicializar', () => {

        test('Checar se inicializado', () => {

            expect(checadorSequencia).toBeDefined()
        })

        test('Ao iniciar isCheckedTotal deve ser true', () => {

            expect(checadorSequencia.isCheckedTotal()).toBeTruthy()
        })
    })

    describe('Testar jogadas', () => {

        describe('Checar 3 acertos e 1 erro', () => {

            test('1o acerto', () => {

                checadorSequencia.incrementarSequencia('botao1')
                expect(checadorSequencia.check('botao1')).toBeTruthy()
                expect(checadorSequencia.isCheckedTotal()).toBeFalsy()
                checadorSequencia.avancarIndice()
                expect(checadorSequencia.isCheckedTotal()).toBeTruthy()
            })

            test('2o acerto', () => {

                checadorSequencia.incrementarSequencia('botao2')
                expect(checadorSequencia.check('botao2')).toBeTruthy()
                expect(checadorSequencia.isCheckedTotal()).toBeFalsy()
                checadorSequencia.avancarIndice()
                expect(checadorSequencia.isCheckedTotal()).toBeTruthy()
            })

            test('3o acerto', () => {

                checadorSequencia.incrementarSequencia('botao3')
                expect(checadorSequencia.check('botao3')).toBeTruthy()
                expect(checadorSequencia.isCheckedTotal()).toBeFalsy()
                checadorSequencia.avancarIndice()
                expect(checadorSequencia.isCheckedTotal()).toBeTruthy()
            })

            test('1o erro', () => {

                checadorSequencia.incrementarSequencia('botao3')
                expect(checadorSequencia.check('botao1')).toBeFalsy()
            })
        })
    })

    describe('Finalizar', () => {
        test('Reset sequencia', () => {

            checadorSequencia.resetSequencia()
            expect(checadorSequencia.sequencia).toStrictEqual([])
        })

        test('Reset andamento', () => {

            checadorSequencia.resetAndamento()
            expect(checadorSequencia.andamentoAtual).toBe(0)
        })
    })
})