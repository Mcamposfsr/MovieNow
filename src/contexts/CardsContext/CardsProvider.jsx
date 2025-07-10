import { useState } from "react"

import CardContext from "./CardsContext"

export const CardsPageProvider = ({ children }) => {

    const [cardFilmes,setCardFilmes] = useState([])

    const [cardSeries,setCardSeries] = useState([])



    return (
        <CardContext.Provider value={{cardFilmes,setCardFilmes,cardSeries,setCardSeries}}>
            {children}
        </CardContext.Provider>
    )
}


export default CardsPageProvider