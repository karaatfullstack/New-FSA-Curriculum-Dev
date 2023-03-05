const client = require('./client');
const util = require('util');

// get all songs
async function getAllSongs() {
    try {
        const { rows: songs } = await client.query(`
            SELECT * FROM songs;
        `);
        return songs;
    } catch (error) {
        throw error;
    }
}

// get song by id
async function getSongById(id) {
    try {
        const { rows: [song] } = await client.query(`
            SELECT * FROM songs
            WHERE id=${id};
        `);
        return song;
    } catch (error) {
        throw error;
    }
}

// create songs includes title, album, release_date, duration, artist_id 
async function createSong({ title, album, release_date, duration, artist_id }) {
    try {
        const { rows: [song] } = await client.query(`
            INSERT INTO songs(title, album, release_date, duration, artist_id)
            VALUES($1, $2, $3, $4, $5)
            ON CONFLICT (title) DO NOTHING
            RETURNING *;
        `, [title, album, release_date, duration, artist_id]);
        return song;
    } catch (error) {
        throw error;
    }
}

// update song
async function updateSong({ id, title, album, release_date, duration, artist_id }) {
    try {
        const { rows: [song] } = await client.query(`
            UPDATE songs
            SET title=$1, album=$2, release_date=$3, duration=$4, artist_id=$5
            WHERE id=$6
            RETURNING *;
        `, [title, album, release_date, duration, artist_id, id]);
        return song;
    } catch (error) {
        throw error;
    }
}

// delete song
async function deleteSong(id) {
    try {
        const { rows: [song] } = await client.query(`
            DELETE FROM songs
            WHERE id=$1
            RETURNING *;
        `, [id]);
        return song;
    } catch (error) {
        throw error;
    }
}


// export functions
module.exports = {
    getAllSongs,
    getSongById,
    createSong,
    updateSong,
    deleteSong
}