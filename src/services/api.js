import axios from "axios"

const url = "http://www.omdbapi.com"
const key = "288112ce"

const api = {
    buscaManual: async () => {

    },
    // Realizar busca genérica por séries.
    buscarSeries: async (page = 1) => {

        const response = await axios.get(url, {
            params: {
                s: "the a",
                apikey: key,
                type: "series",
                page: page,
            }
        })
        return response.data

    },
    BuscarFilmes: async (page = 1) => {

        const response = await axios.get(url, {
            params: {
                s: "the a",
                apikey: key,
                type: "movie",
                page: page,
            }
        })
        return response.data


    },
    BuscaFavoritos: async () => {

    },
    BuscarPorId: async (id) =>{
        const response = await axios.get(url,{
            params:{
                apikey:key,
                i:id,
                plot:"full"
            }
        })
        return response.data
    }

}

export default api