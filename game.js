const { ChecadorSequencia } = require("./checadorSequencia");

class Game {

    checadorSequencia = new ChecadorSequencia()
    pontuacao = 0
    status = 'parado'

    iniciar() {

        this.reset()

        this.setStatus('iniciado')
    }

    reset() {

        this.checadorSequencia.resetAndamento()
        this.checadorSequencia.resetSequencia()
        this.pontuacao = 0
    }

    parar() {

        this.reset()

        this.setStatus('parado')
    }

    incrementarSequencia() {

        this.checadorSequencia.incrementarSequencia(this.randomBotao())
    }

    avancarNivel() {

        this.incrementarSequencia()
        this.exibirSequencia()
    }

    check(botao) {

        if (this.status !== 'lendo') {
            return
        }

        const acertou = this.checadorSequencia.check(botao)

        if (acertou) {

            this.checadorSequencia.avancarIndice()

            if (this.checadorSequencia.isCheckedTotal()) {

                this.incrementarPontuacao()

                this.setStatus('parado')
            }
        }
        else {

            this.parar()
        }
    }

    exibirSequencia() {

        this.setStatus('mostrando')
    }

    lerSequencia() {

        this.setStatus('lendo')
    }

    incrementarPontuacao() {

        this.pontuacao++;
    }

    setStatus(status) {

        this.status = status
    }

    randomBotao() {

        return ['blue', 'yellow', 'red', 'green'][this.getRandomIntInclusive(0, 3)]
    }

    getRandomIntInclusive(min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

if (typeof module !== 'undefined')
    module.exports = { Game }