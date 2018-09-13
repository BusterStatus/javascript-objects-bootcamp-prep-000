var playlist = {Gorillaz: "Saturnz Barz"};

function updatePlaylist (playlist, artistName, songTitle) {
  console.log(Object.assign({}, playlist, {[artistName]: songTitle}));
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
  console.log(playlist);
}