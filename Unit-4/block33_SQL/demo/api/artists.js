const express = require('express');
const router = express.Router();

const { requireUser, requiredNotSent } = require('./utils');

const { getAllArtists,
    getArtistById,
    createArtist,
    getArtistByName,
    getArtistBySongId,
    attachArtistToSong,
    updateArtist,
    deleteArtist,
    deleteArtistFromSong } = require('../db/artists');

// get all artists
router.get('/', async (req, res, next) => {
    try {
        const artists = await getAllArtists();
        res.send(artists);
    } catch (error) {
        next(error);
    }
});

// get artist by id
router.get('/:id', async (req, res, next) => {
    try {
        const artist = await getArtistById(req.params.id);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

// create artist - private
router.post('/', requireUser, async (req, res, next) => {
    try {
        const artist = await createArtist(req.body);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

// get artist by name
router.get('/name/:name', async (req, res, next) => {
    try {
        const artist = await getArtistByName(req.params.name);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

// get artist by song id
router.get('/song/:songId', async (req, res, next) => {
    try {
        const artist = await getArtistBySongId(req.params.songId);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

// attach artist to song - private
router.post('/song/:songId', requireUser, requiredNotSent, async (req, res, next) => {
    try {
        const artist = await attachArtistToSong(req.params.songId, req.body.artistId);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

// update artist - private
router.patch('/:id', requireUser, requiredNotSent, async (req, res, next) => {
    try {
        const artist = await updateArtist(req.body);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

// delete artist - private
router.delete('/:id', requireUser, async (req, res, next) => {
    try {
        const artist = await deleteArtist(req.params.id);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

// delete artist from song - private
router.delete('/song/:songId', requireUser, async (req, res, next) => {
    try {
        const artist = await deleteArtistFromSong(req.params.songId);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

module.exports = router;