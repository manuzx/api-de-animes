const listaAnimes = require("../mocks/listaAnimes")

function getAllAnime(req, res) {
    res.send(listaAnimes)
}
function getAnimeById(req, res) {
    const {id} = req.params;
    const anime = listaAnimes.find(anime => anime.id === Number(id));
    
    res.send(anime);
}

function insetAnime(req, res) {
    
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse
    } = req.body;

    const id = listaAnimes[listaAnimes.length - 1].id=1

    listaAnimes.push({
        id,
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse
    });

    res.status(201).json({ message: 'Anime adicionado com sucesso!' });
}

function updateAnime(req, res) {
    const {id} = req.params;
    const {episodios} = req.body;

    const index = listaAnimes.findIndex(anime = anime.id == Number(id));
    
    listaAnimes[index].episodios = episodios;
    res.send("episodios atualizados com sucesso");
}

function deleteAnime(req,res) {
    const{id} = req.params;
    const index = listaAnimes.findIndex(anime = anime.id == Number(id));
    
    listaAnimes.splice(index,1);
    
    res.send("Anime deletado com sucesso");

}

module.exports = {
    getAllAnime, getAnimeById,insetAnime,updateAnime,deleteAnime
}