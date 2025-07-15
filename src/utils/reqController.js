import api from "@/services/api";
import NormalizeTmdbData from "./normalizeTmdbData";
class ReqController{
    constructor(){

    }

    async handleSeries(page){
        try{
            // BUSCA NA API
            const series = await api.buscarSeries(page)
            // VERIFICAÇÃO DE ERRO
            if(!series){
                throw new Error(`Falha na busca de series -> ${series}`)
            }
            // MAPEAR E NORMALIZAR DADOS.
            const dataSeries = series.results.map((serie)=>{
                return NormalizeTmdbData(serie,"tv")
            })

            // RETORNO DE DADOS FORMATADOS. 
            return dataSeries
        }catch(err){
            console.log(`Falha na busca de series -> ${err}`)
            return null
        }
        
    }
    async handleFilmes(page){
        try{
            // BUSCA NA API
            const filmes = await api.BuscarFilmes(page)
            // VERIFICAÇÃO DE ERRO
            if(!filmes){
                throw new Error(`Falha na busca de series -> ${filmes}`)
            }
            // MAPEAR E NORMALIZAR DADOS.
            const dataFilmes = filmes.results.map((filme)=>{
                return NormalizeTmdbData(filme,"movie")
            })

            // RETORNO DE DADOS FORMATADOS. 
            return dataFilmes
        }catch(err){
            console.log(`Falha na busca de series -> ${err}`)
            return null
        }
    }
    static async handleId(id,type){
        try{
            const info = await api.BuscarPorId(id,type)
            console.log(info)
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