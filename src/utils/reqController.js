import api from "@/services/api";
import NormalizeTmdbData from "@/utils/normalizeTmdbData";
import normalizeTmdbIMG from "@/utils/normalizeTmdbIMG";
class ReqController{
    async handleSeries(page){
        try{
            // BUSCA NA API
            const series = await api.buscarSeries(page)
            // console.log(series)

            // VERIFICAÇÃO DE ERRO
            if(!series){
                throw new Error(`Falha na busca de >Series< -> ${series}`)
            }
            // MAPEAR E NORMALIZAR DADOS.
            const dataSeries = series.results.map((serie)=>{
                return NormalizeTmdbData(serie,"tv")
            })

            // RETORNO DE DADOS FORMATADOS. 
            return dataSeries
        }catch(err){
            console.log(`Ocorreu um erro: ${err}`)
            return null
        }
        
    }
    async handleFilmes(page){
        try{
            // BUSCA NA API
            const filmes = await api.BuscarFilmes(page)
            // console.log(filmes)

            // VERIFICAÇÃO DE ERRO
            if(!filmes){
                throw new Error(`Falha na busca de >Filmes< -> ${filmes}`)
            }
            // MAPEAR E NORMALIZAR DADOS.
            const dataFilmes = filmes.results.map((filme)=>{
                return NormalizeTmdbData(filme,"movie")
            })

            // RETORNO DE DADOS FORMATADOS. 
            return dataFilmes
        }catch(err){
            console.log(`Ocorreu um erro: ${err}`)
            return null
        }
    }
    static async handleId(id,type){
        try{
            const info = await api.BuscarPorId(id,type)
            if(!info){
                throw new Error(`Falha na requisição ERRO:${info}`)
            }

            // RETORNO DE DADOS FORMATADOS 
            return NormalizeTmdbData(info)

        }catch(err){
            console.log(`Ocorreu um erro: ${err}`)
            return null
        }
    }
    static async handleGallery(id,type){
        try{
            const gallery = await api.buscarGaleria(id,type)
            if(!gallery){
                throw new Error(`Falha na busca da >Galeria< ERRO:${gallery}`)
            }

            return normalizeTmdbIMG(gallery)
        }catch(err){
            console.log(`Ocorreu um erro: ${err}`)
            return null
        }
    }


}


export default ReqController