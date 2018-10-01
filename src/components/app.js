import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API = YOUTUBE_API;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API, term: 'dogs' }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  onSearch = term => {
    console.log(term);
    YTSearch({ key: API, term }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  };
  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
