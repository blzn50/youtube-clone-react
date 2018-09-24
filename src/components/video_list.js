import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos }) => (
  <ul className="col-md-4 list-group">
    {videos.map(video => {
      return <VideoListItem key={video.etag} video={video} />;
    })}
  </ul>
);

export default VideoList;
