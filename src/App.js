import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { Player, ControlBar, PlaybackRateMenuButton } from 'video-react';

// import "../node_modules/video-react/dist/video-react.css";

import videojs from 'video.js';

import vttEn from './assets/sintel-en.vtt';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playback: [ 0.5, 1, 1.5, 2 ]
    }
  }

  componentDidMount() {
  }

  render() {

    videojs('video_1').videoJsResolutionSwitcher()

    videojs('video_1', {
      controls: true,
      muted: true,
      width: 1000,
      plugins: {
        videoJsResolutionSwitcher: {
          ui: true,
          default: 'low', // Default resolution [{Number}, 'low', 'high'],
          dynamicLabel: true // Display dynamic labels or gear symbol
        }
      }
    }, function(){
      var player = this;
      window.player = player
      player.updateSrc([
        {
          src: 'https://vjs.zencdn.net/v/oceans.mp4?sd',
          type: 'video/mp4',
          label: 'SD',
          res: 360
        },
        {
          src: 'https://vjs.zencdn.net/v/oceans.mp4?hd',
          type: 'video/mp4',
          label: 'HD',
          res: 720
        }
      ])
    })


    return (
      <div className="App video_player_blk">
        {/*<Player
          playsInline
          playbackRate
          poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvRqyNHalDhXY9slNy010FKzLQmO1HETKEQtuQ1M7KbmOBtF0kg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
        <ControlBar>
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
        </ControlBar>
        <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src={vttEn}
            default />
            <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src={vttEn}
            default />
        </Player>
        <video
          height="500"
          width="800"
          id="my-player"
          className="video-js"
          poster="//vjs.zencdn.net/v/oceans.png"
          data-setup='{
            "controls": true, 
            "autoplay": false, 
            "preload": "auto", 
            "playbackRates": [0.5, 1, 1.5, 2]
          }'>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4?sd" type="video/mp4" label='SD' res='480' />
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4?hd" type="video/mp4" label='HD' res='1080' />
          <track kind="captions" src={vttEn} srcLang="en" label="English" default />
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>*/}
        <video id="video_1" class="video-js vjs-default-skin" width="1000" controls data-setup='{}' muted>
    <source src="https://vjs.zencdn.net/v/oceans.mp4?480" type='video/mp4' label='SD' res='480' />
    <source src="https://vjs.zencdn.net/v/oceans.mp4?1080" type='video/mp4' label='HD' res='1080'/>
    <source src="https://vjs.zencdn.net/v/oceans.mp4?144" type='video/mp4' label='phone' res='144'/>
    <source src="https://vjs.zencdn.net/v/oceans.mp4?2160" type='video/mp4' label='4k' res='2160'/>
  </video>
      </div>
    );
  }
}

export default App;
