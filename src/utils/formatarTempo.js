const formatarTempo = (time, type) => {
    const tempo = parseInt(time)
    // SE FOR SERIES RETORNA NUMERO DE EPISÓDIOS.

    if (type == "tv") {

        return `${time} EP`

    } else if (type == "movie") {
        // VERIFICAR SE TEMPO ESTÁ CORRETO.
        if (isNaN(tempo)) {
            return "N/A"
        }
        if (tempo < 15) {
            return "N/A"
        }
        // FAZER CALCULO DE HORAS E MINUTOS
        const horas = Math.floor(tempo / 60)
        const minutos = tempo % 60

        return `${tempo < 60 ? "" : horas + "h"} ${tempo == 60 ? "" : minutos + "m"}`
    }
}



export default formatarTempo