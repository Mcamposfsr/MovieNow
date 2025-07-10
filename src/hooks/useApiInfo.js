import { useContext } from "react"
import CardsContext from "@/contexts/CardsContext/CardsContext.js"

useContext

const useApiInfo  = ()=>{
    const ContextoApi = useContext(CardsContext)
    return ContextoApi

}

export default useApiInfo