class Game {

    checadorSequencia = new ChecadorSequencia()
    pontuacao = 0
    status = 'parado'

    iniciar() {

        this.reset()

        this.avancarNivel()
    }

    reset() {

        this.checadorSequencia.resetAndamento()
        this.checadorSequencia.resetSequencia()
        this.resetPontuacao()
    }

    parar() {

        this.setStatus('parado')
    }

    incrementarSequencia() {

        this.checadorSequencia.incrementarSequencia(this.randomBotao())
    }

    avancarNivel() {

        this.setStatus('iniciado')
        this.checadorSequencia.resetAndamento()
        this.incrementarSequencia()

        setTimeout(() => {

            this.exibirSequencia()
        }, 500);
    }

    check(botao) {

        if (this.status !== 'lendo') {
            return
        }

        this.blinkElementId(botao)

        const acertou = this.checadorSequencia.check(botao)

        if (acertou) {

            this.checadorSequencia.avancarIndice()

            if (this.checadorSequencia.isCheckedTotal()) {

                this.incrementarPontuacao()
                this.avancarNivel()
            }
        }
        else {

            this.parar()
        }
    }

    exibirSequencia() {

        this.setStatus('mostrando')

        for (let index = 0; index < this.checadorSequencia.sequencia.length; index++) {

            const botao = this.checadorSequencia.sequencia[index];

            setTimeout(() => {

                this.showElementId(botao)
            }, 1100 * index);
        }

        setTimeout(() => {

            this.lerSequencia()
        }, 1100 * this.checadorSequencia.sequencia.length + 1);

    }

    lerSequencia() {

        this.setStatus('lendo')
    }

    resetPontuacao() {

        this.pontuacao = 0;
        this.refreshElementPontuacao()
    }

    incrementarPontuacao() {

        this.pontuacao++;

        this.refreshElementPontuacao()
    }

    refreshElementPontuacao() {

        const elementPontuacao = document.getElementById('pontuacao')
        elementPontuacao.innerText = this.pontuacao
    }

    refreshElementBotaoIniciar() {

        const elementBotaoIniciar = document.getElementById('botaoIniciar')

        if (this.status == 'parado')
            elementBotaoIniciar.style.visibility = 'visible'
        else {
            elementBotaoIniciar.style.visibility = 'hidden'
        }
    }

    setStatus(status) {

        this.status = status
        this.refreshElementBotaoIniciar()
    }

    randomBotao() {

        return ['blue', 'yellow', 'red', 'green'][this.getRandomIntInclusive(0, 3)]
    }

    getRandomIntInclusive(min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setAnimationButton(idButton, animation, duration) {

        const botao = document.getElementById(idButton)

        botao.classList.add(animation)

        setTimeout(() => {

            botao.classList.remove(animation)
        }, duration);
    }

    blinkElementId(id) {

        this.setAnimationButton(id, 'blink', 100)
    }

    showElementId(id) {

        this.setAnimationButton(id, 'show', 1000)
    }
}

if (typeof module !== 'undefined')
    module.exports = { Game }