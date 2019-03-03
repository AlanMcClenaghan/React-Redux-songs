/* Braces mean we want to import a named export 
from the file rather than a default export */
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Beautiful Day', duration: '4:05' },
    { title: 'Desire', duration: '2:58' },
    { title: 'One', duration: '4:35' },
    { title: 'Elevation', duration: '3:46' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {

  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});