import React, { Component } from 'react';
import axios from 'axios';
import SongList from './SongList';

class SongContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }
  componentDidMount() {
    this.getSongs();
  }
  
  addSong = async (e, song) => {
    e.preventDefault();
    console.log(song);

    try {
      // The createdSongResponse variable will store the response from the Flask API
      const createdSongResponse = await axios.post(
        process.env.REACT_APP_FLASK_API_URL + '/api/v1/songs/',
        song
      );

      console.log(createdSongResponse.data.data, ' this is response');
      this.setState({
        songs: [...this.state.songs, createdSongResponse.data.data],
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  getSongs = async () => {
    try {
      const parsedSongs = await axios(
        process.env.REACT_APP_FLASK_API_URL + '/api/v1/songs/'
      );
      console.log(parsedSongs.data.data);
      await this.setState({
        songs: parsedSongs.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <SongList songs={this.state.songs}/>
        <CreateSongForm addSong={this.addSong}/>
      </>
    )
  }
}

export default SongContainer;