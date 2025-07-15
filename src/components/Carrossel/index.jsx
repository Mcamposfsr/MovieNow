import ButtonsCarrossel from "../ButtonsCarrossel"
import { useState, useEffect, useRef} from "react"
import Card from "@/components/Card"


const Carrossel = ({ sizeCard, cardsInfo=[] }) => {


    // CONTROLE DE FOCO DOS CARDS
    let refCards = useRef([])
    let firstRender = useRef(true)


    const [foco, setFoco] = useState(0)

    const alterarFoco = (action) => {
        // true -> next
        // false -> previous
        if (action) {
            if (foco + 1 > 10 - 1) {
                setFoco(0)
            } else {
                setFoco(foco + 1)
            }
        } else {
            if (foco - 1 < 0) {
                setFoco(9)
            } else {
                setFoco(foco - 1)
            }
        }

    }

    // Controle de rolagem dos cards.
    useEffect(() => {

        if(firstRender.current){
            firstRender.current = false
            return
        }
        refCards.current.forEach(e => e.classList.remove("scale-105"))
        refCards.current[foco].classList.add("scale-105")
        refCards.current[foco].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })


    }, [foco])

    return (
        <div className="h-[350px] relative w-full">
            <ButtonsCarrossel position={"L"} active={alterarFoco} />
            <ButtonsCarrossel position={"R"} active={alterarFoco} />
            <div className="scroll overflow-x-scroll  overflow-y-hidden flex gap-[20px] items-center h-full  w-full box-border px-[10px] box-border">

                {
                    cardsInfo.slice(1,11).map((cardInfo, indice) => {

                        if (indice == 0) {
                            return (<Card dados={cardInfo} size={sizeCard} classNameCard="scale-105" ref={e => refCards.current[indice] = e} key={`card-${indice}`} />)

                        } else {
                            return (<Card dados={cardInfo} size={sizeCard} ref={e => refCards.current[indice] = e} key={`card-${indice}`} />)

                        }

                    })
                }
            </div>

        </div>

    )
}

export default Carrossel