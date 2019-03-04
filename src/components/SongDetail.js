import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {

  if (!selectedSong) {
    return <h2>Select a song</h2>
  }

  return (
    <div>
      <h2>Song Detail</h2>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);