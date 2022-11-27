import { data as library } from "./list";

export function getAllAlbums(json) {
  const albums = [];
  for (let i = 0; i < json.length; i++) {
    if (albums.indexOf(json[i].album) === -1) {
      albums.push(json[i].album);
    }
  }

  return albums;
}

export function getAllArtists() {
  const artists = [];

  for (let i = 0; i < library.length; i++) {
    if (artists.indexOf(library[i].artist) === -1) {
      artists.push(library[i].artist);
    }
  }

  return artists;
}

export function getAlbumsByArtist(artist) {
  const albums = [];
  for (let i = 0; i < library.length; i++) {
    if (
      albums.indexOf(library[i].album) === -1 &&
      library[i].artist === artist
    ) {
      albums.push(library[i].album);
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
