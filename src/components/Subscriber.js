import React, {useState} from 'react';
import { OTSubscriber } from 'opentok-react';
import CheckBox from './CheckBox';

const Subscriber = () => {
    const [error, setError] = useState(null);
    const [audio, setAudio] = useState(true);
    const [video, setVideo] = useState(true);
    // const [videoSource, setVideoSource] = useState('camera');

    const settingAudio = (audio) => {
        setAudio(audio);
    }

    const settingVideo = (video) => {
        setVideo(video);
    }

    // const changeVideoSource = () => {
    //     videoSource !== 'camera' ? setVideoSource('camera') : setVideoSource('screen');
    // }

    const onError = (err) => {
        setError(`Failed to publish: ${err.message}`);
    }

    return (
        <div className="subscriber">
            Subscriber
            {error ? <div id="error">{error}</div> : null}
            <OTSubscriber
                properties={{
                    subscribeToAudio: audio,
                    subscribeToVideo: video
                }}
                onError={onError}
            />
            {/*<CheckBox*/}
            {/*    label="Share Screen"*/}
            {/*    onChange={changeVideoSource}*/}
            {/*/>*/}
            <CheckBox
                label="Publish Audio"
                initialChecked={audio}
                onChange={setAudio}
            />
            <CheckBox
                label="Publish Video"
                initialChecked={video}
                onChange={setVideo}
            />
        </div>
    );
}


export default Subscriber;