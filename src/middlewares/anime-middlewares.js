const listaAnimes = require("../mocks/listaAnimes")
function middlewareGetAnimeBy(req, res, next) {
    const {id} = req.params;
    const anime = listaAnimes.find(anime => anime.id === Number(id));

    if(!anime){
        return res.status(404).send("Anime não encontrado")
    }
    
    next();
}

function middlewaresInsertAnimes(req,res,next){
    const {
        nome,
        ano,
        genero,
        imagem,
        sinopse
    } = req.body;

    if(
        !nome || !ano || !genero || !imagem || !sinopse){

        return res.status(400) .send ("Dados incompletos");
    }
    
    const anime = listaAnimes.find(anime => anime.nome === nome);

    if(!anime){
        return res.status(404).send("Anime já cadastrado")
    }

    next();
}

    function middlewareUpdateAnime(req, res,next) {
            const {id} = req.params;
            const{episodios} = req.body;
        
            if(!id || !episodios){
                return res.status(40).send("Dados incompletos")
            }
            
            const anime = listaAnimes.find(anime => anime.id === Number(id));
            
            if(!anime){
                return res.status(400).send("Anime deletado com sucesso")
            }
            
            next();
        }     

        function middlewaresDeleteAnimes (req, res, next) {
            const {id} = req.params;

            if(!id){
                return res.status(400).send("Dados incompletos")
            }

            const anime = listaAnimes.find(anime => anime.id === Number(id));
        
            if(!anime){
                return res.status(400).send("Anime deletado com sucesso")
            }
            
            next();
        } 
    
module.exports = {
    middlewareGetAnimeBy,
    middlewaresInsertAnimes,middlewaresDeleteAnimes,middlewareUpdateAnime
}