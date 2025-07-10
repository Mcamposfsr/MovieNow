import api from "@/services/api";
class ReqController{
    constructor(){

    }

    async handleSeries(page){
        try{
            const series = await api.buscarSeries(page)
            if(!series){
                throw new Error(`Falha na requisição ERRO:${series}`)
            }
            return series.Search
        }catch(err){
            console.log(`Ocorreu um erro: ${err}`)
            return null
        }
        
    }
    async handleFilmes(page){
        try{
            const filmes = await api.BuscarFilmes(page)
            if(!filmes){
                throw new Error(`Falha na requisição ERRO:${filmes}`)
            }
            return filmes.Search
        }catch(err){
            console.log(`Ocorreu um erro: ${err}`)
            return null
        }
        
    }
    static async handleId(id){
        try{
            const info = await api.BuscarPorId(id)
            if(!info){
                throw new Error(`Falha na requisição ERRO:${info}`)
            }
            return info

        }catch(err){
            console.log(`Ocorreu um erro: ${err}`)
            return null
        }
    }

}


export default ReqController