import formatarUrlImg from "@/utils/formatarUrlImg.js"
const normalizeTmdbCredits = (dados) => {
    return new TmdbCredits(dados.cast, dados.crew)
}

class TmdbCredits {
    constructor(cast, crew) {
        this.cast = cast
        this.crew = crew
    }
    getActors() {
        return formatarElenco("Acting", this.cast)

    }
    getDirectors() {
        return formatarElenco("Directing", this.crew)

    }
    getWriters() {
        return formatarElenco("Writing", this.crew)

    }
    getData() {
        return {
            atores: this.getActors(),
            diretores: this.getDirectors(),
            escritores: this.getWriters()
        }
    }
}

export default normalizeTmdbCredits

const formatarElenco = (tipo, dado) => {
    // TIPOS: "Writing","Directing",Acting
    let elenco = []

    if (tipo == "Acting") {
        // PEGAR E FORMATAR ATORES

        const cast = dado.reduce((acc, e) => {
            acc.push({ nome: e.name, personagem: e.character, fotoPerfil: formatarUrlImg(e.profile_path, "G"), id: e.id })
            return acc
        }, [])
        elenco = cast
    } else {
        // PEGAR E FORMATAR ATORES OU ESCRITORES.

        const crew = dado.reduce((acc, e) => {

            if (e.known_for_department == tipo) {

                acc.push({ nome: e.name, fotoPerfil: formatarUrlImg(e.profile_path, "G"), id: e.id })
            }
            return acc
        }, [])
        elenco = crew

    }

    return buscarRepetido(elenco)
}

const buscarRepetido = (arr) => {
    const novoSet = new Set()
    const arrayFormatado = arr.filter((e) => {

        if (novoSet.has(e.nome)) {
            return false
        } else {
            novoSet.add(e.nome)
            return true
        }
    })
    return arrayFormatado
}