import SearchIcon from "@/assets/search.svg?react"
import { useRef, useState } from "react"

const SearchBar = ({ className }) => {

    const inputBusca = useRef(null)
    const [showInput, setShowInput] = useState(false)
    const [inputText, setInputText] = useState("")

    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    const toggleInput = () => {
        if (showInput) {
            setShowInput(false)

        } else {
            setShowInput(true)
            inputBusca.current.focus()

        }
    }

    const handleBlur = (e) =>{
        if(e.relatedTarget && e.relatedTarget.id === "search-button"){
            return
        }
        toggleInput()

        }



    return (
        <div className={`${className} w-[calc(100dvw-317px)] h-[80px] flex justify-center fixed top-0 left-[300px] z-20 p-[8px]`}>
            <input onBlur={(e)=>{handleBlur(e)}} value={inputText} onChange={(e) => { handleInput(e) }} type="text" ref={inputBusca} placeholder="Pesquise Aqui" className={`${showInput ? "opacity-100" : "opacity-0"} transition duration-200  focus:outline-none inset-shadow-input shadow-input rounded-[20px] p-[15px] bg-dark text-gray mx-auto w-[800px]`} />
            <button id="search-button" onClick={() => toggleInput()} className="cursor-pointer absolute top-[50%] right-10 translate-y-[-50%] "><SearchIcon className={"w-[25px] h-[25px]"} /></button>

        </div>
    )
}
export default SearchBar
