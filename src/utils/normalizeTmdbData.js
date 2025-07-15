import formatarDataTMDB from "@/utils/formatarDataTMDB"
import formatarStringUrlBanner from "@/utils/formatarStringUrlBanner"

// FUNÇÃO QUE RECEBE OBJETO DE INFORMAÇÕES E RETORNA A INSTÂNCIA DOS DADOS PADRONIZADOS. 

const NormalizeTmdbData = (info,type = "") =>{

        const data = {}

        data.name = info.title ?? info.name
        data.date = info.release_date ?? info.first_air_date
        data.id = info.id
        data.img = info.poster_path ?? ""
        data.banner = info.backdrop_path ?? ""
        data.type = type
        data.plot = info.overview ?? ""
        data.generos = info.genres ?? ""

        return new TmdbData(data.name,data.date,data.id,data.img,data.banner,data.type,data.plot,data.generos)

    }



class TmdbData{
    constructor(name,date,id,img,banner,type,plot,generos){
        this.name = name
        this.date = date
        this.id = id
        this.img = img
        this.banner = banner
        this.type = type
        this.plot = plot
        this.generos = generos
    }

    getName(){
        return this.name
    }
    getDate(){
        return formatarDataTMDB(this.date)
    }
    getId(){
        return this.id
    }
    getImg(size = "M"){
        if(!size){
        throw new Error(`Tamanho da imagem informado é inválido. Valores aceitos: ['P','M','G','O']`)
    }
        return formatarStringUrlBanner(this.img,size)
    }
    getBanner(size = "M"){
        if(!size){
        throw new Error(`Tamanho da imagem informado é inválido. Valores aceitos: ['P','M','G','O']`)
    }
        return formatarStringUrlBanner(this.banner,size)
    }
    getType(){
        return this.type
    }
    getPlot(){
        return this.plot
    }
    getGeneros(){
        if(!this.generos){
            return
        }
        const generosFormatados = this.generos.map(e=>e.name).join(" ")

        return generosFormatados
    }
    // OPÇÃO DE DADOS JÁ PRONTOS, EVITAR PERSONALIZAR DIRETO NO CONSTRUCTOR PARA MANTER PERSONALIZAÇÃO.
    getData(){
        return {
            name:this.getName(),
            date:this.getDate(),
            id:this.getId(),
            img:this.getImg(),
            banner:this.getBanner(),
            type:this.getType(),
            plot:this.getPlot(),
            generos:this.getGeneros(),
        }
    }

}

export default NormalizeTmdbData