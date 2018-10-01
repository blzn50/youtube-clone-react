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

    this.onSearch('dogs');
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

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
