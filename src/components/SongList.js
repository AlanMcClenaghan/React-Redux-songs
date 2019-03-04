import React, { Component } from 'react';

/* Using the react-redux library to get data 
from our redux store into a component */

/* Always import connect at the top */
import { connect } from 'react-redux';

import { selectSong } from '../actions'

class SongList extends Component {

  /* Helper method to map over props 
 and render them as a list */
  renderList() {

    const props = this.props

    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    // this.props === { songs: state.songs }
    return (
      <div className="ui divided list">
        <h1>Play List</h1>
        {this.renderList()}
      </div>
    )
  }
}

/* Always define mapStateToProps
   This is always going to receive state as it first argument
   This is always going to return an object 
   that is going to show up as props inside the component
*/
const mapStateToProps = state => {
  return { songs: state.songs };
}

/* Always call the connect function and then
   pass in the component as the second function call */
export default connect(mapStateToProps, {
  selectSong
})(SongList);

// Connect() is returning a function
// The second () is invoking the function that was returned