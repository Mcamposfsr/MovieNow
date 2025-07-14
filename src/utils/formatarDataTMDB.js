const formatarDataTMDB = (date) => {
    if(!date){
        console.log(`Ouve um erro na formatação de data. Valor de data é ${date}`)
        return
    }
    return date.split("-")[0]
}

export default formatarDataTMDB