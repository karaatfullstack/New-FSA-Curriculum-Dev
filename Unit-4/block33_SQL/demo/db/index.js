module.exports = {
  // ...require('./client'), // adds key/values from users.js
  ...require('./users'), // adds key/values from users.js
  ...require('./songs'), // adds key/values from songs.js
  ...require('./artists'), // adds key/values from artists.js
  ...require('./playlists'), // adds key/values from playlists.js
}