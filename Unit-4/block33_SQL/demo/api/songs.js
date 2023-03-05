const express = require('express');
const router = express.Router();

const { getAllSongs, getSongById, createSong, updateSong, deleteSong } = require('../db/songs');

const { requireUser, requiredNotSent } = require('./utils');

// get all songs
router.get('/', async (req, res, next) => {
    try {
        const songs = await getAllSongs();
        res.send(songs);
    } catch (error) {
        next(error);
    }
});

// get song by id
router.get('/:id', async (req, res, next) => {
    try {
        const song = await getSongById(req.params.id);
        res.send(song);
    } catch (error) {
        next(error);
    }
});

// create song
router.post('/', requireUser, async (req, res, next) => {
    try {
        const song = await createSong(req.body);
        res.send(song);
    } catch (error) {
        next(error);
    }
});

// update song
router.put('/:id', requireUser, async (req, res, next) => {
    try {
        const song = await updateSong(req.body);
        res.send(song);
    } catch (error) {
        next(error);
    }
});

// delete song
router.delete('/:id', requireUser, async (req, res, next) => {
    try {
        const song = await deleteSong(req.params.id);
        res.send(song);
    } catch (error) {
        next(error);
    }
});

module.exports = router;