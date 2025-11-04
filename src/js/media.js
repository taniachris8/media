// const videoPlayer = document.querySelector(".video");
// const recordBtn = document.querySelector(".record");
// const stopBtn = document.querySelector(".stop");

// recordBtn.addEventListener("click", async () => {
//   const stream = await navigator.mediaDevices.getUserMedia({
//     video: true,
//   });

//   //Мгновенное чтение из потока:
//   //   videoPlayer.srcObject = stream;
//   //   videoPlayer.addEventListener("canplay", () => {
//   //     videoPlayer.play();
//   //   });

//   const recorder = new MediaRecorder(stream);
//   const chunks = [];

//   recorder.addEventListener("start", () => {
//     console.log("start");
//   });

//   recorder.addEventListener("dataavailable", (event) => {
//     chunks.push(event.data);
//   });

//   recorder.addEventListener("stop", () => {
//     const blob = new Blob(chunks);
//     videoPlayer.src = URL.createObjectURL(blob);
//   });

//   recorder.start();

//   stopBtn.addEventListener("click", () => {
//     recorder.stop();
//     stream.getTracks().forEach((track) => track.stop());
//   });
// });

// ///////////////////////////////////////////

// const audioPlayer = document.querySelector(".audio");
// const recordAudioBtn = document.querySelector(".audio-record");
// const stopAudioBtn = document.querySelector(".audio-stop");

// recordAudioBtn.addEventListener("click", async () => {
//   const stream = await navigator.mediaDevices.getUserMedia({
//     audio: true,
//   });

//   const recorder = new MediaRecorder(stream);
//   const chunks = [];

//   recorder.addEventListener("start", () => {
//     console.log("start");
//   });

//   recorder.addEventListener("dataavailable", (event) => {
//     chunks.push(event.data);
//   });

//   recorder.addEventListener("stop", () => {
//     const blob = new Blob(chunks);
//     audioPlayer.src = URL.createObjectURL(blob);
//   });

//   recorder.start();

//   stopAudioBtn.addEventListener("click", () => {
//     recorder.stop();
//     stream.getTracks().forEach((track) => track.stop());
//   });
// });
