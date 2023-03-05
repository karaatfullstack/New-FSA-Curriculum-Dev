const client = require('./client');
const util = require('util');

// get all artists
async function getAllArtists() {
    try {
        const { rows: artists } = await client.query(`
            SELECT * FROM artists;
        `);
        return artists;
    } catch (error) {
        throw error;
    }
}

// get artist by id
async function getArtistById(id) {
    try {
        const { rows: [artist] } = await client.query(`
            SELECT * FROM artists
            WHERE id=${id};
        `);
        return artist;
    } catch (error) {
        throw error;
    }
}

// create artist
async function createArtist({ name, genre, formed, hometown }) {
    try {
        const { rows: [artist] } = await client.query(`
            INSERT INTO artists(name, genre, formed, hometown)
            VALUES($1, $2, $3, $4)
            ON CONFLICT (name) DO NOTHING
            RETURNING *;
        `, [name, genre, formed, hometown]);
        return artist;
    } catch (error) {
        throw error;
    }
}

// get artist by name
async function getArtistByName(name) {
    try {
        const { rows: [artist] } = await client.query(`
            SELECT * FROM artists
            WHERE name=$1;
        `, [name]);
        return artist;
    } catch (error) {
        throw error;
    }
}

// get artist by song id
async function getArtistBySongId(songId) {
    try {
        const { rows: [artist] } = await client.query(`
            SELECT artists.* FROM artists
            JOIN songs ON artists.id=songs.artist_id
            WHERE songs.id=$1;
        `, [songId]);
        return artist;
    } catch (error) {
        throw error;
    }
}

// attach artist to song
async function attachArtistToSong(artistId, songId) {
    try {
        const { rows: [artist_song] } = await client.query(`
            INSERT INTO artists_songs(artist_id, song_id)
            VALUES($1, $2)
            ON CONFLICT (artist_id, song_id) DO NOTHING
            RETURNING *;
        `, [artistId, songId]);
        return artist_song;
    } catch (error) {
        throw error;
    }
}

// update artist
async function updateArtist(id, fields = {}) {
    // build the set string
    const setString = Object.keys(fields).map(
        (key, index) => `"${key}"=$${index + 1}`
    ).join(', ');

    // return early if this is called without fields
    if (setString.length === 0) {
        return;
    }

    try {
        const { rows: [artist] } = await client.query(`

            UPDATE artists
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
        `, Object.values(fields));

        return artist;
    } catch (error) {
        throw error;
    }
}

// delete artist
async function deleteArtist(id) {
    try {
        const { rows: [artist] } = await client.query(`
            DELETE FROM artists
            WHERE id=${id}
            RETURNING *;
        `);
        return artist;
    } catch (error) {
        throw error;
    }
}

// delete artist from song
async function deleteArtistFromSong(artistId, songId) {
    try {
        const { rows: [artist_song] } = await client.query(`
            DELETE FROM artists_songs
            WHERE artist_id=${artistId} AND song_id=${songId}
            RETURNING *;
        `);
        return artist_song;
    } catch (error) {
        throw error;
    }
}

// export functions
module.exports = {
    getAllArtists,
    getArtistById,
    createArtist,
    getArtistByName,
    getArtistBySongId,
    attachArtistToSong,
    updateArtist,
    deleteArtist,
    deleteArtistFromSong
}