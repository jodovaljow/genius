class ChecadorSequencia {

    sequencia = [];
    andamentoAtual = 0;

    isCheckedTotal() {

        return this.sequencia.length == this.andamentoAtual;
    }

    check(botao) {

        return this.sequencia[this.andamentoAtual] === botao;
    }

    avancarIndice() {

        this.andamentoAtual++;
    }

    incrementarSequencia(botao) {

        this.sequencia.push(botao)
    }

    resetAndamento() {

        this.andamentoAtual = 0
    }

    resetSequencia() {

        this.sequencia = []
    }
}

if (typeof module !== 'undefined')
    module.exports = { ChecadorSequencia }