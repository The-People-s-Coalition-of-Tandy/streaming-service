export function getAllAlbums(json) {
  const albums = [];
  for (let i = 0; i < json.length; i++) {
    if (albums.indexOf(json[i].album) === -1) {
      albums.push(json[i].album);
    }
  }

  return albums;
}

export function getAllArtists(json) {
  const artists = [];

  for (let i = 0; i < json.length; i++) {
    if (artists.indexOf(json[i].artist) === -1) {
      artists.push(json[i].artist);
    }
  }

  return artists;
}

export function getByArtist(json, artist) {}

export function getAlbum(json, album) {
  const albumArr = [];
  for (let i = 0; i < json.length; i++) {
    if (json[i].album === album) {
      albumArr.push(json[i]);
    }
  }

  return albumArr;
}

export function getAllSongs(json) {
  const allAlbums = getAllAlbums(json);
  const songs = [];
  for (let i = 0; i < allAlbums.length; i++) {
    songs.push(...getAlbum(json, allAlbums[i]));
  }

  return songs;
}
