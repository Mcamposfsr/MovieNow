import axios from "axios"

const url = "https://api.themoviedb.org/3"
const key = "b1a642318c865fe05b3620ed488bcd86"

const api = {
    buscaManual: async () => {

    },
    // Realizar busca genérica por séries.
    buscarSeries: async (page = 1) => {

        const response = await axios.get(`${url}/tv/popular`, {
            params: {
                api_key: key,
                page: page,
                language: "pt-BR"
            }
        })
        return response.data

    },
    BuscarFilmes: async (page = 1) => {

        const response = await axios.get(`${url}/movie/popular`, {
            params: {
                api_key: key,
                page: page,
                language: "pt-BR"

            }
        })
        return response.data


    },
    BuscaFavoritos: async () => {

    },
    // PARA A PÁGINA DE SHOW DOS FILMES.
    BuscarPorId: async (id, type) => {
        const response = await axios.get(`${url}/${type}/${id}`, {
            params: {
                api_key: key,
                language: "pt-BR",
                plot: "full",
                append_to_response: "credits,videos,images"
            }
        })
        // CASO A REQ EM PORTUGUÊS VENHA SEM CONTEÚDO.
        if (!response.data.overview) {
            const responseEN = await axios.get(`${url}/${type}/${id}`, {
                params: {
                    api_key: key,
                    language: "en",
                    plot: "full",
                    append_to_response: "credits,videos,images"
                }
            })
            response.data.overview = responseEN.data.overview
        }
        return response.data
    },
    buscarGaleria: async (id,type) =>{
        const response = await axios.get(`${url}/${type}/${id}/images`, {
            params: {
                api_key: key,
            }
        })
        return response.data

    },
    buscarCreditos: async (id,type) =>{
        const response = await axios.get(`${url}/${type}/${id}/credits`,{
            params:{
                api_key: key,
            }
        })
        return response.data
    }
  

}

export default api