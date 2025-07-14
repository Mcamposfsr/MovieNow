import formatarDataTMDB from "@/utils/formatarDataTMDB"
import formatarStringUrlBanner from "@/utils/formatarStringUrlBanner"


const NormalizeTmdbData = (info) =>{

        const data = {}

        data.name = info.title ?? info.name
        data.date = info.release_date ?? info.first_air_date
        data.id = info.id
        data.img = info.poster_path ?? info.backdrop_path

        return new TmdbData(data.name,data.date,data.id,data.img)

    }



class TmdbData{
    constructor(name,date,id,img){
        this.name = name
        this.date = date
        this.id = id
        this.img = img
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
    getImg(size){
        if(!size){
        throw new Error(`Tamanho da imagem informado é inválido. Valores aceitos: ['P','M','G','O']`)
    }
        return formatarStringUrlBanner(this.img,size)
    }

}

export default NormalizeTmdbData