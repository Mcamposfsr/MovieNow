import ButtonsCarrossel from "../../ButtonsCarrossel"
import { useState, useRef } from "react"
import CardInfo from "@/components/Cards/CardInfo"
import CardImg from "@/components/Cards/CardImg"


const Carrossel = ({ cardsInfo, typeCards, length }) => {
    

    // DEFINIR TAMANHO CARROSSEL
    const tamanho = length > cardsInfo.length ? cardsInfo.length : length
    // ESTADO DE FOCO DOS CARDS
    const [foco, setFoco] = useState(0)
    // REFERÊNCIA PARA CARD ATUAL
    const refCards = useRef([])
    // FUNÇÃO PARA REALIZAR A ROLAGEM DE CARROSSEL
    const fazerRolagem = (indice) =>{
        refCards.current[indice].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    }
    // AÇÃO DE TROCA DE FOCO
    const alterarFoco = (action) => {
        // true -> next
        // false -> previous

        if (action) {

            if (foco + 1 > tamanho - 1) {
                setFoco(0)
                fazerRolagem(0)
            } else {
                setFoco(foco + 1)
                fazerRolagem(foco+1)

            }
        } else {
            if (foco - 1 < 0) {
                setFoco(tamanho -1)
                fazerRolagem(tamanho -1)
            } else {
                setFoco(foco - 1)
                fazerRolagem(foco - 1)
            }
        }

    }

    return (
        <div className={`${typeCards == "info" ?"h-[330px]":"h-[280px]"} relative w-full`}>
            <ButtonsCarrossel position={"L"} active={alterarFoco} />
            <ButtonsCarrossel position={"R"} active={alterarFoco} />
            <div className="scroll overflow-x-scroll  overflow-y-hidden flex items-center h-full  w-full box-border box-border gap-[1.2em] px-[.5em]">

                {
                    cardsInfo.slice(0, tamanho).map((cardInfo, indice) => {
                        // PARA O 1 CARD FICAR GRANDE DE INICIO.

                        if (indice == foco) {
                            return (typeCards == "info" ?
                                <CardInfo dados={cardInfo} size={"P"} classNameCard="scale-105" ref={e => refCards.current[indice] = e} key={`card-${indice}`} /> :
                                <CardImg url={cardInfo} classNameCard="scale-105" ref={e => refCards.current[indice] = e} key={`card-${indice}`} />)

                        } else {
                            return ((typeCards == "info" ?
                                <CardInfo dados={cardInfo} size={"P"} ref={e => refCards.current[indice] = e} key={`card-${indice}`} /> :
                                <CardImg url={cardInfo} ref={e => {refCards.current[indice] = e}} key={`card-${indice}`} />))

                        }

                    })
                }
            </div>

        </div>

    )
}

export default Carrossel