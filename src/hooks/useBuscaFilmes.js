import { useContext, useEffect } from "react";
import CardsContext from "@/contexts/CardsContext/CardsContext.js"
import reqController from "@/utils/reqController.js"

const useBuscaFilmes = (page = 1) => {
    const { setCardFilmes } = useContext(CardsContext)

    useEffect(() => {
        const definirEstadosFilmes = async () => {

            const controller = new reqController
            const filmes = await controller.handleFilmes(page)
            setCardFilmes((prev)=>[...prev,...filmes])

        }
        definirEstadosFilmes()
    }, [setCardFilmes,page])

}

export default useBuscaFilmes
 