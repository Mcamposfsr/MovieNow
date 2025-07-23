// O OBJETIVO DESSA FUNÇÃO É APENAS FACILITAR DE CONSEGUIR O BACKDROP DAS IMAGENS DA TMDB API.

const formatarUrlImg = (path,size) => {

     const tamanho = {
        P:"w300",
        M:"w780",
        G:"w1280",
        O:"original",

    }


    if(!path){
        return "/NoPhoto-1.jpg"
    }
    return `https://image.tmdb.org/t/p/${tamanho[size]}${path}`
}

export default formatarUrlImg