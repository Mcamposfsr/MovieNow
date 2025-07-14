import { useContext, useEffect } from "react";
import CardContext from "@/contexts/CardsContext/CardsContext.js"
import ReqController from "@/utils/reqController";

const useBuscarSeries = (page = 1) => {
    const { setCardSeries } = useContext(CardContext)

    useEffect(() => {
        const definirEstadosSeries = async () => {
            const controller = new ReqController
            const series = await controller.handleSeries(page)
            // PRECISA MELHORAR
            if(!series){
                setCardSeries(null)
                return
            }
            setCardSeries((prev)=>[...prev,...series])

        }
        definirEstadosSeries()
    }, [page, setCardSeries])

}

export default useBuscarSeries