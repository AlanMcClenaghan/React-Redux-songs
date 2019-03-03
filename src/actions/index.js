// ACTION creator
// Named export rather than default export
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED', // A type is required
    payload: song
  }
};