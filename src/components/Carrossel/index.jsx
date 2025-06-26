import ButtonsCarrossel from "../ButtonsCarrossel"
import { useState, useEffect, useRef} from "react"


/* eslint-disable no-unused-vars */

const Carrossel = ({ CardComponent }) => {


    let quantidade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // CONTROLE DE FOCO DOS CARDS
    let refCards = useRef([])
    let firstRender = useRef(true)

    const [foco, setFoco] = useState(0)

    const alterarFoco = (action) => {
        // true -> next
        // false -> previous
        if (action) {
            if (foco + 1 > quantidade.length - 1) {
                setFoco(0)
            } else {
                setFoco(foco + 1)
            }
        } else {
            if (foco - 1 < 0) {
                setFoco(quantidade.length - 1)
            } else {
                setFoco(foco - 1)
            }

        }
        rolagemDeCards()


    }

    const rolagemDeCards = () => {

    }

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
                    quantidade.map((elemento, indice) => {

                        if (indice == 0) {
                            return (<CardComponent classNameCard="scale-105" ref={e => refCards.current[indice] = e} key={`card-${indice}`} />)

                        } else {
                            return (<CardComponent ref={e => refCards.current[indice] = e} key={`card-${indice}`} />)

                        }

                    })
                }
            </div>

        </div>

    )
}

export default Carrossel