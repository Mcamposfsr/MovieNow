import formatarDataTMDB from "@/utils/formatarDataTMDB"
import formatarUrlImg from "@/utils/formatarUrlImg"
import formatarTempo from "./formatarTempo"

// FUNÇÃO QUE RECEBE OBJETO DE INFORMAÇÕES E RETORNA A INSTÂNCIA DOS DADOS PADRONIZADOS. 

const NormalizeTmdbData = (info, type = "") => {

    const data = {}

    data.name = info.title ?? info.name
    data.date = info.release_date ?? info.first_air_date
    data.id = info.id
    data.img = info.poster_path ?? ""
    data.banner = info.backdrop_path ?? ""
    data.type = type
    data.plot = info.overview ?? ""
    data.generos = info.genres ?? ""
    data.duracao = info.runtime ?? info.number_of_episodes
    data.nota = info.vote_average ?? "N/A"

    return new TmdbData(data.name, data.date, data.id, data.img, data.banner, data.type, data.plot, data.generos, data.duracao, data.nota)

}
class TmdbData {
    constructor(name, date, id, img, banner, type, plot, generos, duracao, nota) {
        this.name = name
        this.date = date
        this.id = id
        this.img = img
        this.banner = banner
        this.type = type
        this.plot = plot
        this.generos = generos
        this.duracao = duracao
        this.nota = nota
    }

    getName() {
        return this.name
    }
    getDate() {
        return formatarDataTMDB(this.date)
    }
    getId() {
        return this.id
    }
    getImg(size = "M") {
        if (!size) {
            throw new Error(`Tamanho da imagem informado é inválido. Valores aceitos: ['P','M','G','O']`)
        }
        return formatarUrlImg(this.img, size)
    }
    getBanner(size = "M") {
        if (!size) {
            throw new Error(`Tamanho da imagem informado é inválido. Valores aceitos: ['P','M','G','O']`)
        }
        return formatarUrlImg(this.banner, size)
    }
    getType() {
        return this.type
    }
    getPlot() {
        return this.plot
    }
    getGeneros() {
        if (!this.generos) {
            return
        }
        const generosFormatados = this.generos
            .slice(0, 5)
            .map(e => e.name)
            .join(" - ");

        return generosFormatados
    }
    getDuracao(type = "") {
        return formatarTempo(this.duracao, type)
    }
    getNota() {
        return this.nota.toFixed(1)
    }
    // OPÇÃO DE DADOS JÁ PRONTOS, EVITAR PERSONALIZAR DIRETO NO CONSTRUCTOR PARA MANTER PERSONALIZAÇÃO.
    getData() {
        return {
            name: this.getName(),
            date: this.getDate(),
            id: this.getId(),
            img: this.getImg(),
            banner: this.getBanner(),
            type: this.getType(),
            plot: this.getPlot(),
            generos: this.getGeneros(),
            duracao: this.getDuracao(),
            nota: this.getNota()
        }
    }

}



export default NormalizeTmdbData