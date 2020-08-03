import React, { useState, useEffect } from "react";

export default function ImageCaptureDemo() {
  const [track, setTrack] = useState();
  const [enableCapture, setEnableCapture] = useState(false);

  const getUserMedia = async () => {
    console.log('Getting User Media');
    navigator.mediaDevices.getUserMedia({video: true})
      .then(mediaStream => {
        document.querySelector('video').srcObject = mediaStream;
        const track = mediaStream.getVideoTracks()[0];
        setTrack(track);
        setEnableCapture(true);
      })
      .catch(error => {
        console.error(` not yet supported`);
      });
  }

  const grabFrame = () => {
    console.log('Grabbling Frame');
    const imageCapture = new ImageCapture(track);
    imageCapture.grabFrame()
      .then(imageBitmap => {
        const canvas = document.querySelector('#grabFrameCanvas');
        drawCanvas(canvas, imageBitmap);
      })
      .catch(error => console.log(error));
  }

  const takePhoto = () => {
    console.log('Taking Photo');
    const imageCapture = new ImageCapture(track);
    imageCapture.takePhoto().then(blob => createImageBitmap(blob))
      .then(imageBitmap => {
        const canvas = document.querySelector('#takePhotoCanvas');
        drawCanvas(canvas, imageBitmap);
      })
      .catch(error => console.log(error));
  }

  function drawCanvas(canvas, img) {
      canvas.width = getComputedStyle(canvas).width.split('px')[0];
      canvas.height = getComputedStyle(canvas).height.split('px')[0];
      let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
      let x = (canvas.width - img.width * ratio) / 2;
      let y = (canvas.height - img.height * ratio) / 2;
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
          x, y, img.width * ratio, img.height * ratio);
  }

  useEffect(() => {
    async function fetchUserMedia() {
        await getUserMedia();
    }
    fetchUserMedia()
  }, []);
    
  return (
    <>
      <div>
        <video style={{height:'198px', width:'100%', border:'2px solid'}} autoPlay></video>
        <button id='getUserMediaButton' onClick={() => getUserMedia()}>Get User Media</button>
      </div>
      <div>
        <canvas id='grabFrameCanvas'></canvas>
        <button id='grabFrameButton' onClick={() => grabFrame()} disabled={!enableCapture}>Grab Frame</button>
      </div>
      <div>
        <canvas id='takePhotoCanvas'></canvas>
        <button id='takePhotoButton' onClick={() => takePhoto()} disabled={!enableCapture}>Take Photo</button>
      </div>
    </>
  )
}