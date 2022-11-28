import React, {useState} from 'react';
import { OTPublisher } from 'opentok-react';
import CheckBox from './CheckBox';

const Publisher = (props) => {
    const [error, setError] = useState(null);
    const [audio, setAudio] = useState(true);
    const [video, setVideo] = useState(true);
    const [videoSource, setVideoSource] = useState('camera');

    const settingAudio = (audio) => {
        setAudio(audio);
    }

    const settingVideo = (video) => {
        setVideo(video);
    }

    const changeVideoSource = () => {
        videoSource !== 'camera' ? setVideoSource('camera') : setVideoSource('screen');
    }

    const onError = (err) => {
        setError(`Failed to publish: ${err.message}`);
    }

    return (
        <div className="publisher">
            Publisher
            {error ? <div id="error">{error}</div> : null}
            <OTPublisher
                properties={{
                    publishAudio: audio,
                    publishVideo: video,
                    videoSource: videoSource === 'screen' ? 'screen' : undefined
                }}
                onError={onError}
            />
            <CheckBox
                label="Share Screen"
                onChange={changeVideoSource}
            />
            <CheckBox
                label="Publish Audio"
                initialChecked={audio}
                onChange={settingAudio}
            />
            <CheckBox
                label="Publish Video"
                initialChecked={video}
                onChange={settingVideo}
            />
        </div>)
}

// class Publisher extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             audio: true,
//             video: true,
//             videoSource: 'camera'
//         };
//     }
//     setAudio = (audio) => {
//         this.setState({ audio });
//     }
//     setVideo = (video) => {
//         this.setState({video});
// }
//
//     changeVideoSource = (videoSource) => {
//         (this.state.videoSource !== 'camera') ? this.setState({videoSource: 'camera'}) : this.setState({ videoSource: 'screen' })
//     }
//
//     // setVideoSource()
//     onError = (err) => {
//         this.setState({ error: `Failed to publish: ${err.message}` });
//     }
//
//     render() {
//         return (
//             <div className="publisher">
//                 Publisher
//                 {this.state.error ? <div id="error">{this.state.error}</div> : null}
//                 <OTPublisher
//                     properties={{
//                         publishAudio: this.state.audio,
//                         publishVideo: this.state.video,
//                         videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined
//                     }}
//                     onError={this.onError}
//                 />
//                 <CheckBox
//                     label="Share Screen"
//                     onChange={this.changeVideoSource}
//                 />
//                 <CheckBox
//                     label="Publish Audio"
//                     initialChecked={this.state.audio}
//                     onChange={this.setAudio}
//                 />
//                 <CheckBox
//                     label="Publish Video"
//                     initialChecked={this.state.video}
//                     onChange={this.setVideo}
//                 />
//             </div>)
//     };
// }


export default Publisher;

