import {useRef, useEffect, useState} from 'react';
import * as faceapi from "face-api.js";

function App() {
    const [emotion, setEmotion] = useState("");
    // set emotion to the database if emotion dont change during delay
    useEffect(() => {
        if (!!emotion) {
            console.log("before debounce", emotion);
            const t = setTimeout(() => console.log(emotion), 1500);
            return () => clearTimeout(t);
        }
    }, [emotion]);

    const videoRef = useRef();

    useEffect(() => {
        startVideo();
        videoRef && loadModels();
    }, []);

    const loadModels = () => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        ]).then(async () => {
            await getUserEmotion();

        })
    };

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({video: true})
            .then((currentStream) => {
                videoRef.current.srcObject = currentStream;
            })
            .catch((err) => {
                console.error(err)
            });
    }

    const getUserEmotion = async () => {
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
            const emotionName = detections[0]?.expressions?.asSortedArray()[0].expression;
            emotionName && setEmotion(emotionName);
        }, 1000);
    }

    return (
        <div className="app">
            {emotion}
            <h1> AI FACE DETECTION</h1>
            <div className='app__video'>
                <video style={{display: "none"}} crossOrigin='anonymous' ref={videoRef} autoPlay></video>
            </div>
        </div>
    );
}

export default App;
