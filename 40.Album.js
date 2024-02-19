function makeAlbum(artistName, albumTitle, tracks) {
    var album = { artist: artistName, title: albumTitle };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum('Artist1', 'Album1');
var album2 = makeAlbum('Artist2', 'Album2', 12);
var album3 = makeAlbum('Artist3', 'Album3');
console.log(album1);
console.log(album2);
console.log(album3);
