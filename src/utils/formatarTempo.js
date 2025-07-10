const formatarTempo = (time) =>{
    const tempo = parseInt(time)
    if(isNaN(tempo)){
        return "N/A"
    }
    if(tempo< 20){
        return "N/A"
    }
    const horas = Math.floor(tempo/60)
    const minutos = tempo%60
    
    return `${tempo<60?"":horas+"h"} ${tempo==60?"":minutos+"m"}`
}

export default formatarTempo