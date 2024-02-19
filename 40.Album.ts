function makeAlbum(artistName: string, albumTitle: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    let album = { artist: artistName, title: albumTitle };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = makeAlbum('Artist1', 'Album1');
let album2 = makeAlbum('Artist2', 'Album2', 12);
let album3 = makeAlbum('Artist3', 'Album3');

console.log(album1);
console.log(album2);
console.log(album3);
