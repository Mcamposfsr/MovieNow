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
            }
        })
        console.log(response.data)
        return response.data

    },
    BuscarFilmes: async (page = 1) => {

        const response = await axios.get(`${url}/movie/popular`, {
            params: {
                api_key: key,
                page: page,
            }
        })
        console.log(response.data)
        return response.data


    },
    BuscaFavoritos: async () => {

    },
    // PARA A PÁGINA DE SHOW DOS FILMES.
    BuscarPorId: async (id) =>{
        const response = await axios.get(`${url}/`,{
            params:{
                api_key:key,
                i:id,
                plot:"full"
            }
        })
        return response.data
    }

}

export default api