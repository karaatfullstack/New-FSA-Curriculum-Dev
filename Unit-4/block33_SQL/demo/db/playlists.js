const client = require('./client');
const util = require('util');

// get all playlists
async function getAllPlaylists() {
    try {
        const { rows: playlists } = await client.query(`
            SELECT * FROM user_songs;
        `);
        return playlists;
    } catch (error) {
        throw error;
    }
}

// get playlist by id
async function getPlaylistById(id) {
    try {
        const { rows: [playlist] } = await client.query(`
            SELECT * FROM user_songs
            WHERE id=${id};
        `);
        return playlist;
    } catch (error) {
        throw error;
    }
}

// create playlist
async function createPlaylist({ user_id, song_id, rating }) {
    try {
        const { rows: [playlist] } = await client.query(`
            INSERT INTO user_songs(user_id, song_id, rating)
            VALUES($1, $2, $3)
            RETURNING *;
        `, [user_id, song_id, rating]);
        return playlist;
    } catch (error) {
        throw error;
    }
}

// update playlist
async function updatePlaylist(id, fields = {}) {
    // read off the tags & remove the id from the fields
    const { user_id, song_id, rating } = fields;

    // build the set string
    const setString = Object.keys(fields).map(
        (key, index) => `"${key}"=$${index + 1}`
    ).join(', ');

    // return early if this is called without fields
    if (setString.length === 0) {
        return;
    }

    try {
        const { rows: [playlist] } = await client.query(`
            UPDATE user_songs
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
        `, Object.values(fields));
        return playlist;
    } catch (error) {
        throw error;
    }
}


// delete playlist
async function deletePlaylist(id) {
    try {
        const { rows: [playlist] } = await client.query(`
            DELETE FROM user_songs
            WHERE id=${id}
            RETURNING *;
        `);
        return playlist;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPlaylists,
    getPlaylistById,
    createPlaylist,
    updatePlaylist,
    deletePlaylist
}