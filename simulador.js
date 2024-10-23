class time {
    #nomecasa
    #golscasa
    #nomefora
    #golsfora

    constructor(nomecasa, golscasa, nomefora, golsfora) {
        this.#nomecasa = nomecasa
        this.#golscasa = golscasa
        this.#nomefora = nomefora
        this.#golsfora = golsfora
    }

    get nomecasa() {
        return this.#nomecasa
    }

    get golscasa() {
        return this.#golscasa
    }

    get nomefora() {
        return this.#nomefora
    }

    get golsfora() {
        return this.#golsfora
    }
}

const listaPartidas = []

function adicionarPartida() {
    const nomecasa = document.getElementById('casa').textContent
    const golscasa = document.getElementById('golsCasa').value
    const nomefora = document.getElementById('fora').textContent
    const golsfora = document.getElementById('golsFora').value
    
    const partida = new time(nomecasa, parseInt(golscasa), nomefora, parseInt(golsfora))
    listaPartidas.push(partida)
    console.log(`Adicionado: ${partida.nomecasa} ${partida.golscasa} x ${partida.nomefora} ${partida.golsfora}`)

    if (golscasa > golsfora) {
        const mensagem = document.getElementById('mensagem')
        mensagem.textContent = `Usuário: convidado0001 - O ${partida.nomecasa} vencerá o ${partida.nomefora} por ${partida.golscasa} a ${partida.golsfora}.`
    } else if (golscasa < golsfora) {
        const mensagem = document.getElementById('mensagem')
        mensagem.textContent = `Usuário: convidado0001 - O ${partida.nomefora} vencerá o ${partida.nomecasa} por ${partida.golsfora} a ${partida.golscasa}.`
    } else {
        const mensagem = document.getElementById('mensagem')
        mensagem.textContent = `Usuário: convidado0001 - ${partida.nomecasa} x ${partida.nomefora} terminará em um empate de ${partida.golscasa} a ${partida.golsfora}.`
    }
}