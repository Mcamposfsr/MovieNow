// O OBJETIVO DESSA FUNÇÃO É APENAS FACILITAR DE CONSEGUIR O BACKDROP DAS IMAGENS DA TMDB API.

const formatarUrlImg = (path,size) => {

     const tamanho = {
        P:"w300",
        M:"w780",
        G:"w1280",
        O:"original",

    }


    if(!path){
        throw new Error(`Ouve um erro na formatação da url. Valor da url é ${path}`)
        
    }
    return `https://image.tmdb.org/t/p/${tamanho[size]}${path}`
}

export default formatarUrlImg