const client = require('./client');

const { createUser, createSong, createArtist, createPlaylist } = require('./');

// drop all tables if any exist
async function dropTables() {
    try {
        console.log("Starting to drop tables...");
        await client.query(`
        DROP TABLE IF EXISTS users CASCADE;
        DROP TABLE IF EXISTS songs CASCADE;
        DROP TABLE IF EXISTS artists CASCADE;
        DROP TABLE IF EXISTS user_songs CASCADE;
        `);
        console.log("Finished dropping tables!");
    } catch (error) {
        throw error;
    }
}

// async function to create artists, songs, and artists_songs tables
async function createTables() {
    try {
        console.log("Starting to build tables...");
        await client.query(`
        CREATE TABLE users(
          id  SERIAL PRIMARY KEY, 
          username VARCHAR(255) UNIQUE NOT NULL, 
          password VARCHAR(255) NOT NULL
        );
      `)
        await client.query(`
        CREATE TABLE artists (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            genre VARCHAR(255) NOT NULL,
            formed INTEGER NOT NULL,
            hometown VARCHAR(255) NOT NULL,
            UNIQUE (name)
            
            );
        `);

        // songs table includes title, album, and release_date
        await client.query(`
        CREATE TABLE songs (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            album VARCHAR(255) NOT NULL,
            release_date INTEGER NOT NULL,
            duration FLOAT NOT NULL,
            artist_id INTEGER REFERENCES artists(id),
            UNIQUE (title)
            );
        `);

        // user_songs table includes user_id, auto-incrementing id, song_id, and rating
        await client.query(`
        CREATE TABLE user_songs (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            song_id INTEGER REFERENCES songs(id),
            rating INTEGER
            );
        `);


        console.log("Finished building tables!");
    } catch (error) {
        throw error;
    }
}

// async function to create initial users
async function createInitialUsers() {
    console.log('Starting to create users...');
    try {

        const usersToCreate = [
            { name: "albert", username: 'albert', password: 'bertie99' },
            { name: "sandra", username: 'sandra', password: 'sandra123' },
            { name: "felicia", username: 'glamgal', password: 'glamgal123' },
        ]
        const users = await Promise.all(usersToCreate.map(createUser));

        console.log(users)

        console.log('Finished creating users!');

    } catch (error) {
        console.error('Error creating users!');
        throw error;
    }
}

// async function to create initial artists
async function createInitialArtists() {
    try {
        console.log("Starting to create artists...");

        const artistsToCreate = [
            { name: "Tame Impala", genre: "Psychedelic Rock", formed: 2007, hometown: "Perth, Australia" },
            { name: "The Beatles", genre: "Rock", formed: 1960, hometown: "Liverpool, England" },
            { name: "The Rolling Stones", genre: "Rock", formed: 1962, hometown: "London, England" },
            { name: "Gorillaz", genre: "Alternative", formed: 1998, hometown: "London, England" },
            { name: "Bob Marley", genre: "Reggae", formed: 1963, hometown: "Nine Miles, Jamaica" },
            { name: "Miles Davis", genre: "Jazz", formed: 1926, hometown: "Alton, Illinois" },
            { name: "Nirvana", genre: "Grunge", formed: 1987, hometown: "Aberdeen, Washington" },
            { name: "Kendrick Lamar", genre: "Hip-Hop/Rap", formed: 1987, hometown: "Compton, California" },
            { name: "Led Zeppelin", genre: "Rock/Blues Rock /Folk Rock ", formed: "1968 ", hometown: "London, England" },
            { name: "The Strokes", genre: "Alternat ive Rock ", formed: "1998 ", hometown: "New York City , New York , USA" },
            { name: "U2", genre: "Rock/Pop)", formed: "1976 ", hometown: "Dublin ,Ireland" },
            { name: "Kanye West", genre: "Hip Hop/Rap/Soul/R&B ", formed: "1996 ", hometown: "Chicago , Illinois , USA" },
            { name: "The Weeknd", genre: "R&B/Soul/Pop ", formed: "2010 ", hometown: "Toronto , Ontario, Canada" },
            { name: "Radiohead", genre: "Alternative Rock/Experimental Rock ", formed: "1985", hometown: "Oxfordshire , England" },
            { name: "Guns N' Roses", genre: "Hard Rock/Hair Metal ", formed: "1985 ", hometown: "Los Angeles , California , USA" },
            { name: "ABBA", genre: "Europop / Disco", formed: 1972, hometown: "Stockholm, Sweden" },
            { name: "Elvis Presley", genre: "Rock & Roll/Country-Blues", formed: 1954, hometown: "Tupelo, Mississippi" },
            { name: "The Beach Boys", genre: "Surf Pop/Psychedelic Pop", formed: 1961, hometown: "Hawthorne, California" },
        ];

        const artists = await Promise.all(artistsToCreate.map(createArtist));
        console.log("Finished creating artists!");
    } catch (error) {
        console.error("Error creating artists!");
        throw error;
    }
}

// create initial songs 
async function createInitialSongs() {
    try {
        console.log("Starting to create songs...");
        const songsToCreate = [
            { title: "Elephant", album: "Currents", release_date: 2015, duration: 4.47, artist_id: 1 },
            { title: "She Loves You", album: "Please Please Me", release_date: 1963, duration: 2.15, artist_id: 2 },
            { title: "Paint It Black", album: "Aftermath", release_date: 1966, duration: 2.15, artist_id: 3 },
            { title: "Clint Eastwood", album: "Demon Days", release_date: 2005, duration: 2.15, artist_id: 4 },
            { title: "Buffalo Soldier", album: "Legend", release_date: 1984, duration: 2.15, artist_id: 5 },
            { title: "So What", album: "Kind Of Blue", release_date: 1959, duration: 2.15, artist_id: 6 },
            { title: "Smells Like Teen Spirit", album: "Nevermind", release_date: 1991, duration: 2.15, artist_id: 7 },
            { title: "Bad Blood", album: "1989", release_date: 2014, duration: 2.15, artist_id: 8 },
            { title: "Stairway To Heaven", album: "Led Zeppelin IV", release_date: 1971, duration: 2.15, artist_id: 9 },
            { title: "Last Nite", album: "Is This It", release_date: 2001, duration: 2.15, artist_id: 10 },
            { title: "With Or Without You", album: "The Joshua Tree", release_date: 1987, duration: 2.15, artist_id: 11 },
            { title: "Heartless", album: "My Beautiful Dark Twisted Fantasy", release_date: 2010, duration: 2.15, artist_id: 12 },
            { title: "Blinding Lights", album: "After Hours", release_date: 2020, duration: 2.15, artist_id: 13 },
            { title: "Creep", album: "Pablo Honey", release_date: 1993, duration: 2.15, artist_id: 14 },
            { title: "Sweet Child O' Mine", album: "Appetite For Destruction", release_date: 1987, duration: 2.15, artist_id: 15 },
            { title: "Dancing Queen", album: "Arrival", release_date: 1976, duration: 2.15, artist_id: 16 },
            { title: "Hound Dog", album: "Elvis Presley", release_date: 1956, duration: 2.15, artist_id: 17 },
            { title: "Good Vibrations", album: "Pet Sounds", release_date: 1966, duration: 2.15, artist_id: 18 },
        ];
        const songs = await Promise.all(songsToCreate.map(createSong));
        console.log("Finished creating songs!");
    } catch (error) {
        console.error("Error creating songs!");
        throw error;
    }
}

// async function to create intiial user_songs playlist
async function createInitialUserSongs() {
    try {
        console.log("Starting to create playlists...");
        const user_songsToCreate = [
            { user_id: 1, song_id: 3 },
            { user_id: 2, song_id: 2 },
            { user_id: 3, song_id: 1 },
        ];

        const user_songs = await Promise.all(user_songsToCreate.map(createPlaylist));

        console.log("Finished creating playlists!");

    } catch (error) {
        console.error("Error creating user_songs!");
        throw error;
    }
}


// rebuild function to drop tables, create tables, and create initial users
async function rebuildDB() {
    try {
        client.connect();

        await dropTables();
        await createTables();
        await createInitialUsers();
        await createInitialArtists();
        await createInitialSongs();
        await createInitialUserSongs();
    } catch (error) {
        throw error;
    }
}

// export rebuildDB function
module.exports = {
    rebuildDB
}