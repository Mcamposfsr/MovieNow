const formatarDataTMDB = (date) => {
    if(!date){
        throw new Error(`Ouve um erro na formatação de data. Valor de data é ${date}`)
    }
    return date.split("-")[0]
}

export default formatarDataTMDB