import ArrowRight from "@/assets/arrow-right.svg?react"
import ArrowLeft from "@/assets/arrow-left.svg?react"

const ButtonsCarrossel = ({ position, active }) => {

    // CONFIGURAÇÃO DE ESTILO E FUNÇÕES DOS BOTÕES
    const config = {
        R: {
            gradient: "linear-gradient(to left, rgba(32,32,30,1), rgba(255,255,255,0) 99% )",
            position: "right-0",
            click: true
        },
        L: {
            gradient: "linear-gradient(to right, rgba(32,32,30,1), rgba(255,255,255,0) 99% )",
            position: "left-0",
            click: false
        }
    }

    return (
        <button onClick={() => { active(config[position].click) }} style={{ background: config[position].gradient }} className={`cursor-pointer opacity-0 hover:opacity-100 transition duration-200 absolute z-10 ${config[position].position} top-0 bottom-0 w-[80px] flex items-center justify-center`}>{position == "R" ? <ArrowRight className="w-[25px] h-[25px] ml-[20px]" /> : <ArrowLeft className="mr-[20px] w-[25px] h-[25px]" />}</button>

    )
}

export default ButtonsCarrossel
