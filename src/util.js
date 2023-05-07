export function getAllAlbums(json) {
  // console.log(json);
  const albums = [];
  for (let i = 0; i < json.length; i++) {
    if (albums.indexOf(json[i].album) === -1) {
      albums.push(json[i].album);
    }
  }

  return albums;
}

export function getAllArtists(data) {
  const artists = [];

  for (let i = 0; i < data.length; i++) {
    artists.push(data[i].name);
  }

  return artists;
}

export function getAlbumsByArtist(artist, data) {
  const albums = [];
  for (let i = 0; i < data.length; i++) {
    if (
      albums.indexOf(data[i].album) === -1 &&
      data[i].artist === artist
    ) {
      albums.push(data[i].album);
    }
  }

  return albums;
}

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
