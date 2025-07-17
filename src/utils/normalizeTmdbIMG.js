import formatarUrlImg from "@/utils/formatarUrlImg.js"

// MÓDULO PARA FORMATAR VALORES DE URL PARA IMAGENS.

const normalizeTmdbIMG = (dados) => {

    return new TmdbIMG(dados)
}

class TmdbIMG {
    constructor(dados) {
        this.poster = dados.posters
        this.logos = dados.logos
        this.backdrops = dados.backdrops
    }
    getPoster(){
        const poster = this.poster.map((url)=>{
            return formatarUrlImg(url.file_path,"M")
        })
        return poster
    }
    getLogos(){
        const logos = this.logos.map((url)=>{
            return formatarUrlImg(url.file_path,"M")
        })
        return logos
    }
    getBackdrops(){
        const backdrops = this.backdrops.map((url)=>{
            return formatarUrlImg(url.file_path,"M")
        })
        return backdrops
    }
    getData(){
        const data = {
            posters:this.getPoster(),
            Logos:this.getLogos(),
            backdrops:this.getBackdrops()
        }
        return data
    }


}


export default normalizeTmdbIMG