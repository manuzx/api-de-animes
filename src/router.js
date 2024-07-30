const express = require("express");
const router = express.Router();
const animeController = require("./controllers/anime-controller.js");
const middlewareAnimes = require("./middlewares/anime-middlewares.js")


router.get("/animes", animeController.getAllAnime);
router.get(
        "/animes/:id",
        middlewareAnimes.middlewareGetAnimeBy,
        animeController.getAnimeById
    );

router.post(
    "/anime",
    middlewareAnimes.middlewaresInsertAnimes,
    animeController.insetAnime);
router.put(
    "./animes/:id",
    middlewareAnimes.middlewareUpdateAnime,
    animeController.updateAnime);
router.delete(
    "a/animes/:id",
    middlewareAnimes.middlewaresDeleteAnimes,
    animeController.deleteAnime);

module.exports = router;